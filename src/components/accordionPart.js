import style from "./AccordionCard.module.css";
// ICONS
import iconPlus from  '../images/icon-plus.svg';
import iconMinus from  '../images/icon-minus.svg';

export default function accordionPart(props) {
  const { activeNumber, click, clickNum, title, content } = props;
  return (
    <div className={style.part}>
      <div className={style.partHead} onClick={() => click(clickNum)}>
        <h4>{title}</h4>
        <img src={activeNumber === clickNum ? iconMinus : iconPlus} alt="icon"/>
      </div>
      <div
        className={`${style.contentCont} ${
          activeNumber === clickNum
            ? style.contentConttVisible
            : style.contentContHidden
        }`}
      >
        <p>{content}</p>
      </div>
    </div>
  );
}
