import axios from "axios";
import dotenv from "dotenv";

// Cargar variables de entorno desde .env
dotenv.config();

const API_URL = process.env.CARLOG_API_URL;
const API_KEY = process.env.API_KEY;

if (!API_URL || !API_KEY) {
    throw new Error("Faltan API_URL o API_KEY en el archivo .env");
}

export const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
    }
});
