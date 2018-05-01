import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { mockUpdateLead as updateLead } from '../actions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const updateTitle = title => ({title})

class StartPlanning extends Component {
  state = {title: ''}

  handleTitleChange = (title) => {
    this.setState(updateTitle(title))
  }

  handleBtnClick = (e) => {
    e.preventDefault();
    this.props.updateLead(updateTitle(this.state.title))
  }

  getStateAndHelpers() {
    return {
      ...this.state,
      ...this.props,
      handleBtnClick: this.handleBtnClick,
      handleTitleChange: this.handleTitleChange,
    }
  }

  render() {
    return this.props.children(this.getStateAndHelpers())
  }
}

const mapStateToProps = (store) => {
 return {lead: store.lead}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateLead
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StartPlanning)

