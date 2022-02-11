<template>
    <h1>{{ greeting }}</h1>
</template>
<script>
import {ref} from 'vue'

export default {
    name: 'Hello',
    setup() {
        const greeting = ref('Hello There!')

        return {
            greeting
        }
    }
}
</script>