<script lang="ts">


export default {
    props: {
        Status: {
            type: String,
            required: true,
        },
        To: {
            type: String,
            required: true,
        },
        imgPath: {
            type: String,
            required: true,
        },
        Date: {
            type: String,
            required: true,
        },
        Title: {
            type: String,
            required: true,
        }
    },
};
</script>

<template>

    <div class="previous-tour-card">
        <h2>{{ Status }}</h2>
        <img alt="yes" :src="imgPath">
        <h1 class="previous-tour-card-date">{{ Date }}</h1>
        <h1 class="previous-tour-card-title">{{ Title }}</h1>
        <RouterLink :to="`/tour/${To}`"></RouterLink>
    </div>


</template>