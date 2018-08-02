import React from 'react'
import Members from 'js/components/shared/members'
import roleOptions from 'js/utils/userRoleOptions'
import ContentEditable from 'js/components/shared/content-editable'

const Organizer = ({
  organizer,
  event,
  handleChange,
  handleSubmit,
}) => (
  <Members.Member member={organizer}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}>
    <ContentEditable propName="role"
                     type="select"
                     canEdit={event.is_stakeholder}
                     defaultValue={roleOptions[0].text}
                     onChange={handleChange}
                     options={roleOptions}
                     onSubmit={handleSubmit}>
      {organizer.role || 'Member'}
    </ContentEditable>
  </Members.Member>
)

export default Organizer