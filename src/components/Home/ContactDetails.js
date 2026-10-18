
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

const initialFormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
};

const ContactDetails = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: '',
        }));

        setStatus(null);
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ) {
            newErrors.email = 'Enter a valid email address';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSending(true);
        setStatus(null);

        try {
            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                {
                    from_name: formData.name.trim(),
                    reply_to: formData.email.trim(),
                    subject: formData.subject.trim(),
                    message: formData.message.trim(),
                },
                {
                    publicKey: process.env.REACT_APP_PUBLIC_KEY,
                }
            );

            setStatus({
                type: 'success',
                message: 'Your message has been sent successfully!',
            });

            setFormData(initialFormData);
            setErrors({});
        } catch (error) {
            console.error('Email sending failed:', error);

            setStatus({
                type: 'error',
                message: 'Failed to send your message. Please try again.',
            });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <Box>
            <Container
                maxWidth={false}
                sx={{
                    px: { xs: 2, sm: 4, md: 8 },
                    py: { xs: 5, md: 10 },
                }}
            >
                <Card sx={{ width: '100%', borderRadius: 3, boxShadow: 3 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                        }}
                    >
                        {/* Contact Information */}
                        <Box
                            sx={{
                                width: { xs: '100%', md: '40%' },
                                boxSizing: 'border-box',
                                backgroundColor: '#f5f5f5',
                                p: { xs: 3, md: 6 },
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}
                        >
                            <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
                                Begin Your RJ Journey
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{ mb: 4, lineHeight: 1.8, color: '#bb8f08' }}
                            >
                                Let’s create something memorable… CONTACT US.
                            </Typography>

                            <Typography variant="h6" fontWeight="bold">
                                Email
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                                rjbypubuddishamila@gmail.com
                            </Typography>

                            <Typography variant="h6" fontWeight="bold">
                                WhatsApp
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                                +94 778549570
                            </Typography>

                            <Typography variant="h6" fontWeight="bold">
                                Address
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                23, St. Servatius Rd, Matara 81000, Sri Lanka
                            </Typography>
                        </Box>

                        {/* React Contact Form */}
                        <CardContent
                            sx={{
                                width: { xs: '100%', md: '60%' },
                                boxSizing: 'border-box',
                                p: { xs: 3, md: 6 },
                            }}
                        >
                            <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
                                Send Us a Message
                            </Typography>

                            {status && (
                                <Alert severity={status.type} sx={{ mb: 3 }}>
                                    {status.message}
                                </Alert>
                            )}

                            <Box
                                component="form"
                                onSubmit={handleSubmit}
                                noValidate
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 2,
                                }}
                            >
                                <TextField
                                    name="name"
                                    label="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    error={Boolean(errors.name)}
                                    helperText={errors.name}
                                    required
                                    fullWidth
                                />

                                <TextField
                                    name="email"
                                    label="Email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    error={Boolean(errors.email)}
                                    helperText={errors.email}
                                    required
                                    fullWidth
                                />

                                <TextField
                                    name="subject"
                                    label="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    error={Boolean(errors.subject)}
                                    helperText={errors.subject}
                                    required
                                    fullWidth
                                />

                                <TextField
                                    name="message"
                                    label="Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    error={Boolean(errors.message)}
                                    helperText={errors.message}
                                    multiline
                                    rows={5}
                                    required
                                    fullWidth
                                />

                                <Button
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    disabled={isSending}
                                    sx={{
                                        alignSelf: 'flex-start',
                                        backgroundColor: '#bb8f08',
                                        color: '#0b0c0c',
                                        '&:hover': {
                                            backgroundColor: '#a77f07',
                                        },
                                    }}
                                >
                                    {isSending ? 'Sending...' : 'Send Message'}
                                </Button>
                            </Box>
                        </CardContent>
                    </Box>
                </Card>
            </Container>
        </Box>
    );
};

export default ContactDetails;
