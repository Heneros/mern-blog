
// import React, { useEffect, useState } from 'react'


// export default function CreatePost() {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [imageUrl, setImageUrl] = useState('');




//   const onSubmit = (e) => {
//     e.preventDefault();

//   }
//   const [count, setCount] = useState(0);
//   const [calculation, setCalculation] = useState(0);

//   useEffect(() => {
//     setCalculation(() => count * 2);
//   }, [count]);

//   return (
//     <>
//       You clicked {count} times.
//       <button
//         onClick={() => setCount((c) => c + 1)}
//         type="button" data-bs-target="#addPostModal" data-toggle="modal" data-target="#addPostModal" className="btn btn-primary">
//         Add Post
//       </button>
//       <div className="modal fade" id="addPostModal" role="dialog" aria-labelledby="addPostModalLabel" aria-hidden="true">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="addPostModalLabel">Add Post</h5>
//               <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div className="modal-body">
//               <form onSubmit={onSubmit}>
//                 <div className='mb-3'>
//                   <label className='form-label'>
//                     Name
//                   </label>
//                   <input
//                     type='text'
//                     className='form-control'
//                     id='name'
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                   />
//                 </div>
//                 <div className='mb-3'>
//                   <label className='form-label'>
//                     Description
//                   </label>
//                   <input
//                     type='text'
//                     className='form-control'
//                     id='description'
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                   />
//                 </div>
//                 <div className='mb-3'>
//                   <label className='form-label'>
//                     ImageUrl
//                   </label>
//                   <input
//                     type='text'
//                     className='form-control'
//                     id='imageUrl'
//                     value={imageUrl}
//                     onChange={(e) => setImageUrl(e.target.value)}
//                   />
//                 </div>
//                 <button type='submit' data-bs-dismiss="modal" className='btn btn-secobdary'>
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
