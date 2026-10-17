import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ContactDetails = () => {
    return (
        <Box sx={{ display: 'block' }}>
            <Container
                maxWidth={false}
                sx={{
                    px: { xs: 2, sm: 4, md: 8 },
                    py: { xs: 5, md: 10 },
                }}
            >
                <Card
                    sx={{
                        width: '100%',
                        borderRadius: 3,
                        boxShadow: 3,
                    }}
                >
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
                                backgroundColor: '#f5f5f5',
                                p: { xs: 3, md: 6 },
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

                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ mb: 3 }}
                            >
                                rjbypubuddishamila@gmail.com
                            </Typography>

                            <Typography variant="h6" fontWeight="bold">
                                Phone
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ mb: 3 }}
                            >
                                +94 778549570
                            </Typography>

                            <Typography variant="h6" fontWeight="bold">
                                Address
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                23, St. Servatius Rd, Matara 81000, Sri Lanka
                            </Typography>
                        </Box>

                        {/* Contact Form */}
                        <CardContent
                            sx={{
                                width: { xs: '100%', md: '60%' },
                                p: { xs: 3, md: 6 },
                            }}
                        >
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                sx={{ mb: 3 }}
                            >
                                Send Us a Message
                            </Typography>

                            <Box
                                component="form"
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 2,
                                }}
                            >
                                <TextField
                                    label="Name"
                                    fullWidth
                                />

                                <TextField
                                    label="Email"
                                    type="email"
                                    fullWidth
                                />

                                <TextField
                                    label="Subject"
                                    fullWidth
                                />

                                <TextField
                                    label="Message"
                                    multiline
                                    rows={5}
                                    fullWidth
                                />

                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{ alignSelf: 'flex-start', backgroundColor: '#bb8f08', color: 'rgb(11, 12, 12)' }}
                                >
                                    Send Message
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

