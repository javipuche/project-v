const path = require('path')

// Theme API.
module.exports = (options, ctx) => ({
    alias () {
        const { themeConfig, siteConfig } = ctx
        // resolve algolia
        const isAlgoliaSearch = (
            themeConfig.algolia ||
      Object.keys((siteConfig.locales && themeConfig.locales) || {})
          .some(base => themeConfig.locales[base].algolia)
        )
        return {
            '@AlgoliaSearchBox': isAlgoliaSearch
                ? path.resolve(__dirname, 'components/AlgoliaSearchBox.vue')
                : path.resolve(__dirname, 'noopModule.js')
        }
    },
    plugins: [
        ['@vuepress/active-header-links', options.activeHeaderLinks],
        '@vuepress/search',
        '@vuepress/plugin-nprogress',
        ['container', {
            type: 'theorem',
            before: info => `<details class="custom-block details">${info ? `<summary>${info}</summary>` : ''}\n`,
            after: () => '</details>\n'
        }]
    ]
})
