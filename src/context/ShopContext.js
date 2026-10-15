import { createContext, useMemo } from 'react';
import { useComplain } from './shop/useComplain';
import { useProduct } from './shop/useProduct';
import { useReview } from './shop/useReview';

export const ShopContext = createContext({
    complain: [],
    fetchComplains: async () => {
        throw new Error('Shop Context not found');
    },
    createComplain: async () => {
        throw new Error('Shop Context not found');
    },

    product: [],
    fetchProducts: async () => {
        throw new Error('Shop Context not found');
    },
    createProduct: async () => {
        throw new Error('Shop Context not found');
    },
    updateProduct: async () => {
        throw new Error('Shop Context not found');
    },
    deleteProduct: async () => {
        throw new Error('Shop Context not found');
    },

    review: [],
    fetchReviews: async () => {
        throw new Error('Shop Context not found');
    },
    createReview: async () => {
        throw new Error('Shop Context not found');
    },
});

export const ShopProvider = ({ children }) => {
    const {
        complain,
        fetchComplains,
        createComplain,
    } = useComplain();

    const {
        product,
        fetchProducts,
        createProduct,
        updateProduct,
        deleteProduct,
    } = useProduct();

    const {
        review,
        fetchReviews,
        createReview,
    } = useReview();

    const value = useMemo(
        () => ({
            complain,
            fetchComplains,
            createComplain,

            product,
            fetchProducts,
            createProduct,
            updateProduct,
            deleteProduct,

            review,
            fetchReviews,
            createReview,
        }),
        [
            complain,
            fetchComplains,
            createComplain,
            product,
            fetchProducts,
            createProduct,
            updateProduct,
            deleteProduct,
            review,
            fetchReviews,
            createReview,
        ]
    );

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};
