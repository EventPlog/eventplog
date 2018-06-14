import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

// utilities
import { getCommunities, mockGetCommunities } from '../../actions'


export class JoinACommunityContainer extends Component {
  constructor(props) {
    super(props)
    this.fetchData(props)
  }

  fetchData(props) {
    props.getCommunities()
  }

  render() {
    return this.props.children(this.props)
  }
}

const mapStateToProps = (state) => {
  return {communities: state.communities.communities}
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getCommunities: mockGetCommunities
  }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JoinACommunityContainer))
