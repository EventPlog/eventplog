import React from 'react';
import { Checkbox, Form, Message } from 'semantic-ui-react';
import styled from 'styled-components';

// ============ INTERNAL ============
import Input from 'js/components/shared/input'
import TextArea from 'js/components/shared/text-area'
import Button from 'js/components/shared/button'
import ContentPanel from 'js/components/shared/content-panel'
import Loading from "js/components/shared/loading";
import Select from 'js/components/shared/select'
import { media } from 'js/styles/mixins'
import ImageUploader from 'js/components/shared/image-uploader'
import { genEventLink } from 'js/utils'
import EditUserAvatar from 'js/components/user/scenes/user/components/EditUserAvatar'


import {
  getUserAvatar,
  genUserProfileLink,
  titleize,
} from 'js/utils'

const StyledEditUserForm = styled.div`
  .app-container {
    margin: 2rem auto;
  }
  
  .content-panel {
    width: 100%;
  }
  
  .content-header {
    ${
      media.phone`
        margin: 0;
        margin-bottom: 2rem;
      `
    }
  }
  
  .content-body {
    margin-left: 0;
    margin-right: 0;  
  }
  
  .ui.form {
    max-width: 400px;
    margin: auto; 
    
    .check-user {
       margin-bottom: 2rem;
    }
  }
  
  button + button {
    margin-left: 1rem;
  }
  
  .space-top {
    margin-top: 2rem;
  }
`


export const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

const emptyUser = {
  first_name: '',
  last_name: '',
  email: '',
  gender: 'Male'
}

export const EditUserForm = ({
  user = emptyUser,
  currentUser,
  persistedUser,
  match = {params: {}},
  handleChange,
  handleSubmit,
  success,
  error,
  loading,
  imagePlaceholderRef,
}) => {
  if (loading) return <Loading />
  const { community_id, event_id, speaker_id } = match.params
  const event = { id: event_id, community_id }
  const isLoggedInUser = user.id == currentUser.id
  const shouldShowField = (field) => !field || isLoggedInUser
  return (
    <StyledEditUserForm className="">
      <div className="app-container">
        <ContentPanel title={<p>Edit Speaker Information</p>}>
          <Form loading={loading} success={success} error={error}>
            {!isLoggedInUser &&
              <Message
                info
                header='Heads up!'
                content="Only the speaker can make changes to fields that already contain data."
              />
            }
            <Message
              success
              header='Success!'
              content={success}
            />
            <Message
              error
              header='Error!'
              content={error}
            />

            <Form.Field>
              <label>First Name</label>
              <Input name="first_name"
                     value={titleize(user.first_name)}
                     disabled={!shouldShowField(persistedUser.first_name)}
                     placeholder='Ciroma'
                     onChange={({target}) => handleChange(target.name, target.value)}/>
            </Form.Field>

            <Form.Field>
              <label>Last Name</label>
              <Input name="last_name"
                     value={titleize(user.last_name)}
                     disabled={!shouldShowField(persistedUser.last_name)}
                     placeholder='Chukwuma'
                     onChange={({target}) => handleChange(target.name, target.value)}/>
            </Form.Field>

            {shouldShowField(persistedUser.gender) &&
              <Form.Field>
                <label>Gender</label>
                <Select onChange={(e, attr) => handleChange('gender', attr.value)}
                        name="gender"
                        value={user.gender}
                        defaultValue={'male'}
                        placeholder='Gender' options={genderOptions}/>
              </Form.Field>
            }

            <Form.Field>
              <label>Email</label>
              <Input name="email"
                     disabled
                     value={user.email}
                     placeholder='ciroma@chukwuma.com'
                     onChange={({target}) => handleChange(target.name, target.value)}/>
            </Form.Field>

            {shouldShowField(persistedUser.bio) &&
              <Form.Field>
                <label>Bio</label>
                <TextArea name="bio"
                          value={user.bio}
                          placeholder='A bit about yourself'
                          maxLength={1000}
                          onChange={({target}) => handleChange(target.name, target.value)}/>
              </Form.Field>
            }

            {shouldShowField(persistedUser.occupation) &&
              <Form.Field>
                <label>Occupation</label>
                <Input name="occupation"
                       value={user.occupation}
                       placeholder='Content Creator'
                       onChange={({target}) => handleChange(target.name, target.value)}/>
              </Form.Field>
            }

            {shouldShowField(persistedUser.facebook_profile) &&
              <Form.Field>
                <label>Facebook</label>
                <Input name="facebook_profile"
                       value={user.facebook_profile}
                       placeholder='ciroma@chukwuma.com'
                       onChange={({target}) => handleChange(target.name, target.value)}/>
              </Form.Field>
            }

            {shouldShowField(persistedUser.twitter_profile) &&
              <Form.Field>
                <label>Twitter</label>
                <Input name="twitter_profile"
                       value={user.twitter_profile}
                       placeholder='ciroma@chukwuma.com'
                       onChange={({target}) => handleChange(target.name, target.value)}/>
              </Form.Field>
            }

            {shouldShowField(persistedUser.linkedin_profile) &&
              <Form.Field>
                <label>LinkedIn</label>
                <Input name="linkedin_profile"
                       value={user.linkedin_profile}
                       placeholder='linkedin.com/something'
                       onChange={({target}) => handleChange(target.name, target.value)}/>
              </Form.Field>
            }

            {shouldShowField(persistedUser.github_profile) &&
              <Form.Field>
                <label>Github</label>
                <Input name="github_profile"
                       value={user.github_profile}
                       placeholder='github.com/you'
                       onChange={({target}) => handleChange(target.name, target.value)}/>
              </Form.Field>
            }

            {shouldShowField(persistedUser.site_link) &&
              <Form.Field>
                <label>Personal website/blog</label>
                <Input name="site_link"
                       value={user.site_link}
                       placeholder='ciroma@chukwuma.com'
                       onChange={({target}) => handleChange(target.name, target.value)}/>
              </Form.Field>
            }

            {shouldShowField(persistedUser.avatar_url) &&
              <Form.Field>
                <label>Speaker Image</label>
                <EditUserAvatar {...{user, currentUser: user, handleChange,
                                        handleSubmit, imagePlaceholderRef}} />
              </Form.Field>
            }



            <Button inverted
                    type='submit'
                    disabled={!user.email}
                    className="space-top"
                    onClick={handleSubmit}>
              Save
            </Button>

            <Button.Link to={`${genEventLink(event, event.community)}/speakers/${match.params.speaker_id}`}>
              Back/Cancel
            </Button.Link>
          </Form>
        </ContentPanel>
      </div>
    </StyledEditUserForm>
  )
}

export default EditUserForm;