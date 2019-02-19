import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Table, Header, Checkbox, Icon, Message } from 'semantic-ui-react'
import ReactMarkdown from 'react-markdown'

//=========== INTERNAL COMPONENTS ==============
import ContentPanel from 'js/components/shared/content-panel'
import ContentEditable from 'js/components/shared/content-editable'
import { genEventLink } from 'js/utils'

class TargetAudience extends Component {
  state = { editMode: false }

  toggleEditMode = () => this.setState({ editMode: !this.state.editMode })

  render() {

    const {
      sponsorship_offer,
      handleChange,
      handleSubmit,
      updateEvent,
      event,
      className = ''
    } = this.props

    const { editMode } = this.state
    const canEdit = event.is_stakeholder && handleChange
    const { topics = [], category = {} } = event

    return (
      <ContentPanel className={className} title="Audience Information">
        <Table basic='very' celled collapsing>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Header as='h4' image>
                  <Header.Content>
                    Number of expected guests
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>
                <ContentEditable propName="num_of_expected_guests"
                                 type="input"
                                 canEdit={editMode}
                                 defaultValue={sponsorship_offer.num_of_expected_guests}
                                 onChange={handleChange}
                                 onSubmit={handleSubmit}>
                  {sponsorship_offer.num_of_expected_guests || '100' }
                </ContentEditable>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as='h4' image>
                  <Header.Content>
                    Age range
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>
                <div className="same-line">
                  <ContentEditable propName="min_age"
                                   type="input"
                                   canEdit={editMode}
                                   defaultValue={sponsorship_offer.min_age}
                                   onChange={handleChange}
                                   onSubmit={handleSubmit}>
                    {sponsorship_offer.min_age || '2'}
                  </ContentEditable>
                  &nbsp;-&nbsp;
                  <ContentEditable propName="max_age"
                                   type="input"
                                   canEdit={editMode}
                                   defaultValue={sponsorship_offer.max_age}
                                   onChange={handleChange}
                                   onSubmit={handleSubmit}>
                    {sponsorship_offer.max_age || '100'}
                  </ContentEditable>
                </div>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as='h4' image>
                  <Header.Content>
                    Interested in
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>
                <ContentEditable propName="topics"
                                 type="input"
                                 canEdit={editMode}
                                 defaultValue={topics.join(', ')}
                                 onSubmit={() => updateEvent({
                                     id: event.id,
                                     topics: sponsorship_offer.topics
                                   })}
                                 onChange={(key, value) => handleChange(
                                     key,
                                     value.split(',')
                                   )}>
                  {topics.length > 0 ? topics.join(', ') : (canEdit ? 'Add topic tags related to this event (separated by commas)' : category && category.name)}
                </ContentEditable>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as='h4' image>
                  <Header.Content>
                    Pictures from previous events
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>
                <ContentEditable propName="pictures_link"
                                 type="input"
                                 canEdit={editMode}
                                 defaultValue={sponsorship_offer.pictures_link}
                                 onChange={handleChange}
                                 onSubmit={handleSubmit}>
                  <ReactMarkdown
                    source={sponsorship_offer.pictures_link || (canEdit ? 'Click to add a link to your most recent similar event pictures': '')}/>
                </ContentEditable>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        {canEdit &&
          <Checkbox toggle checked={editMode}
                    label={editMode ? "Turn off edit mode" : "Click to edit audience"}
                    onClick={this.toggleEditMode}/>
        }
        {event.is_stakeholder && !handleChange &&
          <Message info content={
            <span className="small">
              <Icon name="info circle" />
              Target audience information can be edited in <Link to={`${genEventLink(event)}/sponsors/new`}>the sponsorship page.</Link>
            </span>
          } />
        }
      </ContentPanel>
    )
  }
}

export default TargetAudience