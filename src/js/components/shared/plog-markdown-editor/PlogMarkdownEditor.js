import React from 'react'
import { Icon } from 'semantic-ui-react'

// internal components
import TextArea from 'js/components/shared/text-area'
import Button from 'js/components/shared/button'
import styled from 'styled-components'
import { splice } from 'js/utils'


const TextEditorStyles = styled.div`
  textarea {
    min-height: 200px;
  }
  
  .toolbox {
    display: flex;
    flex-wrap: wrap;
    
    > * {
      padding: 0.5rem 1rem;
      border-bottom: none;
      cursor: pointer;
      
      &:hover {
        background: ${props => props.theme.gray};
      }
    }
    
    .bold {
      font-weight: 800;
    }
    
    .italic {
      font-style: italic;
    }
    
    .underline {
      text-decoration: underline;
    }
  }
  
  .save-btn {
    padding: 0.5rem 1rem;
    margin: 0.5rem 1rem 0.5rem 0;
    
  }
`

export const format = (preCh, postCh, state, convertBr) => {
  const { selectionStart, selectionEnd, selectedText } = state;

  // if (selectionStart == selectionEnd) return

  let textValue = state.textValue;
  textValue = splice(selectionEnd, 0, textValue, postCh)
  if (convertBr) {
    textValue = splice(selectionStart, selectedText.length, textValue, selectedText.replace(/(\r?\n)(\s+)?/g, convertBr))
  }
  textValue = splice(selectionStart, 0, textValue, preCh)
  return textValue
}

class PlogMarkdownEditor extends React.Component {
  constructor(props) {
    super();
    this.state = {}
  }

  componentWillMount() {
    this.setState({ textValue: this.props.value })
  }

  format = (preCh, postCh, convertBr) => {
    const textValue = format(preCh, postCh, this.state, convertBr)
    this.setState({ textValue })
    this.saveChanges(textValue)
  }

  onClick = (el, att) => {
    const {selectionStart, selectionEnd } = el.target
    const selectedText = el.target.textContent
                            .substr(selectionStart, selectionEnd - selectionStart)
    this.setState({ selectionStart, selectionEnd, selectedText })
  }

  saveChanges(value) {
    this.props.onChange({target: {value}})
  }

  onChange = (el, attr) => {
    this.setState({ textValue: attr.value })
    this.props.onChange(el, attr)
  }

  render() {
    const lineBreaks = `

`
    const lineBreak = `
`
    return (
      <TextEditorStyles>
        <div className="toolbox">
          <div className="cell"
               onClick={() => this.format('#### ', '')}>
            <Icon name="heading" />
          </div>
          <div className="cell bold"
               onClick={() => this.format('**', '**')}>
            <Icon name="bold" />
          </div>
          <div className="cell italic"
               onClick={() => this.format('*', '*')}>
            <Icon name="italic" />
          </div>
          <div className="cell"
               onClick={() => this.format('__', '__')}>
            <Icon name="underline" />
          </div>
          <div className="cell"
               onClick={() => this.format('~~', '~~')}>
            <Icon name="strikethrough" />
          </div>
          <div className="cell paragraph"
            onClick={() => this.format(lineBreaks, '')}>
            <Icon name="paragraph" />
          </div>
          <div className="cell"
               onClick={() => this.format('> ', lineBreak)}>
            <Icon name="quote left" />
          </div>
          <div className="cell list"
               onClick={() => this.format(`${lineBreak}1. `, lineBreak, `${lineBreak}1. `)}>
            <Icon name="list ol" />
          </div>
          <div className="cell"
               onClick={() => this.format(`${lineBreak}* `, lineBreak, `${lineBreak}* `)}>
            <Icon name="list ul" />
          </div>
          <div className="cell code"
               onClick={() => this.format('`', '`')}>
            <Icon name="code" />
          </div>
          <div className="cell"
            onClick={() => this.format('```' + lineBreak, lineBreak + '```' + lineBreak)}>
            <Icon name="file code outline" />
          </div>
          <div className="cell"
               onClick={() => this.format('![file_name]', '(replace_with_image_url)')}>
            <Icon name="image" />
          </div>
        </div>
        <TextArea {...this.props}
                  onBlur={() => {} }
                  onKeyUp={this.onClick}
                  onClick={this.onClick}
                  value={this.state.textValue}
                  onChange={this.onChange} />
        {this.props.showSubmit &&
          <span>
            <Button className="save-btn"
                    inverted
                    onClick={this.props.onSubmit}>
              <Icon name="save" /> Save
            </Button>
            {this.props.onCancel &&
              <Button className="save-btn"
                      onClick={this.props.onCancel}>
                <Icon name="save"/> Cancel
              </Button>
            }
          </span>
        }
      </TextEditorStyles>
    )
  }
}

export default PlogMarkdownEditor

