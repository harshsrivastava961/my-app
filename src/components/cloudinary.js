import React from "react";
import { useState } from "react";

const Cloudinary = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "malikasedit");
    setLoading(true);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/df6sm7hl6/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(file, "hello");
    setImage(file.secure_url);
    setLoading(false);
  };

  return (
    <div>
      <h2>Upload a file</h2>
      <input
        type="file"
        name="file"
        placeholder="Upload Image"
        onChange={uploadImage}
      />
      {loading ? (
        <h3>loading...</h3>
      ) : (
        <img src={image} style={{ width: "300px" }} />
      )}
    </div>
  );
};
export default Cloudinary;
