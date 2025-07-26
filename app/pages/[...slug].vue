<script setup lang="ts">
import { UBreadcrumb } from '#components'
import type { BreadcrumbItem } from '@nuxt/ui'

const { data, error } = await useDynamicPageData()

if (!data.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page not found',
    })
}

watch(error, (err) => {
    if (err) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Page not found',
        })
    }
}, {
    immediate: true,
})

const breadcrumbs = computed<BreadcrumbItem[]>(() => {
    return data.value?.path
        .split('/')
        .filter(Boolean)
        .map((part, index, arr) => ({
            label: part
                .replace(/-/g, ' ')
                .replace(/\b\w/g, l => l.toUpperCase()),
            to: `/${arr.slice(0, index + 1).join('/')}`,
        })) || []
})

</script>

<template>
    <div v-if="data">
        <UBreadcrumb
            :items="breadcrumbs"
            class="mb-4"
        />
        <div class="relative after:absolute after:inset-0 after:bg-black/50">
            <NuxtImg
                :src="data.meta.image"
                alt="Image"
                class="mb-4 w-full h-64 object-cover rounded-lg"
            />
            <p class="absolute inset-0 flex items-center justify-start p-12 text-6xl text-white z-10">{{ data.title }}
            </p>
        </div>
        <ContentRenderer
            :value="data"
            class="prose dark:prose-invert"
        />
    </div>
</template>