import { defineStore } from 'pinia'
import firstPic from '@/assets/tour-view-pics/cirali.jpg';
import secondPic from '@/assets/tour-view-pics/butan.jpg';
import thirdPic from '@/assets/tour-view-pics/istanbul.jpg';

export const useBackgroundStore = defineStore('background', {
    state: () => ({
        currentRoute: '', // Держим текущий маршрут
    }),
    getters: {
        // Динамически возвращаем background-image в зависимости от текущего маршрута
        backgroundImage(state) {
            if (state.currentRoute === '/tour/1') {
                return `url(${firstPic})`;
            } else if (state.currentRoute === '/tour/2') {
                return `url(${secondPic})`;
            } else if (state.currentRoute === '/tour/3') {
                return `url(${thirdPic})`;
            }
            return ''; // По умолчанию
        }
    },
    actions: {
        // Функция для установки текущего маршрута
        setCurrentRoute(route: string) {
            this.currentRoute = route;
        }
    }
});