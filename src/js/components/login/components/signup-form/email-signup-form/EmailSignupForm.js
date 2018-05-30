import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Form, Message } from 'semantic-ui-react';
import styled from 'styled-components';
import { lighten, modularScale } from 'polished'
import colors from '../../../../../../theme/colors'
import Input from '../../../../shared/input'
import Button from '../../../../shared/button'

const StyledSignupForm = styled.div`
  > .ui.form {
    .field {
      label {
        color: ${lighten(0.6, colors.black)};
        font-weight: 500;
      }
    }
    
    > .field {
      &:nth-last-child(2) {
        margin: 30px 0 20px;
      }
    }
    
    .checkbox-holder {
      margin: 20px 0;
      
      > .field {
        display: flex;
        align-items: center;
      }
      
      input[type='checkbox'] {
        display: inline-flex;
      }
      
      label {
        display: inline-flex;
        margin: auto 10px;
      }
    }
  }
`

const SignupForm = ({
  user = {},
  handleChange,
  handleSubmit,
  loading,
  agreeToTerms,
  handleAgreeToTerms
}) => {
  return (
    <StyledSignupForm>
      <Form loading={loading}>

        <Form.Group widths='equal' >
          <Form.Field className="col-xs-12 col-s-6 col-m-6 col-l-6">
            <label>First Name</label>
            <Input name="first_name"
                   value={user.first_name}
                   placeholder='Ciroma'
                   onChange={handleChange}/>
          </Form.Field>

          <Form.Field className="col-xs-12 col-s-6 col-m-6 col-l-6">
            <label>Last Name</label>
            <Input className="col-md-1" name="last_name"
                   type="text"
                   value={user.last_name}
                   placeholder='Chukwuma' onChange={handleChange}/>
          </Form.Field>
        </Form.Group>

        <Form.Field>
          <label>Email</label>
          <Input name="email"
                 type="email"
                 value={user.email}
                 placeholder='ciroma@chukwuma.com' onChange={handleChange}/>
        </Form.Field>

        <Form.Field>
          <label>Password</label>
          <Input name="password"
                 type="password"
                 value={user.password}
                 placeholder='*****' onChange={handleChange}/>
        </Form.Field>

        <div className="checkbox-holder">
          <Form.Field>
            <input type="checkbox"
                   name="terms"
                   value="agree"
                   checked={agreeToTerms}
                   onClick={handleAgreeToTerms}
            />
            <label>I agree to the &nbsp;
              <Link to="/terms-and-conditions">Terms and Conditions</Link>
            </label>
          </Form.Field>
        </div>

        <Button type='submit'
                onClick={handleSubmit}
                disabled={!agreeToTerms}
        >
          Sign Up
        </Button>
      </Form>
    </StyledSignupForm>
  )
}

export default SignupForm;