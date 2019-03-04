import React from 'react'
import styled from 'styled-components'

// internal
import Comment from '../comment'
import { media } from 'js/styles/mixins'
import AddComment from 'js/components/shared/comments/add-comment'
import Pagination from 'js/components/shared/pagination'

const StyledComments = styled.div`
  margin-top: 2rem;
  max-width: 820px;
  
  .comment-card + .comment-card {
    margin-top: 1rem;
  }
  
  .replies {
    ${
       media.phone`
         padding-left: 10px;
         margin-left: 5px;
         border-left: 1px solid #aaa;
       `
    }
    
    .comment-card + .comment-card {
      margin-top: 1rem;
    }
  
    .new-comment-card {
      margin: 1rem 0;
    }
    
    .commenter {
      width: auto;
    }
    
    .meta {
      ${
        media.desktop`
          display: none;
        `
      }
      
      ${
        media.tablet`
          display: none;
        `
      }
    }
    
    .new-reply {
    
      ${
        media.phone`
          margin: 0;
        `
      }
      .avatar {
        width: 30px;
        height: 30px;
        
        ${
          media.phone`
            display: none;
          `
        }
      }
      
      textarea {
        height: 3rem;
        
        &:active {
          height: 4rem;
        }
      }
    }
  }
  
  .show-more-btn {
    margin: 2rem 0;
  }
`

const Comments = function({
  className,
  comments = {},
  createComment,
  updateComment,
  textField = 'body',
  canReply = true,
  getComments,
  current_user,
  showMoreBtnTitle = 'Show more comments',
  ...otherProps
}) {
  const { loading, error, data = [], meta = {} } = comments
  return (
    <StyledComments className={`comments-section ${className}`} {...otherProps}>
      {data && data.map(comment =>
        (comment.deleted && comment.responses.length < 1) || !comment[textField]
          ? ''
          : <Comment {...{ comment, createComment, textField, canReply, updateComment}}>
              <div className={`replies comment-card ${className}`}>
                {comment.responses && comment.responses.map(response =>
                  <Comment {...{ comment: response, textField, canReply,
                            createComment, updateComment}} />
                )}
                {canReply &&<AddComment className="new-reply"
                                        placeholder="Reply"
                                        recipient_id={comment.id}
                                        recipient_type="Comment"
                                        trackable_id={comment.trackable_id}
                                        trackable_type={comment.trackable_type}
                                        parentComment={comment}
                                        current_user={current_user}
                                        createComment={createComment} />}
              </div>
            </Comment>
      )}
      {
        meta && meta.total_pages && (data.length > 0 || meta.current_page > 1)
          ? <Pagination.ShowMoreButton totalPages={meta.total_pages}
                                       activePage={meta.current_page}
                                       caption={showMoreBtnTitle}
                                       className="show-more-btn"
                                       onPageChange={getComments} />
          : ''
      }
    </StyledComments>
  )
}

Comments.Comment = Comment

export default Comments