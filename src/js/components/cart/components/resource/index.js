import Resource from './Resource'
import ResourceContainer from '../../CartItemContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(ResourceContainer, Resource)