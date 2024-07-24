import React from "react"
import ReactDom from 'react-dom'
import { XIcon } from "@heroicons/react/outline";
import UploadModal from "./UploadModal";
import UploadingModal from "./UploadingModal";

const Modal =({open, close, type, filename, uploadImage, uploading, progress})=>{
 
    if(!open) return null;
const onClose=()=>{
    close()
    document.body.style.overflow ='auto'
}

if(open){
    document.body.style.overflow='hidden';
}

    const handleLayoutClick = (e)=>{
        if(e.target.classList.contains('layout')){
            onClose();
        }
    }

const modalContent = 
type === "upload"? (
<UploadModal
 filename ={filename}
  close={onClose}
   uploadImage={uploadImage}
   /> 
): 
    type==='uploading' ? (
    <UploadingModal uploading ={uploading} progress={progress}/>
    ):( 
    <p>other</p>
)

    if(uploading == false && type === 'uploading'){
        onClose();
        return null;
    }

    return ReactDom.createPortal(
        <div onClick={handleLayoutClick}>
        <Layout/>

    <div className = "absolute top-1/2 left-1/2 z-50 p-5 -translate-x-1/2 bg-white rounded-md">
    <div className = "flex justify-end ">
        <XIcon className ="w-5 hover: text- gray-400 cursor-pointer" onClick={onClose}/>
    </div>
    <div className="mt-5">
        {modalContent}
    </div>
</div>

    </div>,
    document.getElementById('portal'));
};

const Layout = ()=>{
    return (<div className ="absolute inset-0 bg-black opacity-50 z-40 layout"></div>)
}

export default Modal;