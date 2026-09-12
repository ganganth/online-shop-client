import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const ItemCard = ({setSelectedItem, item}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? item.images.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev === item.images.length - 1 ? 0 : prev + 1
        );
    };

    const currentIMage = item.images[currentIndex];

    const handleSetSelectedItem = (itemId) => {
        setSelectedItem(true);
        // to do get the details
    }

    return (
        <Box
            sx={{
                width: '100%',
                py: 6,
                px: { xs: 2, md: 8 },
            }}
        >
            <Card
                sx={{
                    maxWidth: 400,
                    mx: 'auto',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: 4,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                        transform: 'scale(1.02)',
                    },
                }}
            >
                <Box
                    sx={{
                        display: 'block',
                        alignItems: 'center',
                    }}
                >
                    {/* Image */}
                    <Box
                        component="img"
                        src={currentIMage}
                        alt={currentIMage}
                        sx={{
                            width: '100%',
                            height: { xs: 300, md: 400 },
                            objectFit: 'cover',
                            display: 'block',
                        }}
                    />

                     {/* Previous / Next */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            px: 2,
                            py: 1.5,
                        }}
                    >
                        <IconButton
                            onClick={handlePrevious}
                            aria-label="Previous item"
                        >
                            <ChevronLeftIcon />
                        </IconButton>

                        <Box sx={{ display: 'flex', gap: 1 }}>
                            {item.images.map((_, index) => (
                                <Box
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    sx={{
                                        width: index === currentIndex ? 28 : 10,
                                        height: 10,
                                        borderRadius: 5,
                                        backgroundColor:
                                            index === currentIndex
                                                ? 'primary.main'
                                                : 'grey.400',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                    }}
                                />
                            ))}
                        </Box>

                        <IconButton
                            onClick={handleNext}
                            aria-label="Next item"
                        >
                            <ChevronRightIcon />
                        </IconButton>
                    </Box>

                    {/* Details */}
                    <CardContent
                        sx={{
                            width: '100%',
                            p: { xs: 3, md: 5 },
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography
                            variant="overline"
                            color="primary"
                            fontWeight="bold"
                        >
                            Featured Item
                        </Typography>

                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            sx={{ mb: 2 }}
                        >
                            {item.title}
                        </Typography>

                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{
                                mb: 3,
                                lineHeight: 1.7,
                            }}
                        >
                            {item.description}
                        </Typography>

                        <Typography
                            variant="h4"
                            color="primary"
                            fontWeight="bold"
                            sx={{ mb: 3 }}
                        >
                            {item.price}
                        </Typography>

                        <Button
                            variant="contained"
                            size="large"
                            sx={{ alignSelf: 'flex-start', backgroundColor: '#bb8f08', color: 'rgb(11, 12, 12)' }}
                            onClick={() => handleSetSelectedItem(item.id)}
                        >
                            View Details
                        </Button>
                    </CardContent>
                </Box>

               
            </Card>
        </Box>
    );
};

export default ItemCard;

