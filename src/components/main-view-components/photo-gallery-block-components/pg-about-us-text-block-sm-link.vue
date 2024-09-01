<script lang="ts">
export default {
    props: {
        imgPath: {
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
    <a class="pg-about-us-link" :href="path">
        <img :src="imgPath" alt="">
    </a>
</template>