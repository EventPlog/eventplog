import React from 'react'
import styled from 'styled-components'
import Topic from 'js/components/help/components/topic'
import Description from 'js/components/help/components/help-description'
import {Link} from 'react-router-dom'

const StyledWhyEventplog = styled.div`
  display: flex;
  justify-content:center;

  li {
    margin-left:2em;
  }
`

const WhyEventplog = () => {
  return(
    <StyledWhyEventplog className="app-container">
      <div className="why-eventplog-content">
        <Topic className="topic">
          Why EventPlog 
        </Topic>

        <Description>
          EventPlog is built by community organizers who are active administrators of more than five
          different communities. By the end of the first half of 2018, we directly planned 26 events 
          (at least one event every week). We main a <Link to="techmeetupsng.com">widely-read blog</Link> that celebrate tech events, 
          people and communities.
        </Description>

        <Topic>
          Our Problem
        </Topic>

        <Description>
          We use Splashthat and Eventbrite for RSVPs, twitter, emails and Facebook to reach out to guests 
          through social media. It doesn't take long to find a few issues:<br/>  
          <li>
            We couldn't get guests to be as involved in the process as we would like.<br/> 
          </li>  
          <li>
            It wasn't very easy getting sponsorships from local firms.<br/>  
          </li>
          <li>
            Our not-so-experienced planning teams of community volunteers needed a bit longer to sync 
            into productive planning.<br/>  
          </li>
          <li>
            Accountability throughout the entire planning process takes A LOT of effort to maintain.
          </li>
        </Description>

        <Topic>
          Our Solution
        </Topic>

        <Description>
          Eventplog focuses on the solving these problems for guests, sponsors and event planners. 
          It's not very uncommon to see on person having all three roles.
          For event planners, we are making it easy to accountably plan events, improve discoverability, 
          get sponsorships and carry guests along as much as you would like.
          For guests, we are making it easier to stay close to events you're interested in, give your input on 
          these events and document your learnings from these events.
          For sponsors, we are making it easier to reliably sponsor events that are genuine, 
          have measurable impact and are very accountable.
        </Description> 
        
        <Topic>
          The big picture
        </Topic>
        <Description>
          Education systems around the world are getting more democratic. Communities are 
          becoming important centers for learning and bridging skill gaps.
          The better we are able to get the people who play all three roles to work together towards 
          building impactful events, the faster a community can cheaply up-skill its workforce.<br/>
          To us, working together remains key.
        </Description>
      </div>
    </StyledWhyEventplog>
  )
}

export default WhyEventplog