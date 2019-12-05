<template>
    <nav v-if="userLinks.length || repoLink" class="nav-links">
        <!-- user links -->
        <div v-for="item in userLinks" :key="item.link" class="nav-links__item">
            <DropdownLink v-if="item.type === 'links'" :item="item" :mobile="mobile" />
            <NavLink v-else :item="item" />
        </div>

        <!-- repo link -->
        <a
            v-if="repoLink"
            :href="repoLink"
            class="repo-link"
            target="_blank"
            rel="noopener noreferrer"
        >
            {{ repoLabel }}
            <OutboundLink />
        </a>
    </nav>
</template>

<script>
    import DropdownLink from '@theme/components/DropdownLink.vue'
    import { resolveNavLinkItem } from '../util'
    import NavLink from '@theme/components/NavLink.vue'

    export default {
        components: { NavLink, DropdownLink },
        props: {
            mobile: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            userNav () {
                return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || []
            },

            nav () {
                const { locales } = this.$site
                if (locales && Object.keys(locales).length > 1) {
                    const currentLink = this.$page.path
                    const routes = this.$router.options.routes
                    const themeLocales = this.$site.themeConfig.locales || {}
                    const languageDropdown = {
                        text: this.$themeLocaleConfig.selectText || 'Languages',
                        items: Object.keys(locales).map(path => {
                            const locale = locales[path]
                            const text = (themeLocales[path] && themeLocales[path].label) || locale.lang
                            let link
                            // Stay on the current page
                            if (locale.lang === this.$lang) {
                                link = currentLink
                            } else {
                                // Try to stay on the same page
                                link = currentLink.replace(this.$localeConfig.path, path)
                                // fallback to homepage
                                if (!routes.some(route => route.path === link)) {
                                    link = path
                                }
                            }
                            return { text, link }
                        })
                    }
                    return [...this.userNav, languageDropdown]
                }
                return this.userNav
            },

            userLinks () {
                return (this.nav || []).map(link => {
                    return Object.assign(resolveNavLinkItem(link), {
                        items: (link.items || []).map(resolveNavLinkItem)
                    })
                })
            },

            repoLink () {
                const { repo } = this.$site.themeConfig
                if (repo) {
                    return /^https?:/.test(repo)
                        ? repo
                        : `https://github.com/${repo}`
                }
                return undefined
            },

            repoLabel () {
                if (!this.repoLink) return
                if (this.$site.themeConfig.repoLabel) {
                    return this.$site.themeConfig.repoLabel
                }

                const repoHost = this.repoLink.match(/^https?:\/\/[^/]+/)[0]
                const platforms = ['GitHub', 'GitLab', 'Bitbucket']
                for (let i = 0; i < platforms.length; i++) {
                    const platform = platforms[i]
                    if (new RegExp(platform, 'i').test(repoHost)) {
                        return platform
                    }
                }

                return 'Source'
            }
        }
    }
</script>

<style lang="scss" scoped>
  @import "../styles/core/core";

  .nav-links {
    $this: &;

    display: flex;

    &:not(&--mobile) {
      align-items: center;

      @include breakpoint($breakpoint-layout down) {
        display: none;
      }

      #{$this} {
        &__item {
          &:not(:last-child) {
            margin-right: 1.5rem;
          }
        }
      }
    }

    &--mobile {
      flex-direction: column;
      margin-top: 2rem;

      @include breakpoint($breakpoint-layout) {
        display: none;
      }

      #{$this} {
        &__item {
          &:not(:last-child) {
            margin-bottom: 1rem;
          }
        }
      }
    }
  }
</style>
