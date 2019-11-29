<template>
    <router-link
        v-if="!isExternal(link)"
        class="nav-links__link"
        :to="link"
        :exact="exact"
    >
        {{ item.text }}
    </router-link>
    <a
        v-else
        :href="link"
        class="nav-links__link nav-links__link--external"
        :target="isMailto(link) || isTel(link) ? null : '_blank'"
        :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'"
    >
        {{ item.text }}
        <OutboundLink />
    </a>
</template>

<script>
    import { isExternal, isMailto, isTel, ensureExt } from '../util'

    export default {
        props: {
            item: {
                type: Object,
                required: true
            }
        },

        computed: {
            link () {
                return ensureExt(this.item.link)
            },

            exact () {
                if (this.$site.locales) {
                    return Object.keys(this.$site.locales).some(rootLink => rootLink === this.link)
                }
                return this.link === '/'
            }
        },

        methods: {
            isExternal,
            isMailto,
            isTel
        }
    }
</script>

<style lang="scss" scoped>
  .nav-links {
    &__link {
      color: currentColor;
      text-decoration: none;
      border-bottom: 2px solid transparent;
      font-weight: 600;

      &.router-link-active {
        color: var(--docs-color-primary);
      }
    }
  }
</style>
