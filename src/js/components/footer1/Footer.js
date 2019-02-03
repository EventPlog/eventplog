import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react'
import { lighten } from 'polished';

// ============ INTERNAL =============
import colors from 'js/styles/theme/colors';
import eventplogLogo from 'img/eventplog-logo-v11-alt.png'
import { media, maxMedia } from 'js/styles/mixins';
import Button from 'js/components/shared/button'
// import MainMenu from 'src/components/main-banner/MainMenu'

const StyledFooter = styled.footer`
  background-color: ${colors.primary};


  .container {
    color: ${colors.white};
    height: auto;
    display: flex;
    flex: 1;
    padding-top: 2rem;

    ${
      media.phone`
        flex-direction: column;
      `
    }

    .aside1 {
      flex: 1;
      padding: 2rem 0;
      padding-left: 1rem;
      
      ${
        media.tablet`
          padding: 2rem;
          padding-right: 0;
        `
      }
      
      ${
        media.phone`
          display: flex;
          flex-direction: column;
          padding: 1rem;
        `
      }
      
      .summary {
        display: flex;  
        height: 100%;
        width: auto;
        border-right: 2px solid ${colors.yellow};
        position: relative;

        ${
          media.tablet`
            flex-direction: column;
          `
        }
        
        ${
          media.phone`
            flex-direction: column;
            border: none;
          `
        }
        
        .summary-item {
          padding: 1.5rem;

            ${
              media.tablet`
                max-width: 100%;
                padding-left: 0;
              `
            }
            
          &.logo-hold {
            padding-left: 0;
            display: flex;
            flex-direction: column;
            max-width: 50%;
            justify-content: inherit;
            
            ${
              media.tablet`
                max-width: none;
                padding-top: 0;
              `
            }
            
            ${
              media.phone`
                margin: 3rem 0;
                max-width: none;
              `
            }
            
            img {
              width: 180px;
              margin-bottom: 1rem;
            }
          }
          
          ${
            media.phone`
              width: auto;
              padding: 0;
            `
          }
          
          .header {
            height: 18px;
            color: ${colors.yellow};
            font-size: 17.61px;
            letter-spacing: 1.06px;
            line-height: 22px;
            margin-top: 0;
          }

          .details {
            font-size: 1rem;
            letter-spacing: 0.9px;
            color: ${lighten(0.5, colors.darkGray)};
            line-height: 1.6;
          }
          
          a:not(.create-event-btn) {
            color: ${lighten(0.5, colors.darkGray)};
            
            &:hover: var(--yellow);
          }
        }
      }
    }

    .contact-us {
      line-height: 22px;
      padding: 1rem 2rem 0;

      ${
        media.phone`
          padding: 1rem;
        `
      } 
      
      h3 {
        color: ${colors.yellow};	
        
        font-size: 15.61px;	
        letter-spacing: 0.94px;	
        text-transform: uppercase;
        
        ${
          media.tablet`
            margin-top: 3rem;
          `
        }
      }
      
      p {
        color: ${colors.yellow};
        font-size: 17.61px;	
        letter-spacing: 1.06px;	      
        padding-top: 20px;
        margin-bottom: 0.2rem;
      }
      
      .social {
        width: 50%;
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
        
        ${
          media.tablet`
            margin-bottom: 3rem;
          `
        }
        
        a {
          color: white;
          font-size: 1.5rem;
        }
      }
      .subscribe {
        display: flex;
        flex-direction: row;
        padding: 2px;
        height: 40px;
        border-radius: 100px; 
        position: relative;
        align-items: center;
        
        input {
          flex-grow: 2;
          border: none;
          border-radius: 25px;
          background-color: rgba(255,255,255,0.19);
          padding: 15px;
          box-sizing: border-box;
          color: ${colors.white};
        }

        input::placeholder { 
          color: ${colors.white};
          font-size: 1.2em; 
        }
        
        input:focus{
          outline: none;
        }
        
        button {
          position: absolute;
          background: transparent;
          color:white;
          cursor: pointer;
          border: transparent;
          
          right: 0.36rem;
          background: var(--yellow);
          border-radius: 50%;
          padding: 10px 10px;
          height: auto;
          color: var(--activeLink);
          font-size: 1.2rem;
          
          &:hover {
            background: ${lighten(0.1, colors.yellow)};
          }
          
          i {
            margin: 0;
          }
        }    
      }
      .contact-detail {
        position: relative;
        bottom: 5px;
        padding-left: 10px;
        color: ${lighten(0.5, colors.darkGray)};
      }
      .icon {
        width: 1.2rem;
      }

      ul {
        li:first-child {
          padding-top: 20px;
        }

        li {
          padding-bottom: 13px;
        }   
        
      }
    }
  }
  
  .aside2 {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;
    color: ${colors.yellow};	
    font-size: 14.61px;	
    letter-spacing: 0.88px;	
    line-height: 18px;
    background: ${lighten(-0.2, colors.primary)};

    ${
      media.phone`
        padding: 1rem;
        flex-direction: column;
      `
    }
    
    a {
      color: ${props => props.theme.yellow};	
    }
    
    .copyright {
      padding-right: 1.4rem;
    }
    
    .copy-hold {
      ${
        media.phone`
          margin-bottom: 1rem;
        `
      }
    }
    
    .app-container {
      justify-content: space-between;
      ${
        media.phone`
          align-items: flex-start;
        `
      }
    }
  }
  
  a.create-event-btn {
    background: var(--yellow);
    color: var(--activeLink);
    display: inline-block; 
    margin-top: 1rem;
    
    &:hover {
      background: ${lighten(-0.1, colors.yellow)};
      color: var(--activeLink);
    }
  }
  
  .footer-main-menu {
    justify-content: flex-start;
    align-items: flex-start;
    height: auto;
    
    ul {
      display: flex;
      flex-direction: column;
      
      li {
        padding: 0;
        font-size: 1rem;
        text-transform: unset;
        margin: 0.5rem 0;
        
        a {
          color: ${lighten(0.5, colors.darkGray)};
          
          &:hover {
            color: var(--yellow);
          }
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="app-container">
        <div className="container">
          <div className="aside1">
            <div className="summary">
              <div className="summary-item logo-hold">
                <img src={eventplogLogo} alt="eventplog-logo" />
                <p className="details">EventPlog helps you create, discover and sponsor the right events.</p>
                <div>
                  <Button.Link className="create-event-btn"
                               to="/e/new">
                    Create an Event
                  </Button.Link>
                </div>
              </div>

              <div className="summary-item">
                <h4 className="header">USEFUL LINKS</h4>
                {/*<MainMenu className="footer-main-menu" />*/}
                <div className="footer-main-menu">
                  <ul>
                    <li><a href="https://blog.eventplog.com">Blog</a></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/communities">Communities</Link></li>
                    <li><Link to="/help">Help</Link></li>
                  </ul>
                </div>
              </div>

              {/*<div className="summary-item">*/}
              {/*<h4 className="header">HOW CAN YOU HELP YOU ?</h4>*/}
              {/*<p className="details">You book a request according to your requirements, and we match you with suitable creatives based on your preference.</p>*/}
              {/*</div>*/}
            </div>

          </div>
          <div className="contact-us">
            <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>

            <form className="subscribe" action="https://eventplog.us20.list-manage.com/subscribe/post" method="POST">
              <input type="hidden" name="u" value="f97aea69a37954bb0d3535d3f" />
              <input type="hidden" name="id" value="c82194a3c6" />
              <input type="hidden" name="ht" value="8101ab7982cedab953fd1edface07b9514b1f7fb:MTU0OTA4NTE3OC45OQ==" />
              <input type="hidden" name="mc_signupsource" value="hosted" />
              <input type="email" name="MERGE0" id="MERGE0" placeholder="Your email"  />

              <Button type="submit" inverted>
                <Icon name="envelope"/>
              </Button>
            </form>

            <h3>Reach out on social media</h3>
            <div className="social">
              <a href="https://facebook.com/eventplog" target="_blank">
                <Icon name="facebook"/>
              </a>
              <a href="https://twitter.com/eventplog" target="_blank">
                <Icon name="twitter"/>
              </a>
              <a href="https://instagram.com/eventplog" target="_blank">
                <Icon name="instagram"/>
              </a>
            </div>

            <ul>
              <li>
                 <span>
                   <Icon name="phone" rotated={180}/>
                 </span>
                <span className="contact-detail">
                  +234 8058917911
                </span>
              </li>
              <li>
                <span>
                   <Icon name="envelope" />
                </span>
                <span className="contact-detail">
                  hi@eventplog.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="aside2">
        <div className="app-container">
          <div className="copy-hold">
            <span className="copyright">&copy; {new Date().getFullYear()} EVENTPLOG LTD. All Rights Reserved.</span>
          </div>
          <div className="policies">
            <Link to="/legal/privacy-policy">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
