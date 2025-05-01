import axios from "axios";

const url = "https://twitmunddev.github.io/jsonHosting-dti-webapp/codes.json";

export const fetchCodes = async () => {
    try {
        const response = await axios.get(url);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération du fichier :", error);
    }
};