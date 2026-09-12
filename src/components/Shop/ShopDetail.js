import ItemCard from './ItemCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const ShopDetail = ({ setSelectedItem }) => {

    const items = [
        {
            id: 1,
            images: ['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg', '/images/image4.jpg'],
            title: 'Premium Package',
            description: 'A complete package with everything you need.',
            price: '$49.99',
        },
        {
            id: 2,
            images: ['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg', '/images/image4.jpg'],
            title: 'Basic Package',
            description: 'A simple package for your everyday needs.',
            price: '$29.99',
        },
        {
            id: 3,
            images: ['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg', '/images/image4.jpg'],
            title: 'Standard Package',
            description: 'A balanced package with great features.',
            price: '$39.99',
        },
        {
            id: 4,
            images: ['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg', '/images/image4.jpg'],
            title: 'Deluxe Package',
            description: 'Our deluxe package with additional benefits.',
            price: '$69.99',
        },
        {
            id: 5,
           images: ['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg', '/images/image4.jpg'],
            title: 'Business Package',
            description: 'Perfect package for business requirements.',
            price: '$89.99',
        },
        {
            id: 6,
            images: ['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg', '/images/image4.jpg'],
            title: 'Ultimate Package',
            description: 'Everything included in one complete package.',
            price: '$99.99',
        },
    ];

    return (
        <Box
            sx={{
                width: '100%',
                px: { xs: 2, sm: 3, md: 5 },
                py: 4,
            }}
        >
            <Grid
                container
                spacing={{ xs: 2, sm: 3, md: 4 }}
            >
                {items.map((item) => (
                    <Grid
                        key={item.id}
                        size={{
                            xs: 12,
                            sm: 6,
                            md: 6,
                            lg: 4,
                        }}
                    >
                        <ItemCard
                            item={item}
                            setSelectedItem={setSelectedItem}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ShopDetail;

