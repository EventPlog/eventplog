import EventSettings from './FeedbackSettings'
import EventSettingsController from './FeedbackSettingsContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(EventSettingsController, EventSettings)