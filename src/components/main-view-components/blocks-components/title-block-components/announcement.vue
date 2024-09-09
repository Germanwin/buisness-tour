<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import AnnouncementGreenCircle from '@/components/icons/announcement-green-circle.vue';

export default {
    components: {
        AnnouncementGreenCircle
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        }
    }
}
</script>

<template>
    <div class="announcement">
        <div class="announcement-icon-container">
            <AnnouncementGreenCircle />
        </div>

        <div class="announcement-text">
            <h1>{{ title }}</h1>
            <p>{{ date }}</p>
        </div>
    </div>
</template>