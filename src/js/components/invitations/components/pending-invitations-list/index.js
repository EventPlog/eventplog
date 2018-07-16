import PendingInvitationsList from './PendingInvitationsList'
import InvitationsController from '../../InvitationsContainter'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(InvitationsController, PendingInvitationsList)