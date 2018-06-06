import React from 'react'
//import image from '../../../../../../img/eventplog-logo-name-inverted-medium'
import styled from 'styled-components'
import colors from '../../../../../../theme/colors';
import Button from '../../../../shared/button'
import {Link} from 'react-router-dom'

const StyledEventCardNew = styled.div`

margin-left: 75px;
margin-bottom: 15px;
border-radius: .28571429rem;
box-shadow: 0 1px 3px 0 #d4d4d5,0 0 0 1px #d4d4d5;

.eventcarddiv{
    display: flex;
    font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
}
img{
    display: inline-table;
    width: 100px;
    height: 100px;
}
.eventcardtitle{
    color: ${colors.primary}
    font-size: 1.5rem;
}
.eventcarddiv{
    padding: 10px 10px;
}
.eventcardinfo{
    margin: 0px 40px;
    padding: 0px 20px;
}
.eventorganizer{
    font-size: 1rem; 
}
.eventorganizer p{
    display: inline-flex;
    color: ${colors.primary}
    
}
.eventdateandtime{
    font-size: 1rem; 
}
.eventvenue{
    font-size: 1rem; 
}
.eventcardbutton{
    margin: auto;
}

`
const getDate = (str) => {
    try {
      return Boolean(str)
        ? (new Date(str)).toDateString()
        : null
    }
    catch(e) {
      return null
    }
  }
const EventCardNew =({event ={}})=>{
    return(
        <StyledEventCardNew>
        <div className="eventcarddiv">
            <div className="eventcardimage">
                <img src="image"/>
            </div>
            <div className="eventcardinfo">
                <div className="eventcardtitle">
                    <p><Link to={`events/${event.id}`}>{event.title || 'No title'}</Link></p>
                </div>
                <div className="eventorganizer">
                organized by:  <p>{ event.organizer || 'No organizer' }</p>
                </div>
                <div className="eventdateandtime">
                    <p>{ getDate(event.start_time) || 'No specified time' }</p>
                </div>
                <div className="eventvenue">
                    <p>{event.venue||'No Venue'}</p>
                </div>
            </div>
            <div className="eventcardbutton">
                <Button>I'm Interested</Button>
            </div>
        </div>
        
        </StyledEventCardNew>
    )
}
export default EventCardNew