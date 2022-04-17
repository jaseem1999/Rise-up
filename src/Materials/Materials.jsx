import React from 'react'
import './Materials.css'

function Materials() {
    let bcom1 = [
        {material: <a href={require('./bcom/BUSINESS MANAGEMENT.pdf')} >BUSINESS MANAGEMENT</a>, title: "B .com 1st Semester"},
        {material: <a href={require('./bcom/Managerial Economics ( B.Com_.).pdf')} >Managerial Economics</a>, title: "B .com 1st Semester"},
        {material: <a href={require('./bcom/I Sem. - Transactions 2019 Admn..pdf')} >Transactions</a>, title: "B .com 1st Semester"},
        {material: <a href={require('./bcom/Ways with words.pdf')}>Ways with words 2019 Admn</a>, title: "B .com 1st Semester"},
    ]
    let bcom2 = [
        {material: <a href={require('./bcom/B.Com- Marketing Management 2019 Admn.pdf')}>Marketing MANAGEMENT</a>, title: "B .com 2nd Semester"},
        {material: <a href={require('./bcom/Managerial Economics ( B.Com_.).pdf')} >Managerial Economics</a>, title: "B .com 2nd Semester"},
        {material: <a href={require('./bcom/Zeitgeist SLM - 2019 Admn..pdf')}>Zeitgeist</a>, title: "B .com 2nd Semester"},
        {material: <a href="https://jaseem1999.github.io/b.com/Communicative Arabic - 2019 Admn..pdf" >Communicative Arabic</a>, title: "B .com 2nd Semester"},
        {material: <a href={require('./bcom/Writing for Academic - SLM 2019 Admn..pdf')}>Writing for Academic</a>, title: "B .com 2nd Semester"},
    ]
    let bcom3 = [
        {material: <a href={require('./bcom/III Sem -B Com-comple-Human Resource Management.pdf')}>Human Resource Management</a>},
        {material: <a href={require('./bcom/III Sem - B Com-Business Regulations.pdf')} >Business Regulations</a>, title: "B .com 3rd Semester"},
        {material: <a href={require('./bcom/BCM3A12- BBA3A12 PROFESSIONAL BUSINESS SKILLS.pdf')} >Prefessinal Business skill</a>, title: "B .com 3rd Semester"},
    ]
    let bcom4 = [
        {material: <a href={require('./bcom/BCM4B06 - Corporate Regulations.pdf')}>Corporate Regulations</a>, title: "B .com 4th Semester"},
        {material: <a href={require('./bcom/BComCoreCostAccounting_on09March2016.pdf')} >Cost Accounting</a>, title: "B .com 4th Semester"},
        {material: <a href={require('./bcom/BANKING AND INSURANCE COMPRESSED.pdf')} >Banking and INSURANCE COMPRESSED</a>, title: "B .com 4th Semester"},
    ]
    let bcom5 = [
        {material: <a href={require('./bcom/SLM- 19613- B Com-Accounting for Management.pdf')}> Accounting for Management</a> , title: "B .com 5th Semester"},
        {material: <a href={require('./bcom/SLM-19614-B Com-Business Research Methods.pdf')} >Business Research Methods</a> , title: "B .com 5th Semester"},
        {material: <a href={require('./bcom/SLM-19615-B Com-INCOME TAX LAW AND ACCOUNTS_1.pdf')} >income TAX and laws </a>, title: "B .com 5th Semester"},
        {material: <a href={require('./bcom/SLM-19616-B Com-Financial Markets and Services_0.pdf')}>Financial Markets and Services</a>, title: "B .com 5th Semester"},
        {material: <a href={require('./bcom/SLM-19616-C-B Com-Co-operative theory and practice.pdf')} >Corporate theory and practice</a>, title: "B .com 5th Semester"},
        {material: <a href={require('./bcom/SLM-19617- LEGAL ENVIRONMENT FOR CO-OPERATIVES.pdf')} > legal enviornment and for Corporate</a>, title: "B .com 5th Semester"},
        {material: <a href={require('./bcom/SLM-19617-B Com-Financial Management (1).pdf')}>financial management</a>, title: "B .com 5th Semester"},
    ]
    let bcom6 = [
        {material: <a href={require('./bcom/SLM-B Com- FINANCIAL DERIVATIVES final.pdf')}>financial derivatives</a>, title: "B .com 6th Semester"},
        {material: <a href={require('./bcom/SLM-B Com- Co-operative Managements and Administration (1).pdf')} >Corporate management and administration</a>, title: "B .com 6th Semester"},
        {material: <a href={require('./bcom/SLM-B Com-AUDITING.pdf')} >auditings</a>, title: "B .com 6th Semester3rd Semester"},
        {material: <a href={require('./bcom/SLM-B Com-Fundamentals of investment to print (revised).pdf')}>Fundamentals of investment to print</a>, title: "B .com 6th Sem"},
        {material: <a href={require('./bcom/SLM-B Com-INTERNATIONAL CO-OPERATIVE MOVEMENT final_0.pdf')} >investment Corporative MOVEMENT</a>, title: "B .com 6th Semester"},
        {material: <a href={require('./bcom/SLM-B.COM - INCOME TAX AND GST.pdf')} >incom tax and gst</a>, title: "B .com 6th Semester"},
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