<template>
    <div
        class="dropdown-wrapper"
        :class="{ open }"
    >
        <a
            class="dropdown-title"
            @click="toggle"
        >
            <span class="title">{{ item.text }}</span>
            <span
                class="arrow"
                :class="open ? 'down' : 'right'"
            ></span>
        </a>

        <DropdownTransition>
            <ul
                v-show="open"
                class="nav-dropdown"
            >
                <li
                    v-for="(subItem, index) in item.items"
                    :key="subItem.link || index"
                    class="dropdown-item"
                >
                    <h4 v-if="subItem.type === 'links'">
                        {{ subItem.text }}
                    </h4>

                    <ul
                        v-if="subItem.type === 'links'"
                        class="dropdown-subitem-wrapper"
                    >
                        <li
                            v-for="childSubItem in subItem.items"
                            :key="childSubItem.link"
                            class="dropdown-subitem"
                        >
                            <NavLink :item="childSubItem" />
                        </li>
                    </ul>

                    <NavLink
                        v-else
                        :item="subItem"
                    />
                </li>
            </ul>
        </DropdownTransition>
    </div>
</template>

<script>
    import NavLink from '@theme/components/NavLink.vue'
    import DropdownTransition from '@theme/components/DropdownTransition.vue'

    export default {
        components: { NavLink, DropdownTransition },

        props: {
            item: {
                type: Object,
                required: true
            }
        },

        data () {
            return {
                open: false
            }
        },

        methods: {
            toggle () {
                this.open = !this.open
            }
        }
    }
</script>
