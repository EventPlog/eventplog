import MySettings from './MySettings'
import MySettingsContainer from './MySettingsContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(MySettingsContainer, MySettings)