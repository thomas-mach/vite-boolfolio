<template>


    <div class="border shadow-lg rounded-lg flex flex-col font-mono">
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
/* .project-card {
    border: 1px solid #ccc;
    padding: 16px;
    margin: 16px 0;
    width: 300px;
    height: 600px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
} */
</style>