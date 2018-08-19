import React from 'react'
import Button from 'js/components/shared/button'

// ========= INTERNAL ========
import Loading from 'js/components/shared/loading'

const ShowMoreButton = ({
  className,
  activePage,
  totalPages,
  onPageChange,
  caption = 'Show More',
  loading,
  error,
}) => {
  if (loading) return <Loading />
  if (error) return <Loading.Error msg={error} />

  return (
    activePage == totalPages
      ? ''
      : <Button className={className}
                onClick={onPageChange}>
        {caption}
      </Button>
  )
}

export default ShowMoreButton
