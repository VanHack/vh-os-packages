import React, { PureComponent } from 'react';
import ReactCrop from 'react-image-crop';
import { createGlobalStyle } from 'styled-components'
import VHModal from '../Modal'
const GlobalStyle = createGlobalStyle`
.ReactCrop {
  position: relative;
  display: inline-block;
  cursor: crosshair;
  overflow: hidden;
  max-width: 100%; }
  .ReactCrop:focus {
    outline: none; }
  .ReactCrop--disabled, .ReactCrop--locked {
    cursor: inherit; }
  .ReactCrop__image {
    display: block;
    max-width: 100%;
    touch-action: manipulation; }
  .ReactCrop--crop-invisible .ReactCrop__image {
    opacity: 0.5; }
  .ReactCrop__crop-selection {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate3d(0, 0, 0);
    box-sizing: border-box;
    cursor: move;
    box-shadow: 0 0 0 9999em rgba(0, 0, 0, 0.5);
    touch-action: manipulation;
    border: 1px solid;
    border-image-source: url("data:image/gif;base64,R0lGODlhCgAKAJECAAAAAP///////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEI5RDc5MTFDNkE2MTFFM0JCMDZEODI2QTI4MzJBOTIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEI5RDc5MTBDNkE2MTFFM0JCMDZEODI2QTI4MzJBOTIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuZGlkOjAyODAxMTc0MDcyMDY4MTE4MDgzQzNDMjA5MzREQ0ZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAyODAxMTc0MDcyMDY4MTE4MDgzQzNDMjA5MzREQ0ZDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEBQoAAgAsAAAAAAoACgAAAhWEERkn7W3ei7KlagMWF/dKgYeyGAUAIfkEBQoAAgAsAAAAAAoACgAAAg+UYwLJ7RnQm7QmsCyVKhUAIfkEBQoAAgAsAAAAAAoACgAAAhCUYgLJHdiinNSAVfOEKoUCACH5BAUKAAIALAAAAAAKAAoAAAIRVISAdusPo3RAzYtjaMIaUQAAIfkEBQoAAgAsAAAAAAoACgAAAg+MDiem7Q8bSLFaG5il6xQAIfkEBQoAAgAsAAAAAAoACgAAAg+UYRLJ7QnQm7SmsCyVKhUAIfkEBQoAAgAsAAAAAAoACgAAAhCUYBLJDdiinNSEVfOEKoECACH5BAUKAAIALAAAAAAKAAoAAAIRFISBdusPo3RBzYsjaMIaUQAAOw==");
    border-image-slice: 1;
    border-image-repeat: repeat; }
    .ReactCrop--disabled .ReactCrop__crop-selection {
      cursor: inherit; }
    .ReactCrop--circular-crop .ReactCrop__crop-selection {
      border-radius: 50%;
      box-shadow: 0px 0px 1px 1px white, 0 0 0 9999em rgba(0, 0, 0, 0.5); }
  .ReactCrop__rule-of-thirds-vt::before, .ReactCrop__rule-of-thirds-vt::after, .ReactCrop__rule-of-thirds-hz::before, .ReactCrop__rule-of-thirds-hz::after {
    content: '';
    display: block;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.4); }
  .ReactCrop__rule-of-thirds-vt::before, .ReactCrop__rule-of-thirds-vt::after {
    width: 1px;
    top: 0;
    bottom: 0; }
  .ReactCrop__rule-of-thirds-vt::before {
    left: 33.3333%;
    left: calc(100% / 3); }
  .ReactCrop__rule-of-thirds-vt::after {
    left: 66.6666%;
    left: calc(100% / 3 * 2); }
  .ReactCrop__rule-of-thirds-hz::before, .ReactCrop__rule-of-thirds-hz::after {
    left: 0;
    right: 0;
    height: 1px; }
  .ReactCrop__rule-of-thirds-hz::before {
    top: 33.3333%;
    top: calc(100% / 3); }
  .ReactCrop__rule-of-thirds-hz::after {
    top: 66.6666%;
    top: calc(100% / 3 * 2); }
  .ReactCrop__drag-handle {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.7);
    box-sizing: border-box;
    outline: 1px solid transparent; }
  .ReactCrop .ord-nw {
    top: 0;
    left: 0;
    margin-top: -5px;
    margin-left: -5px;
    cursor: nw-resize; }
  .ReactCrop .ord-n {
    top: 0;
    left: 50%;
    margin-top: -5px;
    margin-left: -5px;
    cursor: n-resize; }
  .ReactCrop .ord-ne {
    top: 0;
    right: 0;
    margin-top: -5px;
    margin-right: -5px;
    cursor: ne-resize; }
  .ReactCrop .ord-e {
    top: 50%;
    right: 0;
    margin-top: -5px;
    margin-right: -5px;
    cursor: e-resize; }
  .ReactCrop .ord-se {
    bottom: 0;
    right: 0;
    margin-bottom: -5px;
    margin-right: -5px;
    cursor: se-resize; }
  .ReactCrop .ord-s {
    bottom: 0;
    left: 50%;
    margin-bottom: -5px;
    margin-left: -5px;
    cursor: s-resize; }
  .ReactCrop .ord-sw {
    bottom: 0;
    left: 0;
    margin-bottom: -5px;
    margin-left: -5px;
    cursor: sw-resize; }
  .ReactCrop .ord-w {
    top: 50%;
    left: 0;
    margin-top: -5px;
    margin-left: -5px;
    cursor: w-resize; }
  .ReactCrop__disabled .ReactCrop__drag-handle {
    cursor: inherit; }
  .ReactCrop__drag-bar {
    position: absolute; }
    .ReactCrop__drag-bar.ord-n {
      top: 0;
      left: 0;
      width: 100%;
      height: 6px;
      margin-top: -3px; }
    .ReactCrop__drag-bar.ord-e {
      right: 0;
      top: 0;
      width: 6px;
      height: 100%;
      margin-right: -3px; }
    .ReactCrop__drag-bar.ord-s {
      bottom: 0;
      left: 0;
      width: 100%;
      height: 6px;
      margin-bottom: -3px; }
    .ReactCrop__drag-bar.ord-w {
      top: 0;
      left: 0;
      width: 6px;
      height: 100%;
      margin-left: -3px; }
  .ReactCrop--new-crop .ReactCrop__drag-bar,
  .ReactCrop--new-crop .ReactCrop__drag-handle,
  .ReactCrop--fixed-aspect .ReactCrop__drag-bar {
    display: none; }
  .ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-n,
  .ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-e,
  .ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-s,
  .ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-w {
    display: none; }
  @media (pointer: coarse) {
    .ReactCrop__drag-handle {
      width: 34px;
      height: 34px; }
    .ReactCrop__drag-bar {
      display: none; }
    .ReactCrop .ord-nw,
    .ReactCrop .ord-n,
    .ReactCrop .ord-ne,
    .ReactCrop .ord-e,
    .ReactCrop .ord-s,
    .ReactCrop .ord-sw,
    .ReactCrop .ord-w {
      display: none; }
    .ReactCrop .ord-se {
      margin-bottom: -1px;
      margin-right: -1px; } }

`
import { Container, Row } from '../../Grid'
import VHAvatar from '../Avatar'
import VHButton from '../Button-New'
import VHText from '../Text'

