import React from 'react'
import '../Notification/Notif.css'

function Notif() {
  let noti = [
    {noti: `കേന്ദ്ര _സംസ്ഥാന സർവകശാലകളിലേകു ള്ള പിജി എൻട്രൻസ് പരീക്ഷക്ക് തയ്യാറാടുക്കുന്ന വിദ്യാർത്ഥികൾക് ജോയിൻ ചെയ്യാം`, notiLink :  <a href="https://chat.whatsapp.com/H4fHyxfZsSk3p2CV8pmSE4">WhatsApp Group</a>},
    {noti: `ജാമിഅ മില്ലിയ്യ ഇസ്ലാമിയ്യ 2022-23 അധ്യയന വർഷത്തേക്കുള്ള ഡിഗ്രീ, പിജി, ഡിപ്ലോമ എൻട്രൻസ് പരീക്ഷകൾക്ക് അപേക്ഷ ക്ഷണിച്ചു.`, notiLink : <a href="https://www.jmi.ac.in/">Jamia millia Islamic JMI</a>},
    {noti: `Application invited for PG Entrance Test 2022 @ UNIVERSITY OF KERALA`, notiLink :  <a href="https://admissions.keralauniversity.ac.in/">Karala University PG</a>},
    {noti : `DELHI UNIVERSITY: APPLICATIONS ARE INVITED FOR PG PROGRAMMES  📍Due date of application: 15 May 2022 📍Application fee: EN/OBC/EWS - ₹750 SC/ST/PwS - ₹300 For application:`, notiLink : <a href="https://pgadmission.uod.ac.in/" >Delhi Application</a>},
    {noti : `കാലിക്കറ്റ് സര്‍വകലാശാല PG പ്രവേശനപരീക്ഷയ്ക്ക്  ഇപ്പോൾ അപേക്ഷിക്കാം `, notiLink : <a href="http://admission.uoc.ac.in/" >Calicut University PG Entrance</a>}, 
    {noti:`MBA പ്രവേശന പരീക്ഷ ( കെ മാറ്റ്) അപേക്ഷ ക്ഷണിച്ചു`, notiLink : <a href="https://www.hctkmat.in/">MBA Admission 2020</a>},
  ]
  return (
    <div className="Notif">
        <div className="notif_box">
            <div className="notif_box__title">Rise-Up Notifications <br/> <img src="https://www.fg-a.com/new/new-purple-animation.gif"  width="40px" alt="new"/></div>
            <div className="notif_content">
              <ul>
                
                {
                  noti.map(function(item, index){
                
                    return <div key={index}>
                      <li>{item.noti}<br/>{item.notiLink}</li></div>
                  
                  })

                  }
                
              </ul>
            </div>
        </div>
        <div className="content-main">
            <div className="content-main__title"><span >RiseUp</span></div>
            <div class="oldimag1">
      
      
           <div class="title1">
          Delhi University PG Admission 2022
        </div>
        <div class="link1">
          <a href="https://pgadmission.uod.ac.in/index.php/site/login"><span className='apply1'>Click here to apply</span></a>
        </div>
        
      </div>
      <div class="oldimag2">
        
        <div class="title">
          CUCET Entrance - UG
        </div>
        <div class="link">
          <a href="https://cuet.nta.nic.in/"><span className='apply'>Click here to apply</span></a>
        </div>
        
      </div>
      <div class="oldimag3">
        
        <div class="title">
          Jamia millia islamia University
        </div>
        <div class="link">
          <a href="http://jmicoe.in/"><span className='apply'>Click here to apply</span></a>
        </div>
        
      
      </div>
      <div class="oldimag4">


        <div class="title">
          Calicut University PG Entrance
        </div>
        <div class="link">
          <a href="http://admission.uoc.ac.in/"><span className='apply'>Click here to apply</span></a>
        </div>
        
        
      </div>
          </div>
        <div id="about" className="about">
            <div className="about__title">About</div>
            <div className="about__content">
              <p>
                  Rise up🪁 <br/>Run by: com musthafa study circles<br/>
                  com muhammed mustafa study circles run by <a href="http://sfimeskc.in">SFI MES KC</a><br/>
                  Rise up convener Irshad(History Dept Batch 19-22 ) and Shamnad(B.com CA Batch 19-22) <br/>
              </p>
              
            </div>
        </div>    
    </div>
  )
}

export default Notif