<script setup>
import icon1 from '../../icons/facebook.svg'
import icon2 from '../../icons/instagram.svg'
import icon3 from '../../icons/twitter.svg'
import icon4 from '../../icons/youtube.svg'
import pgAboutUsTextBlockSmLink from './pg-about-us-text-block-sm-link.vue';

</script>

<template>
    <div class="pg-about-us-links">
        <pgAboutUsTextBlockSmLink :imgPath="icon1" path="#"/>
        <pgAboutUsTextBlockSmLink :imgPath="icon2" path="#"/>
        <pgAboutUsTextBlockSmLink :imgPath="icon3" path="#"/>
        <pgAboutUsTextBlockSmLink :imgPath="icon4" path="#"/>
    </div>

</template>