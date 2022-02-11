<template>
    <h1>{{ greeting }}</h1>
</template>
<script>
export default {
    name: 'Hello',
    setup() {
        const greeting = 'Hello world'

        return {
            greeting
        }
    }
}
</script>