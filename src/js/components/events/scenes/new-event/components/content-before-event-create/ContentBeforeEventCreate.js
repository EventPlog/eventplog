import React from 'react'
import { Form, Message, Icon, Modal } from 'semantic-ui-react'
import styled from 'styled-components'
import DatePicker from 'js/components/shared/date-time-picker'

// local
import Input from 'js/components/shared/input'
import TextArea from 'js/components/shared/text-area'
import Button from 'js/components/shared/button'
import PlaceSelector from 'js/components/shared/place-selector'
import { media } from 'js/styles/mixins'
import { genCommunityLink } from 'js/utils'
import Select, { formatOptions } from 'js/components/shared/select'
import { removeSpecialChars } from 'js/utils'
import config from 'js/config'

import CreateCommunityForm from 'js/components/communities/scenes/new-community'
import Search from 'js/components/shared/search'

const StyledContent = styled.div`
  
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  
  ${
  media.phone`
      align-items: baseline;
    `
  }
    
  .submit-form {
    width: 100%;
    max-width: 600px;
  }
  
  .ui.form {
    margin: 60px 0;
    
    ${
      media.phone`
        margin: 50px 0;
        
        .inline.fields {
          flex-direction: column;
          align-items: baseline; 
        }
      `
    }
    
    .field {
      margin-bottom: 2rem;
    }

    .field.email-holder {
      flex: 1;
      
      ${
        media.phone`
          width: 100%;
          margin-bottom: 1.5rem;
        `
      }   
  
    }
  }
  
 .same-line {
   display: flex;
   align-items: center;
   white-space: nowrap;
 } 
 
 .select-search {
    width:85%;
    margin-right:1rem;
 }

 .btn-create {
   margin-top: 2rem;
 }
 
`

const ContentBeforeEventCreate = ({
  event = {},
  community = {},
  handleChange,
  handleSelect = () => {},
  submitEvent,
  loading,
  searchLoading,
  error,
  communities = {},
  onSearchChange,
  onSelectChange,
  selected,
  searchQuery,
  onCloseModal,
  slug_check = {},
  checkForValidSlug,
  handleEventChange,
  getCommunitiesByName,
}) => {
  const { data = []} = communities
  const userCommunitiesOptions = 
    data.map(user_community => ({
        key: user_community.id,
        value: user_community.id,
        title: user_community.name,
        description: user_community.description,
      }))

  const inlineStyle = {
    modal : {
      marginTop: '0px !important',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  };

  const categoryOptions = formatOptions(config.event_categories)

  const goalsCharLimit = 280
  const submitDisabled = !(event.title && event.start_time && event.goals && event.category_name && community.name && !slug_check.error)

  return (
    <StyledContent>
      <p>
        A few details about your event, and you're on your way!
      </p>
      <div className="submit-form">
        <Form loading={loading} error={!!error}>

          <Message
            error
            header="Error"
            content={error && error.toString()}
          />

          <Form.Field className="wide email-holder">
            <label>What's the name of your event?<sup>*</sup></label>
              <Input name="title"
                     type="text"
                     value={event.title}
                     placeholder='Event title'
                     onChange={(e) => handleChange(e.target.name, e.target.value)} />
          </Form.Field>

          <Form.Field className="wide email-holder">
            <label>When does it start?<sup>*</sup></label>
            <DatePicker
              selected={event.start_time}
              showTimeSelect
              todayButton={"Today"}
              dateFormat="MMMM d, yyyy h:mm aa"
              onChange={(selected_date) => {
                const endT = new Date(selected_date)
                endT.setHours(selected_date.getHours() + 3)
                handleEventChange({start_time: selected_date, end_time: endT})
              } } />
          </Form.Field>

          <Form.Field className="wide email-holder">
            <label>Where is the venue?</label>
            <PlaceSelector location={event.location}
                           locationField="location"
                           handleChange={handleChange} />
          </Form.Field>

          <Form.Field className="wide email-holder">
            <label>In a tweet (280 characters or less), tell your target audience why they should care about/attend this event.<sup>*</sup></label>
            <TextArea name="goals"
                      type="text"
                      value={event.goals}
                      maxLength={goalsCharLimit}
                      placeholder='Event goals in a sentence or two.'
                      onChange={(e) =>
                        handleEventChange({goals: e.target.value, description: e.target.value})
                      } />
            <small>{goalsCharLimit - (event.goals || '').length} characters left.</small>
          </Form.Field>

          <Form.Field className="search-holder">
            <label>Which industry would you classify this event under?<sup>*</sup></label>
            <Select
              search
              name="category_name"
              type="text"
              className="select-search"
              placeholder="Education"
              value={event.category_name}
              options={categoryOptions}
              onSearchChange={onSearchChange}
              text={searchQuery}
              searchQuery={searchQuery}
              onChange={(e, attr) => handleChange(attr.name, attr.value)}
            />
          </Form.Field>

          <Form.Field>
            <label>How'd you like people to visit your event page?<sup>*</sup></label>
              {!!event.slug &&
                <span>
                  {slug_check.valid &&
                  <div className="success green">Slug is available!</div>}
                  {slug_check.error &&
                  <div className="error red">{slug_check.error}</div>}
                  {slug_check.loading &&
                  <div className="">Checking for availability <Icon loading name='asterisk'/></div>}
                </span>
              }

              <Form.Field className="same-line">
                eventplog.com{genCommunityLink(community)}/e/
                <Input name="slug"
                       value={event.slug}
                       placeholder='amazing-event'
                       onBlur={checkForValidSlug}
                       disabled={slug_check.loading}
                       onChange={(e) => handleChange(e.target.name, removeSpecialChars(e.target.value))}/>
              </Form.Field>
          </Form.Field>

          <Form.Field className="search-holder">
            <label>Which of the communities you admin own this event? Create one if none applies? :)<sup>*</sup></label>
            <div className="same-line">

              <Search handleSearch={getCommunitiesByName}
                      className="select-search"
                      loading={searchLoading}
                      defaultValue={community.name || (event.community && event.community.name)}
                      value={event.community ? event.community.name : community.name}
                      handleSelect={(result) => handleChange('community_id', result.value)}
                      options={userCommunitiesOptions} />

               <Modal
                  onClose={onCloseModal}
                  trigger={
                        <Button>
                          <Icon name="plus"/>
                        </Button> }
                  style={inlineStyle.modal}
                >
                <CreateCommunityForm isModal/>
              </Modal>
            </div>
          </Form.Field>


          <Button className="btn-create"
                  disabled={submitDisabled}
                  onClick={submitEvent}>
            {event.id ? 'Update' : 'Create'}
          </Button>
        </Form>
      </div>
    </StyledContent>
  )
}

export default ContentBeforeEventCreate

