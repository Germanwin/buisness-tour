<script setup lang="ts">
import TitleBlockAnnouncement from '../main-view-components/blocks-components/title-block-components/title-block-announcement.vue';
import SmLinks from './sm-links.vue';
</script>

<template>
    <div class="footer-container">
        <div class="left-column">
            <a href="">Оплата</a>
            <a href="">Отзывы</a>
            <p>+7 911 777 8375</p>
        </div>
        <div class="middle-column">
            <TitleBlockAnnouncement />
        </div>
        <div class="right-column">
            <SmLinks />
        </div>
    </div>
</template>