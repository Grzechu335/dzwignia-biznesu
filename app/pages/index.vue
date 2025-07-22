<script setup lang="ts">
const { data: homepage } = await useAsyncData('homepage', () => queryCollection('homepage').first())

</script>

<template>
    <div>
        <pre>{{ homepage?.body.value }}</pre>
    </div>
</template>