import { useState, useCallback } from "react";
import apiClient from "../../util/ApiClients";

export const useProduct = () => {
    const [product, setProduct] = useState([]);

    const fetchProducts = useCallback(async () => {
        try {
            const endpoint = `api/products`;
            const response = await apiClient.get(endpoint);
            if (response.status !== 200) throw new Error(`Error ${response.status}`);
            setProduct(response.data);
        } catch (err) {
            console.error(err);
        }
    }, []);

    const createProduct = useCallback(async (productData) => {
        try {
            const endpoint = `api/products`;
            const response = await apiClient.post(endpoint, productData);
            if (response.status !== 201) throw new Error(`Error ${response.status}`);
            setProduct((prevProducts) => [...prevProducts, response.data]);
        } catch (err) {
            console.error(err);
        }
    }, []);

    const updateProduct = useCallback(async (productId, updatedData) => {
        try {
            const endpoint = `api/products/${productId}`;
            const response = await apiClient.put(endpoint, updatedData);
            if (response.status !== 200) throw new Error(`Error ${response.status}`);
            setProduct((prevProducts) =>
                prevProducts.map((product) =>
                    product.id === productId ? response.data : product
                )
            );
        } catch (err) {
            console.error(err);
        }
    }, []);

    const deleteProduct = useCallback(async (productId) => {
        try {
            const endpoint = `api/products/${productId}`;
            const response = await apiClient.delete(endpoint);
            if (response.status !== 200) throw new Error(`Error ${response.status}`);
            setProduct((prevProducts) =>
                prevProducts.filter((product) => product.id !== productId)
            );
        } catch (err) {
            console.error(err);
        }
    }, []);
    
    return {
        product,
        fetchProducts,
        createProduct,
        updateProduct,
        deleteProduct
    };
};

