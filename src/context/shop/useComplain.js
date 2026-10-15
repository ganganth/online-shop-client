import { useState, useCallback } from "react";
import apiClient from "../../util/ApiClients";

export const useComplain = () => {
    const [complain, setComplain] = useState([]);

    const fetchComplains = useCallback(async () => {
        try {
                const endpoint = `api/complains`;
                const response = await apiClient.get(endpoint);
                if (response.status !== 200) throw new Error(`Error ${response.status}`);
                setComplain(response.data);

        } catch (err) {
            console.error(err);
        }
    }, []);

    const createComplain = useCallback(async (complainData) => {
        try {
            const endpoint = `api/complains`;
            const response = await apiClient.post(endpoint, complainData);
            if (response.status !== 201) throw new Error(`Error ${response.status}`);
            setComplain((prevComplains) => [...prevComplains, response.data]);
        } catch (err) {
            console.error(err);
        }
    }, []);

    return {
        complain,
        fetchComplains,
        createComplain
    };
};