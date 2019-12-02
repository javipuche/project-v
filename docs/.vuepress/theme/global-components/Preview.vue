<template>
    <div class="preview">
        <div class="preview__demo">
            <slot name="demo" />
        </div>
        <div class="preview__code">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
  .preview {
    border-radius: 0.25rem;
    background-color: #fff;
    border: 1px solid var(--docs-color-border);

    &__demo {
      padding: 2rem;
    }

    pre {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
</style>
