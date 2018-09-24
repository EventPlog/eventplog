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
        <p>
          Sharing tasks can make planning less burdensom. 
          To assign tasks to co-organizers, go to your event page and click on backstage.
        </p>
        <HelpImage src="https://farm2.staticflickr.com/1905/43084423060_6102687555_o.png" alt="backstage"/>
        <p>
          On the backstage, select planning and go to the all tasks section.
        </p>
        <HelpImage src="https://farm2.staticflickr.com/1946/43084418630_ef7fe2178b_o.png" alt="planning, all task"/>
        <p>
          scroll to the bottom of the all task section to add task and assign task.
        </p>
        <HelpImage src="https://farm2.staticflickr.com/1930/43084424880_afcba43281_o.png" alt="add task"/>
        <p> 
          Click on the task you just added
        </p>
        <HelpImage src="https://farm2.staticflickr.com/1958/44896305591_b4835daebf_o.png" alt="edit task"/>
        <p> 
          Edit details of the task. From here you can:
          <ul>
            <li>Assign a status to the task, such as pending, in progress or done.</li>
            <li>Assign a task owner. Usually, you can assign task owners from a list of your volunteers or co-organizers. </li>
            <li>Add a deadline to the task </li>
            <li>Ad a comment that would be sent to the task owner.</li>
          </ul>
        </p>
        <HelpImage src="https://farm2.staticflickr.com/1967/43983870245_90762f49eb_o.png" alt="assign task"/>
      </Description>
    </div>
  );
}

export default AssignTask;