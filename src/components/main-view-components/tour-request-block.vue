<template>
    <div class="tour-request-block-container">
        <h1>Отправьте заявку в тур прямо сейчас!</h1>
        <form @submit.prevent="sendEmail">
            <input v-model="email.from" type="email" placeholder="Ваш Email" required />
            <input v-model="email.name" type="text" placeholder="Ваше ФИО" required />
            <!-- <input v-model="email.subject" type="text" placeholder="Subject" required />
            <input v-model="email.text" type="text" placeholder="Message" /> -->
            <button type="submit">Отправить заявку</button>
        </form>
        <p>{{ message }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            email: {
                from: '', // Email пользователя, введённый в форме
                to: '',
                subject: '',
                text: '',
                name: '',
            },
            message: ''
        };
    },
    methods: {
        async sendEmail() {
            try {
                const response = await axios.post('http://localhost:1316/send-email', {
                    from: this.email.from,
                    to: 'grishingerman7766005@gmail.com',
                    subject: 'Заявка в тур!',
                    text: `Это заявка в тур от ${this.email.name}!`,
                }, {
                    headers: {
                        'Content-Type': 'application/json' // Убедитесь, что отправляете данные в формате JSON
                    }
                });
                this.message = 'Заявка в энерголагерь отправлена!';
            } catch (error) {
                console.log(error)
            }
        }
    }
};
</script>