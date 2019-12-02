<template>
    <aside class="sidebar">
        <div class="sidebar__inner">
            <simplebar class="sidebar__scrollbar">
                <div class="sidebar__box">
                    <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia" />
                    <SearchBox v-else-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false" class="sidebar__search" />
                    <NavLinks class="nav-links--mobile" />
                    <slot name="top" />
                </div>
                <div class="sidebar__box">
                    <SidebarLinks :depth="0" :items="items" />
                    <slot name="bottom" />
                </div>
            </simplebar>
        </div>
    </aside>
</template>

<script>
    import AlgoliaSearchBox from '@AlgoliaSearchBox'
    import SearchBox from '@SearchBox'
    import SidebarLinks from '@theme/components/SidebarLinks.vue'
    import NavLinks from '@theme/components/NavLinks.vue'
    import simplebar from 'simplebar-vue'

    export default {
        name: 'Sidebar',
        components: {
            SidebarLinks,
            NavLinks,
            SearchBox,
            AlgoliaSearchBox,
            simplebar
        },
        props: {
            items: {
                type: Array,
                default: () => []
            }
        },
        computed: {
            algolia () {
                return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
            },

            isAlgoliaSearch () {
                return this.algolia && this.algolia.apiKey && this.algolia.indexName
            }
        }
    }
</script>

<style lang="scss" scoped>
  .sidebar {
    background-color: var(--docs-sidebar-background);

    &__inner {
      position: sticky;
      top: var(--docs-navbar-height);
      overflow: hidden;
    }

    &__box {
      padding: 2rem var(--docs-gutter);

      &:not(:last-child) {
        border-bottom: 1px solid var(--docs-color-border);
      }

      &:first-child {
        @include breakpoint($breakpoint-layout) {
          padding-bottom: 0;
          border-bottom: 0;
        }
      }
    }

    &__search {
      position: relative;
      z-index: 10;
    }

    &__scrollbar {
      max-height: calc(100vh - var(--docs-navbar-height));
      overflow: hidden auto;
    }
  }
</style>
