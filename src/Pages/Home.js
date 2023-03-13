import {useState,useEffect} from "react";
import { getAuth} from "firebase/auth"
import { db } from "../firebase";
import Navbar from '../Components/Navbar';
import  Offcanvas from '../Components/Offcanvas';
import '../Home.css';
import { AiFillStar } from 'react-icons/ai';
import {FaTrash} from "react-icons/fa";
import {
  collection,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
export default function Home() {
    
    const auth = getAuth();
    const [note, setNote] = useState([{id:"initial"}]);
    useEffect(() => 
       onSnapshot(collection(db,auth.currentUser.email),(snapshot) =>
        setNote(snapshot.docs.map((doc) => ({ ...doc.data(),id:doc.id})))
       ),
    []);

    const handleDelete = async (id) =>{
        await deleteDoc(doc(db, auth.currentUser.email ,id));
    };

    const toggleStar = async (notes) =>{
        await updateDoc(doc(db,auth.currentUser.email ,notes.id),{starred:!notes.starred });
        
    };
    console.log("home");
    return(
        <div>
            <Navbar />
            <Offcanvas />
            <div className="dispNotes">
                {note.map((notes) => (
                     <div className="dispSingleNotes" key={notes.id}>
                      
                            <h3>{notes.title}</h3>
                            <p>{notes.notes}</p>

                        <div className="star" onclick = {() => toggleStar(notes)}>
                            {/* <Button onClick = {() => toggleStar(notes)} > STAR</Button> */}
                             <AiFillStar roundedcircle size={15} />
                             
                        </div>

                         <div className="del" onClick = {() => handleDelete(notes.id)}> 
                            <FaTrash size={15} />
                        </div>

                    </div>
                 ))}
            </div>
        </div>
    );
};
