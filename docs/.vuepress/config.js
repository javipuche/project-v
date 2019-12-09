const { resolve } = require('path')

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
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve(__dirname),
                '@components': resolve('src/components'),
                '@layouts': resolve('src/layouts'),
                '@pages': resolve('src/pages'),
                '@utils': resolve('src/utils'),
                '@store': resolve('src/store')
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
