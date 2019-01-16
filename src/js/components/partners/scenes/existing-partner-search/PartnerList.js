import React from 'react'
import { Button, Image, List } from 'semantic-ui-react'

const PartnerList = ({
  items = [],
  handleSelect = () => {}
}) => (
  <List divided verticalAlign='middle'>
    {
      items && items.map(item =>
        <List.Item>
          <List.Content floated='right'>
            <Button onClick={() => handleSelect(item.id)}>
              Add
            </Button>
          </List.Content>
          <Image avatar src={item.logo} />
          <List.Content>{item.text}</List.Content>
        </List.Item>
      )
    }
  </List>
)

export default PartnerList
