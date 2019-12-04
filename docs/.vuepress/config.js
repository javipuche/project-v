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
        activeHeaderLinks: false,
        smoothScroll: true,
        nav: [{
            text: 'Home',
            link: '/'
        },
        {
            text: 'Guide',
            link: 'https://aaa.com'
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
        },
        {
            text: 'Languages',
            items: [
                { text: 'Group1', items: [{ text: 'Chinese', link: '/language/chinese/' }, { text: 'Japanese', link: '/language/japanese/' }] },
                { text: 'Group2', items: [{ text: 'Japanese', link: '/language/japanese/' }, { text: 'Chinese', link: '/language/chinese/' }] }
            ]
        }
        ],
        sidebar: [
            {
                title: 'Markdown Config',
                path: '/test1',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/test1',
                    '/test2'
                ]
            },
            {
                title: 'Group 2',
                sidebarDepth: 2,
                children: [
                    '/test1',
                    '/test2'
                ]
            },
            {
                title: 'Group 3',
                sidebarDepth: 2,
                children: [
                    '/test1',
                    '/test2'
                ]
            }
        ]
    }
}
