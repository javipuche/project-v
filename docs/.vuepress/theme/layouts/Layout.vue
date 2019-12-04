<template>
    <div
        class="layout"
        :class="[...pageClasses, ...{ 'layout--lock': overlayIsOpen }]"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
    >
        <Navbar v-if="shouldShowNavbar" class="layout__navbar" @toggle-sidebar="toggleSidebar" />

        <div class="layout__sidebar-mask" @click="toggleSidebar(false)"></div>

        <Sidebar class="layout__sidebar" :items="sidebarItems" @toggle-sidebar="toggleSidebar">
            <slot slot="top" name="sidebar-top" />
            <slot slot="bottom" name="sidebar-bottom" />
        </Sidebar>

        <Home v-if="$page.frontmatter.home" class="layout__home" />

        <Page v-else :sidebar-items="sidebarItems" class="layout__page">
            <slot slot="top" name="page-top" />
            <slot slot="bottom" name="page-bottom" />
        </Page>
    </div>
</template>

<script>
    import Home from '@theme/components/Home.vue'
    import Navbar from '@theme/components/Navbar.vue'
    import Page from '@theme/components/Page.vue'
    import Sidebar from '@theme/components/Sidebar.vue'
    import { resolveSidebarItems } from '../util'

    export default {
        components: { Home, Page, Sidebar, Navbar },

        data () {
            return {
                isSidebarOpen: false
            }
        },

        computed: {
            overlayIsOpen () {
                return this.$store.state.overlay.isOpen
            },
            shouldShowNavbar () {
                const { themeConfig } = this.$site
                const { frontmatter } = this.$page
                if (
                    frontmatter.navbar === false ||
                    themeConfig.navbar === false) {
                    return false
                }
                return (
                    this.$title ||
                    themeConfig.logo ||
                    themeConfig.repo ||
                    themeConfig.nav ||
                    this.$themeLocaleConfig.nav
                )
            },

            shouldShowSidebar () {
                const { frontmatter } = this.$page
                return (
                    !frontmatter.home &&
                    frontmatter.sidebar !== false &&
                    this.sidebarItems.length
                )
            },

            sidebarItems () {
                return resolveSidebarItems(
                    this.$page,
                    this.$page.regularPath,
                    this.$site,
                    this.$localePath
                )
            },

            pageClasses () {
                const userPageClass = this.$page.frontmatter.pageClass
                return [
                    {
                        'layout--no-navbar': !this.shouldShowNavbar,
                        'layout--sidebar-open': this.isSidebarOpen,
                        'layout--no-sidebar': !this.shouldShowSidebar
                    },
                    userPageClass
                ]
            }
        },

        mounted () {
            this.$router.afterEach(() => {
                this.isSidebarOpen = false
                this.$store.commit('overlay/toggleOverlay', false)
            })
        },

        methods: {
            toggleSidebar (to) {
                this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
                this.$store.commit('overlay/toggleOverlay', this.isSidebarOpen)
            },

            // side swipe
            onTouchStart (e) {
                this.touchStart = {
                    x: e.changedTouches[0].clientX,
                    y: e.changedTouches[0].clientY
                }
            },

            onTouchEnd (e) {
                const dx = e.changedTouches[0].clientX - this.touchStart.x
                const dy = e.changedTouches[0].clientY - this.touchStart.y
                if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
                    if (dx > 0 && this.touchStart.x <= 80) {
                        this.toggleSidebar(true)
                    } else {
                        this.toggleSidebar(false)
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
  .layout {
    $this: &;

    min-height: 100vh;

    @include breakpoint($breakpoint-layout) {
      display: grid;
      grid-template-columns: 20rem 1fr;
      grid-template-rows: auto 1fr;
    }

    &__navbar {
      @include breakpoint($breakpoint-layout) {
        grid-column: 1/-1;
        grid-row: 1/2;
      }
    }

    &__sidebar {
      @include breakpoint($breakpoint-layout down) {
        position: fixed;
        left: 0;
        top: var(--docs-navbar-height);
        height: calc(100vh - var(--docs-navbar-height));
        z-index: 80;
        width: 20rem;
        transform: translateX(-100%);
        transition: transform 0.3s;
      }

      &-mask {
        z-index: 70;
        width: 100vw;
        height: 100vh;
        display: none;
        background-color: var(--docs-color-overlay);
        position: fixed;
        top: 0;
        left: 0;
      }
    }

    &__page {
      padding: var(--docs-gutter);
      background-color: var(--docs-page-background);
      min-width: 1px;

      @include breakpoint($breakpoint-layout down) {
        min-height: calc(100vh - var(--docs-navbar-height));
      }

      @include breakpoint($breakpoint-layout) {
        --docs-gutter: 4rem;
      }
    }

    &--sidebar-open {
      #{$this} {
        &__sidebar {
          transform: translateX(0);

          &-mask {
            @include breakpoint($breakpoint-layout down) {
              display: block;
            }
          }
        }
      }
    }

    &--lock {
      overflow: hidden;
      max-width: 100vw;
      max-height: 100vh;
    }
  }
</style>
