<template>
    <main class="page">
        <div class="page__content">
            <slot name="top" />

            <Content class="theme-default-content" />

            <footer class="page-edit">
                <div
                    v-if="editLink"
                    class="edit-link"
                >
                    <a
                        :href="editLink"
                        target="_blank"
                        rel="noopener noreferrer"
                    >{{ editLinkText }}</a>
                    <OutboundLink />
                </div>

                <div
                    v-if="lastUpdated"
                    class="last-updated"
                >
                    <span class="prefix">{{ lastUpdatedText }}: </span>
                    <span class="time">{{ lastUpdated }}</span>
                </div>
            </footer>

            <div v-if="prev || next" class="page-nav">
                <p class="page-nav__inner">
                    <span v-if="prev" class="page-nav__prev">
                        <span class="page-nav__icon">←</span>
                        <router-link v-if="prev" :to="prev.path">{{ prev.title || prev.path }}</router-link>
                    </span>

                    <span v-if="next" class="page-nav__next">
                        <router-link v-if="next" :to="next.path">{{ next.title || next.path }}</router-link>
                        <span class="page-nav__icon">→</span>
                    </span>
                </p>
            </div>

            <slot name="bottom" />
        </div>
    </main>
</template>

<script>
    import { resolvePage, outboundRE, endingSlashRE } from '../util'

    export default {
        props: {
            sidebarItems: {
                type: Array,
                default: () => {}
            }
        },

        computed: {
            lastUpdated () {
                return this.$page.lastUpdated
            },

            lastUpdatedText () {
                if (typeof this.$themeLocaleConfig.lastUpdated === 'string') {
                    return this.$themeLocaleConfig.lastUpdated
                }
                if (typeof this.$site.themeConfig.lastUpdated === 'string') {
                    return this.$site.themeConfig.lastUpdated
                }
                return 'Last Updated'
            },

            prev () {
                const prev = this.$page.frontmatter.prev
                if (prev === false) {
                    return undefined
                } else if (prev) {
                    return resolvePage(this.$site.pages, prev, this.$route.path)
                } else {
                    return resolvePrev(this.$page, this.sidebarItems)
                }
            },

            next () {
                const next = this.$page.frontmatter.next
                if (next === false) {
                    return undefined
                } else if (next) {
                    return resolvePage(this.$site.pages, next, this.$route.path)
                } else {
                    return resolveNext(this.$page, this.sidebarItems)
                }
            },

            editLink () {
                if (this.$page.frontmatter.editLink === false) {
                    return undefined
                }
                const {
                    repo,
                    editLinks,
                    docsDir = '',
                    docsBranch = 'master',
                    docsRepo = repo
                } = this.$site.themeConfig

                if (docsRepo && editLinks && this.$page.relativePath) {
                    return this.createEditLink(repo, docsRepo, docsDir, docsBranch, this.$page.relativePath)
                }
                return undefined
            },

            editLinkText () {
                return (
                    this.$themeLocaleConfig.editLinkText ||
                    this.$site.themeConfig.editLinkText ||
                    'Edit this page'
                )
            }
        },

        methods: {
            createEditLink (repo, docsRepo, docsDir, docsBranch, path) {
                const bitbucket = /bitbucket.org/
                if (bitbucket.test(repo)) {
                    const base = outboundRE.test(docsRepo)
                        ? docsRepo
                        : repo
                    return (
                        base.replace(endingSlashRE, '') +
                        '/src' +
                        `/${docsBranch}/` +
                        (docsDir ? docsDir.replace(endingSlashRE, '') + '/' : '') +
                        path +
                        `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
                    )
                }

                const base = outboundRE.test(docsRepo)
                    ? docsRepo
                    : `https://github.com/${docsRepo}`
                return (
                    base.replace(endingSlashRE, '') +
                    '/edit' +
                    `/${docsBranch}/` +
                    (docsDir ? docsDir.replace(endingSlashRE, '') + '/' : '') +
                    path
                )
            }
        }
    }

    function resolvePrev (page, items) {
        return find(page, items, -1)
    }

    function resolveNext (page, items) {
        return find(page, items, 1)
    }

    function find (page, items, offset) {
        const res = []
        flatten(items, res)
        for (let i = 0; i < res.length; i++) {
            const cur = res[i]
            if (cur.type === 'page' && cur.path === decodeURIComponent(page.path)) {
                return res[i + offset]
            }
        }
    }

    function flatten (items, res) {
        for (let i = 0, l = items.length; i < l; i++) {
            if (items[i].type === 'group') {
                flatten(items[i].children || [], res)
            } else {
                res.push(items[i])
            }
        }
    }

</script>

<style lang="scss" scoped>
  .page {
    &__content {
      max-width: var(--docs-container-width);
      margin: 0 auto;
    }
  }

  .page-nav {
    margin-top: 4rem;

    &__inner {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    &__prev,
    &__next {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;

      a {
        text-decoration: none;
        color: var(--docs-color-primary);

        &:active,
        &:focus,
        &:hover {
          text-decoration: underline;
        }
      }
    }

    &__prev {
      padding-right: 1rem;
      margin-right: auto;
    }

    &__next {
      padding-left: 1rem;
      margin-left: auto;
    }
  }
</style>
