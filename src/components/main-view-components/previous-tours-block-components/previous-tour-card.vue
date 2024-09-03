<script lang="ts">

export default {
  props: {
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
        <img alt="yes" :src="imgPath">
        <h1 class="previous-tour-card-date">{{ Date }}</h1>
        <h1 class="previous-tour-card-title">{{ Title }}</h1>
    </div>
</template>