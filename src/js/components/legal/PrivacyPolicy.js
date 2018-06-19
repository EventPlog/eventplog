import React from 'react'
import styled from 'styled-components'
import {media} from '../../styles/mixins'
import Button from '../shared/button/Button'

const StyledPrivacyPolicy =styled.div`
${
  media.phone`
    margin:5px;
  `
}
  .title{
    text-align:center;
    ${
      media.phone`
        display: block;
        font-size: 1.2rem;
        
      `
    }
  }
  .subtitle{
    
    ${
      media.phone`
        display: block;
        font-size: 1rem;
        margin: 8px auto;
      `
    }
  }
  .content{
    text-align:justify;
    ${
      media.phone`
        display: block;
        font-size: 0.8rem;
      `
    }
  }

  .close-button{
   display:flex;
    justify-content: center;
  }
  
`

const PrivacyPolicy =()=>{
  return(
    <StyledPrivacyPolicy>
    <div className="privacy-policy-container">
        <heading><h5 className="title"> Privacy Policy</h5></heading><br/>
        
        <text className="content">This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.</text>
          <subtitle><h6 className="subtitle">What personal information do we collect from the people that visit our blog, website or app?</h6></subtitle>
          <text className="content">When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address or other details to help you with your experience.</text>
          <subtitle><h6 className="subtitle">When do we collect information?</h6></subtitle>
          <text className="content">We collect information from you when you register on our site, respond to a survey or enter information on our site.</text>
          <subtitle><h6 className="subtitle">How do we use your information?</h6></subtitle>
          <text className="content">We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:

           To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.
           To ask for ratings and reviews of services or products
          </text>
          <subtitle><h6 classname="subtitle">How do we protect your information? </h6></subtitle>
          <text className="content">
            We do not use vulnerability scanning and/or scanning to PCI standards.
            We only provide articles and information. We never ask for credit card numbers.
            We do not use Malware Scanning.
            Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.
            We implement a variety of security measures when a user enters, submits, or accesses their information to maintain the safety of your personal information.
            For your convenience we may store your credit card information longer than 30 days in order to expedite future orders, and to automate the billing process.

          </text>

          <subtitle><h6 classname="subtitle">Do we use 'cookies'?</h6></subtitle>
          <text className="content">Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information. For instance, we use cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.</text>
          
          <subtitle><h6 classname="subtitle">We use cookies to: </h6></subtitle>
          <text className="content"> 
           Understand and save user's preferences for future visits.
           You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since browser is a little different, look at your browser's Help Menu to learn the correct way to modify your cookies.
          </text>

          <subtitle><h6 classname="subtitle">If users disable cookies in their browser: </h6></subtitle>
          <text className="content">If you turn cookies off it will turn off some of the features of the site</text>
          
          <subtitle><h6 classname="subtitle">Third-party disclosure </h6></subtitle>
          <text className="content">We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information.</text>

          <subtitle><h6 classname="subtitle"> Third-party links</h6></subtitle>
          <text className="content">We do not include or offer third-party products or services on our website.</text>
          
          <subtitle><h6 classname="subtitle">Google </h6></subtitle>
          <text className="content">
          Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users. https://support.google.com/adwordspolicy/answer/1316548?hl=en 
          We use Google AdSense Advertising on our website.
          Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads to our users based on previous visits to our site and other sites on the Internet. Users may opt-out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy.</text>

          <subtitle><h6 classname="subtitle">We have implemented the following: </h6></subtitle>
          <text className="content">
            Demographics and Interests Reporting
            We, along with third-party vendors such as Google use first-party cookies (such as the Google Analytics cookies) and third-party cookies (such as the DoubleClick cookie) or other third-party identifiers together to compile data regarding user interactions with ad impressions and other ad service functions as they relate to our website.
          </text>
          
          <subtitle><h6 classname="subtitle"> Opting out:</h6></subtitle>
          <text className="content">
            Users can set preferences for how Google advertises to you using the Google Ad Settings page. Alternatively, you can opt out by visiting the Network Advertising Initiative Opt Out page or by using the Google Analytics Opt Out Browser add on.
          </text>
           <subtitle><h6 classname="subtitle"> California Online Privacy Protection Act</h6></subtitle>
          <text className="content">
            CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law's reach stretches well beyond California to require any person or company in the United States (and conceivably the world) that operates websites collecting Personally Identifiable Information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals or companies with whom it is being shared. - See more at: http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf
          </text>
           <subtitle><h6 classname="subtitle">According to CalOPPA, we agree to the following: </h6></subtitle>
          <text className="content">
            Users can visit our site anonymously.
            Once this privacy policy is created, we will add a link to it on our home page or as a minimum, on the first significant page after entering our website.
            Our Privacy Policy link includes the word 'Privacy' and can easily be found on the page specified above.

            You will be notified of any Privacy Policy changes:
                  • On our Privacy Policy Page
            Can change your personal information:
                  • By logging in to your account
           </text>

          <subtitle><h6 classname="subtitle">How does our site handle Do Not Track signals? </h6></subtitle>
          <text className="content">
            We honor Do Not Track signals and Do Not Track, plant cookies, or use advertising when a Do Not Track (DNT) browser mechanism is in place.
          </text>

          <subtitle><h6 classname="subtitle">Does our site allow third-party behavioral tracking? </h6></subtitle>
          <text className="content">
            It's also important to note that we do not allow third-party behavioral tracking
          </text>

           <subtitle><h6 classname="subtitle"> COPPA (Children Online Privacy Protection Act)</h6></subtitle>
          <text className="content">
            When it comes to the collection of personal information from children under the age of 13 years old, the Children's Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, United States' consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children's privacy and safety online.

            We do not specifically market to children under the age of 13 years old.
            Do we let third-parties, including ad networks or plug-ins collect PII from children under 13?
          </text>

           <subtitle><h6 classname="subtitle">Fair Information Practices </h6></subtitle>
          <text className="content">
            The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information.
          </text>

           <subtitle><h6 classname="subtitle">In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur: </h6></subtitle>
          <text className="content">
            We will notify you via email
            • Within 7 business days

            We also agree to the Individual Redress Principle which requires that individuals have the right to legally pursue enforceable rights against data collectors and processors who fail to adhere to the law. This principle requires not only that individuals have enforceable rights against data users, but also that individuals have recourse to courts or government agencies to investigate and/or prosecute non-compliance by data processors.
          </text>

          <subtitle><h6 classname="subtitle">CAN SPAM Act </h6></subtitle>
          <text className="content">
            The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have emails stopped from being sent to them, and spells out tough penalties for violations.
          </text>

          <subtitle><h6 classname="subtitle">We collect your email address in order to: </h6></subtitle>
          <text className="content">
          • Send information, respond to inquiries, and/or other requests or questions
          </text>
          <subtitle><h6 classname="subtitle">To be in accordance with CANSPAM, we agree to the following: </h6></subtitle>
          <text className="content">
          • Not use false or misleading subjects or email addresses.
          • Identify the message as an advertisement in some reasonable way.
          • Include the physical address of our business or site headquarters.
          • Monitor third-party email marketing services for compliance, if one is used.
          • Honor opt-out/unsubscribe requests quickly.
          • Allow users to unsubscribe by using the link at the bottom of each email.
          </text>
          <subtitle><h6 classname="subtitle">If at any time you would like to unsubscribe from receiving future emails, you can email us at </h6></subtitle>
          <text className="content">
          • Follow the instructions at the bottom of each email and we will promptly remove you from ALL correspondence.
          </text>
          <subtitle><h6 classname="subtitle">Contacting Us </h6></subtitle>
          <text className="content">
            If there are any questions regarding this privacy policy, you may contact us using the information below.

            eventsplog.com
            20 Sophie Kuye str., Pedro
            Gbagada, Lagos 101212
            Nigeria
            support@eventsplog.com

            Last Edited on 2018-05-01
          </text>


          <div classname="close-button">
          <Button >close</Button>
          </div>
    </div>
    </StyledPrivacyPolicy>
  )
}

export default PrivacyPolicy