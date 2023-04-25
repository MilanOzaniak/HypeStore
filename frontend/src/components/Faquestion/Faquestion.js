import React, { useState } from 'react';
import './Faquestion.css'
import faq from '../../images/faq.jpg'

const dataCollection = [
  {
    question: 'Aké sú poplatky za predaj na webovom bazári?',
    answer: 'Na našom bazáre nevyžadujeme platbu za pridanie produktu alebo vytvorenie použivateľského konta. '
  }, {
    question: 'Ako zabezpečuje webový bazár bezpečnosť mojich údajov?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
  }, {
    question: 'Ako nájsť konkrétny tovar na webovom bazári?',
    answer: 'Na našom bazáre máme kategórie v ktorých nájdete dané produkty a každá kategória obsahuje filter, kde si môžte vyhladať konkrétne produkt. '
  }, {
    question: 'Ako zabezpečiť, aby som nekúpil falšovaný tovar na webovom bazári?',
    answer: 'Každý profil použivateľa obsahuje komentáre kde si môžte pozrieť či uživateľ náhodou nepredáva falšovany tovar. '
  },
  {
    question: 'Aké typy tovaru sa môžu predávať na webovom bazári?',
    answer:'Náš bazár je zameraný na predaj oblečenia, topánok a doplnkov.'
  },
  {
    question: 'Ako sa vykonáva platba na webovom bazári?',
    answer:'Na platbe sa musite dohodnút s predajcom.'
  }
];

function Faquestion() {
  const [accordion, setActiveAccordion] = useState(-1);

  function toggleAccordion(index) {
    if (index === accordion) {
      setActiveAccordion(-1);
      return
    }
    setActiveAccordion(index);
  };

  return (
    <>
      <div className="containerquestions">
      <img src={faq} className="faq" alt='faq'/>
      <div className='accordion_all'>
        <div>
          <span className="accordion__title">Často kladené otázky</span>
        </div>
        <div className="accordion__faq">
          { dataCollection.map((item, index) =>
              <div key={index} onClick={() => toggleAccordion(index)}>
                <div className="accordion__faq-heading">
                  <h3 className={accordion === index ? "active" : ""}>{item.question}</h3>
                  <div>
                    {accordion === index ?
                      <span className="verticle"></span> : <span className="horizental"></span>}
                  </div>
                </div>
                <div><p className={accordion === index ? "active" : "inactive"} >{item.answer}</p></div>
              </div>
            )
          }
        </div>
        </div>
      </div>
    </>
  );
}

export default Faquestion;