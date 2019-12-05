<template>
    <div class="preview">
        <div class="preview__actions">
            <select class="preview__action preview__action--theme" @change="selectTheme($event)">
                <option value="muchoviaje">
                    Muchoviaje
                </option>
                <option value="iberojet">
                    Iberojet
                </option>
            </select>
            <button v-show="codeIsVisible" class="preview__action" @click.prevent="copyCode">
                <span v-show="copied" class="preview__copied">
                    Copied to Clipboard!
                </span>
                <svg
                    v-show="!copied"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z" />
                </svg>
            </button>
            <button class="preview__action" :class="{ 'is-active': codeIsVisible }" @click.prevent="toggleCode">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="none" d="M0 0h24v24H0V0z" />
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                </svg>
            </button>
            <button class="preview__action" @click.prevent="toggleDemo">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                </svg>
            </button>
        </div>
        <div class="preview__inner">
            <div class="preview__demo" :class="{ 'is-active': demoIsFullscreen }">
                <slot name="demo" />
                <button v-show="demoIsFullscreen" class="preview__action preview__action--close" @click.prevent="toggleDemo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
                    </svg>
                </button>
            </div>
            <div v-show="codeIsVisible" ref="codeSnippet" class="preview__code">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                codeIsVisible: false,
                demoIsFullscreen: false,
                copied: false
            }
        },
        mounted () {
            this.escapePress()
        },
        methods: {
            selectTheme (event) {
                console.log(event.target.value)
            },
            toggleCode () {
                this.codeIsVisible = !this.codeIsVisible
            },
            copyCode () {
                const node = this.$refs.codeSnippet

                if (window.getSelection) {
                    const selection = window.getSelection()
                    const range = document.createRange()
                    range.selectNodeContents(node)
                    selection.removeAllRanges()
                    selection.addRange(range)
                    document.execCommand('copy')
                    selection.removeAllRanges()
                    this.toggleCopied()
                } else {
                    return console.warn('Could not select text in node: Unsupported browser.')
                }
            },
            toggleDemo () {
                this.demoIsFullscreen = !this.demoIsFullscreen
                this.$store.commit('overlay/toggleOverlay', this.demoIsFullscreen)
            },
            toggleCopied () {
                this.copied = !this.copied
                setTimeout(() => { this.copied = !this.copied }, 1000)
            },
            escapePress () {
                document.addEventListener('keydown', (e) => e.keyCode === 27 && this.demoIsFullscreen && this.toggleDemo())
            }
        }
    }
</script>

<style lang="scss" scoped>
  .preview {
    margin-bottom: 4rem;

    &__actions {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 0.5rem;
    }

    &__action {
      all: unset;
      cursor: pointer;
      padding: 0.25rem;
      border-radius: 0.25rem;
      margin-left: 0.5rem;
      transition: all 0.3s;
      display: flex;
      justify-content: center;
      align-items: center;

      &:active:not(&--close):not(.is-active),
      &:focus:not(&--close):not(.is-active),
      &:hover:not(&--close):not(.is-active) {
        fill: var(--docs-color-primary);
      }

      &.is-active {
        background-color: var(--docs-color-primary);
        fill: #fff;
      }

      &--close {
        position: fixed;
        right: 1rem;
        bottom: 1rem;
        box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.08);
        background-color: var(--docs-color-primary);
        fill: #fff;
      }

      &--theme {
        justify-self: flex-start;
        margin-right: auto;
      }
    }

    &__copied {
      font-size: 0.75em;
      color: var(--docs-color-primary);
    }

    &__inner {
      border-radius: 0.25rem;
      background-color: #fff;
      border: 1px solid var(--docs-color-border);
    }

    &__demo {
      padding: 2rem;

      &.is-active {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 200;
        background-color: #fff;
        width: 100vw;
        height: 100vh;
        overflow-y: auto;
        padding: 0;
      }
    }

    pre {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
</style>
