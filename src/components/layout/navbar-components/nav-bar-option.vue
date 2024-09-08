<script lang="ts">
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        path: {
            type: String,
            required: true,
        }
    }
}
</script>

<template>
    <a class="navbar-option" :href="path">
        {{ title }}
    </a>
</template>