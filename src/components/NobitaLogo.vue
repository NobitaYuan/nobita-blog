<script lang="ts" setup>
// const logo = new URL('/images/nobita_logo.svg', import.meta.url).href
</script>

<template>
    <div class="nobita_logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="58" height="53" viewBox="0 0 58 53" fill="none">
            <path
                d="M5.93641 2C-1.06348 39 19.9367 14.3333 25.9367 2M25.9367 2L2 51M25.9367 2C23.9367 10 22.3079 27.5173 25.9366 33.5M50 5C29 7 3.5 45 56 44"
                stroke-width="4" stroke-linecap="round" stroke-linejoin="round"
            />
            <path
                d="M44.4881 25.2085C44.4661 26.6261 44.4081 28.0428 44.3772 29.4602C44.3643 30.0552 43.6564 33.6733 45.6114 32.8893C47.3398 32.1963 49.5332 30.6054 50.4788 29.2401C53.9928 24.1663 38.6426 25.2475 36.9998 25"
                stroke-width="3" stroke-linecap="round"
            />
        </svg>
    </div>
</template>

<style scoped>
.nobita_logo {
    svg {
        width: 2.5rem;
        height: 2.5rem;
        path {
            stroke: var(--logo-color);
            stroke-dashoffset: 1px;
            stroke-dasharray: 100px 0;
            animation: grow 7s ease-in-out forwards infinite;
            transform-origin: center;
            animation-delay: 0s;
        }
    }
}
@keyframes grow {
    0% {
        stroke-dashoffset: 1px;
        stroke-dasharray: 0 100px;
        opacity: 0;
    }

    10% {
        opacity: 1;
    }

    40% {
        stroke-dasharray: 100px 0;
    }

    85% {
        stroke-dasharray: 100px 0;
    }

    95%,
    to {
        stroke-dasharray: 0 100px;
    }
}
</style>
