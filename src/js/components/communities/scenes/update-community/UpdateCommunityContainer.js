// external
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

/// utilities
import { updateCommunity, mockCreateCommunity } from '../../actions'

export class CommunityContainer extends Component {
  state = {
    community: {},
    error: false,
    communityCreated: false
  }



  render() {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id: event_id, community_id } = ownProps.match ? ownProps.match.params : null
  return { event_id,  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    updateCommunity
  }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommunityContainer))
