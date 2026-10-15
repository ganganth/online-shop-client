import { useState, useCallback } from "react";
import apiClient from "../../util/ApiClients";

export const useReview = () => {
    const [review, setReview] = useState([]);

    const fetchReviews = useCallback(async () => {
        try {
            const endpoint = `api/reviews`;
            const response = await apiClient.get(endpoint);
            if (response.status !== 200) throw new Error(`Error ${response.status}`);
            setReview(response.data);
        } catch (err) {
            console.error(err);
        }
    }, []);

    const createReview = useCallback(async (reviewData) => {
        try {
            const endpoint = `api/reviews`;
            const response = await apiClient.post(endpoint, reviewData);
            if (response.status !== 201) throw new Error(`Error ${response.status}`);
            setReview((prevReviews) => [...prevReviews, response.data]);
        } catch (err) {
            console.error(err);
        }
    }, []);

    return {
        review,
        fetchReviews,
        createReview,
    };
};