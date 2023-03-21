import "./style.css"

const Buttons = (props) => (
  <div className="buttons">
    {props.tasks.length > 0 && (
      <>
        <button
          className={`buttons__button ${props.tasks.length === 0 ? "buttons__button--hidden" : ""}`}
        >
          {props.doneTasksHidden ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button
          className={`buttons__button ${props.tasks.length === 0 ? "buttons__button--hidden" : ""}
        ${props.tasks.every(({ done }) => done) ? "disabled" : ""}`}
        >
          Ukończ wszystkie
        </button>
      </>
    )}
  </div>
);

export default Buttons;