const { join, resolve } = require('path')

module.exports = {
    locales: {
        '/': {
            lang: 'en-EN',
            title: 'Avoris Travel',
            description: 'Vue componentes for Avoris Travel Apps'
        },
        '/es/': {
            lang: 'es-ES',
            title: 'Avoris Travel',
            description: 'Componentes de Vue para las aplicaciones de Avoris Travel'
        }
    },
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
        logo: '/assets/img/avoris.svg',
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                ariaLabel: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: 'New content is available.',
                        buttonText: 'Refresh'
                    }
                }
            },
            '/es/': {
                selectText: 'Idiomas',
                label: 'Español',
                ariaLabel: 'Idiomas',
                editLinkText: 'Editar esta página en GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: 'Hay disponible nuevo contenido.',
                        buttonText: 'Actualizar'
                    }
                },
                nav: [
                    {
                        text: 'Home',
                        link: '/es/'
                    },
                    {
                        text: 'Guide',
                        link: 'https://aaa.com'
                    },
                    {
                        text: 'External',
                        link: 'https://google.com'
                    }
                ],
                sidebar: [
                    {
                        title: 'Markdown Config',
                        path: '/es/test1',
                        collapsable: false,
                        sidebarDepth: 2,
                        children: [
                            '/es/test1',
                            '/es/test2'
                        ]
                    },
                    {
                        title: 'Group 2',
                        sidebarDepth: 2,
                        children: [
                            '/es/test1',
                            '/es/test2'
                        ]
                    },
                    {
                        title: 'Group 3',
                        sidebarDepth: 2,
                        children: [
                            '/es/test1',
                            '/es/test2'
                        ]
                    }
                ]
            }
        }
    }
}
