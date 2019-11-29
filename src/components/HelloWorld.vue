<template>
    <a href="#" class="hello">
        Hello
        <slot />
    </a>
</template>

<script>
    export default {
        name: 'HelloWorld'
    }
</script>

<style scoped lang="scss">
  .hello {
    color: lightcoral;
  }
</style>
