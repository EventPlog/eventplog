import React from 'react'
import { Icon } from 'semantic-ui-react'
import styled, { css } from 'styled-components'

const StyledShowMore = styled.div`
  cursor: pointer;
  color: var(--activeLink);
`

// ========= INTERNAL ========
import Button from 'js/components/shared/button'
import Loading from 'js/components/shared/loading'

const ShowMoreButton = ({
  className,
  activePage,
  current_page,
  totalPages,
  onPageChange,
  caption = 'Show More',
  loading,
  error,
  children,
}) => {
  if (loading) return <Loading />
  if (error) return <Loading.Error msg={error} />

  if ((activePage || current_page) == totalPages) return ''
  return (
    <StyledShowMore className="see-more" onClick={onPageChange}>
      {children || <span>{caption} <Icon name="angle down"/> </span>}
    </StyledShowMore>
  )
}

export default ShowMoreButton
