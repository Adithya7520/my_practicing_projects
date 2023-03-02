import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function Body(props) {
  const[text,setText] = useState('');
  const handletext =(e)=>{
    setText(e.target.value);
  }


const handleUpClick = () =>{
  let new_text = text.toUpperCase();
setText(new_text);
}
const handleLowClick = () =>{
  let low_text = text.toLowerCase();
  setText(low_text);
}
const handleClearClick = () =>{
  setText("");
}

useEffect(()=>{
  console.log("inside effect")
},[handleUpClick])

  return (
    <div>
    <div className='container '>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{props.heading}</Form.Label>
        <Form.Control type="textarea" value={text} onChange={handletext} placeholder={props.placeholder} />
      </Form.Group>
    </Form>
    <Button className='btn btn-primary my-1' onClick={handleUpClick}>Upper-Case</Button>
    <Button className='btn btn-primary my-1 mx-2' onClick={handleLowClick}>Lower-Case</Button>
    <Button className='btn btn-primary my-1 mx-2' onClick={handleClearClick}>Clear</Button>
    
   
    </div>
    <div className="container my-3">
     <h1>Your text summary</h1>
     <p>{text.split(" ").length-1} words and {text.length} characters</p>
     {/* 0.008 because  if 125 words take 1 minutes then we calculate 1/125 which is 0.008 */}
     <p>Number of Minutes to complate the Reading is {0.008 * text.split(" ").length}</p>
     <h3>Preview</h3>
     <p>{text}</p>
    </div>
    </div>
  )
}
