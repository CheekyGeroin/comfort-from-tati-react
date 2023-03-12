import React from 'react';
import ImageGallery from 'react-image-gallery';

class ImgGallery extends React.Component{
  constructor() {
    super();
    this.state = {
      showIndex: false,
      showBullets: false,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: false,
      showGalleryFullscreenButton: false,
      showPlayButton: true,
      showGalleryPlayButton: true,
      showNav: true,
      isRTL: false,
      slideDuration: 450,
      slideInterval: 2000,
      slideOnThumbnailOver: true,
      thumbnailPosition: 'right',
      showVideo: {},
      useWindowKeyDown: true,
    };

    
  }
}
