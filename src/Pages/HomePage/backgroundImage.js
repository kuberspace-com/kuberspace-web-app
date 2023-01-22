import React from 'react';

function BackgroundImage() {
  return (
    <div className="background-image" style={{ 'background-image': 'url(/images/main_photo.jpg)' }}>
      <div className="blackness" style={{ position: 'absolute' }} />
      <div className="catagories">
        <div style={{ width: '150px', height: '150px', background: 'blue' }} />
        <div style={{ width: '150px', height: '150px', background: 'blue' }} />
      </div>
    </div>
  );
}

export default BackgroundImage;
