import React from 'react';
import ImageGallery from 'react-image-gallery';
import './ImgSlider.css'

class ImgGallery extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      autoPlay: true,
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
      slideDuration: 500,
      slideInterval: 2000,
      slideOnThumbnailOver: false,
      thumbnailPosition: 'right',
      showVideo: {},
      useWindowKeyDown: true,
    };
    
      this.images = this.props.items
    
  }
  render() {
    return (
      <ImageGallery
          
        items={this.images}
        autoPlay={this.state.autoPlay}
          infinite={this.state.infinite}
          showBullets={this.state.showBullets}
          showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
          showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
          showThumbnails={this.state.showThumbnails}
          showIndex={this.state.showIndex}
          showNav={this.state.showNav}
          isRTL={this.state.isRTL}
          thumbnailPosition={this.state.thumbnailPosition}
          slideDuration={parseInt(this.state.slideDuration)}
          slideInterval={parseInt(this.state.slideInterval)}
          slideOnThumbnailOver={this.state.slideOnThumbnailOver}
          additionalClass="app-image-gallery"
          useWindowKeyDown={this.state.useWindowKeyDown}
        />
    )
  }
}

export default ImgGallery