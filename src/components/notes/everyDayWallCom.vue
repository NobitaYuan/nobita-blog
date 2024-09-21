<script lang="ts" setup>
import { request } from '~/utils/axios'
import { isDev } from '~/utils/isDev'

async function getBingWallpaper() {
    const { data } = await request({
        baseURL: isDev ? '/bing-api' : 'https://cn.bing.com',
        url: '/HPImageArchive.aspx',
        method: 'GET',
        params: {
            format: 'js',
            idx: 0,
            n: 999,
        },
    })
    // `https://cn.bing.com${data.images[0].url}`
    return data
}
interface imgDataType {
    title: string
    url: string
    copyright: string
    copyrightlink: string
}
const curIdx = ref<number>(0)
const imgArr = ref<any[]>([])
const curimgData = computed<imgDataType>(() => {
    const currentItem = imgArr.value[curIdx.value]
    return {
        title: currentItem?.title || '',
        url: `https://cn.bing.com${currentItem?.url}`,
        copyright: currentItem?.copyright || '',
        copyrightlink: currentItem?.copyrightlink || '',
    }
})

getBingWallpaper()
    .then((data) => {
        imgArr.value = data.images
    })
    .catch((err) => {
        console.error('getBingWallpaper:', err)
    })

function nextFn() {
    if (curIdx.value === imgArr.value.length - 1) {
        curIdx.value = 0
        return
    }
    curIdx.value++
}
function prevFn() {
    if (curIdx.value === 0) {
        curIdx.value = imgArr.value.length - 1
        return
    }
    curIdx.value--
}
function eventFn(e: any) {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        prevFn()
    }
    else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        nextFn()
    }
}
window.addEventListener('keydown', eventFn)
onBeforeUnmount(() => {
    window.removeEventListener('keydown', eventFn)
})
</script>

<template>
    <div class="everyDayWall">
        <template v-if="curimgData">
            <h2>{{ curimgData.title }}</h2>
            <img :src="curimgData.url" alt="每日壁纸">
            <div class="op50 text-end text-3">
                <a target="_blank" :href="curimgData.copyrightlink">{{ curimgData.copyright }}</a>
            </div>
            <br>
            <div class="flex gap-8 justify-end font-mono op50 font-600 text-5">
                <button class="b-t-blue  " @click="prevFn">
                    <!-- eslint-disable-next-line vue/no-parsing-error -->
                    <
                </button>
                <button class="b-t-blue  " @click="nextFn">
                    >
                </button>
            </div>
        </template>
        <br>
        <br>
    </div>
</template>

<style scoped>
.everyDayWall {
}
</style>
