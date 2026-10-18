import ItemCard from './ItemCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const ShopDetail = ({ setSelectedItem, setIsSelectedItem }) => {

    const items = [
        {
            id: 1,
            images: ['/images/shop/1a.jpeg', '/images/shop/1b.jpeg', '/images/shop/1c.jpeg'],
            title: 'Ivory Serenity Saree',
            description: 'Colour: Ivory White Discover timeless elegance with this graceful ivory saree. Its delicate, understated appearance creates a refined and feminine look, perfect for formal occasions, celebrations, and sophisticated daytime events.',
            price: '$49.99',
            ReferenceNo: '#RJ001'
        },
        {
            id: 2,
            images: ['/images/shop/2a.jpeg', '/images/shop/2b.jpeg', '/images/shop/2c.jpeg'],
            title: 'Basic Package',
            description: 'A simple package for your everyday needs.',
            price: '$29.99',
            ReferenceNo: '#RJ002'
        },
        {
            id: 3,
            images: ['/images/shop/3a.jpeg', '/images/shop/3b.jpeg', '/images/shop/3c.jpeg'],
            title: 'Standard Package',
            description: 'A balanced package with great features.',
            price: '$39.99',
            ReferenceNo: '#RJ003'
        },
        {
            id: 4,
            images: ['/images/shop/4a.jpeg', '/images/shop/4b.jpeg', '/images/shop/4c.jpeg'],
            title: 'Deluxe Package',
            description: 'Our deluxe package with additional benefits.',
            price: '$69.99',
            ReferenceNo: '#RJ004'
        },
        {
            id: 5,
           images: ['/images/shop/5a.jpeg', '/images/shop/5b.jpeg', '/images/shop/5c.jpeg'],
            title: 'Business Package',
            description: 'Perfect package for business requirements.',
            price: '$89.99',
            ReferenceNo: '#RJ005'
        },
        {
            id: 6,
            images: ['/images/shop/6a.jpeg', '/images/shop/6b.jpeg', '/images/shop/6c.jpeg'],
            title: 'Ultimate Package',
            description: 'Everything included in one complete package.',
            price: '$99.99',
            ReferenceNo: '#RJ006'
        },
        {
            id: 7,
            images: ['/images/shop/7a.jpeg', '/images/shop/7b.jpeg', '/images/shop/7c.jpeg'],
            title: 'Ultimate Package',
            description: 'Everything included in one complete package.',
            price: '$99.99',
            ReferenceNo: '#RJ007'
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
                            setIsSelectedItem={setIsSelectedItem}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ShopDetail;

