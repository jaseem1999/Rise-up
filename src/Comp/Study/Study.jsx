import React from 'react'
import '../Study/Study.css'
import { BsFacebook,BsFillEnvelopeFill } from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
import {FaBloggerB} from 'react-icons/fa';
import {BiWorld} from 'react-icons/bi';

function Study() {
  return (
    <div className='study'>
        <div className="Study-main__title">Rise-Up Study material</div>
         <div className="Study-main__subtitle">
            <div className="Study-main__subtitle__text">
              Study Material coming soon!<br/>
                Study Material coming soon!<br/>
                  Study Material coming soon!<br/>
                    Study Material coming soon!<br/>
                      Study Material coming soon!<br/>
                        Study Material coming soon!<br/>
                          Study Material coming soon!<br/>
            </div>
          </div>
          <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
          <h4>RiseUp</h4>
            <ul>
              <li><a href="https://sfimeskc.in">About</a></li>
              <li><a href="https://wa.me/+918086762052">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
          <h4>Designer</h4>
            <ul>
              <li><a href="https://jaseem1999.github.io/ajk/">About</a></li>
              <li><a href="https://wa.me/+919847877534">Contact</a></li>
            </ul>


        </div>
        <div className="footer-col">
          <h4>SFI MES KC</h4>
            <ul>
              <li><a href="https://jaseem1999.github.io/ajk/">About</a></li>
              <li><a href="https://wa.me/+919544969372">Contact</a></li>
            </ul>


        </div>
  	 		<div className="footer-col"> 
  	 		   <h4>follow us</h4>
  	 			   <div class="social-links"> 
  	 				    <a href="https://www.facebook.com/Sfi-Mes-Kalladi-College-647106115341558/"><div className="logo"><BsFacebook/></div></a>
  	 				    <a href="https://www.instagram.com/sfi_meskc/"><div className="logo"><AiFillInstagram/></div></a>
  	 				    <a href="https://sfimeskc.blogspot.com/"><div className="logo"><FaBloggerB/></div></a>
  	 			    	<a href="https://mailto:ajkkalappatt@gmail.com"><div className="logo"><BsFillEnvelopeFill/></div></a>
                <a href="https://sfimeskc.in"><div className="logo"><BiWorld/></div></a>
  	 			 </div> 
  	 		 </div> 

      </div>
    </div>
  </div>
    </div>
       
  )
}

export default Study