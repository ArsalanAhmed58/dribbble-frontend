import React, { useState } from 'react';
import axios from 'axios';

const CloudinaryUpload = () => {
  const [image, setImage] = useState(null);

  const handleUpload = async (e) => {
    const file = e.target.files[0];

    // Create a FormData object to send the file to Cloudinary
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ml_default'); // Replace 'your_upload_preset' with your Cloudinary upload preset name

    try {
      // Make a POST request to Cloudinary's upload API
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dehiyjo8l/image/upload',
        formData
      );

      // If upload is successful, set the image URL in state
      setImage(response.data.secure_url);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <h2>Upload Image</h2>
      <input type="file" onChange={handleUpload} />
      {image && (
        <div>
          <h2>Uploaded Image:</h2>
          <img src={image} alt="Uploaded" style={{ width: '200px', height: '200px' }} />
        </div>
      )}
    </div>
  );
};

export default CloudinaryUpload;