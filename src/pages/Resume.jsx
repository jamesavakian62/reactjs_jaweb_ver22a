//React imports
import React, { useState } from "react";
//Import components
import Faq from "../components/Faq";
//Import Styles
import "../styles/faq.css";
import Navbar3 from "../components/Navbar3";
import { Document } from "react-pdf";

const Resume = () => {
  //Set a state for the FAQs
  const [faqs, setFaqs] = useState([
    {
      question: "My Resume?",
      answer: `Please write me a email to JamesAvakian62@yahoo.com and ask for my Resume.`,
      id: 1,
    },

    {
      question: "Why is it private?",
      answer: `One reason is because it has my personal information.`,
      id: 2,
    },
  ]);

  return (
    <>
      <Navbar3 />
      <div className="faqWrapper">
        <h1 className="faqTitle">My Resume</h1>
        <div className="darkGlassCard faqContainer">
          {/* //Map through the FAQs and display them */}
          {faqs.map((faq) => {
            return (
              <Faq key={faq.id} question={faq.question} answer={faq.answer} />
            );
          })}
        </div>
      </div>{" "}
    </>
  );
};

export default Resume;
