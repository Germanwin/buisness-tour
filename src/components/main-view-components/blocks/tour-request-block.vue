<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template>
    <div class="tour-request-block-container">
        <h1>Отправьте заявку в тур прямо сейчас!</h1>
        <form @submit.prevent="sendEmail">
            <input v-model="email.from" type="email" placeholder="Ваш Email" required />
            <input v-model="email.name" type="text" placeholder="Ваше ФИО" required />
            <input v-model="email.number" type="text" placeholder="Ваш номер телефона" required />
            <input v-model="email.needed_tour" type="text" placeholder="Тур, в который хотите поехать" required />
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
                name: '',
                number: '',
                needed_tour: ''
            },
            message: ''
        };
    },
    methods: {
        async sendEmail() {
            try {
                const response = await axios.post('http://62.113.98.240:1316/send-email', {
                    from: this.email.from,
                    to: 'grishingerman7766005@gmail.com',
                    subject: 'Заявка в тур!',
                    text: `Это заявка в тур от ${this.email.name}! \n 
                    хотел(а) бы поехать в тур ${this.email.needed_tour} \n
                    номер телефона чтобы связаться: ${this.email.number}`,
                }, {
                    headers: {
                        'Content-Type': 'application/json' // Убедитесь, что отправляете данные в формате JSON
                    }
                });
                console.log(response)
                this.message = 'Заявка в энерголагерь отправлена!';
            } catch (error) {
                console.log(error)
            }
        }
    }
};
</script>