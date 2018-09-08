import React from 'react'
import { Message } from 'semantic-ui-react'
import styles from 'styled-components'

// ======== INTERNAL ==========
import ContentPanel from 'js/components/shared/content-panel'
import Comments from 'js/components/shared/comments'
import AddComment from 'js/components/shared/comments/add-comment'
import Loading from 'js/components/shared/loading'

const EventDiscussionStyes = styles.div`
  .ui.message {
    p {
      font-size: 1rem;
    }
  }
`

const Discussion = ({
  event,
  createComment,
  updateComment,
  getComments,
  event_discussion = {}
}) => {
  const { comments = {}, loading, error } = event_discussion

  const canContribute = event.is_checked_in || event.is_stakeholder

  return (
    <EventDiscussionStyes>
        {!canContribute &&
        <Message info>
          <Message.Header>Welcome to Talk Chambers</Message.Header>
          <p>You're free to look around, but only checked-in guests or organizers can contribute here.</p>
          <p>Are you checked in but still can't type anything here? Please double check you're logged in with the same email you checked in with. Or contact one of the organizers.</p>
        </Message>}

        {canContribute &&
          <Message info>
            <Message.Header>Welcome to Talk Chambers</Message.Header>
            <p>Did you just get checked in? Introduce yourself!</p>
            <p>Did a speaker say something that made you remember a contribution or question? Type it here before you forget!</p>
            <p>Did you grasp an amazing take-away? Share with others here! Be the team player!</p>
          </Message>}
        {canContribute &&
        <AddComment placeholder="Say hi, ask a question, clarify something said, anything! Be heard :)"
                    recipient_id={event_discussion.id}
                    recipient_type="EventDiscussion"
                    trackable_id={event_discussion.id}
                    trackable_type="EventDiscussion"
                    createComment={createComment} />}

        {loading && <Loading />}
        {error && <Loading.error msg={error} />}
        {!loading && !error &&
          <Comments recipient_id={event_discussion.id}
                  recipient_type="EventDiscussion"
                  canReply={canContribute}
          {...{comments, createComment, updateComment, getComments }} />}

    </EventDiscussionStyes>
  )
}

export default Discussion