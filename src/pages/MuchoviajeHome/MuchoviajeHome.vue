<template>
    <Layout>
        <HelloWorld />
        {{ theme }}
    </Layout>
</template>

<script>
    import Layout from '@layouts/Layout/Layout'
    import HelloWorld from '@components/HelloWorld/HelloWorld'

    export default {
        name: 'AtMuchoviajeHome',
        components: {
            Layout,
            HelloWorld
        },
        props: ['theme']
    }
</script>
