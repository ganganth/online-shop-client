import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

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
                            sx={{ mb: 2, color: '#bb8f08', fontWeight: 'bold', fontStyle: 'italic', fontSize: '0.9rem'}}
                        >
                            Your story awaits, follow us..
                        </Typography>

                        <Stack
                            direction="row"
                            spacing={1}
                        >
                            <IconButton
                                component="a"
                                href="https://www.facebook.com/RJbyPubuddiShamila/"
                                aria-label="Facebook"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FacebookIcon/>
                            </IconButton>

                            <IconButton
                                component="a"
                                href="https://www.instagram.com/rjbypubuddishamila/?hl=en"
                                aria-label="Instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <InstagramIcon/>
                            </IconButton>

                            <IconButton
                                component="a"
                                href="https://www.linkedin.com/in/rj-by-pubuddi-shamila-b19855437/"
                                aria-label="LinkedIn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LinkedInIcon/>
                            </IconButton>

                            <IconButton
                                component="a"
                                href="https://x.com/RJbyPubudd"
                                aria-label="Twitter"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <TwitterIcon/>
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
                            variant="body1"
                            color="text.secondary"
                            sx={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: '0.9rem' }}
                        >
                            A little beauty into your world by
                            embroidering modern tradition with alluring authenticity...
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

