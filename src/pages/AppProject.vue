<template>
    <div class="container mt-3 mb-3 font-mono">
        <div v-if="project">
            <div class="border-b mb-2 mt-7">
                <strong>TITLE: </strong>{{ project.title }}
            </div>

            <div class="border-b mb-2">
                <strong>TYPE: </strong> {{ project.type && project.type.name ? project.type.name : 'not available' }}
            </div>

            <div class="flex border-b gap-2"><strong>TECHNOLOGIES:</strong>
                <CategoriesPills :categories="project.technologies" />
            </div>

            <p class="my-2 border-b mb-2"><strong>DESCRIPTION: </strong>{{ project.description }}</p>
            <div class="my-2"><strong>CREATED AT: </strong>{{ project.created_at }}</div>
        </div>
        <div>
            <img class="w-1/4" v-if="project && project.cover_image !== null"
                :src="`http://127.0.0.1:8000/storage/${project.cover_image}`"
                alt="project.cover_image ? 'Project Cover Image' : ''">
        </div>
        <RouterLink class="text-xs text-blue-600" to="/portfolio">Back to portfolio
        </RouterLink>
    </div>
</template>

<script>

import axios from 'axios'
import { RouterLink } from 'vue-router';
import CategoriesPills from '../components/CategoriesPills.vue';


export default {
    components: {
        CategoriesPills,
        RouterLink,

    },
    props: {
        slug: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            project: null,
            projectId: null,
        }
    },
    methods: {


        fetchProject() {
            axios.get(`http://127.0.0.1:8000/api/projects/${this.slug}`)

                .then((res) => {
                    this.project = res.data.project
                    console.log(res.data.project)
                })
                .catch((err) => {
                    this.$router.push({
                        name: 'not-found',
                        params: { pathMatch: this.$route.path.substring(1).split('/') },
                    })
                })
        }
    },
    created() {
        this.fetchProject()
    },

    mounted() {
    }
}
</script>

<style scoped></style>