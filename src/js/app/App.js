import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import 'nprogress/nprogress.css'

// ======= INTERNAL ========
import {Auth, PrivateRoute, PublicRoute} from 'js/auth'
import Lead from 'js/components/leads/leads-creation'
import createLoadable from '../components/shared/loading/createLoadable'
import handleLogout from '../utils/handleLogout'
import Header from 'js/components/header'
import Footer from 'js/components/footer'
import universalStyles from '../styles/universalStyles'
import NewInvitationBar from 'js/components/invitations/components/new-invitation-bar'
import HelpPage from '../components/help';
import Legal from '../components/legal';
import ScrollToTop from '../components/shared/scroll-to-top'
import Aboutus from 'js/components/about-us'
import WhyEventplog from 'js/components/why-eventplog'
import appThemeColors from 'js/styles/theme/variables'
import BreadCrumb from 'js/components/shared/breadcrumb'
import { darken } from 'polished'



//const Homepage = createLoadable(() => import('./homepage'  /* webpackChunkName: "homepage" */))
const Login = createLoadable(() => import('js/components/login'  /* webpackChunkName: "login" */))
const Events = createLoadable(() => import('js/components/events'  /* webpackChunkName: "EventPlog" */))
const User = createLoadable(() => import('js/components/user'  /* webpackChunkName: "EventPlog" */))
const Communities = createLoadable(() => import('js/components/communities' /* webpackChunkName: "JoinACommunity" */))
const Community = createLoadable(() => import('js/components/communities/scenes/community' /* webpackChunkName: "JoinACommunity" */))
const Password = createLoadable(() => import('js/components/password' /* webpackChunkName: "Password" */))

const StyledApp = styled.div`
  --activeLink: ${props => props.theme.activeLink};
  --activeLinkBg: ${props => props.theme.activeLinkBg};
  
  ${universalStyles}
`

class App extends Component {
  state = { activeItem: 'home' };

  render() {
    const { activeLink, showBreadCrumb, store } = this.props;
    const activeLinkBg = darken(0.1, activeLink)
    return (
      <ThemeProvider theme={{
        ...appThemeColors,
        activeLink,
        activeLinkBg,
      }}>
      
        <ScrollToTop>
          <StyledApp>
            <Header />
            {showBreadCrumb && <BreadCrumb {...this.props.location} />}
            <NewInvitationBar />
            <Switch>
              <Route exact path="/" component={Events} />
              <Route exact path="/login" component={Login} />
              <Route path="/legal" component={Legal} />
              <Route exact path="/logout" render={() => handleLogout(store)} />
              <Route exact path="/signup" component={Login} />
              <Route path="/leads/:id" component={Lead} />
              <Route path="/user" component={User} />
              <Route path="/password" component={Password} />
              <Route path="/help" component={HelpPage} />
              <Route path="/about-us" component={Aboutus} />
              <Route path="/why-eventplog" component={WhyEventplog} />
              <Route path="/events" component={Events} />
              <Route path="/c" component={Communities} />
              <Route path="/communities" component={Communities} />
              <Route path="/e/*" component={Events} />
            </Switch>
            <Footer />
          </StyledApp>
        </ScrollToTop>
      </ThemeProvider>
    )
  }
}

export default withRouter(App)
