<template>
  <div class="container mt-6 mb-6">
    <div class="grid grid-cols-3 gap-4">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </div>

  <div v-if="lastPage > 1">
    <ul class="flex gap-3 justify-center my-8">
      <li :class="n === currentPage ? 'bg-amber-400' : 'bg-gray-100'"
        class="cursor-pointer aspect-square w-8 flex justify-center items-center rounded-full " @click="changePage(n)"
        v-for="n in lastPage" :key="n">
        {{ n }}
      </li>
    </ul>
  </div>

</template>



<script>

import axios from 'axios'
import ProjectCard from './components/ProjectCard.vue'

export default {
  components: {
    ProjectCard
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

      axios.get('http://127.0.0.1:8000/api/projects?page=1', {
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

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
}
</style>