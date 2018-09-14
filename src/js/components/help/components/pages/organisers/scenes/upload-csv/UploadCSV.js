import React from 'react'
import Topic from 'js/components/help/components/topic'
import Description from 'js/components/help/components/help-description'
import {Link} from 'react-router-dom'
import HelpImage from 'js/components/help/components/image'
import Image from 'js/components/help/components/videos'

const UploadCSV = () =>{
  return(
    <div>
      <Topic> 
        How to Upload CSV
      </Topic>
      <Description>
        To upload CSV, 
        1. Rename your columns to meaningful names like 'first_name' and 'last_name' instead of 'name'
        2. Delete all columns you do not need.
        3. Go to backstage, click on guest, go to upload CSV section and select the CSV file you want to use
        and click on upload.
      </Description>
    </div>
  );
}

export default UploadCSV;