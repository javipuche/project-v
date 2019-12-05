const { join, resolve } = require('path')
const store = require('../../src/store')

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
                componentsDir: './src'
            }
        ]
    ],
    scss: {
        sassOptions: {
            includePaths: [join(__dirname, '../../src/assets/scss')]
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
        store: store,
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
                        text: 'Inicio',
                        link: '/es/'
                    },
                    {
                        text: 'Documentación',
                        link: '/es/documentacion/'
                    }
                ],
                sidebar: {
                    '/es/documentacion/': [
                        {
                            title: 'Desarrollo',
                            collapsable: false,
                            sidebarDepth: 2,
                            children: [
                                '/es/documentacion/'
                            ]
                        }
                    ]
                }
            }
        }
    }
}
