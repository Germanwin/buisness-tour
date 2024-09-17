<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import AnnouncementGreenCircle from '@/components/icons/announcement-green-circle.vue';

export default {
    components: {
        AnnouncementGreenCircle
    },
    props: {
        To: {
            type: String,
            required: true,
        },
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

        <RouterLink :to="To" ></RouterLink>
            <div class="announcement-icon-container">
                <AnnouncementGreenCircle />
            </div>
            <div class="announcement-text">
                <h1>{{ title }}</h1>
                <p>{{ date }}</p>
            </div>

    </div>
</template>