<script>
    import { isActive, hashRE, groupHeaders } from '../util'

    export default {
        functional: true,

        props: ['item', 'sidebarDepth'],

        render (h,
                {
                    parent: {
                        $page,
                        $site,
                        $route,
                        $themeConfig,
                        $themeLocaleConfig
                    },
                    props: {
                        item,
                        sidebarDepth
                    }
                }) {
            // use custom active class matching logic
            // due to edge case of paths ending with / + hash
            const selfActive = isActive($route, item.path)
            // for sidebar: auto pages, a hash link should be active if one of its child
            // matches
            const active = item.type === 'auto'
                ? selfActive || item.children.some(c => isActive($route, item.basePath + '#' + c.slug))
                : selfActive
            const link = item.type === 'external'
                ? renderExternal(h, item.path, item.title || item.path)
                : renderLink(h, item.path, item.title || item.path, active)

            const maxDepth = [
                $page.frontmatter.sidebarDepth,
                sidebarDepth,
                $themeLocaleConfig.sidebarDepth,
                $themeConfig.sidebarDepth,
                1
            ].find(depth => depth !== undefined)

            const displayAllHeaders = $themeLocaleConfig.displayAllHeaders ||
                $themeConfig.displayAllHeaders

            if (item.type === 'auto') {
                return [link, renderChildren(h, item.children, item.basePath, $route, maxDepth)]
            } else if ((active || displayAllHeaders) && item.headers && !hashRE.test(item.path)) {
                const children = groupHeaders(item.headers)
                return [link, renderChildren(h, children, item.path, $route, maxDepth)]
            } else {
                return link
            }
        }
    }

    function renderLink (h, to, text, active) {
        return h('router-link', {
            props: {
                to,
                activeClass: '',
                exactActiveClass: ''
            },
            class: {
                active,
                'sidebar-link': true
            }
        }, text)
    }

    function renderChildren (h, children, path, route, maxDepth, depth = 1) {
        if (!children || depth > maxDepth) return null
        return h('ul', { class: 'sidebar-sub-headers' }, children.map(c => {
            const active = isActive(route, path + '#' + c.slug)
            return h('li', { class: 'sidebar-sub-header' }, [
                renderLink(h, path + '#' + c.slug, c.title, active),
                renderChildren(h, c.children, path, route, maxDepth, depth + 1)
            ])
        }))
    }

    function renderExternal (h, to, text) {
        return h('a', {
            attrs: {
                href: to,
                target: '_blank',
                rel: 'noopener noreferrer'
            },
            class: {
                'sidebar-link': true
            }
        }, [text, h('OutboundLink')])
    }
</script>

<style lang="scss" scope>
  @import "../styles/core/core";

  .sidebar-link {
    text-decoration: none;
    color: currentColor;
    padding: 0.5rem 2rem;
    display: block;

    &.active {
      color: var(--docs-color-primary);
      font-weight: 600;
      border-left: 3px solid var(--docs-color-primary);
    }

    .sidebar-sub-header & {
      border-left: 0;
    }
  }

  .sidebar-sub-header {
    padding-left: 1rem;
    font-size: 0.9375em;
  }

  .sidebar-heading {
    padding-left: 1rem;
    padding-right: 1rem;
    text-decoration: none;
    color: currentColor;
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: baseline;
  }

  .arrow {
    margin-left: 0.5rem;
    flex-shrink: 0;
    transform: translateY(-0.25rem);

    &.down,
    &.right {
      &::before {
        content: "";
      }
    }

    &.right {
      &::before {
        @include triangle('bottom', currentColor, 0.25rem);
      }
    }
  }
</style>
