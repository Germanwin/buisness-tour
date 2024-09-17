<script setup lang="ts">
import previousTourCard from './previous-tour-card.vue';
import img1 from '@/assets/tour-view-pics/first-pic.jpg'
import img2 from '@/assets/main-view-pics/previous-tours-pics/butan.jpg'
import img3 from '@/assets/main-view-pics/previous-tours-pics/previous-tour-pic3.jpg'
</script>

<template>
    <div class="previous-tours-container">
        <previousTourCard Status="Предстоит..." To="1" :imgPath="img1" Date="Октябрь 2024" Title="Чиралы, Турция"/>
        <previousTourCard Status="Предстоит..." To="2" :imgPath="img2" Date="Апрель 2025" Title="Бутан"/>
        <previousTourCard Status="Прошел" To="3" :imgPath="img3" Date="Апрель 2024" Title="Турция"/>
    </div>
</template>