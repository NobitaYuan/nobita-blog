<script lang="ts" setup>
const commentDom = ref<HTMLElement | null>(null)

onMounted(() => {
    const script = document.createElement('script')
    script.src = 'https://utteranc.es/client.js'
    script.setAttribute('repo', 'NobitaYuan/nobita-blog')
    script.setAttribute('issue-term', 'pathname')
    script.setAttribute('theme', 'github-light')
    script.setAttribute('crossorigin', 'anonymous')
    script.async = true
    commentDom.value?.appendChild(script)
})
</script>

<template>
    <div ref="commentDom" class="comment slide-enter-content" />
</template>

<style>
.comment {
    margin-top: 5rem;
    padding-top: 1.5rem;
    position: relative;
    &:hover {
        &::after {
            opacity: 0.7;
        }
    }
    &::before {
        content: '';
        display: block;
        position: absolute;
        width: 90%;
        height: 0.5px;
        top: 0px;
        right: 4px;
        background-color: rgba(125, 125, 125, 0.2);
        border-radius: 12px;
    }

    &::after {
        content: '留下你的评论吧👇🏼';
        display: block;
        position: absolute;
        font-size: 12px;
        top: 0;
        right: 4px;
        opacity: 0;
        transition: all 0.3s ease-in-out;
    }
}
</style>
