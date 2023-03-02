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



//   return (
//     <>
//     <Button className='btn btn-primary-outline btn-inline' type='button' onClick={handleshow}>Todo</Button>
//       <Modal size='lg' show={show} 
//       onHide={handleclose}
//       keyboard={true}centered>
//         <span><Modal.Header className='modalclose'>X</Modal.Header></span>
//             <Modal.Title className='modalTitle'>Todo list</Modal.Title>
   
//         <Modal.Body >
//             <form className='modalBody'>
//          <div className="Adddata">
//             <label className='label'>Enter the Data</label>
//             <input 
            
            
//             name="name1"
//              className='textbox' 
//              type='text'   
//              placeholder='Name'></input><br></br>
//                 <Button onClick={adduser}>Add User</Button>
//              </div>
//             </form>
//         </Modal.Body>
//         <Modal.Footer>
         
//             <Button onClick={handleclose}>close</Button>
//         </Modal.Footer>
//       </Modal>
//       </>
//   )
// }
