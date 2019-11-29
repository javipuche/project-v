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
      padding-left: var(--docs-gutter);
      padding-right: var(--docs-gutter);

      & + & {
        border-top: 1px solid var(--docs-color-border);
        margin-top: 1rem;
        padding-top: 1rem;
      }
    }

    &__search {
      margin-bottom: 1rem;
      position: relative;
      z-index: 10;
    }

    &__scrollbar {
      max-height: calc(100vh - var(--docs-navbar-height));
      padding-top: var(--docs-gutter);
      padding-bottom: var(--docs-gutter);
      overflow: hidden auto;
    }
  }
</style>
