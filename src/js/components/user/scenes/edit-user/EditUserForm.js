import React from 'react';
import { Checkbox, Form, Select, Message } from 'semantic-ui-react';
import styled from 'styled-components';
import Input from 'js/components/shared/input'
import TextArea from 'js/components/shared/text-area'
import Button from 'js/components/shared/button'
import ContentPanel from 'js/components/shared/content-panel'
import Loading from "js/components/shared/loading";
import { media } from 'js/styles/mixins'
import color from 'js/styles/theme/variables'
import { genEventLink, titleize } from 'js/utils'
import colorOptions from 'js/utils/colorOptions'

const StyledEditUserForm = styled.div`
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


const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

const emptyUser = {
  first_name: '',
  last_name: '',
  email: '',
  gender: 'Male'
}

const EditUserForm = ({
  user = emptyUser,
  event = {},
  check_in_user,
  handleChange,
  handleStateChange,
  handleSubmit,
  success,
  error,
  loading,
}) => {
  if (loading) return <Loading />
  const title = <a href={`${window.location.origin}${genEventLink(event, event.community)}?utm_source=check_in_form`}>{event.title}</a>
  return (
    <StyledEditUserForm className="">
      <div className="app-container">
        <ContentPanel title={<p>Edit Your Personal Information</p>}>
          <Form loading={loading} success={success} error={error}>
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
                     placeholder='Ciroma'
                     onChange={({target}) => handleChange(target.name, target.value)}/>
            </Form.Field>

            <Form.Field>
              <label>Last Name</label>
              <Input name="last_name"
                     value={titleize(user.last_name)}
                     placeholder='Chukwuma'
                     onChange={({target}) => handleChange(target.name, target.value)}/>
            </Form.Field>

            <Form.Field>
              <label>Gender</label>
              <Select onChange={(e, attr) => handleChange('gender', attr.value)}
                      value={user.gender}
                      defaultValue={'male'}
                      placeholder='Gender' options={genderOptions} />
            </Form.Field>

            <Form.Field>
              <label>Email</label>
              <Input name="email"
                     disabled
                     value={user.email}
                     placeholder='ciroma@chukwuma.com'
                     onChange={({target}) => handleChange(target.name, target.value)}/>
            </Form.Field>

            <Form.Field>
              <label>Bio</label>
              <TextArea name="bio"
                        value={user.bio}
                        placeholder='A bit about yourself'
                        maxLength={1000}
                        rows={5}
                        onChange={({target}) => handleChange(target.name, target.value)}/>
            </Form.Field>

            <Form.Field>
              <label>Preferred link color</label>
                <Select options={colorOptions}
                        name="brand_color"
                        value={user.brand_color}
                        defaultValue={color.activeLink}
                        onChange={(e, attr) => handleChange(attr.name, attr.value)}/>
            </Form.Field>

            <Form.Field>
              <label>Occupation</label>
              <Input name="occupation"
                     value={user.occupation}
                     placeholder='Content Creator'
                     onChange={({target}) => handleChange(target.name, target.value)}/>
            </Form.Field>

            <Form.Field>
              <label>Facebook</label>
              <Input name="facebook_profile"
                     value={user.facebook_profile}
                     placeholder='ciroma@chukwuma.com'
                     onChange={({target}) => handleChange(target.name, target.value)}/>
            </Form.Field>

            <Form.Field>
              <label>Twitter</label>
              <Input name="twitter_profile"
                     value={user.twitter_profile}
                     placeholder='ciroma@chukwuma.com'
                     onChange={({target}) => handleChange(target.name, target.value)}/>
            </Form.Field>

            <Form.Field>
              <label>LinkedIn</label>
              <Input name="linkedin_profile"
                     value={user.linkedin_profile}
                     placeholder='linkedin.com/something'
                     onChange={({target}) => handleChange(target.name, target.value)}/>
            </Form.Field>

            <Form.Field>
              <label>Github</label>
              <Input name="github_profile"
                     value={user.github_profile}
                     placeholder='github.com/you'
                     onChange={({target}) => handleChange(target.name, target.value)}/>
            </Form.Field>

            <Form.Field>
              <label>Personal website/blog</label>
              <Input name="site_link"
                     value={user.site_link}
                     placeholder='ciroma@chukwuma.com'
                     onChange={({target}) => handleChange(target.name, target.value)}/>
            </Form.Field>

            <Button inverted
                    type='submit'
                    disabled={!user.email}
                    className="space-top"
                    onClick={handleSubmit}>
              Save
            </Button>
          </Form>
        </ContentPanel>
      </div>
    </StyledEditUserForm>
  )
}

export default EditUserForm;