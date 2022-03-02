import { Title } from '@mui/icons-material';
import React,{useState} from 'react'
import {Button,Modal,Form} from 'react-bootstrap';
const Add = ({handleFilm}) => {
    const [show, setShow] = useState(false);
     const[title,setTitle] = useState("")
     const[rating,setRating] = useState(0)
     const[synopsis,setSynopsis] = useState("")
     const[posterurl,setPosterurl] = useState("")
     const [trailer,setTrailer]= useState("")
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
     
      <>
        <Button  className='addb' variant="primary" onClick={handleShow}>
          Add Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body><Form>
  <Form.Group className="mb-3" >
    <Form.Label>Film Name</Form.Label>
    <Form.Control type="texte" placeholder="Enter name" onChange={(e)=>setTitle(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Synopsis</Form.Label>
    <Form.Control type="texte" placeholder="Enter synopsis" onChange={(e)=>setSynopsis(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Rating</Form.Label>
    <Form.Control type="number" placeholder="Enter rating" onChange={(e)=>setRating(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>ImageURL</Form.Label>
    <Form.Control type="texte" placeholder="Enter URL"  onChange={(e)=>setPosterurl(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Film Trailer</Form.Label>
    <Form.Control type="texte" placeholder="Enter trailer Url" onChange={(e)=>setTrailer(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  
  
  
</Form></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{ handleFilm ({title,synopsis,rating,posterurl,trailer,id: Math.random()});handleClose()}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      
    );
}

export default Add