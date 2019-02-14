import React from 'react'
import { Link } from 'react-router-dom'


// internal
import ContentPanel from 'js/components/shared/content-panel'
import Loading from 'js/components/shared/loading'
import Error from 'js/components/shared/loading/Error'
import Pagination from 'js/components/shared/pagination'
import { pluralize, genCategoryLink } from 'js/utils'

export const generateTitle = (category = {}) => (
  <Link to={genCategoryLink(category)}>
    {category.name}
  </Link>
)

export const generateMeta = (category = {}) => (
  <ul>
    <li>
      {category.no_of_followers} {pluralize('follower', category.no_of_followers)}
    </li>
    <li>
      {category.no_of_upcoming_events} upcoming {pluralize('event', category.no_of_upcoming_events)}
    </li>
    <li>
      <span className="meta-label">Interests</span>: {category.interests && category.interests.map(interest => <span className="hashtag">{interest}</span> )}
    </li>
  </ul>
)

const CategorySection = ({
  title,
  showCTA = true,
  categories = {data: [], meta: {}},
  getCategories,
  noRecordsMsg,
  followCategory,
}) => {

  const {loading, error, data = [], meta = {}} = categories;

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error msg={categories.error} />
  }

  return (
    <ContentPanel title={title}>
      {data && data.map(({description, featured_image, ...category}) => {
          const title = generateTitle(category)
          const meta = generateMeta(category)
          const titleLink = genCategoryLink(category)
          return (
            <ContentPanel.Card
              key={category.id}
              {...{title, description, featured_image, meta}}
              hideImage={true}
              showButton={showCTA && !category.following}
              titleLink={titleLink}
              btn={{onClick: () => followCategory(category), text: 'Follow'}} />
          )
        }
      )}
      {data && data.length < 1 && <p className="no-records-msg">{noRecordsMsg || "This hall for categories seem empty ..."}</p>}
      {
        meta && meta.total_pages && data.length > 0
          ? <Pagination totalPages={meta.total_pages}
                        activePage={meta.current_page}
                        onPageChange={getCategories} />
          : ''
      }
    </ContentPanel>
  )
}

export default CategorySection