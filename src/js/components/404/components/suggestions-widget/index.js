import SuggestionsWidget from './SuggestionsWidget'
import SuggestionsContainer from './SuggestionsContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(SuggestionsContainer, SuggestionsWidget)