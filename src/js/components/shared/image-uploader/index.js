import ImageUploader from './ImageUploader'
import ImageUploaderContainer from './ImageUploaderContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(ImageUploaderContainer, ImageUploader)