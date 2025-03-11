import { apiClient } from "./apiClient";
import { UserInterface } from "./interface/UserInterface.interface";

export const addUser = async (userData: UserInterface) => {
    try {
        const response = await apiClient.post("/user/add", userData);
        console.log("Usuario agregado correctamente:", response.data);
        return response.data;
    } catch (error: any) {
        console.error("Error al agregar usuario:", error.response?.data || error.message);
        throw error;
    }
};
