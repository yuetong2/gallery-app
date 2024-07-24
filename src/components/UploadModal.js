import React from 'react'

const UploadModal = ({filename, close, uploadImage}) => {
  return (<div>
    <p>Are you sure you want to upload this image</p>
    <p className="mt-5 text-indigo-900 font-medium">{filename}</p>
  
    <div className="mt-5 text-right space-x-5">
    <button className="px-5 py-3 rounded-md bg-gray-100 hover:bg-gray-200" 
    onClick={()=>close()}>
            no 
        </button>
         <button className="px-5 py-3 rounded-md bg-sky-800 hover:bg-sky-200"
         onClick={()=>{
            close();
            uploadImage();
         }}>
            yes 
        </button>
    </div>
  
  
  </div>
  )
}

export default UploadModal