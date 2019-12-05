<template>
    <main class="home" aria-labelledby="main-title">
        <div class="home__content">
            <header class="hero">
                <img
                    v-if="data.heroImage"
                    :src="$withBase(data.heroImage)"
                    :alt="data.heroAlt || 'hero'"
                >

                <h1 v-if="data.heroText !== null" id="main-title">
                    {{ data.heroText || $title || 'Hello' }}
                </h1>

                <p class="description">
                    {{ data.tagline || $description || 'Welcome to your VuePress site' }}
                </p>

                <p
                    v-if="data.actionText && data.actionLink"
                    class="action"
                >
                    <NavLink
                        class="action-button"
                        :item="actionLink"
                    />
                </p>
            </header>

            <div
                v-if="data.features && data.features.length"
                class="features"
            >
                <div
                    v-for="(feature, index) in data.features"
                    :key="index"
                    class="feature"
                >
                    <h2>{{ feature.title }}</h2>
                    <p>{{ feature.details }}</p>
                </div>
            </div>

            <Content class="theme-default-content custom" />

            <div
                v-if="data.footer"
                class="footer"
            >
                {{ data.footer }}
            </div>
        </div>
    </main>
</template>

<script>
    import NavLink from '@theme/components/NavLink.vue'

    export default {
        components: { NavLink },

        computed: {
            data () {
                return this.$page.frontmatter
            },

            actionLink () {
                return {
                    link: this.data.actionLink,
                    text: this.data.actionText
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
  @import "../styles/core/core";

  .home {
    padding: var(--docs-gutter);
    background-color: var(--docs-page-background);
    min-width: 1px;

    @include breakpoint($breakpoint-layout down) {
      min-height: calc(100vh - var(--docs-navbar-height));
    }

    @include breakpoint($breakpoint-layout) {
      --docs-gutter: 4rem;
    }

    &__content {
      max-width: var(--docs-container-width);
      margin: 0 auto;
    }
  }
</style>
