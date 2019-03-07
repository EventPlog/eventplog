window.EVENTPLOG = {}

import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import 'nprogress/nprogress.css'

// ======= INTERNAL ========
import {Auth, PrivateRoute, PublicRoute} from 'js/auth'
import createLoadable from '../components/shared/loading/createLoadable'
import handleLogout from '../utils/handleLogout'
import Footer from 'js/components/footer1'
import Header from 'js/components/header/main-header'
import ExternalFooter from 'js/components/footer/ExternalFooter'
import universalStyles from '../styles/universalStyles'
import NewInvitationBar from 'js/components/invitations/components/new-invitation-bar'
import ScrollToTop from '../components/shared/scroll-to-top'
import appThemeColors from 'js/styles/theme/variables'
import AppMenu from 'js/components/app-menu'
import { lighten, darken } from 'polished'

window.EVENTPLOG.toast = require('js/components/shared/ep-toast').default



//const Homepage = createLoadable(() => import('./homepage'  /* webpackChunkName: "homepage" */))
const Login = createLoadable(() => import('js/components/login'  /* webpackChunkName: "login" */))
const Events = createLoadable(() => import('js/components/events'  /* webpackChunkName: "EventPage" */))
const User = createLoadable(() => import('js/components/user'  /* webpackChunkName: "UserPage" */))
const Communities = createLoadable(() => import('js/components/communities' /* webpackChunkName: "JoinACommunity" */))
const Community = createLoadable(() => import('js/components/communities/scenes/community' /* webpackChunkName: "JoinACommunity" */))
const Password = createLoadable(() => import('js/components/password' /* webpackChunkName: "Password" */))
const HelpPage = createLoadable(() => import('js/components/help' /* webpackChunkName: "HelpPage" */))
const Legal = createLoadable(() => import('js/components/legal' /* webpackChunkName: "Legal" */))
const AboutUs = createLoadable(() => import('js/components/about-us' /* webpackChunkName: "AboutUs" */))
const WhyEventPlog = createLoadable(() => import('js/components/why-eventplog' /* webpackChunkName: "WhyEventPlog" */))
// const Partners = createLoadable(() => import('js/components/partners' /* webpackChunkName: "Partners" */))
const Search = createLoadable(() => import('js/components/search' /* webpackChunkName: "SearchPage" */))
const Categories = createLoadable(() => import('js/components/categories' /* webpackChunkName: "SearchPage" */))
const NotFound = createLoadable(() => import('js/components/404' /* webpackChunkName: "NotFoundPage" */))
const Sponsors = createLoadable(() => import('js/components/sponsors'  /* webpackChunkName: "SponsorPage" */))

const SIDEBAR_WIDTH = '150px'

const StyledApp = styled.div`
  --activeLink: ${props => props.theme.activeLink};
  --activeLinkBg: ${props => props.theme.activeLinkBg};
  --primaryLight: ${props => lighten(0.55, props.theme.activeLink)};
  position: relative;
  padding-top: 47px;
 
  ${universalStyles}
  
`

class App extends Component {
  render() {
    const {
      activeLink,
      isInternalPath,
      showBreadCrumb,
      store,
      width,
      height,
      showSidebar,
      currentUser,
      toggleSidebar,
    } = this.props;

    const activeLinkBg = darken(0.1, activeLink)
    const isMobile = width < 650
    const sidebarVisible = showSidebar == undefined ? !isMobile : showSidebar
    return (
      <ThemeProvider theme={{
        ...appThemeColors,
        activeLink,
        activeLinkBg,
        width,
        height,
        sidebarWidth: SIDEBAR_WIDTH,
        showSidebar: sidebarVisible,
        toggleSidebar,
      }}>
      
        <ScrollToTop>
          <StyledApp>
            <Header {...{store, currentUser, toggleSidebar}} />
            <AppMenu isInternalPath={isInternalPath}>
              {<NewInvitationBar />}
              <Switch>
                <Route exact path="/" component={Events} />
                <Route exact path="/login" component={Login} />
                <Route path="/legal" component={Legal} />
                <Route exact path="/logout" render={() => handleLogout(store)} />
                <Route exact path="/signup" component={Login} />
                <Route path="/u" component={User} />
                <Route path="/user" component={User} />
                <Route path="/password" component={Password} />
                <Route path="/help" component={HelpPage} />
                <Route path="/about-us" component={AboutUs} />
                <Route path="/why-eventplog" component={WhyEventPlog} />
                <Route path="/events" component={Events} />
                <Route path="/sponsors" component={Sponsors} />
                <Route path="/c" component={Communities} />
                <Route path="/communities" component={Communities} />
                <Route path="/search" component={Search} />
                <Route path="/cat" component={Categories} />
                <Route path="/categories" component={Categories} />
                <Route path="/e/*" component={Events} />
                <Route path="/ext/e/*" component={Events} />
                <Route path="/ext/c/*" component={Communities} />
                <Route path="*" component={NotFound} />
              </Switch>
              {isInternalPath && <Footer />}
              {!isInternalPath && <ExternalFooter />}
            </AppMenu>
          </StyledApp>
        </ScrollToTop>
      </ThemeProvider>
    )
  }
}

export default withRouter(App)
