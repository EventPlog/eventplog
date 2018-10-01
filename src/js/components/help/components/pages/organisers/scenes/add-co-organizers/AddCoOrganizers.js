import React from 'react'
import Topic from 'js/components/help/components/topic'
import Description from 'js/components/help/components/help-description'
import {Link} from 'react-router-dom'
import HelpImage from 'js/components/help/components/image'

const AddCoOrganizers = () => {
  return(
    <div>
      <Topic>
        How to Add Co-organizers
      </Topic>
      <Description>
        <p>
          To add co-organizers, go to your event page. Yes! the event you just created
          and click on the backstage button found on the top right hand corner of your event page.
        </p>
        <HelpImage src="https://farm2.staticflickr.com/1905/31023010438_6988596232_o.png" alt="event page" />
        <p>
          The backstage of your event looks not so different from this. The differences lie in the information
          you have entered while editing your event.
        </p>
        <HelpImage src="https://farm2.staticflickr.com/1905/31023010438_6988596232_o.png" alt="backstage" />
        <p>
          On the backstage, make use of the settings button to find 'add organizers' .
        </p>
        <HelpImage src="https://farm2.staticflickr.com/1955/43983871165_e505a035de_o.png" alt=" add organizer"/>
        <p>
          Enter the e-mail address or addresses of anyone or people you would
          want to add as co-organizers. Their roles may also be that of volunteers. Be sure to select the role
          accordingly. A custom message can also be sent along with the invitation to be a co-organizer.
        </p>
        <p>
          Do not forget to click on the invite button when you are done filling in the details.
        </p>     
      </Description>
    </div>
  );
}

export default AddCoOrganizers;