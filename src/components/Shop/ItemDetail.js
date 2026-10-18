import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ItemDetail = ({ setIsSelectedItem, selectedItem }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? selectedItem.images.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev === selectedItem.images.length - 1 ? 0 : prev + 1
        );
    };

    const handleBack = () => {
        setIsSelectedItem(false);
    };

    const currentImage = selectedItem.images[currentIndex];

    return (
        <Box
            sx={{
                width: '100%',
                py: 6,
                px: { xs: 2, md: 8 },
            }}
        >
            {/* Back Button */}
            <Box
                sx={{
                    maxWidth: 1000,
                    mx: 'auto',
                    mb: 2,
                }}
            >
                <Button
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                    onClick={handleBack}
                    sx={{ color: '#bb8f08', borderColor: '#bb8f08' }}
                >
                    Back
                </Button>
            </Box>

            <Card
                sx={{
                    maxWidth: 1000,
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
                        display: { xs: 'block', md: 'flex' },
                        alignItems: 'center',
                    }}
                >
                    {/* Image */}
                    <Box
                        component="img"
                        src={currentImage}
                        alt={selectedItem.title}
                        sx={{
                            width: { xs: '100%', md: '60%' },
                            height: { xs: 500, md: 700 },
                            objectFit: 'cover',
                            display: 'block',
                        }}
                    />

                    {/* Details */}
                    <CardContent
                        sx={{
                            width: { xs: '100%', md: '40%' },
                            p: { xs: 3, md: 5 },
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            sx={{ mb: 2 }}
                        >
                            {selectedItem.title}
                        </Typography>

                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{
                                mb: 1,
                                lineHeight: 1.7,
                                color: '#bb8f08'
                            }}
                        >
                            {selectedItem.ReferenceNo}
                        </Typography>

                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{
                                mb: 3,
                                lineHeight: 1.7,
                                textAlign: 'justify',
                            }}
                        >
                            {selectedItem.description}
                        </Typography>

                        <Typography
                            variant="h7"
                            color="primary"
                            fontWeight="bold"
                            sx={{ mb: 3, color: 'black' }}
                        >
                            {selectedItem.price}
                        </Typography>
                    </CardContent>
                </Box>

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
                        {selectedItem.images.map((_, index) => (
                            <Box
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                sx={{
                                    width: index === currentIndex ? 28 : 10,
                                    height: 10,
                                    borderRadius: 5,
                                    backgroundColor:
                                        index === currentIndex
                                            ? '#bb8f08'
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
            </Card>
        </Box>
    );
};

export default ItemDetail;

