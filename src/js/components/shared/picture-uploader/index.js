import PictureUploader from './PictureUploader'
import PictureUploaderContainer from './PictureUploaderContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(PictureUploaderContainer, PictureUploader)