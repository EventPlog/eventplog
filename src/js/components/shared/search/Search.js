import React, { Component } from 'react'
import _ from 'lodash'
import { Search, } from 'semantic-ui-react'
import styled, { css } from 'styled-components'

const styles = css`
 .results.transition {
    width: 100%;
 }
`

class SearchBox extends Component {
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => {
    this.setState({ isLoading: false, results: [], value: this.props.defaultValue || '' })
  }

  handleResultSelect = (e, { result }) => {
    this.setState({ value: result.title })
    this.props.handleSelect(result)
  }

  handleSearchChange = (e, { value }) => {
    if (value.length < 3) return this.setState({ value })

    this.setState({ isLoading: true, value })

    // setTimeout(() => {
    //   if (this.state.value.length < 1) return this.resetComponent()
    //
    //   const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
    //   const isMatch = result => re.test(result.title)
    //
    //   this.setState({
    //     isLoading: false,
    //     results: _.filter(source, isMatch),
    //   })
    // }, 300)
    this.props.handleSearch(value)
        .finally(res => this.setState({ isLoading: false }))
  }

  render() {
    const { isLoading, value, results } = this.state

    const { options } = this.props
    return (
      <Search
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
        results={options}
        value={value}
        className={this.props.className}
        {...this.props}
      />
    )
  }
}

export default styled(SearchBox)`${styles}`