import React from 'react'
import './Materials.css'

function Materials() {
    // B.com Study Materials
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
    // BBA study materials
    let bba1 = [
        {material: <a href={require('./bba/Management Theory and Practices -BBA1B01.pdf')}>Management Theory and Practices -BBA1B01</a>, title: 'BBA 1st semester'},
        {material: <a href={require('./bba/Managerial Economics-BBA1C01.pdf')}>Managerial Economics</a>, title: 'BBA 1st semester'},
        {material: <a href={require('./bba/I Sem. - Transactions 2019 Admn..pdf')}>Transaction</a>, title: 'BBA 1st semester'},
        {material: <a href={require('./bba/I Sem. - Ways with words 2019 Admn..pdf')}>Ways with words</a>, title: 'BBA 1st semester'},
    ]
    let bba2 = [
        {material: <a href={require('./bba/II Sem. - MARKETING MANAGEMENT - 2019 Admn..pdf')}>MARKETING MANAGEMENT</a>, title: 'BBA 2nd semester'},
        {material: <a href={require('./bba/II Sem. - Financial Accounting - 2019 Admn..pdf')}>financial accounting</a>, title: 'BBA 2nd semester'}, 
        {material: <a href={require('./bba/Zeitgeist SLM - 2019 Admn..pdf')}>Zeitgeist</a>, title: 'BBA 2nd semester'},
        {material: <a href={require('./bba/Communicative Arabic - 2019 Admn..pdf')}>Arabic</a>, title: 'BBA 2nd semester'},
        {material: <a href={require('./bba/Writing for Academic - SLM 2019 Admn..pdf')}>Writing for Academic</a>, title: 'BBA 2nd semester'},   
    ]
    let bba3 = [
        {material: <a href={require('./bba/BBA III Semester - BBA3B04 - Corporate Accounting.pdf')}>Corporate Accounting</a>, title : 'BBA 3rd semester'},
        {material: <a href={require('./bba/BBA III Semester - BBA3C02 - Business Regulations_0.pdf')}>Business Regulations</a>, title : 'BBA 3rd semester'},
        {material: <a href={require('./bba/BCM3A12- BBA3A12 PROFESSIONAL BUSINESS SKILLS.pdf')}>Prefessinal Business SKILLS</a>, title : 'BBA 3rd semester'},
   
    ]
    let bba4 = [
        {material : <a href={require('./bba/BANKING AND INSURANCE COMPRESSED.pdf')}>Banking and INSURANCE COMPRESSED</a>, title : 'BBA 4th semester'},
        {material : <a href={require('./bba/BBA4C03 - Corporate Regulations.pdf')}>Corporate Regulations</a>, title : 'BBA 4th semester'},
        {material : <a href={require('./bba/core BBA.pdf')}>Cost management Accounting</a>, title : 'BBA 4th semester'},
        {material : <a href={require('./bba/ENTREPRENEURSHIP DEVELOPMENT.pdf')}>ENTREPRENEURSHIP DEVELOPMENT</a>, title : 'BBA 4th semester'},
        {material : <a href={require('./bba/QT.pdf')}>Quantitative Technique for Business</a>, title : 'BBA 4th semester'},
    ]
    let bba5 = [
        {material : <a href={require('./bba/SLM- 19665-BBA -  OPERATIONS MANAGEMENT.pdf')}>Operations MANAGEMENT</a>, title : 'BBA 5th semester'},
        {material : <a href={require('./bba/SLM-19663-BBA-HUMAN RESOURCES MANAGEMENT.pdf')}>HRM</a>, title : 'BBA 5th semester'},
        {material : <a href={require('./bba/SLM-19664-BBA-Business Reseach Methods.pdf')}>BRM</a>, title : 'BBA 5th semester'},
        {material : <a href={require('./bba/SLM-19665(F)-BBA- INCOME TAX-final.pdf')}>INCOME Tax</a>, title : 'BBA 5th semester'},
        {material : <a href={require('./bba/SLM-19667-BBA - Fiancial Markets and Institutions.pdf')}>Financial Markets and Institutions</a>, title : 'BBA 5th semester'},
    ]
    let bba6 = [
        {material : <a href={require('./bba/SLM-BBA- FINANCIAL SERVICES.pdf')}>Financial Services</a>, title : 'BBA 6th semester'},
        {material : <a href={require('./bba/SLM-BBA- INVESTMENT MANAGEMENT.pdf')}>INVESTMENT management</a>, title : 'BBA 6th semester'},
        {material : <a href={require('./bba/SLM-BBA-MANAGEMENT SCIENCE final.pdf')}>Management Science</a>, title : 'BBA 6th semester'},
        {material : <a href={require('./bba/SLM-BBA-Organisational Behaviour.pdf')}>Organisational Behaviour</a>, title : 'BBA 6th semester'},
        {material : <a href={require('./bba/SLM-Project Management.pdf')}>Project Management</a>, title : 'BBA 6th semester'},
    ]

  return (
    <div>
        {/* B.com Section */}
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
            {/* BBA Section */}
            <div className="Main-Head">BBA</div>
            <div className="row">
                <div className="footer-col">
                <ol>
                    <div className="material-sem">BBA 1st Semester</div>
                    {
                            bba1.map(function(item, index){
                                return <div key={index}>
                                <li>{item.material}</li></div> 
                            })
                        }
                </ol>
                    </div>
                    <div className="footer-col">
                <ol>
                    
                    <div className="material-sem">BBA 2nd Semester</div>
                        {
                            bba2.map(function(item, index){
                                return <div key={index}>
                                <li>{item.material}</li></div> 
                            })
                        }
                </ol>
                </div>
                <div className="footer-col">
                <ol> 
                    <div className="material-sem">BBA 3rd Semester</div>
                        {
                            bba3.map(function(item, index){
                                return <div key={index}>
                                <li>{item.material}</li></div> 
                            })
                        }
                </ol>
                </div>
                <div className="footer-col">
                <ol> 
                    <div className="material-sem">BBA 4th Semester</div>
                        {
                            bba4.map(function(item, index){
                                return <div key={index}>
                                <li>{item.material}</li></div> 
                            })
                        }
                </ol>
                </div>
                <div className="footer-col">
                <ol> 
                    <div className="material-sem">BBA 5th Semester</div>
                        {
                            bba5.map(function(item, index){
                                return <div key={index}>
                                <li>{item.material}</li></div> 
                            })
                        }
                </ol>
                </div>
                <div className="footer-col">
                <ol> 
                    <div className="material-sem">BBA 6th Semester</div>
                        {
                            bba6.map(function(item, index){
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