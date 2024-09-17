import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import TourView from '@/views/TourView.vue'

const allowedTourIds = ['1', '2', '3']; // Разрешенные ID туров

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/tour/:id',
      name: 'tour',
      component: TourView,
      beforeEnter: (to, from, next) => {
        const tourId = Array.isArray(to.params.id) ? to.params.id[0] : to.params.id as string;

        // Проверяем, если ID тура допустимо, то продолжаем, иначе перенаправляем на главную
        if (allowedTourIds.includes(tourId)) {
          next(); // Переход разрешен
        } else {
          next('/'); // Перенаправляем на главную
        }
      }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/' // Перенаправляем любые несуществующие маршруты на главную
    }
  ],
  // Добавляем поведение прокрутки
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // Если есть сохранённая позиция (например, после нажатия "Назад"), восстанавливаем её
      return savedPosition;
    } else {
      // По умолчанию прокручиваем страницу в самое начало
      return { top: 0 };
    }
  }
});

export default router;