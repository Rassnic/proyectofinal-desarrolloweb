import React, { useState } from 'react';
import { storage, db } from "../firebase"
import { TextField, Button } from '@material-ui/core'
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import 'firebase/compat/storage';



function AddPost({ username }) {
    // const [image, setImage] = useState(null);
    const [image, setImage] = useState(null);
    const [caption, setCaption] = useState('');
    const [progress, setProgress] = useState(0);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);            
        }
    };

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                console.log(error);
                alert(error.message);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        db.collection("posts").add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: caption,
                            imageURL: url,
                            userName: username
                        })
                    })

            }
        )
        setCaption(' ')
        setImage(null)
    }
    return (
        < div className="imagesupload">


            <h2 style={{ textAlign: 'center', margin: '15px' }}>Nuevo Post</h2>


            <input id='subir' className='file-input' type="file" onChange={handleChange} />
            <br />&nbsp;<br />          
            <TextField style={{color: 'white', backgroundColor:'#CFCFD1'}} id="filled-basic" label="Agrega un Comentario ..." variant="filled" onChange={event => setCaption(event.target.value)} value={caption} />
            <br />

            < progress className="progress" value={progress} max="100" />
            <Button variant="contained" color='primary' onClick={handleUpload}>
                Agregar Post
            </Button>



        </div>
    )
}

export default AddPost
