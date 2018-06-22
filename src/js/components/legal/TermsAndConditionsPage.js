import React from 'react'
import styled from 'styled-components'
import {media} from '../../styles/mixins'
import Button from '../shared/button/Button'

const StyledTermsAndConditionsPage =styled.div`

${
  media.phone`
    margin:5px;
  `
}
  .title{
    text-align:center;
    margin: 20px auto;
    ${
      media.phone`
        display: block;
        font-size: 1.2rem;
        
      `
    }
  }
  .subtitle{
    margin: 15px auto;
    font-weight:bold;
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

const TermsAndConditionsPage =()=>{
  return(
    <StyledTermsAndConditionsPage>
    <div className="terms-and-conditions-container">
        <heading><h5 className="title"> Terms of service</h5></heading>
        
        <text className="content">
          Welcome to EventPlog!<br/><br/>
          These Terms govern your use of EventPlog and the products, features, apps, services, technologies, 
          and software we offer (the EventPlog Products or Products), except where we expressly state that 
          separate terms (and not these) apply.<br/><br/>
          These Terms of Service are a legally binding contract between you and EventPlog regarding your 
          use of the Service. Below is an overview of our Terms of Service for our “Platform”, which means 
          any website, application, or service we offer.<br/>
          PLEASE READ THE FOLLOWING TERMS CAREFULLY.<br/><br/>
          BY CLICKING “AGREE”,” OR BY ACCESSING OR USING THE SERVICE, YOU AGREE THAT YOU HAVE READ AND 
          UNDERSTOOD, AND, AS A CONDITION TO YOUR USE OF THE SERVICE, YOU AGREE TO BE BOUND BY, THE FOLLOWING 
          TERMS AND CONDITIONS, INCLUDING EVENTPLOG’S PRIVACY NOTICE (TOGETHER, THESE “TERMS”). 
          IF YOU ARE NOT ELIGIBLE, OR DO NOT AGREE TO THE TERMS, THEN YOU DO NOT HAVE EVENTPLOG’S PERMISSION 
          TO USE THE SERVICE. YOUR USE OF THE SERVICE, AND EVENTPLOG’S PROVISION OF THE SERVICE TO YOU, 
          CONSTITUTES AN AGREEMENT BY EVENTPLOG AND BY YOU TO BE BOUND BY THESE TERMS.
        </text>

          <subtitle><h6 className="subtitle">Your Relationship with EventPlog</h6></subtitle>
          <text className="content">
            By using our Platform, you are agreeing to our Terms of Service. That is a legally binding 
            agreement between you and EventPlog.
            If you break the rules, we may suspend or terminate your account.
            <br/><br/>We charge for certain aspects of our Platform, and some of these fees are billed on a regular 
            and recurring basis (unless you disable auto-renewal or cancel your subscription).</text>

          <subtitle><h6 className="subtitle">EventPlog Groups, Organizers and Members</h6></subtitle>
          <text className="content">Organizers may establish membership criteria for their own 
          EventPlog Community. While there is probably an EventPlog Community out there for everyone,
           not every EventPlog community page is for you. If you can’t find the right Community,
            you can easily start your own EventPlog community.</text>
         
          <subtitle><h6 className="subtitle">Organizers may charge fees for memberships or events.</h6></subtitle>
          <text className="content">Using our Platform involves meeting real people and doing real 
          things in the real world, which can sometimes lead to unexpected situations. 
          <br/>We can’t control what happens in the real world, and we are not responsible for it. 
          You should use common sense and good judgment when interacting with others.
          </text>

          <subtitle><h6 className="subtitle">Your Content and Content of Others</h6></subtitle>
          <text className="content">You are responsible for your “Content”, which means any information,
              material, or other content posted to our Platform.
              We do not own the Content that you post. However, we do require that you provide us a 
              license to use this Content in order for us to operate, improve, promote, and protect 
              EventPlog and our Platform for the benefit of you and others.<br/><br/>
              We are not responsible for Content that members post or the communications that members 
              send using our Platform. We generally don’t review Content before it’s posted. 
              If you see Content that violates our Terms of Service, you may report inappropriate 
              Content to us.

          </text>
          <subtitle><h6 className="subtitle">User Submissions</h6></subtitle>
          <text className="content">Anything that you submit to the Site and/or provide to us, 
              including but not limited to, questions, reviews, comments, and suggestions (collectively,
             "Submissions") will become our sole and exclusive property and shall not be returned to you.
              In addition to the rights applicable to any Submission, when you post comments or reviews 
              to the Site, you also grant us the right to use the name that you submit, in connection 
              with such review, comment, or other content.<br/><br/>
              You shall not use a false e-mail address, pretend to be someone other than yourself or 
              otherwise mislead us or third parties as to the origin of any Submissions. We may, but 
              shall not be obligated to, remove or edit any Submissions.

              By completing an order or signing up, you agree to receive <br/><br/>
              a) emails containing relevant 
              offers from third parties, and <br/><br/>
              b) promotional emails, SMS and push notifications from 
              EventPlog. You may unsubscribe from promotional emails via a link provided in each email. 
              If you would like us to remove your personal information from our database, unsubscribe 
              from emails and/or SMS, please email Support.

          </text>
          <subtitle><h6 className="subtitle">The permissions you give us</h6></subtitle>
          <text className="content">We need certain permissions from you to provide our services:<br/><br/>
              1. Permission to use content you create and share: You own the content you create and 
              share on EventPlog and the other EventPlog Products you use, and nothing in these Terms 
              takes away the rights you have to your own content. You are free to share your content 
              with anyone else, wherever you want. To provide our services, though, we need you to give 
              us some legal permissions to use that content.<br/><br/>

              Specifically, when you share, post, or upload content that is covered by intellectual 
              property rights (like photos or videos) on or in connection with our Products, you grant
               us a non-exclusive, transferable, sub-licensable, royalty-free, and worldwide license to
              host, use, distribute, modify, run, copy, publicly perform or display, translate, and 
              create derivative works of your content (consistent with your privacy and application 
              settings). <br/><br/>This means, for example, that if you share a photo on EventPlog, 
              you give us permission to store, copy, and share it with others (again, consistent with your settings) 
              such as service providers that support our service or other EventPlog Products you use.<br/><br/>
              
              You can end this license any time by deleting your content or account. 
              You should know that, for technical reasons, content you delete may persist for a 
              limited period of time in backup copies (though it will not be visible to other users). 
              In additionn, content you delete may continue to appear if you have shared it with others 
              and they have not deleted it.<br/><br/>

              2. Permission to use your name, profile picture, and information about your actions 
              with ads and sponsored content: <br/><br/>You give us permission to use your name and profile picture 
              and information about actions you have taken on EventPlog next to or in connection with ads, 
              offers, and other sponsored content that we display across our Products, without any 
              compensation to you.<br/> For example, we may show your friends that you are interested in an 
              advertised event or have followed a Community that has paid us to display its ads on EventPlog. 
              Ads like this can be seen only by people who have your permission to see the actions you've taken
             on EventPlog.<br/><br/>
              3. Permission to update software you use or download:<br/><br/> If you download or use our software, 
              you give us permission to download and install upgrades, updates, and additional features to 
              improve, enhance, and further develop it.<br/><br/>
              4. Limits on using our intellectual property:<br/><br/>
              If you use content covered by intellectual property rights that we have and make available in
              our Products (for example, images, designs, videos, or sounds we provide that you add to content 
              you create or share on EventPlog), we retain all rights to that content (but not yours). 
              <br/>You can only use our copyrights or trademarks (or any similar marks) as expressly permitted by 
              our Brand Usage Guidelines or with our prior written permission. You must obtain our written
               permission (or permission under an open source license) to modify, create derivative works of, 
               decompile, or otherwise attempt to extract source code from us.

          </text>
          <subtitle><h6 className="subtitle">Our Platform</h6></subtitle>
          <text className="content">We try hard to make sure that our Platform is always available and working,
              but we cannot guarantee it will be. Occasionally things may not go exactly as planned. We apologize 
              in advance for any inconvenience.<br/>
              We are continually improving our Platform. This means that we may modify or discontinue portions
               of our Platform.
          </text>
          <subtitle><h6 className="subtitle">Accessibility of Website</h6></subtitle>
          <text className="content">Our aim is to ensure accessibility to the website at all times, however we
           make no representation of that nature and reserves the right to terminate the website at any time 
           and without notice. You accept that service interruption may occur in order to allow for website 
           improvements, scheduled maintenance or may also be due to outside factors beyond our control.

          </text>
          <subtitle><h6 className="subtitle">Links and Third Party Websites</h6></subtitle>
          <text className="content">We may include links to third party websites at any time. However, the 
              existence of a link to another website should not be consider as an affiliation or a partnership with 
              a third party or viewed as an endorsement of a particular website unless explicitly stated otherwise.
              In the event the user follows a link to another website, he or she does so at his or her own risk.
               We accept no responsibility for any content, including, but not limited to, information, products 
               and services, available on third party websites.<br/><br/>
              Creating a link to this website is strictly forbidden without our prior written consent. 
              Furthermore, we reserve the right to revoke our consent without notice or justification.

          </text>
          <subtitle><h6 className="subtitle">Intellectual Property</h6></subtitle>
          <text className="content">Both parties agree that all intellectual property rights and database rights, 
              whether registered or unregistered, in the Site, information content on the Site and all the website 
              design, including, but not limited to, text, graphics, software, photos, video, music, sound, and 
              their selection and arrangement, and all software compilations, underlying source code and software 
              shall remain at all times vested in us or our licensors. Use of such material will only be permitted 
              as expressly authorized by us or our licensors.
              <br/><br/>Any unauthorised use of the material and content of this website is strictly prohibited and
               you agree not to, or facilitate any third party to, copy, reproduce, transmit, publish, 
               display, distribute, commercially exploit or create derivative works of such material and 
               content.

          </text>
          <subtitle><h6 className="subtitle">Data Protection</h6></subtitle>
          <text className="content">Any personal information collected in relation to the use of this 
          website will be held and used in accordant with our Privacy Policy.

          </text>
          <subtitle><h6 className="subtitle">Additional provisions</h6></subtitle>
          <text className="content"><br/>
              1. Updating our Terms<br/><br/>
              We work constantly to improve our services and develop new features to make our Products 
              better for you and our community. As a result, we may need to update these Terms from time 
              to time to accurately reflect our services and practices. Unless otherwise required by law, 
              we will notify you before we make changes to these Terms and give you an opportunity to review 
              them before they go into effect. Once any updated Terms are in effect, you will be bound by them 
              if you continue to use our Products.<br/>
              We hope that you will continue using our Products, but if you do not agree to our updated 
              Terms and no longer want to be a part of the EventPlog community, you can delete your account 
              at any time.<br/><br/>
              2. Account suspension or termination<br/><br/>
              We want EventPlog to be a place where people feel welcome and safe to express themselves and 
              share their thoughts and ideas. If we determine that you have violated our terms or policies, 
              we may take action against your account to protect our community and services, including by 
              suspending access to your account or disabling it. We may also suspend or disable your account 
              if you create risk or legal exposure for us or when we are permitted or required to do so by law. 
              <br/>Where appropriate, we will notify you about your account the next time you try to access it.<br/><br/>
              3. Limits on liability<br/><br/>
              We work hard to provide the best Products we can and to specify clear guidelines for everyone 
              who uses them. Our Products, however, are provided "as is," and we make no guarantees that they 
              always will be safe, secure, or error-free, or that they will function without disruptions, delays, 
              or imperfections. <br/><br/>To the extent permitted by law, we also DISCLAIM ALL WARRANTIES, WHETHER EXPRESS
               OR IMPLIED, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, 
               TITLE, AND NON-INFRINGEMENT. We do not control or direct what people and others do or say, and we 
               are not responsible for their actions or conduct (whether online or offline) or any content they 
               share (including offensive, inappropriate, obscene, unlawful, and other objectionable content).
               <br/><br/>
              We cannot predict when issues might arise with our Products. Accordingly, our liability shall be 
              limited to the fullest extent permitted by applicable law, and under no circumstance will we be 
              liable to you for any lost profits, revenues, information, or data, or consequential, special, 
              indirect, exemplary, punitive, or incidental damages arising out of or related to these Terms or 
              the EventPlog Products, even if we have been advised of the possibility of such damages.<br/><br/>
          </text>

          <div className="close-button">
          <Button >close</Button>
          </div>
    </div>
    </StyledTermsAndConditionsPage>
  )
}
export default TermsAndConditionsPage