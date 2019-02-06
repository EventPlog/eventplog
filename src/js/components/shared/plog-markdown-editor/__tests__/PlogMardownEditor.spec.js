import React from 'react'
import PlogMarkdownEditor, {
  format
} from '../PlogMarkdownEditor'
import { shallow } from 'enzyme'
import TextArea from 'js/components/shared/text-area'
import Button from 'js/components/shared/button'

describe('PlogMarkdownEditor', () => {
  const props = {
    value: 'Everyday sun',
    onChange: () => {},
    showSubmit: true,
    onSubmit: () => {},
  }
  const wrapper = shallow( <PlogMarkdownEditor {...props} /> );

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()

    expect(wrapper.find(TextArea).length).toEqual(1)
    expect(wrapper.find(Button).length).toEqual(1)
  })
})

describe('format', () => {
  const text = 'This is a text'
  const state = {
    selectionStart: 'This '.length,
    selectionEnd:  'This is'.length,
    selectedText: 'is',
    textValue: text,
  }

  it('appends the right pre and post characters to a str', () => {
    expect(format('**', '**', state)).toEqual('This **is** a text')
  })

  describe('when a linebreak char is supplied', () => {
    const lineBreak = `
`
    const lineBreaks = `

`
    const str = `
There is no time for
melodrama
parental care
Or anything like that
`
    const selectionStart = `
There is no time for
`.length

    const selectionEnd = `
There is no time for
melodrama
parental care`.length

    const selectedText = `melodrama
parental care`

    const expected = `
There is no time for

* melodrama
* parental care

Or anything like that
`

    const newState = {
      selectionStart, selectionEnd, selectedText, textValue: str
    }
    const result = format(`${lineBreak}* `, lineBreak, newState, `${lineBreak}* `)
    it('replaces line breaks with the supplied char', () => {
      expect(result).toEqual(expected)
    })
  })
})