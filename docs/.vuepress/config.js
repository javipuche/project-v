const { join, resolve } = require('path')

module.exports = {
    title: 'Avoris Travel',
    description: 'Just playing around',
    plugins: [
        [
            '@vuepress/register-components',
            {
                componentsDir: './src/components'
            }
        ]
    ],
    scss: {
        sassOptions: {
            includePaths: [join(__dirname, 'theme/styles')]
        },
        prependData: '@import "core/core";'
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve(__dirname)
            }
        }
    },
    themeConfig: {
        // logo: '/assets/img/avoris.svg',
        nav: [{
            text: 'Home',
            link: '/'
        },
        {
            text: 'Guide',
            link: '/'
        },
        {
            text: 'External',
            link: 'https://google.com'
        },
        {
            text: 'Languages',
            ariaLabel: 'Language Menu',
            items: [
                { text: 'Chinese', link: '/language/chinese/' },
                { text: 'Japanese', link: '/language/japanese/' }
            ]
        }
        ],
        sidebar: [{
            title: 'Group 1', // required
            path: '/', // optional, which should be a absolute path.
            collapsable: false, // optional, defaults to true
            sidebarDepth: 1, // optional, defaults to 1
            children: [
                '/'
            ]
        },
        {
            title: 'Group 2',
            children: [
                '/'
            ]
        }
        ]
    }
}
