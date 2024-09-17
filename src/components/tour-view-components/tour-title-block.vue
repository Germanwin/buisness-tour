<template>
    <div class="tour-title-block" :style="backgroundStyle">
        <div class="main-title">
            <h1>{{ mainTitle.title }}</h1>
            <h5>{{ mainTitle.subtitle }}</h5>
        </div>
    </div>
</template>

<script>
import { useBackgroundStore } from '@/stores/tour-view-stores/background-store';
import { useTitleStore } from '@/stores/tour-view-stores/title-store';
import { watch, computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
    setup() {
        const backgroundStore = useBackgroundStore();
        const titleStore = useTitleStore();
        const route = useRoute();

        // Слушаем изменения маршрута и обновляем store
        watch(
            () => route.path,
            (newPath) => {
                backgroundStore.setCurrentRoute(newPath);
                titleStore.setCurrentRoute(newPath); // Обновляем текущий маршрут в store
            },
            { immediate: true } // Срабатывает сразу при загрузке компонента
        );

        // Стили, использующие backgroundImage из store
        const backgroundStyle = computed(() => ({
            'background-image': backgroundStore.backgroundImage
        }));

        // Реактивно отслеживаем main_title из store
        const mainTitle = computed(() => titleStore.main_title);

        return {
            backgroundStyle,
            mainTitle
        };
    }
};
</script>
