import React from "react";
import Icon from '../../components/icon/Icon'
import Title from '../../components/title/Title'

const DashboardEnclose= ({ icon, number, text }) => (
<div >
        <div className="dash_icon">
          <Icon icon={icon} />
        </div>
   
        <Title text={number} />
    
        <Title text={text} />
      </div>
  )
  
  export default DashboardEnclose;