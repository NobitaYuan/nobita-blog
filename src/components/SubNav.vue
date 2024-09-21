<script setup lang="ts">
import { useRoute } from 'vue-router/auto'
import { navList } from '~/store/nav'

const inactiveStyle = 'opacity-20 hover:opacity-50'
const activeStyle = 'opacity-100 underline'

const route = useRoute()
</script>

<template>
    <div class="prose m-auto mb-8 select-none animate-none! op100!">
        <!-- <button flex="~ gap1" items-center mb2 op30 text-sm @click="englishOnly = !englishOnly">
            <div :i="englishOnly ? 'carbon-checkbox-checked' : 'carbon-checkbox'" />
            English Only
        </button> -->

        <div mb-0 flex="~ col gap-1 sm:row sm:gap-3 wrap" text-3xl>
            <template v-for="item in navList" :key="item.path">
                <RouterLink
                    :to="item.path"
                    class="!border-none"
                    :title="item.name"
                    :class="route.path === item.path ? activeStyle : inactiveStyle"
                >
                    {{ item.name }}
                </RouterLink>
            </template>
            <!-- <RouterLink to="/podcasts" class="!border-none" :class="route.path === '/podcasts' ? activeStyle : inactiveStyle">
                Podcasts
            </RouterLink>
            <RouterLink to="/streams" class="!border-none" :class="route.path === '/streams' ? activeStyle : inactiveStyle">
                Streams
            </RouterLink> -->
        </div>
    </div>
</template>
