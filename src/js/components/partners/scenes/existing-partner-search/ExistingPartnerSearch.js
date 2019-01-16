import React from 'react'
import styled, { css } from 'styled-components'
import {
  Form,
  Message,
  Icon
} from 'semantic-ui-react'

//============INTERNAL=============
import ContentPanel from 'js/components/shared/content-panel'
import NewPartner from 'js/components/partners/scenes/new-partner'
import Button from 'js/components/shared/button'
import Select from 'js/components/shared/select'
import Modal from 'js/components/shared/modal'
import Search from 'js/components/shared/search'
import PartnerList from './PartnerList'
import { media } from 'js/styles/mixins'

const styles = css`
  ${
    media.phone`
      padding: 1rem;
    `
  }
  
  .same-line {
    display: flex;
    
    ${
      media.phone`
        flex-direction: column;
      `
    }
  }
  
  .ui.search {
    margin-right: 1rem;
    flex: 1;
    
    ${
      media.phone`
        margin-right: 0;
        margin-bottom: 1rem;
      `
    }
  }
`

const ExistingPartnerSearch = ({
  className,
  loading,
  error,
  partners = {},
  partner = {},
  handleChange,
  searchQuery,
  sponsorship_type,
  handlePartnerSearch = () => {},
  handlePartnerSelect = () => {},
  handleSelect,
  getPartnersByName = () => {},
}) => {
  const { data = [] } = partners
  const partnerOptions =
    data.map(partner => ({
      key: partner.id,
      value: partner.id,
      title: partner.name,
      description: partner.tagline,
    }))
  return (
    <Form className={className} error={!!error}>
      <Message
        error
        header="Error"
        content={error && error.toString()}
      />
      <Form.Field className="search-holder">
        <label>Type the name of your organization</label>
        <div className="same-line">
          <Search handleSearch={getPartnersByName}
                  defaultValue={partner.name}
                  handleSelect={(result) => {
                    handlePartnerSelect(result.value, sponsorship_type)
                    handleSelect && handleSelect(result)
                  }}
                  options={partnerOptions} />

          <Modal style={{padding: '2rem 0 1rem'}}
                 trigger={
                   <Button>
                     <Icon name="plus"/>
                     Or add a new partner
                   </Button>
                 }>
            <ContentPanel title="Add a new partner">
              <NewPartner/>
            </ContentPanel>
          </Modal>

        </div>
      </Form.Field>

    </Form>
  )
}

export default styled(ExistingPartnerSearch)`${styles}`