<script setup lang="ts">
const { y: scroll } = useWindowScroll()
</script>

<template>
    <header class="header" :class="{ isScroll: scroll > 80 }">
        <RouterLink class="w-12 h-12 absolute xl:fixed m-5 select-none outline-none" to="/" focusable="false">
            <NobitaLogo />
        </RouterLink>
        <nav class="nav">
            <div class="spacer" />
            <div class="right" print:op0>
                <RouterLink to="/posts" title="Blog">
                    <!-- <div i-ri-article-line /> -->
                    <span class="">Blog</span>
                </RouterLink>
                <RouterLink to="/game" title="Game">
                    <!-- <div i-ri-game-line /> -->
                    <span class="">Game</span>
                </RouterLink>
                <RouterLink to="/Notes" title="Notes">
                    <span class="">Notes</span>
                </RouterLink>
                <!-- <RouterLink to="/projects" title="Projects">
                    <span class="lt-md:hidden">Projects</span>
                    <div i-ri-lightbulb-line class="md:hidden" />
                </RouterLink>
                <RouterLink to="/talks" class="lt-md:hidden" title="Talks">
                    Talks
                </RouterLink> -->
                <!-- <RouterLink to="/sponsors-list" title="Sponsors">
                    <span class="lt-md:hidden">Sponsors</span>
                    <div i-ri-heart-line class="md:hidden" />
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
    z-index: 999;
}
.isScroll {
    /* background-color: rgba(255, 255, 255, 0.5); */
    background-image: radial-gradient(transparent 1px, #ffffff25 2px);
    background-size: 4px 4px;
    backdrop-filter: saturate(50%) blur(4px);
    -webkit-backdrop-filter: saturate(50%) blur(4px);
}

.nav {
    padding: 1.5rem 2rem;
    padding-bottom: 1.5rem;
    width: 100%;
    display: grid;
    grid-template-columns: auto max-content;
    box-sizing: border-box;
}

.nav > * {
    margin: auto;
}

.nav img {
    margin-bottom: 0;
}

.nav a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    transition: opacity 0.2s ease;
    opacity: 0.6;
    outline: none;
}

.nav a:hover {
    opacity: 1;
    text-decoration-color: inherit;
}

.nav .right {
    display: grid;
    grid-gap: 1.2rem;
    grid-auto-flow: column;
}

.nav .right > * {
    margin: auto;
}
</style>
