<script setup lang="ts">
import { navList } from '~/store/nav'

const { y: scroll } = useWindowScroll()
</script>

<template>
    <header class="header" :class="{ isScroll: scroll > 80 }">
        <RouterLink class="logo_box" to="/" focusable="false">
            <NobitaLogo />
        </RouterLink>
        <nav class="nav">
            <div class="spacer" />
            <div class="right" print:op0>
                <searchBox />
                <template v-for="item in navList" :key="item.path">
                    <RouterLink
                        :to="item.path" :title="item.name"
                        :active-class="$route.path === item.path ? '!opacity-100' : ''"
                    >
                        {{ item.name }}
                    </RouterLink>
                </template>
                <!-- <div i-ri-article-line /> -->
                <!-- <div i-ri-game-line /> -->

                <!-- <RouterLink to="/projects" title="Projects">
                    <span class="lt-md:hidden">Projects</span>
                    <div i-ri-lightbulb-line class="md:hidden" />
                </RouterLink>
                <RouterLink to="/talks" class="lt-md:hidden" title="Talks">
                    Talks
                </RouterLink> -->

                <!-- <RouterLink to="/podcasts" class="lt-md:hidden" title="Podcasts">
                    <div i-ri-mic-line />
                </RouterLink> -->
                <!--     <RouterLink to="/demos" title="Demos">
                    <div i-ri-screenshot-line />
                </RouterLink> -->
                <!-- <RouterLink to="/chat" title="Let's Chat">
                    <div i-ri-chat-1-line />
                </RouterLink> -->

                <a href="https://github.com/NobitaYuan" target="_blank" title="GitHub" class="lt-md:hidden">
                    <div i-uil-github-alt />
                </a>
                <ToggleTheme />
            </div>
        </nav>
    </header>
</template>

<style scoped>
.header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 99;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 0rem 2rem 0rem 1.25rem;

    &.isScroll {
        background-image: radial-gradient(transparent 1px, #ffffff25 2px);
        background-size: 4px 4px;
        backdrop-filter: saturate(50%) blur(4px);
        -webkit-backdrop-filter: saturate(50%) blur(4px);
    }

    .logo_box {
        width: 3rem;
        height: 3rem;
        padding-top: 1rem;
        user-select: none;
        outline: none;
    }

    .nav {
        width: 100%;
        display: grid;
        grid-template-columns: auto max-content;
        box-sizing: border-box;
        padding-top: 1.5rem;

        .right {
            display: grid;
            grid-gap: 1.2rem;
            grid-auto-flow: column;

            a {
                cursor: pointer;
                text-decoration: none;
                color: inherit;
                transition: opacity 0.2s ease;
                opacity: 0.6;
                outline: none;

                &:hover {
                    opacity: 1;
                    text-decoration-color: inherit;
                }
            }
        }
    }

    /* 媒体查询 */
    @media (max-width: 500px) {
        padding-right: 1.25rem;

        .nav {
            .right {
                grid-gap: 0.8rem;
            }
        }
    }
}
</style>
