import ItemCard from './ItemCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const ShopDetail = ({ setSelectedItem, setIsSelectedItem }) => {

    const items = [
        {
            id: 1,
            images: ['/images/shop/1a.jpeg', '/images/shop/1b.jpeg', '/images/shop/1c.jpeg'],
            title: 'Ivory Serenity Saree',
            description: 'Color: Ivory White - Discover timeless elegance with this graceful ivory saree. Its delicate, understated appearance creates a refined and feminine look, perfect for formal occasions, celebrations, and sophisticated daytime events.',
            price: '$120.00',
            ReferenceNo: '#RJ001'
        },
        {
            id: 2,
            images: ['/images/shop/2a.jpeg', '/images/shop/2b.jpeg', '/images/shop/2c.jpeg'],
            title: 'Ruby Royal Saree',
            description: 'Color: Ruby Red - Make a striking statement with the Ruby Royal Saree. Its rich red hue radiates confidence, passion, and timeless glamour, making it a beautiful choice for unforgettable celebrations and special occasions.',
            price: '$110.00',
            ReferenceNo: '#RJ002'
        },
        {
            id: 3,
            images: ['/images/shop/3a.jpeg', '/images/shop/3b.jpeg', '/images/shop/3c.jpeg'],
            title: 'Blush Blossom Saree',
            description: 'Color: Ivory and gold -  Embrace soft sophistication with this beautiful gold and ivory saree. Its delicate colour brings a romantic, graceful charm to your wardrobe, offering a lovely balance of contemporary femininity and traditional elegance.',
            price: '$125.00',
            ReferenceNo: '#RJ003'
        },
        {
            id: 4,
            images: ['/images/shop/4a.jpeg', '/images/shop/4b.jpeg', '/images/shop/4c.jpeg'],
            title: 'Lavender Dream Saree',
            description: 'Color: Blush Pink - Bring a touch of dreamy elegance to every occasion with the Blush Pink Dream Saree. Its soft purple shade creates a sophisticated, modern aesthetic for women who appreciate subtle beauty and effortless style.',
            price: '$110.00',
            ReferenceNo: '#RJ004'
        },
        {
            id: 5,
            images: ['/images/shop/5a.jpeg', '/images/shop/5b.jpeg', '/images/shop/5c.jpeg'],
            title: 'Champagne Grace Saree',
            description: 'Color: Champagne Beige - Elegant, versatile, and effortlessly chic, the Champagne Grace Saree is designed for understated luxury. Its soft neutral tone complements a variety of accessories, creating a polished look for both intimate occasions and grand celebrations.',
            price: '$115.00',
            ReferenceNo: '#RJ005'
        },
        {
            id: 6,
            images: ['/images/shop/6a.jpeg', '/images/shop/6b.jpeg', '/images/shop/6c.jpeg'],
            title: 'Azure Elegance Saree',
            description: 'Color: Sky Blue - Inspired by the freshness of clear skies, the Azure Elegance Saree brings a refreshing and graceful touch to traditional dressing. Its beautiful blue shade offers a sophisticated look for women who love timeless style with a modern feel.',
            price: '$100.00',
            ReferenceNo: '#RJ006'
        },
        {
            id: 7,
            images: ['/images/shop/7a.jpeg', '/images/shop/7b.jpeg', '/images/shop/7c.jpeg'],
            title: 'Royal Lilac Saree',
            description: 'Color: Lilac Purple, gray and Black - Celebrate your individuality with the Royal Lilac Saree. Its muted purple tone offers a graceful blend of contemporary charm and classic elegance, making it a versatile addition to a thoughtfully curated saree collection.',
            price: '$100.00',
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

