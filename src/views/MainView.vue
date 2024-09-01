<script setup>
import titleBlock from '@/components/main-view-components/title-block.vue';
import previousToursBlock from '@/components/main-view-components/previous-tours-block.vue';
import photoGalleryBlock from '@/components/main-view-components/photo-gallery-block.vue';
import photoToursBlock from '@/components/main-view-components/photo-tours-block.vue';
import TravelToEastBlock from '@/components/main-view-components/travel-to-east-block.vue';
import MasterPhotoBlock from '@/components/main-view-components/master-photo-block.vue';
import AboutUsBlock from '@/components/main-view-components/about-us-block.vue';
</script>

<template>
    <div class="main-container">
        <titleBlock />
        <previousToursBlock />
        <photoGalleryBlock />
        <photoToursBlock />
        <TravelToEastBlock />
        <MasterPhotoBlock />
        <AboutUsBlock />
    </div>
</template>