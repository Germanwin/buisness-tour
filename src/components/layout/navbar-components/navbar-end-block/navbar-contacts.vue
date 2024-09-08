<template>
    <div class="navbar-contacts">
        <h4 class="num-tooltip" v-if="showNumberTooltip">number copied!</h4>
        <h4 class="email-tooltip" v-if="showEmailTooltip">email copied!</h4>
        <h3 @click="copyNumber" @mouseleave="hideTooltip">+7 911 777 8375</h3>
        <p @click="copyEmail" @mouseleave="hideTooltip">bebebeBUbuburer@gmail.com</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showNumberTooltip: false,
            showEmailTooltip: false, // состояние для отображения подсказки
        };
    },
    methods: {
        copyNumber() {
            const text = "+7 911 777 8375";
            navigator.clipboard.writeText(text).then(() => {
                this.showNumberTooltip = true; // Показать подсказку после копирования
                setTimeout(() => {
                    this.showNumberTooltip = false; // Скрыть подсказку через 2 секунды
                }, 2000);
            }).catch(err => {
                console.error('Ошибка при копировании текста: ', err);
            });
        },
        copyEmail() {
            const text = "bebebeBUbuburer@gmail.com";
            navigator.clipboard.writeText(text).then(() => {
                this.showEmailTooltip = true; // Показать подсказку после копирования
                setTimeout(() => {
                    this.showEmailTooltip = false; // Скрыть подсказку через 2 секунды
                }, 2000);
            }).catch(err => {
                console.error('Ошибка при копировании текста: ', err);
            });
        },
        hideTooltip() {
            this.showNumberTooltip = false;
            this.showEmailTooltip = false;
        }
    }
}
</script>