"use client";
import { useState } from "react";
import StoryComponent from "./StoryComponent";

function StoryGame() {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showMeaningsModal, setShowMeaningsModal] = useState(false);
  const [selectedOptionMeaning, setSelectedOptionMeaning] = useState("");
  const stories = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/330px-Image_created_with_a_mobile_phone.png",
      sentence: "The cat is sitting on the ____.",
      blankOptions: ["mat", "bat", "cat", "hat"],
      correctOption: "mat",
      meanings: {
        mat: "a piece of coarse material placed on a floor for people to wipe their feet on.",
        bat: "an implement with a handle and a solid surface, typically of wood, used for hitting the ball in games such as cricket, baseball, and table tennis.",
        cat: "a small domesticated carnivorous mammal with soft fur, a short snout, and retractable claws.",
        hat: "a shaped covering for the head worn for warmth, as a fashion item, or as part of a uniform.",
      },
    },

    {
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg",
      sentence: "The ____ is playing with a ball.",
      blankOptions: ["dog", "cat", "rat", "bat"],
      correctOption: "cat",
      meanings: {
        dog: "a domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, non-retractable claws, and a barking, howling, or whining voice.",
        cat: "a small domesticated carnivorous mammal with soft fur, a short snout, and retractable claws.",
        rat: "a rodent that resembles a large mouse, typically having a pointed snout and a long, sparsely haired tail.",
        bat: "a nocturnal flying mammal that has membranous wings stretching from the forelimbs to the hind limbs or tail.",
      },
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/79/2010-brown-bear.jpg",
      sentence: "The ____ is catching a fish.",
      blankOptions: ["bear", "deer", "bird", "shark"],
      correctOption: "bear",
      meanings: {
        bear: "a large, heavy mammal with thick fur and a very short tail.",
        deer: "a hoofed grazing or browsing animal, with branched bony antlers that are shed annually and typically borne only by the male.",
        bird: "a warm-blooded egg-laying vertebrate distinguished by the possession of feathers, wings, and a beak.",
        shark:
          "a long-bodied chiefly marine fish with a cartilaginous skeleton, a prominent dorsal fin, and tooth-like scales.",
      },
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg",
      sentence: "The ____ is grazing in the field.",
      blankOptions: ["cow", "sheep", "horse", "goat"],
      correctOption: "cow",
      meanings: {
        cow: "a fully grown female animal of a domesticated breed of ox, kept to produce milk or beef.",
        sheep:
          "a domesticated ruminant animal with a thick woolly coat and (typically only in the male) curving horns.",
        horse:
          "a solid-hoofed plant-eating domesticated mammal with a flowing mane and tail.",
        goat: "a hardy domesticated ruminant animal that has backward curving horns and (in the male) a beard.",
      },
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg",
      sentence: "The ____ is roaring in the jungle.",
      blankOptions: ["lion", "elephant", "tiger", "giraffe"],
      correctOption: "lion",
      meanings: {
        lion: "a large tawny-colored cat that lives in prides, found in Africa and northwestern India.",
        elephant:
          "a heavy plant-eating mammal with a prehensile trunk, long curved ivory tusks, and large ears.",
        tiger:
          "a very large solitary cat with a yellow-brown coat striped with black.",
        giraffe:
          "an African even-toed ungulate mammal, the tallest living terrestrial animal.",
      },
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/93/Golden_Retriever_Carlos_%2810581910556%29.jpg",
      sentence: "The ____ is fetching the stick.",
      blankOptions: ["dog", "cat", "rabbit", "fox"],
      correctOption: "dog",
      meanings: {
        dog: "a domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, non-retractable claws, and a barking, howling, or whining voice.",
        cat: "a small domesticated carnivorous mammal with soft fur, a short snout, and retractable claws.",
        rabbit:
          "a burrowing, gregarious, plant-eating mammal with long ears, long hind legs, and a short tail.",
        fox: "a carnivorous mammal with a pointed muzzle and bushy tail, noted for its cunning.",
      },
    },

    // ... more stories
  ];
  const currentStory = stories[currentStoryIndex];

  const handleOptionClick = (option) => {
    setIsCorrect(option === currentStory.correctOption);
    if (!option === currentStory.correctOption) return;
    setSelectedOptionMeaning(currentStory.meanings[option]);
    setShowMeaningsModal(true);

    setTimeout(() => {
      setIsCorrect(null);
      setCurrentStoryIndex((prevIndex) => prevIndex + 1);
    }, 2000);
  };

  const handleCloseModal = () => {
    setShowMeaningsModal(false);
    setSelectedOptionMeaning("");
  };

  // Check if the game is over
  if (currentStoryIndex >= stories.length) {
    return <p>Game Over! Thanks for playing.</p>;
  }

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

      {showMeaningsModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-600 text-white p-8 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Meaning</h2>
            <p>{selectedOptionMeaning}</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default StoryGame;
