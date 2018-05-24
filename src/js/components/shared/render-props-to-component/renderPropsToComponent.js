import React, { Component } from 'react'


class ComponentWithContainerProps extends Component {
  state = { hasError: false }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
    console.log(error, info)
  }

  render() {
    if (this.state.hasError) {
      return <h5 className="app-container" style={{
                  marginTop: '100px',
                  textAlign: 'center',
                }}>
              Oops ... Something went wrong.
             </h5>;
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