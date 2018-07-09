import React from 'react'
import styled from 'styled-components'
import Sidebar from '../../../../help-topics'
import Topic from '../../../../topic'
import Desrciption from '../../../../help-description'
import Description from '../../../../help-description';
import {Link} from 'react-router-dom'
import allguest from '../../../../../../../../img/help-pages/allguest.png'
import importcsv from '../../../../../../../../img/help-pages/importcsv.png'
import newguest from '../../../../../../../../img/help-pages/newguest.png'
import botcode from '../../../../../../../../img/help-pages/botcode.png'

const StyledEventGuests=styled.div`
.help-description-container{
  display:flex;
  margin 5px;
  padding: 5px;
}

img{
width:700px;
height: 500px;
}

.help-main-content{
  font-size: 15px;
  margin-left:80px;
  max-width: 650px;
}
`
const EventGuests = ()=>{
  return(
    <StyledEventGuests>
      <div className="help-description-container">
        <div ><Sidebar/></div> 
        <div className="help-main-content"> 
          <Topic>Guest Information</Topic>
          <Description>
            Right after using the backstage button, you can find Guest related information on 
            the guest section. <br/><br/> 
            If your guests have indicated interest in the event through eventplog, you can find your guest
            information on the guest section of backstage. You can directly check them in from here.
            <br/><br/> <img src={allguest} alt="all guest information"/><br/>
            <Topic>Import Guest information</Topic>
            You can also import your guest CSV if you have collected guest information on a different URL.
            When you import the list, the guest information moves to the all guests section where you can
            check them in.
            <br/><br/> <img src={importcsv} alt="import csv"/><br/>
            <Topic>Unregistered guest</Topic>
            If there are new guest that have arrived at the event venue but did not register, you can register and
            check them in by clicking on resister new guest. 
            <br/><br/> <img src={newguest} alt="New guest"/><br/>
            <Topic>Messenger code for checkin</Topic>
            Find your unique messenger code on the messenger code section. Your guests the
            code to check into the event using messenger code scanner.
            <br/><br/> <img src={botcode} alt=" Messenger Bot Code"/><br/><br/><br/>
          </Description> 
        </div>
      </div>
    </StyledEventGuests>
  )
}

export default EventGuests