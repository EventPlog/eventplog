import React from 'react'
import { Form, Message, Icon, Modal } from 'semantic-ui-react'
import styled from 'styled-components'
import DatePicker from 'js/components/shared/date-time-picker'
import PlacesAutocomplete from 'react-places-autocomplete';

// local
import Input from 'js/components/shared/input'
import TextArea from 'js/components/shared/text-area'
import Button from 'js/components/shared/button'
import { media } from 'js/styles/mixins'
import { genCommunityLink } from 'js/utils'
import Select from 'js/components/shared/select'
import { removeSpecialChars } from 'js/utils'
import dtpStyles from './react-dtp.css'

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
 
 .autocomplete-dropdown-container {
    border-bottom: honeydew;
    border-left: honeydew;
    border-right: honeydew;
    border-top: 1px solid #e6e6e6;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    border-radius: 0 0 2px 2px;
  }

  .suggestion-item {
    padding: 8px;
    text-align: left;
    background-color: #fff;
    cursor: pointer;
  }

  .suggestion-item--active {
    background-color: #fafafa;
    padding: 8px;
  }
`

const ContentBeforeEventCreate = ({
  event = {},
  community,
  handleChange,
  handleSelect = () => {},
  submitEvent,
  loading,
  error,
  communities = {},
  onSearchChange,
  onSelectChange,
  selected,
  searchQuery,
  onCloseModal,
  slug_check = {},
  checkForValidSlug,
}) => {
  const { data = []} = communities
  const userCommunitiesOptions = 
    data.map(user_community => ({
        key: user_community.id,
        value: user_community.id,
        text: user_community.name,
      }))

  const inlineStyle = {
    modal : {
      marginTop: '0px !important',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  };
  
  return (
    <StyledContent>
      <h3>Create an event</h3>
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
            <label>What's the name of your event?</label>
              <Input name="title"
                     type="text"
                     value={event.title}
                     placeholder='Event title'
                     onChange={(e) => handleChange(e.target.name, e.target.value)} />
          </Form.Field>

          <Form.Field className="wide email-holder">
            <label>When does it start?</label>
            <DatePicker
              selected={event.start_time}
              showTimeSelect
              todayButton={"Today"}
              dateFormat="MMMM d, yyyy h:mm aa"
              onChange={(selected_date) => handleChange('start_time', selected_date) } />
          </Form.Field>

          <Form.Field className="wide email-holder">
            <label>Where is the venue?</label>
            <PlacesAutocomplete
              value={event.venue}
              onError={(err) => console.log(err)}
              shouldFetchSuggestions={event.address && event.address.length > 2}
              onChange={(venue) => handleChange('venue', venue)}
              onSelect={handleSelect} >
              {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                  <input
                    {...getInputProps({
                      placeholder: 'Search Places ...',
                      className: 'location-search-input',
                    })}
                  />
                  <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map(suggestion => {
                      const className = suggestion.active
                        ? 'suggestion-item--active'
                        : 'suggestion-item';
                      // inline style for demonstration purpose
                      const style = suggestion.active
                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                      return (
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                          })}
                        >
                          <span>{suggestion.description}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
          </Form.Field>


          <Form.Field className="wide email-holder">
            <label>What's this event about? What does it hope to achieve?</label>
              <TextArea name="description"
                     type="text"
                     value={event.description}
                     placeholder='Event description'
                     onChange={(e) => handleChange(e.target.name, e.target.value)} />
          </Form.Field>

          <Form.Field>
            <label>How'd you like people to visit your event page?</label>
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
              <label>Which of the communities you admin own this event? Create one if none applies? :)</label>
                <div className="same-line"> 
                  <Select
                    search
                    name="community_id"
                    type="text"
                    className="select-search"
                    placeholder='Community Name' 	
                    value={event.community_id}
                    options={userCommunitiesOptions}
                    onSearchChange={onSearchChange}
                    text={searchQuery}
                    searchQuery={searchQuery}
                    onChange={(e, attr) => handleChange(attr.name, attr.value)}
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
                  disabled={slug_check.error}
                  onClick={submitEvent}>
            Create
          </Button>
        </Form>
      </div>
    </StyledContent>
  )
}

export default ContentBeforeEventCreate

