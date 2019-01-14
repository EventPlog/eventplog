import React from 'react'
import { Table, Header, Icon } from 'semantic-ui-react'
import { Follow } from 'react-twitter-widgets'


//======= INTERNAL =========
import ExistingPartnerSearch from 'js/components/partners/scenes/existing-partner-search'
import ContentPanel from 'js/components/shared/content-panel'
const MediaPartners = ({
  event,
  partners = {},
  sponsorships = {},
  deleteSponsorship,
  className = '',
}) => {

  const { data: spData = [] } =  sponsorships
  const sponsorshipsData = spData.filter(s => s.sponsorship_type == 'media')

  const { data = [] } = partners
  const partnerOptions =
    data.map(partner => ({
      key: partner.id,
      value: partner.id,
      text: partner.name,
    }))

  return (
    <ContentPanel className={className} title="Media Partners">
      <Table basic='very' celled collapsing>
        <Table.Body>
          {sponsorshipsData && sponsorshipsData.map(({id, partner = {}}) => (
              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Header.Content>
                      <a href={partner.site_link || `#`}
                         target="_blank">
                        {partner.name}
                      </a>
                      <Header.Subheader>{partner.tagline}</Header.Subheader>
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  <Follow username={partner.tw_username}/>
                </Table.Cell>
                <Table.Cell>
                  <div class="fb-like"
                       data-href={`https://www.facebook.com/${partner.fb_username}`}
                       data-layout="standard"
                       data-action="like"
                       data-show-faces="true">
                  </div>
                </Table.Cell>

                {event.is_stakeholder &&
                  <Table.Cell>
                    <Icon name="cancel"
                          color="red"
                          size="large"
                          className='btn-delete'
                          onClick={() => deleteSponsorship(id)}
                    />
                  </Table.Cell>
                }
              </Table.Row>
            )
          )}
        </Table.Body>
      </Table>

      {event.is_stakeholder &&
      <ContentPanel className="add-partner" title="Add a media partner">
        <ExistingPartnerSearch sponsorship_type="media" />

      </ContentPanel>
      }

    </ContentPanel>

  )
}

export default MediaPartners