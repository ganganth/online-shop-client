import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

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
                            component="video"
                            src="/videos/ThemeVideo.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            sx={{
                                width: { xs: '100%', md: '35%' },
                                height: { xs: 300, md: 500 },
                                objectFit: 'cover',
                                display: 'block',
                            }}
                        />

                        {/* Content */}
                        <CardContent
                            sx={{
                                width: { xs: '100%', md: '65%' },
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                p: { xs: 3, md: 6 },
                            }}
                        >
                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                sx={{ mb: 2 }}
                            >
                                Where Every Stitch Becomes a Memory….
                            </Typography>

                            <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{ mb: 2, lineHeight: 1.8, textAlign: 'justify' }}
                            >
                                RJ stands for Revitalizing Jewel a name inspired by the belief that tradition is not something to simply preserve, but something to continually rediscover, reinterpret, and bring to life.
                            </Typography>

                            <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{ mb: 3, lineHeight: 1.8, textAlign: 'justify' }}
                            >
                                RJ by Pubuddi Shamila embraces the beauty of authentic craftsmanship while giving traditional artistry a contemporary soul. Our aesthetic is graceful yet expressive, luxurious yet intimate, traditional yet unmistakably modern. Every design is created to evoke emotion the feeling of discovering something beautiful, the memory of a special moment, and the dream of becoming something extraordinary.
                                RJ is not simply about fashion or adornment, it is about the stories embroidered into them to Wear a Story…..
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
            </Container>

            {/* What We Provide */}
            <Box sx={{ py: 4 }}>
                <Container
                    maxWidth={false}
                    sx={{ px: { xs: 2, sm: 4, md: 8 } }}
                >
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        sx={{ mb: 2 }}
                    >
                        Craftsmanship
                    </Typography>

                    <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        sx={{ mb: 4, color: '#bb8f08' }}
                    >
                        Every Stitch Holds a Story….
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
                                image: '/images/other/1.jpeg',
                                title: 'The unexpected stitch',
                                description:
                                    'Embroidery is more than decoration and it is an art of patience, precision, and emotion.',
                            },
                            {
                                image: '/images/other/7.jpeg',
                                title: 'The delicate texture',
                                description:
                                    'Intricate details are thoughtfully developed to create depth, movement, texture, and character.',
                            },
                            {
                                image: '/images/other/8.jpeg',
                                title: 'The quiet shimmer',
                                description:
                                    'Modern technologies and practical solutions for better experiences.',
                            },
                            {
                                image: '/images/other/5.jpeg',
                                title: 'The finishing touches',
                                description:
                                    'Traditional techniques meet contemporary sensibilities, allowing each piece to carry the soul of its inspiration. ',
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

            {/* What about us */}
            <Box sx={{ py: 4 }}>
                <Container
                    maxWidth={false}
                    sx={{ px: { xs: 2, sm: 4, md: 8 } }}
                >
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        sx={{ mb: 4 }}
                    >
                        What About Us
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 3,
                        }}
                    >
                        <Card
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
                            <CardContent>
                                <Typography
                                    variant="h6"
                                    fontWeight="bold"
                                    sx={{ mb: 1, color: '#bb8f08' }}
                                >
                                    The RJ her
                                </Typography>

                                <Typography
                                    variant="subtitle2"
                                    color="text.secondary"
                                    lineHeight={1.7}
                                    sx={{ textAlign: 'justify', mb: 2 }}
                                >
                                    Graceful. Individual. Unforgettable...
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    lineHeight={1.7}
                                    sx={{ textAlign: 'justify', mb: 2 }}
                                >
                                    She does not simply follow tradition. She gives it a new expression. The RJ woman appreciates authenticity, celebrates individuality, and finds beauty in the detail’s others may overlook. She carries her heritage with pride and her dreams with confidence. 
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    lineHeight={1.7}
                                    sx={{ textAlign: 'justify' }}
                                >
                                    Her elegance is not defined by what is expected of her.{' '} 
                                    <Box component="span" sx={{ fontWeight: 'bold' }}>It is defined by who she chooses to become.</Box>{' '}
                                    RJ is created for her. 
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card
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
                            <CardContent>
                                <Typography
                                    variant="h6"
                                    fontWeight="bold"
                                    sx={{ mb: 1, color: '#bb8f08' }}
                                >
                                    Founder & creative designer
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    lineHeight={1.7}
                                    sx={{ textAlign: 'justify', mb: 2 }}
                                >
                                    Behind RJ is Pubuddi Shamila, whose vision is rooted in a deep appreciation for artistry, authenticity, and the emotional language of design. Through RJ, Pubuddi brings together the romance of traditional craftsmanship and the allure of contemporary luxury.
                                </Typography>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: 2,
                                        mb: 2,
                                    }}
                                >
                                    <Avatar
                                        src="/images/owner.jpeg"
                                        alt="RJ"
                                        sx={{
                                            width: 120,
                                            height: 120,
                                            flexShrink: 0,
                                        }}
                                    />

                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        lineHeight={1.7}
                                        sx={{ textAlign: 'justify' }}
                                    >
                                        With RJ, each creation becomes an opportunity to preserve a feeling,
                                        celebrate a heritage, and transform a dream into something tangible.
                                    </Typography>
                                </Box>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    lineHeight={1.7}
                                    sx={{ textAlign: 'justify' }}
                                >
                                    Her creative philosophy is simple yet profound: Beauty becomes meaningful when it carries a story.
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card
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
                            <CardContent>
                                <Typography
                                    variant="h6"
                                    fontWeight="bold"
                                    sx={{ mb: 1, color: '#bb8f08' }}
                                >
                                    Our philosophy
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    lineHeight={1.7}
                                    sx={{ textAlign: 'justify', mb: 2 }}
                                >
                                    Luxury That Feels Personal...
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    lineHeight={1.7}
                                    sx={{ textAlign: 'justify', mb: 2 }}
                                >
                                    At RJ, luxury is not defined solely by extravagance. It is found in authenticity in craftsmanship. It is found in the time invested into something beautiful. And most importantly, it is found in how something makes you feel. We create with the belief that the most precious pieces are those that become part of your memories the pieces you remember wearing, the moments they accompanied, and the emotions they awakened. Because the finest luxury is not merely seen. It is felt.
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card
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
                            <CardContent>
                                <Typography
                                    variant="h6"
                                    fontWeight="bold"
                                    sx={{ mb: 1, color: '#bb8f08' }}
                                >
                                    Authenticity
                                </Typography>

                                 <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    lineHeight={1.7}
                                    sx={{ textAlign: 'justify', mb: 2 }}
                                >
                                    Honouring What Makes Us Different...
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    lineHeight={1.7}
                                    sx={{ textAlign: 'justify', mb: 2 }}
                                >
                                    In a world of endless repetition, authenticity is a luxury of its own. RJ celebrates distinctive craftsmanship, meaningful design, and the individuality of every wearer. We honour the roots of traditional artistry while allowing it to evolve naturally. Not recreating the past. Reimagining it.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default AboutDetail;