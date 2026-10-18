import { useEffect, useState } from 'react';
import MainLayout from '../MainLayout';
import ShopDetail from './ShopDetail';
import ItemDetail from './ItemDetail';
import Review from '../Review/Review';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Shop = () => {
    const [isSelectedItem, setIsSelectedItem] = useState(false);
    const [showReview, setShowReview] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowReview(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <MainLayout window={() => window}>
            {isSelectedItem ? (
                <ItemDetail setIsSelectedItem={setIsSelectedItem} selectedItem={selectedItem} />
            ) : (
                <ShopDetail setIsSelectedItem={setIsSelectedItem} setSelectedItem={setSelectedItem} />
            )}

            <Dialog
                open={showReview}
                onClose={() => {}}
                disableescapekeydown="true"
                fullWidth
                maxWidth="sm"
            >
                <DialogTitle
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    Write a Review

                    <IconButton
                        onClick={() => setShowReview(false)}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                <DialogContent>
                    <Review />
                </DialogContent>
            </Dialog>
        </MainLayout>
    );
};

export default Shop;

