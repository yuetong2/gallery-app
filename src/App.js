import { useState } from "react";
import Modal from "./components/Modal"
import UploadImage from "./components/UploadImage";
import Image from "./components/Image"
import '../src/style.css'

import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { storage, db } from "./firebase/firebase"
import { addDoc, collection } from "firebase/firestore";


function App() {
const [openModal, setOpenModal] = useState(false)
const [modalType, setModalType] = useState()

const [uploading, setUploading] = useState(false);
const [progress, setProgress] = useState()

 const [file, setFile] = useState({
  file: null,
  error:"",
 })

const uploadImage = ()=>{
  console.log('uploading...')
  setUploading(true)
  setModalType('uploading')
  setOpenModal(true)

  const storageRef = ref(
    storage,
   `images/${new Date().getTime()}_${file.file.name}`
);

const collectionRef = collection(db, "images/");

const uploadImage = uploadBytesResumable(storageRef, file.file);

uploadImage.on('state_changed',(snapshot)=>{
  const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
  setProgress(progress);
}, (error)=>console.log(error, 'firebase error'),
 ()=>{
 getDownloadURL(uploadImage.snapshot.ref).then(async(downloadUrl)=>{
    await addDoc(collectionRef, {url:downloadUrl});
    setUploading(false);
})
})


}

  return (
    <div className="container mx-auto lg:px-10 my-10">
      <Modal
      open={openModal}
      close={() => setOpenModal(false)}
      type = {modalType}
      filename ={file.file && file.file.name}
      uploadImage={()=>uploadImage()}
      uploading={uploading}
      progress={progress}
      />

    <UploadImage 
    file={file}
     setFile={setFile} 
     openModal={()=>setOpenModal(true)}
     type={()=>setModalType('upload')}
     />
    <Image/>

    </div>

)
}

export default App;