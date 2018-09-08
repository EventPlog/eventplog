import React from 'react'
import { Tab } from 'semantic-ui-react'
import defaults from '../../../styles/theme/variables';
import styled  from 'styled-components';

// internal components

const TabHolder = styled.div`
  > div {
  
    .ui.secondary.pointing.menu {
      display: flex;
      border-bottom-width: 1px;

      .item {
        flex: 1;

        &.active {
          border-color: var(--activeLink);
          margin: 0 0 -1px;

          &:hover {
            border-color: var(--activeLink);
          }
        }
      }
    }
  }
`

const generatePanes = (panes, props) =>
  panes.map(Pane => (
    {
      menuItem: Pane.name,
      render: () => <Tab.Pane attached={false}>
                       <Pane.content {...props} />
                     </Tab.Pane>
    })
  )

const TmnTab = ({ panes, ...otherProps }) => (
  <TabHolder>
    <Tab menu={{ secondary: true, pointing: true }}
         panes={generatePanes(panes, otherProps)}
    />
  </TabHolder>
)

export default TmnTab;