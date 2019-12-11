export default {
    namespaced: true,
    state: {
        brands: [
            { name: 'Iberojet', class: 't-iberojet' },
            { name: 'Muchoviaje', class: 't-muchoviaje' }
        ],
        others: [
            { name: 'Black Friday', class: 't-black-friday', multiple: true },
            { name: 'Semana Santa', class: 't-semana-santa' }
        ]
    },
    mutations: {},
    actions: {},
    getters: {}
}
