import React from 'react'
import '../Notification/Notif.css'
import {useState , useEffect} from "react"
import {db} from "./firebase-confing"
import {collection, getDocs} from 'firebase/firestore'

function Notif() {
    const [notif,setNotif] = useState([]);
   const usersCollectionRef = collection(db , 'notif');
    useEffect(() =>{  
      const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        console.log(data);
        setNotif(data.docs.map((doc)=>({...doc.data(), id : doc.id})));
      }
      getUsers();

    },[])
 
  return (
    <div className="Notif">
        <div className="notif_box">
            <div className="notif_box__title">Rise-Up Notifications <br/> <img src="https://www.fg-a.com/new/new-purple-animation.gif"  width="40px" alt="new"/></div>
            <div className="notif_content">
              <ul>
                
                {
                  notif.map((notif)=>{
                
                    return <div >
                      <li>{notif.decr}<br/><a href={notif.link}>{notif.linkname}</a></li></div>
                  
                  })

                  }
                
              </ul>
           
            </div>
        </div>
        <div className="content-main">
            <div className="content-main__title"><span >RiseUp</span></div>
            <div class="oldimag1">
      
      
        
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
       <div class="oldimag5"> 

       <div class="title1">
          Delhi University PG Admission 2022
        </div>
        <div class="link1">
          <a href="https://pgadmission.uod.ac.in/index.php/site/login"><span className='apply1'>Click here to apply</span></a>
        </div>
        
        
      </div>
        <div class="oldimag6"> 


        <div class="title">
           Jawaharlal Nehru University
        </div>
        <div class="link">
          <a href="https://www.jnu.ac.in/main/"><span className='apply'>Click here to apply</span></a>
        </div>
        
        
      </div>
        <div class="oldimag7"> 


        <div class="title">
         
         Kerala University 
        </div>
        <div class="link">
          <a href="https://admissions.keralauniversity.ac.in/"><span className='apply'>Click here to apply</span></a>
        </div>
        
        
      </div>
       <div class="oldimag8"> 


        <div class="title">
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
                  <ol start="1" className='stdycrcle' >
                    <li>HAPPY LEARNING 📕</li>
                    <p>സാമ്പത്തികമായി പിന്നോക്കം നിൽകുന്ന വിദ്യാർഥിൾക്ക് പഠന സൗകര്യം ഉറപ്പു വരുത്തുക. വിദ്യാർത്ഥികൾക്ക് ആവശ്യമായ study materials, notes, എന്നിവ ലഭ്യമാകുക.</p>
                  
                  
                    <li>RISE UP🪁🏆</li>
                    <p>PSC ,UPSC , മറ്റ് മത്സരപരീക്ഷൾക് തയ്യാറെടുക്കുന്ന വിദ്യാർത്ഥികൾക്ക് പരിശീലനം നൽകുക. വിദ്യാർത്ഥികളുടെ കരിയറുമായി ബന്ധപ്പെട്ട ആശങ്കകൾക്ക് പരിഹാരം കാണുക</p>
                  
                  
                    <li>ഋതു 🎨🎤🖋️</li>
                    <p>നമ്മുടെ കോളേജിലെ സർഗ പ്രതിപകളെ കണ്ടത്തുകയും അവരുടെ കലാ ശേഷി പരിപോഷിക്കുകയും ചെയ്യുന്ന സാംസ്‌കാരിക കൂട്ടായ്‌മ</p>
                  
                  
                    <li>Warm UP ⛹🏼‍♂️</li>
                    <p>നമ്മുടെ കോളേജിലെ കായികതാരങ്ങളുടെ ആശങ്കകൾ പരിഹരിക്കുക</p>
                  </ol>
              </p>
              
            </div>
        </div>    
    </div>
  )
}

export default Notif