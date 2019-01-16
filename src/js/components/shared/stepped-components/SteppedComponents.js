import React from 'react'
import { Progress, Icon } from 'semantic-ui-react'
import styled from 'styled-components'

//=========== INTERNAL =============
import Button from 'js/components/shared/button'
import { secureAction } from 'js/auth/actions'
import { media } from 'js/styles/mixins'

const StyledStep = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  
  &.app-container {
    margin-top: 3rem;
    padding: 2rem;
    
    > div {
      width: 100%;
    }
    
    ${
      media.phone`
        padding: 2rem 1rem;
      `
    }
  
  }
  
  .nav-btn {
    font-size: 1.2rem;
    padding: 1.2rem;
    
    &.green {
      background-color: ${props => props.theme.green};
        color: white;
      
      &:hover {
        border-color: white;
      }
    }
    
    &:not(.green) {
      margin-right: 1rem;
    }
  }
  
  .step-titles {
    margin-top: 2rem;
  }
  
  .meta {
    margin-top: 2rem;
  }
  
`

class SteppedComponents extends React.Component {
  state = { activeIndex: 0, allowedIndices: [] }

  selectNextHandler = () => {
    if (this.props.loginRequired) {
      return secureAction(this.incrementIndex)
    }
    return this.incrementIndex
  }

  incrementIndex = () => {
    this.setState({
      activeIndex: this.props.components.length - 1 > this.state.activeIndex
        ? this.state.activeIndex + 1
        : this.state.activeIndex
    })
    document.querySelector('.pusher').scrollTop = 0
  }

  decrementIndex = () => {
    this.setState({
      activeIndex: this.state.activeIndex > 0 ? this.state.activeIndex - 1 : 0
    })
    document.querySelector('.pusher').scrollTop = 0
  }

  setAllowedIndex = (index, allow, goToNext) => {
    this.setState({ allowedIndices: {...this.state.allowedIndices, [index]: allow } })
    if (goToNext) this.incrementIndex()
  }

  canNext = (index) => {
    return this.state.allowedIndices[index]
  }

  render() {
    const { components } = this.props
    const { activeIndex } = this.state
    const currentStep = activeIndex + 1
    let Component = components[activeIndex].component
    return (
      <StyledStep className="app-container stepped-components">
        <div>
          <h2>{currentStep}. {components[activeIndex].title}</h2>
          <Progress value={currentStep}
                    total={components.length}
                    progress="ratio" success/>

          <Component allowNext={(allow, goToNext) => this.setAllowedIndex(activeIndex, allow, goToNext)} />

          <div className="meta">
            {activeIndex > 0 &&
              <Button className="nav-btn"
                      onClick={this.decrementIndex}>
                <Icon name="angle left"/> Prev
              </Button>
            }
            {(activeIndex < this.props.components.length - 1) &&
              <Button className="nav-btn green" inverted
                      disabled={!this.state.allowedIndices[activeIndex]}
                      onClick={this.selectNextHandler()}>
                Continue <Icon name="angle right"/>

              </Button>
            }
            {(activeIndex >= this.props.components.length - 1) && this.props.lastStep &&
              <Button.Link className="nav-btn green" inverted
                           to={this.props.lastStep.link}>
                {this.props.lastStep.title} <Icon name="angle right"/>

              </Button.Link>
            }
            {components.length > currentStep &&
              <ul className="step-titles">
                Next Steps:
                {
                  components.slice(currentStep).map(({title}, index) => (
                    <li>{currentStep + index + 1}. {title}</li>
                  ))
                }
              </ul>
            }
          </div>
        </div>
      </StyledStep>
    )
  }
}

SteppedComponents.defaultProps = {
  components: [
    {title: 'First Page', component: <p>Sample first page</p>},
    {title: 'Second Page', component: <p>Sample second page</p>},
    {title: 'Third Page', component: <p>Sample third page</p>},
  ]
}

export default SteppedComponents