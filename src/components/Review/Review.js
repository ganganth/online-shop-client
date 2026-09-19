import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';

const Review = ({ setShowReview }) => {
    const [rating, setRating] = useState(0);
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (!rating || !message.trim()) {
            return;
        }

        console.log({
            rating,
            message,
        });
        setShowReview(false);
        setRating(0);
        setMessage('');
    };

    return (
        <Box
            sx={{
                width: '100%',
                px: { xs: 2, sm: 4, md: 6 },
                py: { xs: 1, sm: 2, md: 5 },
            }}
        >
            <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 2 }}
            >
                How was your experience?
            </Typography>

            {/* Star Rating */}
            <Rating
                name="review-rating"
                value={rating}
                onChange={(_, newValue) => {
                    setRating(newValue);
                }}
                size="large"
                sx={{ mb: 3 }}
            />

            {/* Message */}
            <TextField
                fullWidth
                multiline
                rows={5}
                label="Your Review"
                placeholder="Write your review here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            {/* Submit */}
            <Button
                variant="contained"
                size="large"
                sx={{ mt: 3 }}
                onClick={handleSubmit}
                disabled={!rating || !message.trim()}
            >
                Submit Review
            </Button>
        </Box>
    );
};

export default Review;

