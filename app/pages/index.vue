<script setup lang="ts">
const { data: homepage } = await useAsyncData('homepage', () => queryCollection('homepage').first())

</script>

<template>
    <div>
        <h1>{{ homepage?.title }}</h1>
        <p>{{ homepage?.description }}</p>
        <button
            v-for="button in homepage?.hero.ctaButtons"
            :key="button.text"
        >{{ button.text }}</button>
        <ContentRenderer
            v-if="homepage"
            :value="homepage?.body"
        />
    </div>
</template>