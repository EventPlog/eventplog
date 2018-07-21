import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

// ======= INTERNAL ========
import {Auth, PrivateRoute} from 'js/auth'
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



//const Homepage = createLoadable(() => import('./homepage'  /* webpackChunkName: "homepage" */))
const Login = createLoadable(() => import('js/components/login'  /* webpackChunkName: "login" */))
const Events = createLoadable(() => import('js/components/events'  /* webpackChunkName: "EventPlog" */))
const User = createLoadable(() => import('js/components/user'  /* webpackChunkName: "EventPlog" */))
const Communities = createLoadable(() => import('js/components/communities' /* webpackChunkName: "JoinACommunity" */))
const Password = createLoadable(() => import('js/components/password' /* webpackChunkName: "Password" */))

const StyledApp = styled.div`
  --activeLink: ${props => props.theme.activeLink};
  
  ${universalStyles}
`

class App extends Component {
  state = { activeItem: 'home' };

  render() {
    const { activeLink, showBreadCrumb, store } = this.props;
    return (
      <ThemeProvider theme={{
        ...appThemeColors,
        activeLink,
      }}>
      
        <ScrollToTop>
          <StyledApp>
            <Header />
            {showBreadCrumb && <BreadCrumb {...this.props.location} />}
            <NewInvitationBar />
            <Switch>
              <Route exact path="/" render={(props) =>
                   Auth.isLoggedIn
                     ? <Events {...props} />
                     : <Login/>
                } />
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
              <PrivateRoute path="/events" component={Events} />
              <PrivateRoute path="/communities" component={Communities} />
            </Switch>
            <Footer />
          </StyledApp>
        </ScrollToTop>
      </ThemeProvider>
    )
  }
}

export default withRouter(App)
