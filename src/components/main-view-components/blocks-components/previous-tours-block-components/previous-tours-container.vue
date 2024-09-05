<script setup lang="ts">
import previousTourCard from './previous-tour-card.vue';
import img1 from '@/assets/main-view-pics/previous-tours-pics/previous-tour-pic1.png'
import img2 from '@/assets/main-view-pics/previous-tours-pics/previous-tour-pic2.jpg'
import img3 from '@/assets/main-view-pics/previous-tours-pics/previous-tour-pic3.jpg'
</script>

<template>
    <div class="previous-tours-container">
        <previousTourCard :imgPath="img1" Date="Aug 28 2024" Title="Title text"/>
        <previousTourCard :imgPath="img2" Date="Aug 28 2024" Title="Title text"/>
        <previousTourCard :imgPath="img3" Date="Aug 28 2024" Title="Title text"/>
    </div>
</template>