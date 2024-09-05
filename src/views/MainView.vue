<script setup>
import MasterPhotoBlock from '@/components/main-view-components/blocks/master-photo-block.vue';
import AboutUsBlock from '@/components/main-view-components/blocks/about-us-block.vue';
import TourRequestBlock from '@/components/main-view-components/blocks/tour-request-block.vue';
import TitleBlock from '@/components/main-view-components/blocks/title-block.vue';
import PreviousToursBlock from '@/components/main-view-components/blocks/previous-tours-block.vue';
import PhotoGalleryBlock from '@/components/main-view-components/blocks/photo-gallery-block.vue';
import PhotoToursBlock from '@/components/main-view-components/blocks/photo-tours-block.vue';
import TravelToEastBlock from '@/components/main-view-components/blocks/travel-to-east-block.vue';
</script>

<template>
    <div class="main-container">
        <TitleBlock />
        <PreviousToursBlock />
        <PhotoGalleryBlock />
        <PhotoToursBlock />
        <TravelToEastBlock />
        <MasterPhotoBlock />
        <AboutUsBlock />
        <TourRequestBlock />
    </div>
</template>