import React, { useState } from 'react';

import { CardMedia } from '@mui/material';
import  Button  from '@mui/material/Button';

import { account } from 'src/Data/account';

import SvgColor from 'src/components/svg-color';

import "../../../global.css";



const ImageUpload = () => {
    const iconname = 'ic_camera';

  
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='first-div'>
      <label htmlFor="image-upload">
        <input
          accept="image/*"
          className='input-image-upload'
          id="image-upload"
          type="file"
          onChange={handleImageChange}
          
        />
        
        <Button
          variant="contained"
          color="primary"
          component="span"
          className='button-image-upload'
          id= 'button-image-upload'
          sx={{
            
            color: 'transparent',
            width: '140px',
            height: '140px'
          }}
        >
          <CardMedia
              component="img"
              image={account.photoURL}
              alt={account.displayName}
              title={account.displayName}
              sx={{
                zIndex: '1',
                borderRadius: '50%',
              }}
            />
            <div className='upload-image-hover'>
            <SvgColor src={`/assets/icons/navbar/${iconname}.svg`} sx={{ width: "25px", height: "25px" }} />
                <span className='upload-image-hover-span'>update photo</span>
            </div>
        </Button>
      </label>
      {selectedImage && (
        <img src={selectedImage} alt="Uploaded" className='preview' />
      )}
    </div>
  );
};

export default ImageUpload;
