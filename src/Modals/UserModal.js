// import React from 'react'
// import {Modal,Button, ModalHeader} from 'react-bootstrap'
// import { useState } from 'react'
// import '../component/css/Style.css'

// export default function UserModal()
//  {
//     const[show,setshow] = useState(false);
//     const handleclose = () =>setshow(false);
//     const handleshow = () =>setshow(true);


// //to handle multiple input fields

// const initialValues = {
//     name1:"",
//     name2:"",
//     name3:"",
//     name4:"",
//     name5:"",
//     name6:"",
//     name7:"",
//     name8:"",
//     name9:""
// };

// const[values,setvalues]=useState(initialValues);
// const handleInputChange = (e) =>{
//   const{name,value}=e.target;
//   setvalues({...values,[name] : value,})
 

// }
// const adduser = () =>{
//     //console.log(name);
//     console.log(values.name9)
// }


//   return (
//     <>
//     <Button className='btn btn-primary-outline btn-inline' type='button' onClick={handleshow}>AddUser</Button>
//       <Modal size='lg' show={show} 
//       onHide={handleclose}
//       keyboard={true}centered>
//         <span><Modal.Header className='modalclose'>X</Modal.Header></span>
//             <Modal.Title className='modalTitle'>Add the user Details</Modal.Title>
   
//         <Modal.Body >
//             <form className='modalBody'>
// <div className="1">
//             <label className='label'>User Name</label>
//             <input 
//             onChange={handleInputChange}
//             value={values.name1}
//             name="name1"
//              className='textbox' 
//              type='text'   
//              placeholder='Name'></input><br></br>
//              </div>
// <div className="2">
//             <label className='label'>User Email</label>
//             <input
//             onChange={handleInputChange}
//             value={values.name2}  
//             name="name2"
//             className='textbox' 
//             type='text' 
//             placeholder='Name'></input><br></br>
//             </div>
// <div className="2">
//             <label className='label'>User Number</label>
//             <input 
//             onChange={handleInputChange}
//             value={values.name3} 
//             name="name3" 
//             className='textbox'
//             type='text' 
//             placeholder='Name'></input><br></br>
//             </div>
// <div className="2">
//             <label className='label'>User Address</label>
//             <input 
//             onChange={handleInputChange} 
//             value={values.name4}
//             name="name4"
//             className='textbox' 
//             type='text' 
//             placeholder='Name'></input><br></br>
//             </div>
// <div className="2">
//             <label className='label'>User x</label><br></br>
//             <input
//             onChange={handleInputChange}
//             value={values.name5}  
//             name="name5" 
//             className='textbox'
//             type='text' 
//             placeholder='Name'></input>
//             </div>
// <div className="2">
//             <label className='label'>User y</label><br></br>
//             <input 
//             onChange={handleInputChange}
//             value={values.name6} 
//             name="name6"
//             className='textbox'
//             type='text' 
//             placeholder='Name'></input><br></br>
//             </div>
// <div className="2">
//             <label className='label'>User z</label><br></br>
//             <input 
//             onChange={handleInputChange}
//             value={values.name7}
//              name="name7"
//              className='textbox'
//              type='text' 
//              placeholder='Name'></input><br></br>
//              </div>
// <div className="2">
//             <label className='label'>User A</label>
//             <input 
//             onChange={handleInputChange}
//             value={values.name8}
//             name="name8" 
//             className='textbox' 
//             type='text' 
//             placeholder='Name'></input><br></br>
//             </div>
// <div className="2">
//             <label className='label'>User B</label>
//             <input 
//             onChange={handleInputChange}
//             value={values.name9}
//              name="name9" 
//              className='textbox'
//               type='text'
//                placeholder='Name'></input><br></br>
//                </div>
//             </form>
//         </Modal.Body>
//         <Modal.Footer>
//             <Button onClick={adduser}>Add User</Button>
//             <Button onClick={handleclose}>close</Button>
//         </Modal.Footer>
//       </Modal>
//       </>
//   )
// }
