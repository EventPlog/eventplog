import React, { Component } from 'react'
import Error from 'js/components/shared/loading/Error'


class ComponentWithContainerProps extends Component {
  state = { hasError: false, msg: '' }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
    console.log(error, info)
  }

  render() {
    if (this.state.hasError) {
      return <Error msg={this.state.msg} />
    }

    const {container: Container, component: Component, ...otherProps} = this.props
    return (
      <Container {...otherProps}>
        {(props) => <Component {...props}  />}
      </Container>
    )
  }
}

const renderComponentWithProps = (container, component) => (props) => (
  <ComponentWithContainerProps {...{container, component, ...props}} />
)

export default renderComponentWithProps