import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const AboutDetail = () => {
    return (
        <Box sx={{ display: 'block' }}>
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
                            alignItems: 'stretch',
                        }}
                    >
                        {/* Image */}
                        <Box
                            component="img"
                            src="/images/image1.jpg"
                            alt="About us"
                            sx={{
                                width: { xs: '100%', md: '50%' },
                                height: { xs: 300, md: 450 },
                                objectFit: 'cover',
                                display: 'block',
                            }}
                        />

                        {/* Content */}
                        <CardContent
                            sx={{
                                width: { xs: '100%', md: '50%' },
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                p: { xs: 3, md: 6 },
                            }}
                        >
                            <Typography
                                variant="overline"
                                color="primary"
                                fontWeight="bold"
                            >
                                About Us
                            </Typography>

                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                sx={{ mb: 2 }}
                            >
                                We Make Every Experience Better
                            </Typography>

                            <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{ mb: 2, lineHeight: 1.8 }}
                            >
                                Welcome to our application. We are focused on
                                creating a simple, reliable, and enjoyable
                                experience for our users.
                            </Typography>

                            <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{ mb: 3, lineHeight: 1.8 }}
                            >
                                Our goal is to bring useful features together
                                in one place while keeping everything easy to
                                understand and simple to use.
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
            </Container>

            {/* What We Provide */}
            <Box sx={{ py: 8 }}>
                <Container
                    maxWidth={false}
                    sx={{ px: { xs: 2, sm: 4, md: 8 } }}
                >
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        sx={{ mb: 4 }}
                    >
                        What We Provide
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 3,
                        }}
                    >
                        {[
                            {
                                image: '/images/image1.jpg',
                                title: 'Quality Service',
                                description:
                                    'Reliable and high-quality services designed around your needs.',
                            },
                            {
                                image: '/images/image2.jpg',
                                title: 'Easy Experience',
                                description:
                                    'Simple, clear and easy-to-use solutions for everyone.',
                            },
                            {
                                image: '/images/image3.jpg',
                                title: 'Modern Solutions',
                                description:
                                    'Modern technologies and practical solutions for better experiences.',
                            },
                            {
                                image: '/images/image4.jpg',
                                title: 'Customer Support',
                                description:
                                    'Helpful and friendly support whenever you need it.',
                            },
                        ].map((item) => (
                            <Card
                                key={item.title}
                                sx={{
                                    flex: {
                                        xs: '1 1 100%',
                                        sm: '1 1 calc(50% - 12px)',
                                        md: '1 1 calc(25% - 18px)',
                                    },
                                    borderRadius: 3,

                                     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: 6,
                                    },
                                }}
                            >
                                <Box
                                    component="img"
                                    src={item.image}
                                    alt={item.title}
                                    sx={{
                                        width: '100%',
                                        height: 220,
                                        objectFit: 'cover',
                                        display: 'block',
                                    }}
                                />

                                <CardContent>
                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                        sx={{ mb: 1 }}
                                    >
                                        {item.title}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        lineHeight={1.7}
                                    >
                                        {item.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default AboutDetail;