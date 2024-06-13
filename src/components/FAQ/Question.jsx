import React, { useState } from 'react';
import './faq.css'

const FAQItem = (props) =>{
  const [activeQues, setActiveQues] = useState(false);

  return (
    <div className="faq-question-wrap">
      <a className="faq-question-bar" onClick={() => setActiveQues(!activeQues)}>
        <div className="question-title">{props.ques}</div>
        <img
          alt=""
          src="https://assets-global.website-files.com/6489e6bc11d0980ebc5de881/6489e6bc11d0980ebc5de92a_Plus.svg"
          className={`opacity-50 cursor-pointer ${activeQues?"cross":"plus"}`}

        />
      </a>
      <div className={`${activeQues?'expanded':"faq-content"}`}>
        <p className="faq-paragraph" dangerouslySetInnerHTML={{__html: props.ans}}>
        </p>
      </div>
    </div>
  );
}

export default FAQItem;
