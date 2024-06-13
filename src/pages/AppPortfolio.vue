<template>
    <div class="container mt-6 mb-6">
        <div class="grid grid-cols-3 gap-4">
            <div class="border shadow-lg rounded-lg flex flex-col font-mono" v-for="project in projects">
                <div class="border-b-[1px] p-2">
                    <h2 class="text-base">Title:</h2>
                    <p class="text-xs">{{ project.title }}</p>
                </div>
                <!-- <p>{{ project.description }}</p> -->
                <div class="border-b-[1px] p-2" v-if="project.technologies && project.technologies.length">
                    <h3 class="text-base">Technologies:</h3>
                    <div class="flex flex-row flex-wrap gap-1">
                        <p class="text-xs rounded-full bg-gray-200 px-3 leading-6" v-for="tech in project.technologies"
                            :key="tech.id">{{ tech.name }}</p>
                    </div>
                </div>
                <div class="border-b-[1px] p-2" v-else>
                    <h3 class="text-base">Technologies:</h3>
                    <p class="text-xs">not available</p>
                </div>
                <div class="p-2" v-if="project.type">
                    <h3 class="text-base">Project type:</h3>
                    <p class="text-xs">{{ project.type.name }}</p>

                </div>
                <div class="p-2" v-else>
                    <h3 class="text-base">Project type:</h3>
                    <p class="text-xs">not available</p>

                </div>
            </div>
        </div>
        <div v-if="lastPage > 1">
            <ul class="flex gap-3 justify-center my-8">
                <li :class="n === currentPage ? 'bg-red-400' : 'bg-gray-100'"
                    class="cursor-pointer aspect-square w-8 flex justify-center items-center rounded-full "
                    @click="changePage(n)" v-for="n in lastPage" :key="n">
                    {{ n }}
                </li>
            </ul>
        </div>
    </div>

</template>



<script>

import axios from 'axios'

export default {
    components: {
    },

    data() {
        return {
            projects: [],
            currentPage: 1,
            lastPage: null
        }
    },

    methods: {
        changePage(n) {
            if (n === this.currentPage) return
            this.currentPage = n
            this.fetchProject()
        },

        fetchProject() {

            axios.get('http://127.0.0.1:8000/api/projects', {
                params: {
                    page: this.currentPage,
                }

            })
                .then((res) => {
                    // console.log(res.data.posts) // senza la paginazione
                    console.log(res.data)
                    this.projects = res.data.results.data
                    this.projects = res.data.results.data
                    this.lastPage = res.data.results.last_page
                })

        }
    },
    created() {
        this.fetchProject()
    },
}
</script>

<style scoped></style>