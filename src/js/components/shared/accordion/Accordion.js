import React from 'react'

import {Accordion} from 'semantic-ui-react'

class AccordionComponent extends React.Component {
  state = {activeIndex: -1}

  changeAccordion = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    changeAccordion: this.changeAccordion
  })

  render() {
    return (
      <Accordion {...this.getProps()}>
        {this.props.children(this.getProps())}
      </Accordion>
    )
  }
}

AccordionComponent.Title = Accordion.Title
AccordionComponent.Content = Accordion.Content

export default AccordionComponent