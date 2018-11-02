import React from 'react'
import { Form, Message, Icon, Modal } from 'semantic-ui-react'
import styled from 'styled-components'

// local
import Input from 'js/components/shared/input'
import Button from 'js/components/shared/button'
import { media } from 'js/styles/mixins'
import { genCommunityLink } from 'js/utils'
import Select from 'js/components/shared/select'

import CreateCommunityForm from 'js/components/communities/scenes/new-community'

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
  community,
  handleChange,
  submitEvent,
  loading,
  error,
  communities = {},
  onSearchChange,
  onSelectChange,
  selected,
  searchQuery,
  onCloseModal,
}) => {
  const { data = []} = communities
  const userCommunitiesOptions = 
    data.map(user_community => ({
        key: user_community.id,
        value: user_community.id,
        text: user_community.name,
      }))

  const selectedOption = userCommunitiesOptions.find(c => c.value == event.community_id)

  console.log('the selected option:', selectedOption)

  const inlineStyle = {
    modal : {
      marginTop: '0px !important',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  };
  
  return (
    <StyledContent>
      <h3>Create a event</h3>
      <p>
        What's the title of your event?
      </p>
      <div className="submit-form">
        <Form loading={loading} error={!!error}>

          <Message
            error
            header="Error"
            content={error && error.toString()}
          />

          <Form.Field className="wide email-holder">
            <label>What's the name of your event?</label>
              <Input name="title"
                    type="text"
                    value={event.title}
                    placeholder='Event title' onChange={handleChange} />
          </Form.Field>


          <Form.Field>
            <label>How'd you like people to visit your event page?</label>

              <Form.Field className="same-line">
                eventplog.com{genCommunityLink(community)}/e/
                <Input name="slug"
                      value={event.slug}
                      placeholder='amazing-event' onChange={handleChange}/>
              </Form.Field>
          </Form.Field>

          <Form.Field className="search-holder">
              <label>Which of your communities own this event? Have no community? Create one</label>
                <div className="same-line"> 
                  <Select
                    search
                    name="community_id"
                    type="text"
                    className="select-search"
                    placeholder='Community Name' 	
                    onChange={onSelectChange} 
                    value={event.community_id}
                    options={userCommunitiesOptions}
                    onSearchChange={onSearchChange}
                    text={searchQuery}
                    searchQuery={searchQuery}
                  />
                  
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
                  onClick={submitEvent}>
            Create
          </Button>
        </Form>
      </div>
    </StyledContent>
  )
}

export default ContentBeforeEventCreate

