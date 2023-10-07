import OptionsComponent from "./OptionsComponent";

function StoryComponent({ image, sentence, options, onOptionClick, meanings }) {
  return (
    <div className="flex">
      <img src={image} alt="Story" width={300} />
      <div className="ml-4">
        <p>{sentence?.replace("____", "________")}</p>
        <OptionsComponent options={options} onOptionClick={onOptionClick} />
        <div className="mt-4">
          <h3>Meanings:</h3>
          <ul>
            {options.map((option) => (
              <li key={option}>
                <strong>{option}:</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StoryComponent;
