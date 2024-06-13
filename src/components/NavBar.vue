<template>
    <header class="py-2 bg-gray-100">
        <div class="container">
            <div class="flex justify-between items-center">

                <RouterLink class="text-lg font-extrabold" to="/">Thomas Mach</RouterLink>

                <nav class="flex gap-3 items-center">
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/portfolio">Portfolio</RouterLink>
                    <RouterLink to="/contact">Contact</RouterLink>
                    <!-- <RouterLink :class="$route.fullPath === '/blog' ? 'text-amber-400' : ''" :to="{ name: 'blog'}">Blog</RouterLink>
            <RouterLink :class="$route.fullPath === '/about' ? 'text-amber-400' : ''" :to="{ name: 'about'}">About</RouterLink> -->
                </nav>
            </div>
        </div>
    </header>
</template>