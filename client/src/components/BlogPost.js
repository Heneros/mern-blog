import { Link } from 'react-router-dom';



import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box, Paper } from '@mui/material';


export const BlogPost = ({
    id,
    title,
    text,
    imageUrl
}) => {
    return (
        <>
            <Grid sx={{ mt: 7 }} item xs={12} md={6}>
                <Paper
                    sx={{
                        position: 'relative',
                        backgroundColor: 'grey.800',
                        color: '#fff',
                        mb: 4,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundImage: `url(${imageUrl})`,
                    }}
                >
                    <Link to={`/posts/${id}`}  >
                        <Grid container>
                            <Grid item md={6}>
                                <Box
                                    sx={{
                                        position: 'relative',
                                        p: { xs: 3, md: 6 },
                                        pr: { md: 0 },
                                    }}
                                >
                                    <Typography component="h1" variant="h3" gutterBottom>
                                        {title}
                                    </Typography>
                                    <Typography variant="h5" color="inherit" paragraph>
                                        {/* {text} */}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Link>
                </Paper>

            </Grid >
        </>
    )
}




