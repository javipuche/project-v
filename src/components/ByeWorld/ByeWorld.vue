<template>
    <a href="#" class="bye">
        bye
        <slot />
    </a>
</template>

<script>
    export default {
        name: 'AtByeWorld'
    }
</script>

<style scoped lang="scss">
  .bye {
    color: red;

    &.bg {
      background-color: #ccc;
    }
  }
</style>
