import React from 'react'
import Topic from 'js/components/help/components/topic'
import Description from 'js/components/help/components/help-description'
import {Link} from 'react-router-dom'
import HelpImage from 'js/components/help/components/image'

const AssignTask = () =>{
  return(
    <div>
      <Topic>
        How to Add Assign Tasks to Co-organizers
      </Topic>
      <Description>
        Sharing tasks can make planning less burdensom. To assign tasks to co-organizers,
        click on the backstage button then click on planning, go to the all tasks section and 
        scroll to the bottom to add tasks. You can also add task by using the add task pane on the 
        planning section.
      </Description>
    </div>
  );
}

export default AssignTask;