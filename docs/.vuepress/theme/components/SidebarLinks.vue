<template>
    <ul
        v-if="items.length"
        class="sidebar-links"
    >
        <li v-for="(item, i) in items" :key="i" class="sidebar-links__item">
            <SidebarGroup
                v-if="item.type === 'group'"
                :item="item"
                :open="i === openGroupIndex"
                :collapsable="item.collapsable || item.collapsible"
                :depth="depth"
                @toggle="toggleGroup(i)"
            />
            <SidebarLink
                v-else
                :sidebar-depth="sidebarDepth"
                :item="item"
                class="sidebar-links__link"
            />
        </li>
    </ul>
</template>

<script>
    import SidebarGroup from '@theme/components/SidebarGroup.vue'
    import SidebarLink from '@theme/components/SidebarLink.vue'
    import { isActive } from '../util'

    export default {
        name: 'SidebarLinks',

        components: { SidebarGroup, SidebarLink },

        props: [
            'items',
            'depth', // depth of current sidebar links
            'sidebarDepth' // depth of headers to be extracted
        ],

        data () {
            return {
                openGroupIndex: 0
            }
        },

        watch: {
            '$route' () {
                this.refreshIndex()
            }
        },

        created () {
            this.refreshIndex()
        },

        methods: {
            refreshIndex () {
                const index = resolveOpenGroupIndex(
                    this.$route,
                    this.items
                )
                if (index > -1) {
                    this.openGroupIndex = index
                }
            },

            toggleGroup (index) {
                this.openGroupIndex = index === this.openGroupIndex ? -1 : index
            },

            isActive (page) {
                return isActive(this.$route, page.regularPath)
            }
        }
    }

    function resolveOpenGroupIndex (route, items) {
        for (let i = 0; i < items.length; i++) {
            const item = items[i]
            if (item.type === 'group' && item.children.some(c => c.type === 'page' && isActive(route, c.path))) {
                return i
            }
        }
        return -1
    }
</script>

<style lang="scss" scoped>
  .sidebar-links {
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  }
</style>
