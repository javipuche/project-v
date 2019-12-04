<template>
    <header class="navbar">
        <SidebarButton class="navbar__sidebar-button" @toggle-sidebar="$emit('toggle-sidebar')" />

        <router-link :to="$localePath" class="navbar__brand">
            <img
                v-if="$site.themeConfig.logo"
                class="navbar__logo"
                :src="$withBase($site.themeConfig.logo)"
                :alt="$siteTitle"
            >
            <span
                v-if="$siteTitle"
                ref="siteName"
                class="navbar__title"
                :class="{ 'can-hide': $site.themeConfig.logo }"
            >
                {{ $siteTitle }}
            </span>
        </router-link>

        <div class="navbar__links">
            <NavLinks />
        </div>
    </header>
</template>

<script>
    import SidebarButton from '@theme/components/SidebarButton.vue'
    import NavLinks from '@theme/components/NavLinks.vue'

    export default {
        components: { SidebarButton, NavLinks },

        data () {
            return {
                linksWrapMaxWidth: null
            }
        }
    }
</script>

<style lang="scss" scoped>
  .navbar {
    position: sticky;
    z-index: 90;
    top: 0;
    left: 0;
    height: var(--docs-navbar-height);
    background-color: var(--docs-navbar-background);
    padding: 0.5rem var(--docs-gutter);
    width: 100%;
    display: grid;
    grid-template-columns: 1rem 1fr auto;
    grid-gap: 1rem;
    align-items: center;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.08);

    @include breakpoint($breakpoint-layout) {
      grid-template-columns: auto 1fr;
      grid-gap: 3rem;
    }

    &__sidebar-button {
      @include breakpoint($breakpoint-layout) {
        display: none;
      }
    }

    &__brand {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: currentColor;
    }

    &__logo {
      max-height: 2rem;
      width: auto;
      margin-right: 1rem;
    }

    &__title {
      font-size: 1.375rem;
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 1px;
    }

    &__links {
      display: none;

      @include breakpoint($breakpoint-layout) {
        display: block;
        justify-self: end;
      }
    }
  }
</style>
