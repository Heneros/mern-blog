import { Link } from 'react-router-dom';


export const BlogPost = ({
    id,
    title,
    text,
    imageUrl
}) => {
    return (
        <>
            <article className="post">
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
            </article>
        </>
    )
}




