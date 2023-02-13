import React from 'react'
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

export default function Home() {
  return (
    <>
    <div>
    <div className=' container my-4'>
     <h1 className='my-4 text-center lead'> Public Live Chat</h1>
     <div className='chat-rooms mb-3 text-center'>
        <div className='my-2'> Choose a ChatRoom  </div>
        <Button className='btn' id='general' variant="success">#general</Button>
        <Button className='btn' id='game' variant="success">#game</Button>
        <Button className='btn' id='music' variant="success">#music</Button>
        <Button className='btn' id='tech' variant="success">#tech</Button>
     </div>
   
    <div className='chat-windows'>
      <ul className='chat-list list-group'> </ul>
    </div>

    {/* <Form>
      <div className='input-group'>
        <div className='input-group prepend'>
          <div className='input-group-text'>You message: </div>
        </div>
      </div>
      <InputGroup className='form-control' id='message' required>
        <div className='input-group-append'></div>
        <Button type= 'submit'className='btn'>send</Button>
      </InputGroup>
    </Form> */}

    <form>
      <div className='new-chat my-3'>
        <div className='input-group'>
          <div className='input-group prepend'>
            <div className='input-group-text'> Your message:</div>
          </div>
          <input id='message' className='form-control' type='text' required/>
          <div className='input-group-append'>
            
            <Button variant="success" type='submit' className='btn'>send</Button>
          </div>
        </div>

      </div>
    </form>

    <form>
      <div className='new-name my-3'>
        <div className='input-group'>
          <div className='input-group prepend'>
            <div className='input-group-text'> Update name: </div>
          </div>
          <input id='message' className='form-control' type='text' required/>
          <div className='input-group-append'>
            <Button variant="success" type='submit' className='btn'>Update</Button>
          </div>
        </div>

      </div>
      <div className='update-mssg'></div>
    </form>
    </div>
    </div>
    </>
  )
}
