<template>
  <div class="row">
    <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
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
    }
  },

  methods: {

    fetchProject() {

      axios.get('http://127.0.0.1:8000/api/projects', {

      })
        .then((res) => {
          // console.log(res.data.posts) // senza la paginazione
          console.log(res.data)
          this.projects = res.data.results
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