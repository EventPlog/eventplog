import React from 'react'
import Topic from 'js/components/help/components/topic'
import Description from 'js/components/help/components/help-description'
import {Link} from 'react-router-dom'
import HelpImage from 'js/components/help/components/image'
import Image from 'js/components/help/components/videos'

const AddCoOrganizers = () =>{
  return(
    <div>
      <Topic>
        How to Add Co-organizers
      </Topic>
      <Description>
        To add co-organizers, click on the backstage button and on settings.
        Add organizer by clicking on organizer. Enter the e-mail addresses of
        any co-organizer you want to add to your event to invite them by clicking the 
        invite button.
      </Description>
    </div>
  );
}

export default AddCoOrganizers;