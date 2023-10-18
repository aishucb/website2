import React, { useState } from 'react';
import axios from 'axios';
import './Austintab.css'
function Any() {
  const [mainheader, setMainheader] = useState('');
  const [subheader, setSubheader] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState(null); // State for handling image file
  const [posts, setPosts] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('main_head', mainheader);
    formData.append('sub_head', subheader);
    formData.append('content', content);
    formData.append('date', date);
    formData.append('image_url', image); // Append image file to form data
    try {
      const response1 = await axios.get("api/");
      console.log(response1);
     }
     catch(error){
      console.log(error)
     }
    try {
      const response = await axios.post("ap", formData, {
        headers: {
          'Content-Type': 'multipart/form-data' // Set content type for FormData
        }
      });
      console.log(response);
      alert("succesful");
      window.location.reload(true);
    } catch (error) {
      console.log(error);
    }
    
}

  const handleImageChange = (e) => {
    var image = document.getElementById('output');
	  image.src = URL.createObjectURL(e.target.files[0]);
    setImage(e.target.files[0]); // Update image state with selected file
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="input-group">
          <label>Main Heading:</label>
          <input type="text" value={mainheader} onChange={(e) => setMainheader(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Sub heading:</label>
          <input type="text" value={subheader} onChange={(e) => setSubheader(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Content:</label>
          <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="input-group image-preview">
          <label>Image:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <p><img id="output" width="200"/></p>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Any;
