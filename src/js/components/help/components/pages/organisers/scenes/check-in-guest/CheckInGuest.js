import React from 'react'
import Topic from 'js/components/help/components/topic'
import Description from 'js/components/help/components/help-description'
import {Link} from 'react-router-dom'
import HelpImage from 'js/components/help/components/image'
import Image from 'js/components/help/components/videos'

const CheckInGuest = () => {
  return(
    <div>
      <Topic>
        How to Check Guest In
      </Topic>
      <Description>
        To check guest in, you need to have them registered for your event on <Link to >eventplog</Link> otherwise
        If you have your guest registered from an external source you can <Link to >upload your CSV</Link> to have your
        guest list on eventplog. From your guest list, you can search for a guest name and click on check-in to check
        them in. 
        A more convenient way would be to scan a unique messenger code for your event. The messenger code will only
        check in guest whose email addresses have been imported or have registered for our event through evntplog.
        
      </Description>
    </div>
  );
}