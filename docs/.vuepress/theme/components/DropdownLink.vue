<template>
    <div
        class="dropdown"
        :class="{ open, 'dropdown--mobile': mobile }"
    >
        <a
            class="dropdown__title"
            @click="toggle"
        >
            <span class="dropdown__title-text">{{ item.text }}</span>
            <span
                class="dropdown__arrow"
                :class="open ? 'down' : 'right'"
            ></span>
        </a>

        <DropdownTransition>
            <ul
                v-show="open"
                class="dropdown__nav"
            >
                <li
                    v-for="(subItem, index) in item.items"
                    :key="subItem.link || index"
                    class="dropdown__item"
                    :class="{ 'dropdown__item--subitem': subItem.type === 'links' }"
                >
                    <h4 v-if="subItem.type === 'links'" class="dropdown__subtitle">
                        {{ subItem.text }}
                    </h4>

                    <ul
                        v-if="subItem.type === 'links'"
                        class="dropdown__subnav"
                    >
                        <li
                            v-for="childSubItem in subItem.items"
                            :key="childSubItem.link"
                            class="dropdown__item"
                        >
                            <NavLink :item="childSubItem" class="dropdown__link" />
                        </li>
                    </ul>

                    <NavLink
                        v-else
                        :item="subItem"
                        class="dropdown__link"
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
            },
            mobile: {
                type: Boolean,
                default: false
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

<style lang="scss" scoped>
  @import "../styles/core/core";

  .dropdown {
    $this: &;

    position: relative;

    &__title {
      display: flex;
      align-items: baseline;

      &-text {
        font-weight: 600;
      }
    }

    &__arrow {
      &::before {
        @include triangle('bottom', currentColor, 0.25rem);

        transform: translateY(-0.125rem);
        content: "";
        display: block;
        margin-left: 0.5rem;
      }
    }

    &__nav {
      margin: 0;
      padding: 1rem 0 0 0;
      list-style: none;

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
    }

    &__item {
      font-size: 0.9rem;

      & + & {
        margin-top: 0.5rem;
      }

      &--subitem {
        & + & {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--docs-color-border);
        }
      }
    }

    &__link {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      display: inline-block;
      transition: color 0.3s;

      &:active,
      &:focus,
      &:hover {
        color: var(--docs-color-primary);
      }
    }

    &__subtitle {
      margin-bottom: 1rem;
      margin-top: 0;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }

    &.open,
    &:active,
    &:focus,
    &:hover {
      #{$this} {
        &__title,
        &__arrow {
          color: var(--docs-color-primary);
        }
      }
    }

    &:not(&--mobile) {
      padding: 0.5rem 0;

      #{$this} {
        &__nav {
          position: absolute;
          right: 0;
          top: 100%;
          background-color: #fff;
          box-shadow: 0 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.1);
          padding-bottom: 1rem;
        }
      }

      &.open,
      &:active,
      &:focus,
      &:hover {
        #{$this} {
          &__nav {
            display: block !important;
          }

          &__title,
          &__arrow {
            color: var(--docs-color-primary);
          }
        }
      }
    }
  }
</style>
