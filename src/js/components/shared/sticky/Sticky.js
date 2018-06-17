import React from 'react'

class Sticky extends React.Component {
  constructor(props) {
    super(props)

    this.state = { topMargin: 0, sticky: false }
    this.onScroll = this.onScroll.bind(this)
  }

  componentDidMount () {
    window.addEventListener("scroll", this.onScroll, false);
  }
  componentWillUnmount () {
    window.removeEventListener("scroll", this.onScroll, false);
  }

  onScroll() {
    if (window.scrollX >= this.props.stickAt || 100 && !this.state.sticky) {
      this.setState({sticky: true});
    } else if (window.scrollY < this.props.stickAt || 100 && this.state.sticky) {
      this.setState({sticky: false});
    }
  }

  getProps() {
    return {
      ...this.props,
      ...this.state
    }
  }
  render() {
    return this.props.children(this.getProps())
  }
}

export default Sticky
