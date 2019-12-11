<template>
    <a href="#" class="hello" :class="theme">
        Hello
        <slot />
    </a>
</template>

<script>
    import commonMixins from '@mixins/commons'

    export default {
        name: 'AtHelloWorld',
        mixins: [commonMixins]
    }
</script>

<style lang="scss">
  .hello {
    --color: grey;
  }
</style>

<style scoped lang="scss">
  .hello {
    color: var(--color);
  }
</style>
