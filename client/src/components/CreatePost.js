import React, { useState } from 'react'

export default function CreatePost() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    alert(123);
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
