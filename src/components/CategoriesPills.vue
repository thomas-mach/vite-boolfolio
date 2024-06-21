<template>
    <span v-if="!categories.length">not available</span>
    <span v-else class="mb-2" :class="{
        'text-xs text-white rounded-full bg-orange-500 px-3 leading-6': tech.name === 'html',
        'text-xs text-white rounded-full bg-blue-500 px-3 leading-6': tech.name === 'css',
        'text-xs text-white rounded-full bg-yellow-500 px-3 leading-6': tech.name === 'js',
        'text-xs text-white rounded-full bg-green-500 px-3 leading-6': tech.name === 'vue',
        'text-xs text-white rounded-full bg-red-500 px-3 leading-6': tech.name === 'laravel',
    }" v-for="(tech, index) in categories" :key="tech.id || index">
        {{ tech && tech.name ? tech.name : 'not available' }}
    </span>
</template>

<script>
export default {
    props: {
        categories: {
            type: Array,
            required: true
        }
    }
}
</script>

<style></style>