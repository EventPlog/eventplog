import React from 'react'
import Topic from 'js/components/help/components/topic'
import Description from 'js/components/help/components/help-description';
import {Link} from 'react-router-dom'
import allguest from 'img/help-pages/allguest.png'
import importcsv from 'img/help-pages/importcsv.png'
import newguest from 'img/help-pages/newguest.png'
import botcode from 'img/help-pages/botcode.png'
import HelpImage from 'js/components/help/components/image'

const EventGuests = () => {
  return( 
    <div> 
      <Topic>Guest Information</Topic>
      <Description>
        When I navigate to guests, I want to to add new guests so I can have their information.
        Right after using the backstage button, you can find Guest related information on 
        the guest section.
        If your guests have indicated interest in the event through eventplog, you can find your guest
        information on the guest section of backstage. You can directly check them in from here.
        <HelpImage src={allguest} alt="all guest information"/>
        <Topic>Import Guest information</Topic>
        You can also import your guest CSV if you have collected guest information on a different URL.
        When you import the list, the guest information moves to the all guests section where you can
        check them in.
        <HelpImage src={importcsv} alt="import csv"/><br/>
        <Topic>Unregistered guest</Topic>
        If there are new guest that have arrived at the event venue but did not register, you can register and
        check them in by clicking on resister new guest. 
        <HelpImage src={newguest} alt="New guest"/><br/>
        <Topic>Messenger code for checkin</Topic>
        Find your unique messenger code on the messenger code section. Your guests the
        code to check into the event using messenger code scanner.
        <HelpImage src={botcode} alt=" Messenger Bot Code"/>
      </Description> 
    </div>
  )
}

export default EventGuests