import React from 'react'
import Topic from 'js/components/help/components/topic'
import Description from 'js/components/help/components/help-description'
import {Link} from 'react-router-dom'
import HelpImage from 'js/components/help/components/image'

const CheckInGuest = () => {
  return(
    <div>
      <Topic>
        How to Check Your Guest In
      </Topic>
      <Description>
        <p>
          To check guest in, you need to have them registered for your event on <Link to="" >eventplog</Link> otherwise
          If you have your guest registered from an external source you can <Link to="" >upload your guest CSV</Link> to have your
          guest list on eventplog. 
        </p>
        
        <p>
          Go to the backstage of your event and click on guest.
        </p>
        <HelpImage src="https://farm2.staticflickr.com/1905/31023010438_6988596232_o.png" alt ="backstage"/>
        <p>
          On the guest section, select all guest.
          Note that your 'all guest' list is comprised of the list of all names 
          imported through your event CSV or those who have registered for your event
          through eventplog.
        </p>
        <HelpImage src="https://farm2.staticflickr.com/1971/43084424420_95ce72340b_o.png" alt ="all guest list"/>
        <p>
          Click on 'check in' for each guest to check them in. You can also search for the name of a guest
          from the list and check them in.
        </p>   
        <p>
          A more convenient way would be to scan a unique messenger code for your event. 
          The messenger code will only check in guest whose email addresses have been imported from your CSV 
          or have registered for our event through eventplog.
        </p>
        <HelpImage src="https://farm2.staticflickr.com/1970/43084419050_b94c2192d4_o.png" alt="messenger check-in"/>
      </Description>
    </div>
  );
}

export default CheckInGuest;