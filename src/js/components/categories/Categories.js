// @flow

import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';
import { PrivateRoute, PublicRoute} from 'js/auth'

// internal components
import createLoader from '../shared/loading/createLoadable'
import styled  from 'styled-components';


const Categories = createLoader(() =>
  import('./scenes/categories/index'  /* webpackChunkName: "Categories" */), 'Categories')

const Category = createLoader(() =>
  import('./scenes/category' /* webpackChunkName: "CategoryWithContainer" */), 'CommunityWithContainer')

const NewCategory = createLoader(() =>
  import('./scenes/new-category' /* webpackChunkName: "NewCategory" */), 'NewCommunity')


const StyledCategoryPlog = styled.div`
  height: 100%;
  min-height: calc(100vh - 350px);

  
  a, a:hover {
    color: var(--activeLink);
  }
`

type CategoryPtlogType = {
  categories?: any,
  categories?: any,
  user?: any
}

const CategoryPlog = () => (
    <StyledCategoryPlog>
      <Switch>
        <PublicRoute exact path="/categories" component={Categories} />
        <PrivateRoute exact path="/categories/new" component={NewCategory} />
        <PublicRoute path="/categories/:id" component={Category} />
        <PublicRoute path="/cat/:id" component={Category} />
        <PublicRoute exact path="/c" component={Categories} />
        <PublicRoute exact path="/c/new" component={NewCategory} />
        <PublicRoute path="/c/:id" component={Category} />
        <PublicRoute path="/ext/c/:id" component={Category} />

        <PublicRoute path="/" component={Categories} />
      </Switch>
    </StyledCategoryPlog>
)

export default CategoryPlog
