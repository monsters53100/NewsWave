import axios from 'axios';

// Interfaccia per i dati che inviamo
export interface LoginData {
    email: string;
}

export const postNewsletterSubscription = async (data: LoginData) => {

    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'Newsletter Subscription',
        body: data.email,
        userId: 1,
    });
    return response.data;
};