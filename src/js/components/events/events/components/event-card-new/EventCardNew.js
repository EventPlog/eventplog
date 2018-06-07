import React from 'react'
//import image from '../../../../../../img/eventplog-logo-name-inverted-medium'
import styled from 'styled-components'
import colors from '../../../../../../styles/theme/colors';
import Button from '../../../../shared/button'
import {Link} from 'react-router-dom'

const StyledEventCardNew = styled.div`

margin-left: 75px;
margin-bottom: 15px;
border-radius: .28571429rem;
box-shadow: 0 1px 3px 0 #d4d4d5,0 0 0 1px #d4d4d5;

.event-card-div{
    display: flex;
    font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
    padding: 10px 10px;
}
img{
    display: inline-table;
    width: 100px;
    height: 100px;
}
.event-card-title{
    color: ${colors.primary}
    font-size: 1.5rem;
}

.event-card-info{
    margin: 0px 40px;
    padding: 0px 20px;
}
.event-organizer{
    font-size: 1rem; 
}
.event-organizer p{
    display: inline-flex;
    color: ${colors.primary}
    
}
.event-date-and-time{
    font-size: 1rem; 
}
.event-venue{
    font-size: 1rem; 
}
.event-card-button{
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
        <div className="event-card-div">
            <div className="event-card-image">
                <img src="image"/>
            </div>
            <div className="event-card-info">
                <div className="event-card-title">
                    <p><Link to={`events/${event.id}`}>{event.title || 'No title'}</Link></p>
                </div>
                <div className="event-organizer">
                organized by:  <p>{ event.organizer || 'No organizer' }</p>
                </div>
                <div className="event-date-and-time">
                    <p>{ getDate(event.start_time) || 'No specified time' }</p>
                </div>
                <div className="event-venue">
                    <p>{event.venue||'No Venue'}</p>
                </div>
            </div>
            <div className="event-card-button">
                <Button>I'm Interested</Button>
            </div>
        </div>
        
        </StyledEventCardNew>
    )
}
export default EventCardNew