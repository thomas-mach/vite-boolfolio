<template>

    <div class="">
        <div class="project-card">
            <h2>Title:</h2>
            <h3>{{ project.title }}</h3>
            <!-- <p>{{ project.description }}</p> -->
            <div v-if="project.technologies && project.technologies.length">
                <h3>Technologies:</h3>
                <span v-for="tech in project.technologies" :key="tech.id">{{ tech.name }}-</span>
            </div>
            <div v-else>
                <h3>Technologies:</h3>
                <p>not available</p>
            </div>
            <div v-if="project.type">
                <h3>Project type:</h3>
                <p>{{ project.type.name }}</p>

            </div>
            <div v-else>
                <h3>Project type:</h3>
                <p>not available</p>

            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'ProjectCard',
    props: {
        project: {
            type: Object,
            required: true
        }
    }
};
</script>

<style scoped>
.project-card {
    border: 1px solid #ccc;
    padding: 16px;
    margin: 16px 0;
    width: 300px;
    height: 600px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
</style>