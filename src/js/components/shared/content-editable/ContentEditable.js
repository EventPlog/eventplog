import React from 'react'
import DateTimePicker from 'js/components/shared/date-time-picker'

// internal components
import Input from 'js/components/shared/input'
import TextArea from 'js/components/shared/text-area'
import styled, { css } from 'styled-components'

const styles = css`
  &:hover {
    border: 1px solid #ccc;
    padding: 1rem;
    cursor: text;
  }
  
  .editor-active {
    background-color: white;
  }
`

class ContentEditable extends React.Component {
  constructor(props) {
    super(props)
    this.onBlur = this.onBlur.bind(this)
    this.onClick = this.onClick.bind(this)
    this.getTextBox = this.getTextBox.bind(this)
    this.state = {isEditing: false, value: '', type: 'input'}
    this.textboxRef = React.createRef();
  }

  onClick = (e, value) => {
    // e.target.contentEditable = true
    this.setState({isEditing: true, value})
  }

  componentDidUpdate() {
    this.textboxRef.current && this.textboxRef.current.focus && this.textboxRef.current.focus();
  }

  onChange = (e) => {
    const value = e && e.target ? e.target.value : e
    this.setState(() => {
      this.props.onChange(this.props.propName, value)
      return { value }
    })
  }

  onBlur = (e) => {
    this.props.onSubmit().then(res => this.setState({isEditing: false}))
  }

  getTextBoxProps = () => ({
    onChange: this.onChange,
    ref: this.textboxRef,
    style: {width: '100%'},
    onBlur: this.onBlur,
    value: this.state.value,
  })

  getTextBox() {
    const {type = ''} = this.props
    switch(type.toLowerCase()) {
      case 'textarea':
        return <TextArea className="editor-active" {...this.getTextBoxProps()} />

      case 'datetime':
        return <div>
                  <DateTimePicker  className="editor-active" {...this.getTextBoxProps()} />
                 <button onClick={this.onBlur}>Save</button>
               </div>

      default:
        return <Input className="editor-active" {...this.getTextBoxProps()} />
    }
  }

  getProps = () => ({
    ...this.props,
    onClick: this.onClick,
    onBlur: this.onBlur,
  })

  render() {
    return this.state.isEditing
      ? this.getTextBox()
      : this.props.children(this.getProps())
  }
}

export default styled(ContentEditable)`${styles}`
