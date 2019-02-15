// @flow

// External
import React, { Component } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

// Internal
import { PrivateRoute } from 'js/auth'
import Loading from 'js/components/shared/loading'
import createLoader from 'js/components/shared/loading/createLoadable'
import CategoryHeader from './components/category-header'
import { media } from 'js/styles/mixins'


const CategoryMainContent = createLoader(() =>
  import('./components/main-content-body' /* webpackChunkName: "MainContent" */))

const Events = createLoader(() =>
  import('js/components/events' /* webpackChunkName: "Event" */))

const UpdateCategory = createLoader(() =>
  import('js/components/categories/scenes/update-category' /* webpackChunkName: "NewCategory" */))

const StyledMain = styled.div`
`;

type Props = {
  defaultTheme: object,
};



const Main = ({activeLink, ...props}) => {
  if (props.category && props.category.loading) {
    {/*return <Loading />*/}
  }
  if (props.category && props.category.error) {
    {/*return <Loading.Error msg={props.category.error} />*/}
  }
  return (
    <StyledMain activeLink={activeLink}>

      <CategoryHeader {...props} />
      <Switch>
        <Route exact path="/" render={(routerProps) => <CategoryMainContent {...props} />}/>
        <PrivateRoute exact path="/categories/:id/edit" render={() => <UpdateCategory {...props} />} />
        <Route exact path="/cat/:id" render={() => <CategoryMainContent {...props} />}/>
        <Route path="/cat/*" render={() => <Events {...props} />}/>
        <Route exact path="/categories/:id" render={() => <CategoryMainContent {...props} />}/>
        <Route path="/categories/*" render={() => <Events {...props} />}/>

      </Switch>
    </StyledMain>
  )
}

export default Main;