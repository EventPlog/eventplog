import React from 'react'
import Topic from 'js/components/help/components/topic'
import Description from 'js/components/help/components/help-description'
import {Link} from 'react-router-dom'
import HelpImage from 'js/components/help/components/image'
import backstage from 'img/blog/backstage.png'
import uploadCSV from 'img/blog/importCSV.PNG'
import Image from 'js/components/help/components/videos'

const UploadCSV = () =>{
  return(
    <div>
      <Topic> 
        How to Upload CSV
      </Topic>
      <Description>
        <p>
          To upload CSV, from your event page, go to backstage.
        </p> 
        <HelpImage src={backstage} alt="backstage"/>
        <p>
          Click on the guest section and then select importCSV. Before you upload a CSV file,
        </p>

        <p>1. Rename your columns to meaningful names like 'first_name' and 'last_name' instead of 'name'</p>
        <p>2. Delete all columns you do not need.</p>
        <p>3. Go to backstage, click on guest, go to upload CSV section and select the CSV file you want to use</p>
        and click on upload.
        <HelpImage src={uploadCSV} alt="upload CSV"/>
      </Description>
    </div>
  );
}

export default UploadCSV;