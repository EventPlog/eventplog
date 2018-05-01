import React from 'react'
import StartPlanningContainer from './StartPlanningContainer'
import StartPlanningForm from './StartPlanningForm'

// This component takes adv of the renderProps pattern
// used in StartPlanningContainer
const StartPlanning = () => (
  <StartPlanningContainer>
    {(props) => (
      <StartPlanningForm {...props} />
    )}
  </StartPlanningContainer>
)

export default StartPlanning