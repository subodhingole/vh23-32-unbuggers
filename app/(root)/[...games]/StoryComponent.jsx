import OptionsComponent from "./OptionsComponent";

function StoryComponent({ image, sentence, options, onOptionClick, meanings }) {
  return (
    <div>
      <img src={image} alt="Story" width={300} />
      <p>{sentence?.replace("____", "________")}</p>
      <OptionsComponent options={options} onOptionClick={onOptionClick} />
      <p>askldfj</p>
    </div>
  );
}

export default StoryComponent;
