import React, { useState } from 'react'
import Avatar from './Avatar'
import { storage } from '../firebase'
import { useForm } from "react-hook-form";

export default function Uploader() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");

  const { register } = useForm();

  const handChange = e => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file["type"];
      const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
      if (validImageTypes.includes(fileType)) {
        setError("");
        setImage(file);
      } else {
        setError("Please select an image to upload");
      }
    }
  };

  const handleUpdate = () => {
    if (image) {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);

      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        error => {
          setError(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              setUrl(url);
              setProgress(0);
            });
        }
      );
    } else {
      setError("Error please choose an image to upload");
    }
  };

  return (
    <div>
      <div>
        {url ? (
          <img src={url} alt="logo" height="100px" width="100px" />
        ) : (
            <Avatar />
          )}
        <input type="file" onChange={handChange} onClick={handleUpdate} ref={register} />{" "}

      </div>
      <div style={{ height: "100px" }}>
        {progress > 0 ? <progress value={progress} max="100" /> : ""}
        <p style={{ color: "red" }}>{error}</p>
      </div>
    </div>
  );
}










    // const uploadedImage = React.useRef(null);
    // const imageUploader = React.useRef(null);

    // const handleImageUpload = (e) => {
    //   const [file] = e.target.files;
    //   if (file) {
    //     const reader = new FileReader();
    //     const { current } = uploadedImage;
    //     current.file = file;
    //     reader.onload = (e) => {
    //       current.src = e.target.result;
    //     };
    //     reader.readAsDataURL(file);
    //   }
    // };




  // <div
  //   style={{
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     justifyContent: "center"
    //   }}
    // >
    //   <input
    //     type="file"
    //     accept="image/*"
    //     onChange={handleImageUpload}
    //     ref={imageUploader}
    //     style={{
    //       display: "none"
    //     }}
    //   />
    //   <div
    //     style={{
    //       height: "85px",
    //       width: "87px",
    //       marginTop: "-98px",
    //       marginLeft: '85px',
    //       border: "1px none"
    //     }}
    //     onClick={() => imageUploader.current.click()}
    //   >
    //     <img
    //       ref={uploadedImage}
    //       style={{
    //         width: "100%",
    //         height: "100%",
    //       }}
    //       alt=""
    //     />
    //   </div>

   // </div>