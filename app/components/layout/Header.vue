<script setup lang="ts">

const { data: navigationItems } = await useNavigationData()

</script>

<template>
    <header class="flex justify-between items-center container mx-auto relative z-[1000]">
        <div>logo </div>
        <UNavigationMenu
            :items="navigationItems"
            class="w-full justify-center"
            :ui="{
                content: 'max-w-[800px] mx-auto',
            }"
        />
    </header>
</template>