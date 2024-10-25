<script lang="ts" setup>
import fileData from '~/data/search-index.json'
import { formatDate } from '~/logics'

const fileDataFilteHtml = fileData.map((item) => {
    return { ...item, content: (item.content).replace(/<[^>]+>/g, '') }
})

const isSearch = ref(false)
function toggleSearch() {
    isSearch.value = !isSearch.value
}
const inputDom = ref<HTMLInputElement>()

const searchStr = ref('')
const results = ref<typeof fileData>([])

function onInput() {
    if (!searchStr.value) {
        results.value = []
        return
    }
    searchFn(searchStr.value)
}
function searchFn(str: string) {
    try {
        results.value = fileDataFilteHtml.filter((item) => {
            return item?.title?.includes(str) || item?.content?.includes(str) || item?.data?.subtitle?.includes(str)
        })
    }
    catch (error) {
        console.error('searchFn:', error, results.value)
    }
}

watch(
    isSearch,
    (val) => {
        if (val) {
            document.documentElement.style.overflow = 'hidden'
            addEvent()
            nextTick().then(() => {
                inputDom.value?.focus()
            })
        }
        else {
            document.documentElement.style.overflow = ''
            searchStr.value = ''
            results.value = []
            removeEvent()
        }
    },
)
function escapeClose(e: KeyboardEvent) {
    if (e.key === 'Escape') {
        isSearch.value = false
    }
}
function addEvent() {
    window.addEventListener('keydown', escapeClose)
}
function removeEvent() {
    window.removeEventListener('keydown', escapeClose)
}

function ctrlF(e: KeyboardEvent) {
    if (e.ctrlKey && e.key === 'f') {
        e.preventDefault()
        toggleSearch()
    }
}
onMounted(() => {
    window.addEventListener('keydown', ctrlF)
})
onUnmounted(() => {
    window.removeEventListener('keydown', ctrlF)
})
</script>

<template>
    <div class="search_box">
        <button type="button" i-ri-search-line @click="toggleSearch" />
        <Teleport v-if="isSearch" to="body">
            <div class="search_mask">
                <!--  -->
                <button class="close slide-enter" i-ri-close-line @click="toggleSearch" />
                <!--  -->
                <div class="containers">
                    <viewportAnimation>
                        <div class="ipt_box">
                            <input
                                ref="inputDom" v-model="searchStr" class="input" placeholder="请输入关键词"
                                @input="onInput" @keydown.enter="onInput"
                            >
                        </div>
                    </viewportAnimation>
                    <ul class="list">
                        <li v-for="(item, idx) in results" :key="idx" class="item slide-enter">
                            <a :href="item.path">
                                {{ item.path }}
                            </a>
                            <RouterLink :to="item.path.replaceAll('\\', '/')">
                                {{ item.title }}
                                <p>
                                    <template v-if="item.data?.date">
                                        {{ formatDate(item.data.date, false) }} ——
                                    </template>
                                    {{ item.data.subtitle }}
                                </p>
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </Teleport>
    </div>
</template>

<style scoped>
.search_box {
    opacity: 0.6;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }
}

.search_mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background: hsla(0, 0%, 100%, 0.9);
    backdrop-filter: blur(3px);
    display: flex;
    align-items: flex-start;
    padding-top: 24vh;
    --fg: #555;
    --fg-deeper: #000;

    .close {
        color: var(--fg);
        opacity: 0.6;
        position: absolute;
        right: 32px;
        top: 32px;
        font-size: 32px;
    }

    .containers {
        width: 100%;
        color: var(--fg);
        font-size: 1rem;
        line-height: 1.75;
        margin: 0 auto;
        width: 65ch;
        padding: 0 32px;

        .ipt_box {
            border-bottom: 1px solid var(--fg);
            display: flex;
            margin-bottom: 32px;
            width: 70%;

            .input {
                width: 100%;
                background-color: transparent;
                outline: none;
                margin-right: auto;
                color: var(--fg-deeper);
                font-size: 28px;
            }
        }

        .list {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;

            .item {
                line-height: 1;
                display: flex;
                flex-direction: column;
                opacity: 0.7;
                padding: 8px 16px;
                transform: translateX(-16px);
                transition: all 0.3s ease-in-out;

                a {
                    color: var(--fg-deeper);
                    font-size: 18px;
                }

                p {
                    margin-top: 8px;
                    font-size: 14px;
                    color: var(--fg);
                }

                &:hover {
                    background: #8884;
                    transform: translateX(0px);
                }
            }
        }
    }
}
</style>
