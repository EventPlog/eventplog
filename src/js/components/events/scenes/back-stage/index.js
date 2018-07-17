import BackStageContainer from '../event/EventContainer'
import BackStage from './BackStage'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(BackStageContainer, BackStage)