class VHImgCrop extends PureComponent {
  state = {
    src: null,
    croppedImageUrlSent: null,
    cropped: false,
    showCropper: false,
    fileName: '',
    crop: {
      unit: '%',
      width: 30,
      aspect: 1,
    },
    inputFile: React.createRef()
  };

  onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        this.setState({ src: reader.result })
      );
      reader.readAsDataURL(e.target.files[0]);

      this.setState({ fileName: e.target.files[0].name, mimeType: e.target.files[0].type })
    }
  };

  // If you setState the crop in here you should return false.
  onImageLoaded = image => {
    this.setState({ showCropper: true, cropped: false }, () => {
      this.imageRef = image;
    })
  };

  onCropComplete = crop => {
    this.makeClientCrop(crop);
  };

  onCropChange = (crop, percentCrop) => {
    // You could also use percentCrop:
    // this.setState({ crop: percentCrop });
    this.setState({ crop });
  };

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        'newFile.jpeg'
      );
      this.setState({ croppedImageUrl });
    }
  }

  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error('Canvas is empty');
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        resolve(this.fileUrl);
      }, 'image/jpeg');
    });
  }

  render() {
    const { crop,
      cropped,
      croppedImageUrlSent,
      showCropper,
      croppedImageUrl,
      fileName,
      src } = this.state;
    // console.log('reactImageCropCss', reactImageCropCss)
    return (
      <div className="imgCrop">
        <GlobalStyle />
        <VHAvatar
          content=""
          image={croppedImageUrlSent || this.props.source}
          showCursor
          uploading={this.props.uploading}
          size="xl"
          onEvent={e => {
            this.setState({ cropped: false, src: null, showCropper: true }, () => {
              this.state.inputFile.current.click();
            })
          }}
        />
        <VHModal
          header="Crop your photo"
          marginTop={'50px'}
          onClose={() => { this.setState({ showCropper: false }) }}
          content={
          <Row className='newModal' justifyCenter column responsive alignItemsCenter>
            <div style={{ display: 'none' }}>
              <input ref={this.state.inputFile} type="file" accept={this.props.acceptTypes || 'image/*'} onChange={this.onSelectFile} />
            </div>
            {src && !cropped && (
              <ReactCrop
                src={src}
                crop={crop}
                ruleOfThirds
                onImageLoaded={this.onImageLoaded}
                onComplete={this.onCropComplete}
                onChange={this.onCropChange}
              />
            )}
            {
              showCropper && (
                <Row justifyCenter column responsive alignItemsCenter>
                <Row responsive marginBottom={'10'}>
                  <VHButton
                    className=""
                    label="Send"
                    onEvent={e => {
                      this.setState({ cropped: false, src: null, showCropper: false, croppedImageUrlSent: croppedImageUrl })
                      fetch(croppedImageUrl)
                        .then(res => res.blob())
                        .then(res => {
                          this.props.onEvent({
                            data: this.props.data,
                            src: res,
                            fileName,
                            type: 'onCropped',
                            target: 'VHImgCrop'
                          })
                        })
                    }}
                    primary
                  />
                </Row>
                </Row>
              )
            }
          </Row>}
          onEvent={function noRefCheck() { }}
          open={showCropper}
        />

        {croppedImageUrl && cropped && (
          <img alt="Crop" style={{ maxWidth: '100%' }} src={croppedImageUrl} />
        )}
      </div>

    );
  }
}

export default VHImgCrop
