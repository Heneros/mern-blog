import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { ADD_POST } from '../graphql/mutations';
import { GET_POST, GET_POSTS } from '../graphql/queries';

export default function CreatePost() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const [addPost] = useMutation(ADD_POST, {
    variables: { name, description, imageUrl },
    update(cache, { data: { addPost } }) {
      const { posts } = cache.readQuery({ query: GET_POSTS });
      cache.writeQuery({
        query: GET_POSTS,
        data: { posts: [...posts, addPost] },
      });
    }
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name, description, imageUrl);

    if (name === '' || description === '' || imageUrl === '') {
      return alert("Empty Fields");
    }

    addPost(name, description, imageUrl);

    setName('');
    setDescription('');
    setImageUrl('');
  }
  return (
    <>
      <button type="button" data-bs-target="#addPostModal" data-toggle="modal" data-target="#addPostModal" className="btn btn-primary">
        Add Post
      </button>
      <div className="modal fade" id="addPostModal" role="dialog" aria-labelledby="addPostModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addPostModalLabel">Add Post</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
                <div className='mb-3'>
                  <label className='form-label'>
                    Name
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label className='form-label'>
                    Description
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label className='form-label'>
                    ImageUrl
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='imageUrl'
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                </div>
                <button type='submit' data-bs-dismiss="modal" className='btn btn-secobdary'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
