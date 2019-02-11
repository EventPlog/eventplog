import React from 'react'

//======== Internal Components =========
import CommunitiesSection from 'js/components/communities/scenes/communities/components/communities-section'
import { media } from 'js/styles/mixins'

const SearchCommunities = ({
  communities = {},
  getCommunities,
  query = {},
  followCommunity,
}) => {
  return (
    <div>
      <CommunitiesSection title={`Results (${communities.meta && communities.meta.total_count ? communities.meta.total_count : 0})`}
                          noRecordsMsg={`😩 We couldn't find any community matching "${query.title}"`}
                          {...{communities, getCommunities, followCommunity }} />

    </div>
  )
}

export default SearchCommunities