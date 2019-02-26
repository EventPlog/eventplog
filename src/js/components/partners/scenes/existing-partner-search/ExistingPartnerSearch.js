import React from 'react'
import styled, { css } from 'styled-components'
import {
  Form,
  Message,
  Icon
} from 'semantic-ui-react'

//============INTERNAL=============
import ContentPanel from 'js/components/shared/content-panel'
import NewPartnerForm from 'js/components/partners/scenes/new-partner-form'
import Button from 'js/components/shared/button'
import Select from 'js/components/shared/select'
import Modal from 'js/components/shared/modal'
import Search from 'js/components/shared/search'
import PartnerList from './PartnerList'
import { media } from 'js/styles/mixins'
import { resizeImage } from 'js/utils'

const corporateImage = 'https://res.cloudinary.com/eventplog/image/upload/c_scale,dpr_auto/v1548380264/corporate_tie.png'

const classyTyleStyles =  {
  backgroundImage: `url(${resizeImage(corporateImage, 'thumbnail')})`,
  flex: '1',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  opacity: '0.2',
  margin: '1rem auto',
  maxWidth: '300px',
}

const newPartnerStyles  = {
  maxWidth: '400px',
  flex: '1',
}

const newPartnerPanelStyles = {
  backgroundColor: '#f7f4ec'
}

const contentBodyStyles = {
  display: 'flex',
}


const styles = css`
  ${
    media.phone`
      padding: 1rem;
    `
  }
  
  &.ui.form.search-form {
    max-width: 100%;
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
    <Form className={`${className} search-form`} error={!!error}>
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

          <Modal style={{margin: '4rem auto'}}
                 trigger={
                   (props) =>
                     <Button {...props} >
                       <Icon name="plus"/>
                       Or add to the list
                     </Button>
                 }>
            <ContentPanel className="new-partner-panel"
                          style={newPartnerPanelStyles}
                          bodyStyle={contentBodyStyles}
                          title="Add a new organization">
              <NewPartnerForm style={newPartnerStyles} />
              <div className="hidden-xs" style={classyTyleStyles}></div>
            </ContentPanel>
          </Modal>

        </div>
      </Form.Field>

    </Form>
  )
}

export default styled(ExistingPartnerSearch)`${styles}`