<script lang="ts">
import TourTitleBlock from '@/components/tour-view-components/tour-title-block.vue';

import Cirali042024Content from '@/components/tour-view-components/Cirali-04-2024/Cirali-04-2024-content.vue';
import Cirali102024Content from '@/components/tour-view-components/Cirali-10-2024/Cirali-10-2024-content.vue';
import Butan042025Content from '@/components/tour-view-components/Butan-04-2025/Butan-04-2025-content.vue';

import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import TourRequestBlock from '@/components/main-view-components/blocks/tour-request-block.vue';

type PageId = '1' | '2' | '3';

export default defineComponent({
    components: {
        TourTitleBlock,
        Cirali042024Content,
        TourRequestBlock,
    },
    setup() {

        // Получаем id страницы из маршрута и приводим к типу PageId
        const route = useRoute(); // Доступ к параметрам маршрута

        // Получаем id страницы из параметра маршрута
        const pageId = computed(() => route.params.id || '1');

        // Словарь компонентов
        const components = {
            '1': Cirali102024Content,
            '2': Butan042025Content,
            '3': Cirali042024Content,
        };

        // Выбираем компонент по id
        const SelectedComponent = computed(() => components[pageId.value as keyof typeof components] || null);

        return {
            pageId,
            SelectedComponent,
            TourTitleBlock,
        };
    }
});
</script>

<template>
    <div class="main-container">
        <TourTitleBlock />
        <component :is="SelectedComponent" />
        <TourRequestBlock />
    </div>
</template>