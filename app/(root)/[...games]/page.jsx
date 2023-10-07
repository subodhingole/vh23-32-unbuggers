"use client";
import { useState } from "react";
import StoryComponent from "./StoryComponent";

function StoryGame() {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);

  const stories = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/330px-Image_created_with_a_mobile_phone.png",
      sentence: "The cat is sitting on the ____.",
      blankOptions: ["mat", "bat", "cat", "hat"],
      correctOption: "mat",
    },
    // ... more stories
  ];

  const currentStory = stories[currentStoryIndex];

  const handleOptionClick = (option) => {
    setIsCorrect(option === currentStory.correctOption);
    // Move to the next story after a short delay
    setTimeout(() => {
      setIsCorrect(null);
      setCurrentStoryIndex((prevIndex) => prevIndex + 1);
    }, 2000);
  };

  return (
    <div>
      <StoryComponent
        image={currentStory.image}
        sentence={currentStory.sentence}
        options={currentStory.blankOptions}
        onOptionClick={handleOptionClick}
      />
      {isCorrect !== null && (
        <p>{isCorrect ? "Correct!" : "Incorrect. Try again."}</p>
      )}
    </div>
  );
}

export default StoryGame;
