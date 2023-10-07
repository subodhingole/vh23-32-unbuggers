function OptionsComponent({ options, onOptionClick }) {
  return (
    <div className="flex gap-4 mt-4">
      {options?.map((option) => (
        <button
          key={option}
          onClick={() => onOptionClick(option)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default OptionsComponent;
