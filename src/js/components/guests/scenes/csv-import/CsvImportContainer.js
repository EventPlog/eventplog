import { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { uploadGuestCSV } from '../../actions'

class MessengerCheckInContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {files: []}
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e) => {
    this.setState({files: e.target.files})
  }

  handleSubmit = (e, attr, something) => {
    e.preventDefault();
    if (this.state.files.length < 1) return
    // const form = document.querySelector("#my_form");

    this.setState({loading: true})

    let formData = new FormData()

    formData.append(
      "csv_file",
      this.state.files[0],
      this.state.files[0].name
    )

    this.props.uploadGuestCSV(this.props.event.id, formData).then(res => {
      this.setState({loading: false, success: true, error: false})
    })
      .catch(err => this.setState({loading: false, success: false, error: true}))
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    handleChange: this.handleChange,
    handleSubmit: this.handleSubmit,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  return {event: state.events.event}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    uploadGuestCSV
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessengerCheckInContainer))