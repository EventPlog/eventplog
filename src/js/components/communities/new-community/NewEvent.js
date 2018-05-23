import React, { Component } from 'react'
import styled from 'styled-components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// import { createEvent } from '../actions'
import RangeDateTimePicker from '../../shared/range-date-time-picker'

import {
  Container,
  Form,
  Input,
  TextArea,
  Button,
  Icon
} from 'semantic-ui-react'

const StyledNewEvent = styled.div`
  padding-top: 100px; 
  
  .ui.container {
    max-width: 800px !important;
  }
`

class NewEvent extends Component {
  state = {
    title: '',
    description: '',
    featured_image: '',
    link: '',
    team_members: '',
    submitting: false
  }

  handleChange = (e, { name }) => this.setState({[name]: e.target.value })

  handleSubmit = async (e) => {
    let res = await this.props.createEvent(this.state)
    if (res && res.id) {
      this.props.history.push(`/events/${res.id}/`)
    }
  }

  setDateRange = ({from: start_time, to: end_time}) => {
    this.setState({start_time, end_time})
  }

  render() {
    // TODO: create a form to collect name of event, image url, event url, people you work with
    // save in backend
    // navigat event page
    // show event as part of user events
    return (
      <StyledNewEvent>
        <Container>
          <Form loading={this.state.submitting}>
            <Form.Field>
              <label>Title of the event</label>
              <Input name="title"
                     onChange={this.handleChange}
                     placeholder="An amazing event"/>
            </Form.Field>

            <Form.Field>
              <label>Description (In one sentence)</label>
              <Input name="description"
                     onChange={this.handleChange}
                     placeholder="An amazing event"/>
            </Form.Field>

            <Form.Group widths='equal'>
              <Form.Field>
                <label>Featured Image Url</label>
                <Input name="featured_image"
                       onChange={this.handleChange}
                       placeholder="http://sampleimage.com"/>
              </Form.Field>

              <Form.Field>
                <label>Link to registration page</label>
                <Input name="link"
                       onChange={this.handleChange}
                       placeholder="http://sample-event-page.com"/>
              </Form.Field>
            </Form.Group>
            <Form.Field>
              <label>Who would you work with on this event? (email addresses separated by commas)</label>
              <TextArea name="team_members"
                        onChange={this.handleChange}
                        placeholder='Type email addresses separated by commas'/>
            </Form.Field>

            <RangeDateTimePicker setDateRange={this.setDateRange} />

            <Form.Field>
              <Button onClick={this.handleSubmit}>
                Create Event
                <Icon name="chevron right"/>
              </Button>
            </Form.Field>
          </Form>

        </Container>
      </StyledNewEvent>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    // createEvent
  }, dispatch)


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewEvent))