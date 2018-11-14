import React from 'react'
import { Switch, Route } from 'react-router-dom'

// internal components
import MainContent from './components/main-content'
import TodoItem from 'js/components/todo-items/components/todo-item'
import withProps from 'js/lib/render-with-props'

const EventPlanning = (props) => {
  return (
      <Switch>
        <Route exact path='/e/:event_id/backstage' render={withProps(MainContent, props)} />
        <Route exact path='/e/:event_id/backstage/tasks' render={withProps(MainContent, props)} />
        <Route path='/e/:event_id/backstage/tasks/:id' render={withProps(TodoItem, props)} />

        <Route exact path='/c/:community_id/e/:event_id/backstage' render={withProps(MainContent, props)} />
        <Route exact path='/c/:community_id/e/:event_id/backstage/tasks' render={withProps(MainContent, props)} />
        <Route path='/c/:community_id/e/:event_id/backstage/tasks/:id' render={withProps(TodoItem, props)} />
      </Switch>
  )
}
export default EventPlanning;
