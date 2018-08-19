import React, { Component} from 'react'

class ShowMoreButtonContainer extends Component {
  state = {loading: false, error: false}

  onPageChange = (e) => {
    this.setState(() => ({loading: true}))
    this.props.onPageChange(e, {activePage: this.props.activePage + 1})
      .then(res => this.setState(() => ({loading: false})))
      .catch(error => this.setState(() => ({error, loading: false})))
  }
  getProps = () => ({
    ...this.props,
    ...this.state,
    onPageChange: this.onPageChange,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

export default ShowMoreButtonContainer
