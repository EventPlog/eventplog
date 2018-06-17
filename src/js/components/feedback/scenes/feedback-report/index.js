import EventReport from './FeedbackReport'
import EventReportContainer from './FeedbackReportContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(EventReportContainer, EventReport)