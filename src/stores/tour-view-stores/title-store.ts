import { defineStore } from 'pinia'

export const useTitleStore = defineStore('title', {
    state: () => ({
        currentRoute: '', // Держим текущий маршрут
    }),
    getters: {
        // Динамически возвращаем заголовки в зависимости от текущего маршрута
        main_title(state) {
            if (state.currentRoute === '/tour/1') {
                return {
                    title: 'Чиралы, Турция',
                    subtitle: 'Заголовок для Турции, Чиралов'
                };
            } else if (state.currentRoute === '/tour/2') {
                return {
                    title: 'Бутан',
                    subtitle: 'Заголовок для Бутана'
                };
            } else if (state.currentRoute === '/tour/3') {
                return {
                    title: 'Турция',
                    subtitle: 'Заголовок для Турции'
                };
            }
            // Возвращаем объект с пустыми значениями по умолчанию
            return {
                title: '',
                subtitle: ''
            };
        }
    },
    actions: {
        // Функция для установки текущего маршрута
        setCurrentRoute(route: string) {
            this.currentRoute = route;
        }
    }
});
