import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';

const galleryImages = [
    {
        image: '/images/image1.jpg',
        title: 'Discover Beautiful Places',
        description:
            'Explore amazing destinations and create unforgettable memories.',
    },
    {
        image: '/images/image2.jpg',
        title: 'Explore New Adventures',
        description:
            'Experience nature, adventure and everything the world has to offer.',
    },
    {
        image: '/images/image3.jpg',
        title: 'Enjoy Every Moment',
        description:
            'Make every journey special with experiences worth remembering.',
    },
    {
        image: '/images/image4.jpg',
        title: 'Find Your Next Destination',
        description:
            'Start your next adventure and discover something new.',
    },
];

const HomeDetail = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const navigate = useNavigate();

    const handleExploreMore = () => {
        navigate('/shop');
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % galleryImages.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const current = galleryImages[currentImage];

    return (
        <Box>
            {/* Hero Slider */}
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: {
                        xs: 350,
                        sm: 450,
                        md: 550,
                    },
                    overflow: 'hidden',
                }}
            >
                {/* Background Image */}
                <Box
                    component="img"
                    src={current.image}
                    alt={current.title}
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />

                {/* Dark Overlay */}
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        background:
                            'linear-gradient(90deg, rgba(0,0,0,0.7), rgba(0,0,0,0.15))',
                    }}
                />

                {/* Content */}
                <Box
                    sx={{
                        position: 'relative',
                        zIndex: 1,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        px: {
                            xs: 3,
                            sm: 6,
                            md: 10,
                        },
                        maxWidth: 750,
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            color: 'white',
                            fontWeight: 700,
                            mb: 2,
                            fontSize: {
                                xs: '2rem',
                                sm: '3rem',
                                md: '4rem',
                            },
                        }}
                    >
                        {current.title}
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{
                            color: 'white',
                            fontWeight: 400,
                            mb: 3,
                            lineHeight: 1.6,
                        }}
                    >
                        {current.description}
                    </Typography>

                    <Button
                        variant="contained"
                        size="large"
                        onClick={() => handleExploreMore()}
                    >
                        Explore More
                    </Button>
                </Box>

                {/* Slider Indicators */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 25,
                        left: 0,
                        right: 0,
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 1,
                        zIndex: 2,
                    }}
                >
                    {galleryImages.map((_, index) => (
                        <Box
                            key={index}
                            onClick={() => setCurrentImage(index)}
                            sx={{
                                width:
                                    index === currentImage
                                        ? 30
                                        : 10,
                                height: 10,
                                borderRadius: 5,
                                backgroundColor:
                                    index === currentImage
                                        ? 'white'
                                        : 'rgba(255,255,255,0.5)',
                                cursor: 'pointer',
                                transition: 'all 0.3s',
                            }}
                        />
                    ))}
                </Box>
            </Box>

            {/* Home Content */}
            <Container
                maxWidth={false}
                sx={{
                    px: {
                        xs: 2,
                        md: 6,
                    },
                    py: 5,
                }}
            >
                <Typography
                    variant="h4"
                    gutterBottom
                >
                    Welcome to the RJ.
                </Typography>

                <Typography variant="body1">
                    Welcome to our application, where you can discover new places,
                    explore exciting experiences, and find everything you need in one
                    convenient place. Our goal is to provide a simple, enjoyable, and
                    user-friendly experience for everyone.
                </Typography>
            </Container>
        </Box>
    );
};

export default HomeDetail;

