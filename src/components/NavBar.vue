<template>
    <header class="py-2 bg-gray-100">
        <div class="container">
            <div class="flex justify-between items-center">

                <RouterLink class="text-lg font-extrabold" to="/">Thomas Mach</RouterLink>

                <nav class="flex gap-3 items-center">
                    <RouterLink v-for="(link, i) in links" key="index" :to="link.path" @click="setActiv(i)"
                        :class="{ 'underline': active === i }">{{ link.text }}
                    </RouterLink>

                    <!-- <RouterLink :class="$route.fullPath === '/blog' ? 'text-amber-400' : ''" :to="{ name: 'blog'}">Blog</RouterLink>
            <RouterLink :class="$route.fullPath === '/about' ? 'text-amber-400' : ''" :to="{ name: 'about'}">About</RouterLink> -->
                </nav>
            </div>
        </div>
    </header>
</template>


<script>

export default {
    data() {
        return {
            active: null,
            links: [
                { text: 'Home', path: '/' },
                { text: 'Portfolio', path: '/portfolio' },
                { text: 'Contact', path: '/contact' },
            ]
        }
    },

    methods: {
        setActiv(i) {
            this.active = i
            console.log(this.active)
        },
    },

}
</script>

<style scoped></style>