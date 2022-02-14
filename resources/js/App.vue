<template>
    <ProjectTitle />
    <Cards />
    <GetStarted />
</template>
<script>
import ProjectTitle from './components/front-page/project-title.vue'
import Cards from './components/front-page/cards.vue'
import GetStarted from './components/front-page/get-started.vue'

export default {
    name: 'App',
    components: {
        ProjectTitle,
        Cards,
        GetStarted
    }
}
</script>