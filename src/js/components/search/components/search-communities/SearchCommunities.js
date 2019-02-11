import React from 'react'

//======== Internal Components =========
import CommunitiesSection from 'js/components/communities/scenes/communities/components/communities-section'
import { media } from 'js/styles/mixins'

const SearchCommunities = ({
  communities = {},
  getCommunities,
  followCommunity,
}) => {
  return (
    <div>
      <CommunitiesSection title="Results" {...{communities, getCommunities, followCommunity }} />

    </div>
  )
}

export default SearchCommunities