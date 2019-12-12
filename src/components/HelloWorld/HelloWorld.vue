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
    --color: var(--color-primary);
  }
</style>

<style lang="scss" scoped>
  .hello {
    color: var(--color);
  }
</style>
