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

    const {container: Container, component: Component} = this.props
    return (
      <Container>
        {(props) => <Component {...props} />}
      </Container>
    )
  }
}

const renderComponentWithProps = (container, component) => () => (
  <ComponentWithContainerProps {...{container, component}} />
)

export default renderComponentWithProps