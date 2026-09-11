import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#f5f5f5',
                color: '#020202',
                mt: 'auto',
                py: 5,
                minHeight: 250,
            }}
        >
            <Container 
                maxWidth={false} sx={{ px: { xs: 2, md: 6 } }}
            >

                {/* Main Footer Content */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        minHeight: 140,
                    }}
                >
                    {/* Social Links - Left */}
                    <Box>
                        <Typography
                            variant="subtitle1"
                            fontWeight="bold"
                            sx={{ mb: 1 }}
                        >
                            Follow Us
                        </Typography>

                        <Stack
                            direction="row"
                            spacing={1}
                        >
                            <IconButton
                                component="a"
                                href="#"
                                aria-label="Facebook"
                            >
                                <FacebookIcon />
                            </IconButton>

                            <IconButton
                                component="a"
                                href="#"
                                aria-label="Instagram"
                            >
                                <InstagramIcon />
                            </IconButton>

                            <IconButton
                                component="a"
                                href="#"
                                aria-label="LinkedIn"
                            >
                                <LinkedInIcon />
                            </IconButton>

                            <IconButton
                                component="a"
                                href="#"
                                aria-label="Instagram"
                            >
                                <InstagramIcon />
                            </IconButton>
                        </Stack>
                    </Box>

                    {/* Application Details - Right */}
                    <Box
                        sx={{
                            textAlign: 'right',
                            maxWidth: 450,
                        }}
                    >
                        <Typography
                            variant="h6"
                            fontWeight="bold"
                            sx={{ mb: 1 }}
                        >
                            RJ
                        </Typography>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            A simple and reliable application designed to
                            make your everyday tasks easier. Follow us for
                            updates, news and more.
                        </Typography>
                    </Box>
                </Box>

                {/* Divider */}
                <Divider sx={{ mb: 2 }} />

                {/* Copyright - Bottom Left */}
                <Typography
                    variant="body2"
                    color="text.secondary"
                >
                    © {new Date().getFullYear()} RJ.
                    All rights reserved.
                </Typography>

            </Container>
        </Box>
    );
};

export default Footer;

