import React from 'react'
import Topic from 'js/components/help/components/topic'
import Description from 'js/components/help/components/help-description';
import {Link} from 'react-router-dom'
import HelpImage from 'js/components/help/components/image'

const EventGuests = () => {
  return( 
    <div> 
      <Topic>Guest Information</Topic>
      <Description>
        <p>
          When you click on the backstage button, you can find Guest related information on
          the guest section.
        </p>
        <p>
          If your guests have indicated interest in the event through eventplog, you can find your guest
          information on the guest section of backstage. You can directly check them in from here.
        </p>

        <HelpImage src="https://farm2.staticflickr.com/1971/43084424420_95ce72340b_o.png" alt="all guest information"/>

        <Topic>Import Guest information</Topic>

        <p>
          You can also import your guest CSV if you have collected guest information on a different URL.
          When you import the list, the guest information moves to the all guests section where you can
          check them in.
        </p>

        <HelpImage src="https://farm2.staticflickr.com/1975/43084419940_397a908df2_o.png" alt="import csv"/><br/>

        <Topic>Unregistered guest</Topic>

        <p>
          If there are new guest that have arrived at the event venue but did not register, you can register and
          check them in by clicking on resister new guest.
        </p>

        <HelpImage src="https://farm2.staticflickr.com/1978/44896305971_a47eb888b2_o.png" alt="New guest"/><br/>

        <Topic>Messenger code for checkin</Topic>

        <p>
          Find your unique messenger code on the messenger code section. Your guests the
          code to check into the event using messenger code scanner.
        </p>

        <HelpImage src="https://farm2.staticflickr.com/1946/31023685208_4cb023d927_o.png" alt=" Messenger Bot Code"/>
      </Description> 
    </div>
  )
}

export default EventGuests