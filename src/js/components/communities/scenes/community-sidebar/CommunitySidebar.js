import React from 'react'
import CommunitiesSection from 'js/components/events/scenes/events/components/communities-section'

const CommunitySidebar = ({
  loading,
  communities_suggestions = [],
  followCommunity,
}) => {
  return (
    <CommunitiesSection {...{communities: communities_suggestions, followCommunity}} />
  )
}

export default CommunitySidebar