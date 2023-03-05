import { Link } from 'react-router-dom';


import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export const BlogPost = ({
    id,
    title,
    text,
    imageUrl
}) => {
    return (
        <>
            <Grid item xs={12} md={6}>
                <CardActionArea component="a" href="#">
                    <div className="post-header" >
                        <h2 className="post-title"><a href={`/posts/${id}`}>{title}</a></h2>
                    </div>
                    <div className="post-preview" >
                        <Link to={`/posts/${id}`}>
                            <img src={imageUrl} alt="" className="img-fluid rounded" /></Link>
                    </div>
                    <div className="post-content" >
                        <p>
                            {text}
                        </p>
                    </div>
                    <div className='bottom-post'>
                        <Link to={`/posts/${id}`} className="btn btn-outline-custom">Read More</Link>
                    </div>
                </CardActionArea>
            </Grid>
        </>
    )
}




