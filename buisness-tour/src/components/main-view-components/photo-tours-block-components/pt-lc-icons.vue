<script setup>
import icon1 from '../../icons/facebook.svg'
import icon2 from '../../icons/instagram.svg'
import icon3 from '../../icons/twitter.svg'
import icon4 from '../../icons/youtube.svg'
import PtLcIcon from './pt-lc-icon.vue'

</script>

<template>
    <div class="pt-lc-icons">
        <PtLcIcon :imgPath="icon1" path="#"/>
        <PtLcIcon :imgPath="icon2" path="#"/>
        <PtLcIcon :imgPath="icon3" path="#"/>
        <PtLcIcon :imgPath="icon4" path="#"/>
    </div>

</template>