import axios from 'axios';
import type { ApiResponse } from '../core/models/Api';
import type { Article } from '../core/models/Article';

// Recupero della chiave dal file .env
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

export const fetchTopNews = async (): Promise<ApiResponse<Article>> => {

    try {
        const response = await axios.get(`${BASE_URL}/top-headlines`, {
            params: {
                //language: 'it',
                country: 'us',
                //category: 'technology',
                apiKey: API_KEY
            }
        });
        return response.data;
    } catch (error) {

        console.error("Errore nel recupero delle news:", error);
        throw error;
    }
};
//prova
export const searchNews = async (query: string): Promise<ApiResponse<Article>> => {
    try {
        const response = await axios.get(`${BASE_URL}/everything`, {
            params: {
                q: query,
                language: 'it',
                sortBy: 'publishedAt',
                apiKey: API_KEY
            }
        });
        return response.data;
    } catch (error) {
        console.error("Errore nella ricerca delle news:", error);
        throw error;
    }
};
