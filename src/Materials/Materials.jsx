import React from 'react'
import './Materials.css'

function Materials() {
    let bcom1 = [
        {material: <a href='./bcom/B.Com- Marketing Management 2019 Admn.pdf' >BUSINESS MANAGEMENT</a>, title: "B .com 1st Semester"},
        {material: <a href="https://jaseem1999.github.io/b.com/Managerial%20Economics%20(%20B.Com_.).pdf" >Managerial Economics</a>, title: "B .com 1st Semester"},
        {material: <a href="https://jaseem1999.github.io/b.com/I%20Sem.%20-%20Transactions%202019%20Admn..pdf" >Transactions</a>, title: "B .com 1st Semester"},
        {material: <a href="https://jaseem1999.github.io/b.com/I%20Sem.%20-%20Ways%20with%20words%202019%20Admn..pdf" >Ways with words 2019 Admn</a>, title: "B .com 1st Semester"},
    ]
    let bcom2 = [
        {material: <a href="B.Com- Marketing Management 2019 Admn.pdf" >Marketing MANAGEMENT</a>, title: "B .com 2nd Semester"},
        {material: <a href="https://jaseem1999.github.io/b.com/Managerial%20Economics%20(%20B.Com_.).pdf" >Managerial Economics</a>, title: "B .com 2nd Semester"},
        {material: <a href="https://jaseem1999.github.io/b.com/Zeitgeist%20SLM%20-%202019%20Admn..pdf">Zeitgeist</a>, title: "B .com 2nd Semester"},
        {material: <a href="https://jaseem1999.github.io/b.com/Communicative%20Arabic%20-%202019%20Admn..pdf" >Communicative Arabic</a>, title: "B .com 2nd Semester"},
        {material: <a href="https://jaseem1999.github.io/b.com/Writing%20for%20Academic%20-%20SLM%202019%20Admn..pdf ">Writing for Academic</a>, title: "B .com 2nd Semester"},
    ]
    let bcom3 = [
        {material: <a href="https://jaseem1999.github.io/b.com/III%20Sem%20-B%20Com-comple-Human%20Resource%20Management.pdf">Human Resource Management</a>},
        {material: <a href="https://jaseem1999.github.io/b.com/III%20Sem%20-%20B%20Com-Business%20Regulations.pdf" >Business Regulations</a>, title: "B .com 3rd Semester"},
        {material: <a href="https://jaseem1999.github.io/b.com/BCM3A12-%20BBA3A12%20PROFESSIONAL%20BUSINESS%20SKILLS.pdf" >Prefessinal Business skill</a>, title: "B .com 3rd Semester"},
    ]
    let bcom4 = [
        {material: <a href="https://jaseem1999.github.io/b.com/BCM4A12-%20BBA4A12%20PROFESSIONAL%20BUSINESS%20SKILLS.pdf" >Prefessinal Business skill</a>, title: "B .com 4th Semester"},
        {material: <a href="https://jaseem1999.github.io/b.com/BCM4A12-%20BBA4A12%20PROFESSIONAL%20BUSINESS%20SKILLS.pdf" >Prefessinal Business skill</a>, title: "B .com 4th Semester"},
        {material: <a href="https://jaseem1999.github.io/b.com/BCM4A12-%20BBA4A12%20PROFESSIONAL%20BUSINESS%20SKILLS.pdf" >Prefessinal Business skill</a>, title: "B .com 4th Semester"},
        {material: <a href="https://jaseem1999.github.io/b.com/BCM4A12-%20BBA4A12%20PROFESSIONAL%20BUSINESS%20SKILLS.pdf" >Prefessinal Business skill</a>, title: "B .com 4th Semester"},
        {material: <a href="https://jaseem1999.github.io/b.com/BCM4A12-%20BBA4A12%20PROFESSIONAL%20BUSINESS%20SKILLS.pdf" >Prefessinal Business skill</a>, title: "B .com 4th Semester"},
    ]
    let bcom5 = [
        {material: <a href="https://jaseem1999.github.io/b.com/BCM5A12-%20BBA5A12%20PROFESSIONAL%20BUSINESS%20SKILLS.pdf" >Prefessinal Business skill</a>, title: "B .com 5th Semester"},
        {material: <a href="https://jaseem1999.github.io/b.com/BCM5A12-%20BBA5A12%20PROFESSIONAL%20BUSINESS%20SKILLS.pdf" >Prefessinal Business skill</a>, title: "B .com 5th Semester"},
        {material: <a href="https://jaseem1999.github.io/b.com/BCM5A12-%20BBA5A12%20PROFESSIONAL%20BUSINESS%20SKILLS.pdf" >Prefessinal Business skill</a>, title: "B .com 5th Semester"},
        {material: <a href="https://jaseem1999.github.io/b.com/BCM5A12-%20BBA5A12%20PROFESSIONAL%20BUSINESS%20SKILLS.pdf" >Prefessinal Business skill</a>, title: "B .com 5th Semester"},
        {material: <a href="https://jaseem1999.github.io/b.com/BCM5A12-%20BBA5A12%20PROFESSIONAL%20BUSINESS%20SKILLS.pdf" >Prefessinal Business skill</a>, title: "B .com 5th Semester"},
    ]
    let bcom6 = [
        {material: <a href="https://jaseem1999.github.io/b.com/BCM6A12-%20BBA6A12%20PROFESSIONAL%20BUSINESS%20SKILLS.pdf" >Prefessinal Business skill</a>, title: "B .com 6th Semester"},
        {material: <a href="https://jaseem1999.github.io/b.com/BCM6A12-%20BBA6A12%20PROFESSIONAL%20BUSINESS%20SKILLS.pdf" >Prefessinal Business skill</a>, title: "B .com 6th Semester"},
        {material: <a href="https://jaseem1999.github.io/b.com/BCM6A12-%20BBA6A12%20PROFESSIONAL%20BUSINESS%20SKILLS.pdf" >Prefessinal Business skill</a>, title: "B .com 6th Semester"},
        {material: <a href="https://jaseem1999.github.io/b.com/BCM6A12-%20BBA6A12%20PROFESSIONAL%20BUSINESS%20SKILLS.pdf" >Prefessinal Business skill</a>, title: "B .com 6th Semester"},
        {material: <a href="https://jaseem1999.github.io/b.com/BCM6A12-%20BBA6A12%20PROFESSIONAL%20BUSINESS%20SKILLS.pdf" >Prefessinal Business skill</a>, title: "B .com 6th Semester"},
    ]

  return (
    <div>
        <div className="Main-Head">B.com</div>
            <div className="row">
                <div className="footer-col">
                <ol>
                    <div className="material-sem">B .com 1st Semester</div>
                    {
                            bcom1.map(function(item, index){
                                return <div key={index}>
                                <li>{item.material}</li></div> 
                            })
                        }
                </ol>
                    </div>
                    <div className="footer-col">
                <ol>
                    
                    <div className="material-sem">B .com 2nd Semester</div>
                        {
                            bcom2.map(function(item, index){
                                return <div key={index}>
                                <li>{item.material}</li></div> 
                            })
                        }
                </ol>
                </div>
                <div className="footer-col">
                <ol> 
                    <div className="material-sem">B.com 3rd Semester</div>
                        {
                            bcom3.map(function(item, index){
                                return <div key={index}>
                                <li>{item.material}</li></div> 
                            })
                        }
                </ol>
                </div>
                <div className="footer-col">
                <ol> 
                    <div className="material-sem">B.com 4th Semester</div>
                        {
                            bcom4.map(function(item, index){
                                return <div key={index}>
                                <li>{item.material}</li></div> 
                            })
                        }
                </ol>
                </div>
                <div className="footer-col">
                <ol> 
                    <div className="material-sem">B.com 5th Semester</div>
                        {
                            bcom5.map(function(item, index){
                                return <div key={index}>
                                <li>{item.material}</li></div> 
                            })
                        }
                </ol>
                </div>
                <div className="footer-col">
                <ol> 
                    <div className="material-sem">B.com 6th Semester</div>
                        {
                            bcom6.map(function(item, index){
                                return <div key={index}>
                                <li>{item.material}</li></div> 
                            })
                        }
                </ol>
                </div>
            
            </div>  
    </div>

  )
}

export default Materials