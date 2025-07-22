<script setup lang="ts">

const route = useRoute()

const { data: post } = await useAsyncData(route.path, () => {
    return queryCollection('blog').path(route.path).first()
})

</script>

<template>
    <div>
        <div>
            <h1>{{ post?.author }}</h1>
            <h2>{{ post?.date }}</h2>
        </div>

        <ContentRenderer
            v-if="post"
            :value="post?.body"
        />
    </div>
</template>