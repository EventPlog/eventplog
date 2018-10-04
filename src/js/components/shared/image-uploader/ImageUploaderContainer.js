import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// ======= internal ========
import { Auth } from 'js/auth'
import { uploadImage } from './actions'

const unsignedUploadPreset = 'eventplog_comments';

const getOptimizedImageUrl = (url) => {
  const startIndex = url.indexOf('upload')
  const endIndex = startIndex + 'upload'.length
  return url.substring(0, startIndex) +
          'upload/c_scale,w_auto,dpr_auto' +
          url.substring(endIndex)
}

class ImageUploaderContainer extends Component {
  constructor(props) {
    super(props)

    this.imageInputRef = React.createRef()
    this.imagePlaceholderRef = React.createRef()
    this.uploadImage = this.uploadImage.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)

    this.state = {
      image: null,
      currentImage: this.props.currentImage
    }
  }

  handleChange = (key, value) => {
    this.setState({ comment: {...this.state.comment, [key]: value} })
  }

  getImageUrl = async (image) => {
    if (!image) return false

    const imageObj = await this.uploadImage(image)
    return getOptimizedImageUrl(imageObj.secure_url)
  }

  saveImage = async () => {
    const imageUrl = await this.getImageUrl(this.state.image)
    this.props.setImage(imageUrl)
    this.props.persistImage();
    this.setState({image: null})
  }

  cancelChange = () => {
    this.props.setImage(this.state.currentImage)
    this.setState({image: null})
  }

  uploadImage = (imageFile) => {
    const formData = new FormData()
    formData.append('upload_preset', unsignedUploadPreset);
    formData.append('tags', 'browser_upload'); // Optional - add tag for image admin in Cloudinary
    formData.append('file', imageFile);
    return this.props.uploadImage(formData)
  }

  showImageSelectOptions = () => {
    this.imageInputRef.current && this.imageInputRef.current.click()
  }

  handleImageChange = (e) => {
    const reader = new FileReader();

    const imageHold = this.props.imagePlaceholderRef
    const that = this
    reader.onload = function (e) {
      // get loaded data uri and render thumbnail.
      that.props.setImage(e.target.result)
    };

    // read the image file as a data URL.
    reader.readAsDataURL(e.target.files[0]);

    // add to state
    this.setState({image: e.target.files[0]})
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    handleChange: this.handleChange,
    showImageSelectOptions: this.showImageSelectOptions,
    imageInputRef: this.imageInputRef,
    imagePlaceholderRef: this.imagePlaceholderRef,
    handleImageChange: this.handleImageChange,
    getImageUrl: this.getImageUrl,
    current_user: Auth.currentUser(),
    saveImage: this.saveImage,
    cancelChange: this.cancelChange,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  return ownProps
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    uploadImage
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageUploaderContainer)
