
import {useState,useEffect} from "react";
import {Form} from "react-bootstrap";
import '../AddNotes.css';
import { getAuth} from "firebase/auth"
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import Navbar from '../Components/Navbar';
import  Offcanvas from '../Components/Offcanvas';

export default function AddNotes() {

  // console.log("AddNotes");
   const auth = getAuth();
    // console.log("AddNotes");
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title !== "" && notes !== "") {
      await addDoc(collection(db, auth.currentUser.email), {
        title,notes,
        starred:false,
      });
      
      setTitle("");
      setNotes("");
    }
  };
  
  console.log("eof");
  return (
    <>
    <div><Navbar /> </div>
   
    <div><Offcanvas /></div>
    
    <Form onSubmit={handleSubmit}> 
    
      
      <div className="Common AddNotes">
      <div className="add-main">
        <input
          type="text"
          placeholder="Title.."
          value={title}
         onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="notePreview">
        <textarea 
          placeholder="Write down you note here.." 
          value={notes} 
          onChange={(e) => setNotes(e.target.value)}
           />
      </div>
      <div className="icon">
        <button type="submit">Add</button>
      </div>
      </div>
    </Form>
   
   
    </>
  );
};