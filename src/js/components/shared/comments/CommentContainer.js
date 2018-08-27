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

class CommentContainer extends Component {
  constructor(props) {
    super(props)

    this.state = { comment: {body: ''} }
    this.imageInputRef = React.createRef()
    this.imagePlaceholderRef = React.createRef()
    this.commentBodyRef = React.createRef()
    this.updateComment = this.updateComment.bind(this)
    this.uploadImage = this.uploadImage.bind(this)
    this.updateComment = this.updateComment.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.comment && nextProps.comment.id != prevState.comment.id) {
      return { ...prevState, comment: nextProps.comment }
    }
    return prevState
  }

  handleChange = (key, value) => {
    this.setState({ comment: {...this.state.comment, [key]: value} })
  }

  createComment = async () => {
    this.setState({editing: false, loading: true})
    const { recipient_id, recipient_type, trackable_id, trackable_type } = this.props
    const getComment = await this.getCommentWithImage(this.state)
    const comment = {
      ...getComment,
      recipient_id, recipient_type,
      trackable_id, trackable_type
    }
    return this.props.createComment(comment, this.props.parentComment).then(res => {
      this.setState({ comment: {body: ''}, image: null, loading: false })
    }).catch(error => this.setState({loading: false, error}))
  }

  getCommentWithImage = async ({comment, image}) => {
    if (!image) return comment

    const textfield = this.props.textField || 'body'
    let text = comment[textfield]
    const imageObj = await this.uploadImage(image)
    text = `${text || ''} ![${imageObj.original_filename}](${getOptimizedImageUrl(imageObj.secure_url)})`
    return {...comment, [textfield]: text}
  }

  editComment = (e) => {
    if (!this.state.editing && this.commentBodyRef.current) {
      this.setState({editing: true})
      this.commentBodyRef.current.click()
    }
    else {
      this.setState({editing: false})
    }
  }

  updateComment = async () => {
    const comment = await this.getCommentWithImage(this.state)
    this.setState({editing: false, loading: true})
    return this.props.updateComment(comment, this.props.parentComment).then(res => {
      this.setState({loading: false})
    }).catch(error => this.setState({loading: false, error}))
  }

  deleteComment = () => {
    var confirmed = confirm('Are you sure you want to delete this comment?')
    if (!confirmed) { return }
    const comment = {...this.state.comment, deleted: true}
    return this.props.updateComment(comment, this.props.parentComment)
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

    const imageHold = this.imagePlaceholderRef
    reader.onload = function (e) {
      // get loaded data and render thumbnail.
      const img = new Image()
      img.src = e.target.result;
      imageHold.current.innerHTML = ''
      imageHold.current.append(img)
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
    createComment: this.createComment,
    editComment: this.editComment,
    updateComment: this.updateComment,
    deleteComment: this.deleteComment,
    showImageSelectOptions: this.showImageSelectOptions,
    imageInputRef: this.imageInputRef,
    commentBodyRef: this.commentBodyRef,
    imagePlaceholderRef: this.imagePlaceholderRef,
    handleImageChange: this.handleImageChange,
    current_user: Auth.currentUser(),
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

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer)
