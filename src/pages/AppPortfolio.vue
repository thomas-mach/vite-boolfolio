<template>
    <div class="container mt-6 mb-6">
        <div class="flex gap-2 mb-2">
            <button v-for="tag in technologies" :key="tag.id" class="text-xs rounded-full border px-3 leading-6"
                @click="currentTag = tag.name" :class="{ 'border-blue-400 text-blue-400': tag.name === currentTag }">{{
                tag.name }}</button>
            <button @click="currentTag = ''" class="text-xs rounded-full border px-3 leading-6">All</button>
        </div>

        <div class="grid grid-cols-3 gap-4">
            <div class="border shadow-lg rounded-lg flex flex-col font-mono" v-for="project in filteredProjects"
                :key="project.id">
                <div class="border-b p-2">
                    <h2 class="text-base">Title:</h2>
                    <p class="text-xs">{{ project.title }}</p>
                </div>
                <div class="border-b p-2" v-if="project.technologies && project.technologies.length">
                    <h3 class="text-base">Technologies:</h3>
                    <div class="flex flex-row flex-wrap gap-1">
                        <CategoriesPills :categories="project.technologies" />
                    </div>
                </div>
                <div class="border-b p-2" v-else>
                    <h3 class="text-base">Technologies:</h3>
                    <p class="text-xs">not available</p>
                </div>
                <div class="border-b p-2" v-if="project.type">
                    <h3 class="text-base">Project type:</h3>
                    <p class="text-xs">{{ project.type.name }}</p>

                </div>
                <div class="border-b p-2" v-else>
                    <h3 class="text-base">Project type:</h3>
                    <p class="text-xs">not available</p>

                </div>
                <div>
                    <router-link class="text-xs p-2 text-blue-600 visited:text-purple-600"
                        :to="{ name: 'project', params: { slug: project.slug } }">Read
                        more...</router-link>
                </div>
            </div>
        </div>
    </div>
    <!-- <div v-if="lastPage > 1">
        <ul class="flex gap-3 justify-center my-8">
            <li :class="n === currentPage ? 'bg-red-400' : 'bg-gray-100'"
                class="cursor-pointer aspect-square w-8 flex justify-center items-center rounded-full "
                @click="changePage(n)" v-for="n in lastPage" :key="n">
                {{ n }}
            </li>
        </ul>
    </div> -->


</template>



<script>

import axios from 'axios'
import CategoriesPills from '../components/CategoriesPills.vue'

export default {
    components: {
        CategoriesPills
    },

    data() {
        return {
            projects: [],
            technologies: [],
            currentPage: 1,
            lastPage: null,
            currentTag: '',

        }
    },

    methods: {

        changePage(n) {
            if (n === this.currentPage) return
            this.currentPage = n
            this.fetchProject()
        },



        fetchProject() {

            axios.get('http://127.0.0.1:8000/api/results', {
                params: {
                    page: this.currentPage,
                }

            })
                .then((res) => {
                    this.projects = res.data.projects
                    this.technologies = res.data.technologies
                })

        }
    },
    created() {
        this.fetchProject()

    },

    computed: {

        tags() {
            const allTags = this.technologies.flatMap(project => project.technologies.map(tech => tech.name));
            const uniqueTags = Array.from(new Set(allTags));
            return uniqueTags;
        },

        filteredProjects() {
            if (!this.currentTag) {
                return this.projects; // Mostra tutti i progetti se nessun tag è selezionato
            } else {
                return this.projects.filter(project => project.technologies.some(tech => tech.name === this.currentTag));
            }
        },
    }
}
</script>

<style scoped></style>