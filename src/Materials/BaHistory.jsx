import React from 'react'

function BaHistory() {
    let history1 = [
        {material : <a href={require('./bahistory/Indian Constitution and Politics Federalism, Decentralization and PoliticalDynamics a4_0.pdf')}>Indian constitution and political</a>, title : 'BA History 1st semester' },
        {material : <a href={require('./bahistory/Trends in Historiography -HIS1B01.pdf')}>Trends in Historiography</a>, title : 'BA History 1st semester' },
        {material : <a href={require('./bahistory/I Sem. - Transactions 2019 Admn..pdf')}>Transactions</a>, title : 'BA History 1st semester' },
        {material : <a href={require('./bahistory/I Sem. - Ways with words 2019 Admn..pdf')}>Ways with words 2019 Admn</a>, title : 'BA History 1st semester' },
        {material : <a href={require('./bahistory/RUGMINI- common corrected_1_scrtinise _3_.pdf')}>Malayalam</a>, title : 'BA History 1st semester' },
        {material : <a href={require('./bahistory/COMMON ADDITIONAL LANGUAGE FOR BA.Bsc and BA Afzal ulama- additional skills in Arabic.pdf')}>Arabic</a>, title : 'BA History 1st semester' },
        {material : <a href={require('./bahistory/Prose and drama.pdf')}>Hindi</a>, title : 'BA History 1st semester' },

    ]
    let history2 = [
        {material : <a href={require('./bahistory/Malayala Sahithyam 2.pdf')}>Malayalam</a>, title : 'BA History 1st semester' },
        {material : <a href={require('./bahistory/Zeitgeist SLM - 2019 Admn..pdf')}>Zeitgeist</a>, title : 'BA History 1st semester' },
        {material : <a href={require('./bahistory/II Sem. - Grammar and Translation 2019 Admn._compressed_0.pdf')}>hindi</a>, title : 'BA History 1st semester' },
        {material : <a href={require('./bahistory/II Sem. - Appreciating Arabic Literature - 2019 Admn..pdf')}>Arabic</a>, title : 'BA History 1st semester' },
        {material : <a href={require('./bahistory/Writing for Academic - SLM 2019 Admn..pdf')}>Writing for Academic </a>, title : 'BA History 1st semester' },
        {material : <a href={require('./bahistory/II Sem. - Introductory Economics I - 2019 Admn..pdf')}>Introduction Economics</a>, title : 'BA History 1st semester' },
        {material : <a href={require('./bahistory/TRENDS IN INDIAN HISTORIOGRAPHY_0.pdf')}>Trends in indian Historiography</a>, title : 'BA History 1st semester' },

    ]
    let history3 = [
        {material : <a href={require('./bahistory/III , IV sem-Political Ideas, Concepts and Ideologies_0.pdf')}>political idea</a>, title : 'BA History 1st semester' },
        {material : <a href={require('./bahistory/III Sem -BA-His,Politics-comple-Introductory Economics II.pdf')}>introduction of Economics 2</a>, title : 'BA History 1st semester' },
        {material : <a href={require('./bahistory/SLM-III sem common- Poetry in hindi.pdf')}>Hindi</a>, title : 'BA History 1st semester' },
        {material : <a href={require('./bahistory/SLM-III Sem -Arabic - Reading Arabic Prose and Poetry.pdf')}>Arabic</a>, title : 'BA History 1st semester' },
        {material : <a href={require('./bahistory/MAL3A09_0.pdf')}>Malayalam</a>, title : 'BA History 1st semester' },
        {material : <a href={require('./bahistory/Indian History -1 (1).pdf')}>Indian History 1</a>, title : 'BA History 1st semester' },
        {material : <a href={require('./bahistory/III Sem BA English -Signatures-Expressing the self (1).pdf')}>Signatures-Expressing</a>, title : 'BA History 1st semester' },
    ]

  return (
    <div>
        
            <div className="row">
                <div className="footer-col">
                    <ol>
                        <div className="material-sem">BA .History 1st Semester</div>
                        {
                                history1.map(function(item, index){
                                    return <div key={index}>
                                    <li>{item.material}</li></div> 
                                })
                            }
                    </ol>
                </div>
                <div className="footer-col">
                    <ol>
                        <div className="material-sem">BA .History 2nd Semester</div>
                        {
                                history2.map(function(item, index){
                                    return <div key={index}>
                                    <li>{item.material}</li></div> 
                                })
                            }
                    </ol>
                </div>
                
                <div className="footer-col">
                    <ol>
                        <div className="material-sem">BA .History 3rd Semester</div>
                        {
                                history3.map(function(item, index){
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

export default BaHistory