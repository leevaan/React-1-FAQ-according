import style from "./AccordionCard.module.css";
import { useState } from "react";
import AccordionPart from "./accordionPart";
// ICONS
import iconStar from "../images/icon-star.svg";

function AccordionCard() {
  const [activeNumber, setActiveNumber] = useState(null);
  const accordionComponents = [
    {
      clickNum: 1,
      title: "What is Frontend Mentor, and how will it help me?",
      content:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building.",
    },
    {
      clickNum: 2,
      title: "Is Frontend Mentor free?",
      content:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building.",
    },
    {
      clickNum: 3,
      title: "Can I use Frontend Mentor projects in my portfolio?",
      content:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building.",
    },
    {
      clickNum: 4,
      title: "How can I get help if I'm stuck on a challenge?",
      content:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building.",
    },
  ];
  const click = (clickNumber) => {
    if (activeNumber === clickNumber) {
      setActiveNumber(style.contentContHidden);
    } else {
      setActiveNumber(clickNumber);
    }
  };

  return (
    <>
      <div className={style.cardHeader}>
        <img src={iconStar} alt=" star icon" />
        <span className={style.faqs}>FAQs</span>
      </div>
      {accordionComponents.map((element) => {
        return (
          <AccordionPart
            key={element.clickNum}
            activeNumber={activeNumber}
            click={click}
            clickNum={element.clickNum}
            title={element.title}
            content={element.content}
          />
        );
      })}
    </>
  );
}

export default AccordionCard;
