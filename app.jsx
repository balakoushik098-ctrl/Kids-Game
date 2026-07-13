import React, { useState, useEffect, useRef } from "react";
import { Volume2, Home, ArrowLeft, Star, Trophy, Music, VolumeX, Award, Heart } from "lucide-react";

export default function KidsLearningApp() {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [currentNumberIndex, setCurrentNumberIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);

  const alphabets = [
    { letter: "A", word: "Apple", emoji: "🍎" },
    { letter: "B", word: "Ball", emoji: "⚽" },
    { letter: "C", word: "Cat", emoji: "🐱" },
    { letter: "D", word: "Dog", emoji: "🐶" },
    { letter: "E", word: "Elephant", emoji: "🐘" },
    { letter: "F", word: "Fish", emoji: "🐟" },
    { letter: "G", word: "Goat", emoji: "🐐" },
    { letter: "H", word: "Hat", emoji: "🎩" },
    { letter: "I", word: "Ice cream", emoji: "🍦" },
    { letter: "J", word: "Jug", emoji: "🏺" },
    { letter: "K", word: "Kite", emoji: "🪁" },
    { letter: "L", word: "Lion", emoji: "🦁" },
    { letter: "M", word: "Monkey", emoji: "🐒" },
    { letter: "N", word: "Nest", emoji: "🪺" },
    { letter: "O", word: "Orange", emoji: "🍊" },
    { letter: "P", word: "Parrot", emoji: "🦜" },
    { letter: "Q", word: "Queen", emoji: "👑" },
    { letter: "R", word: "Rabbit", emoji: "🐰" },
    { letter: "S", word: "Sun", emoji: "☀️" },
    { letter: "T", word: "Tiger", emoji: "🐯" },
    { letter: "U", word: "Umbrella", emoji: "☔" },
    { letter: "V", word: "Van", emoji: "🚐" },
    { letter: "W", word: "Watch", emoji: "⌚" },
    { letter: "X", word: "Xylophone", emoji: "🎼" },
    { letter: "Y", word: "Yo-yo", emoji: "🪀" },
    { letter: "Z", word: "Zebra", emoji: "🦓" }
  ];

  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const speakText = (text) => {
    if (!isSoundOn) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
  };

  const handleNextLetter = () => {
    setCurrentLetterIndex((prev) => (prev + 1) % alphabets.length);
    setScore(score + 1);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 1000);
  };

  const handlePrevLetter = () => {
    setCurrentLetterIndex((prev) => (prev - 1 + alphabets.length) % alphabets.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-yellow-300 p-4 font-sans">

      {/* HOME SCREEN */}
      {currentScreen === "home" && (
        <div className="flex flex-col items-center justify-center h-screen text-center">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">🎓 Kids Learning 🎓</h1>
          <p className="text-2xl text-white mb-10">Learn ABC & 123 with Fun!</p>

          <div className="flex flex-col gap-6 w-full max-w-sm">
            <button
              onClick={() => setCurrentScreen("abc")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-6 rounded-3xl text-3xl font-bold shadow-2xl transform hover:scale-105 transition"
            >
              ABC Learn 🔤
            </button>
            <button
              onClick={() => setCurrentScreen("123")}
              className="bg-green-500 hover:bg-green-600 text-white px-10 py-6 rounded-3xl text-3xl font-bold shadow-2xl transform hover:scale-105 transition"
            >
              123 Learn 🔢
            </button>
          </div>

          <button
            onClick={() => setIsSoundOn(!isSoundOn)}
            className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg"
          >
            {isSoundOn? <Volume2 /> : <VolumeX />}
          </button>
        </div>
      )}

      {/* ABC SCREEN */}
      {currentScreen === "abc" && (
        <div className="flex flex-col items-center pt-4">
          <div className="w-full flex justify-between items-center mb-4">
            <button onClick={() => setCurrentScreen("home")} className="bg-white px-4 py-2 rounded-xl shadow">
              <ArrowLeft />
            </button>
            <div className="bg-white px-4 py-2 rounded-xl shadow flex items-center gap-2">
              <Trophy className="text-yellow-500" />
              <span className="font-bold text-xl">{score}</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md text-center">
            <h2 className="text-9xl font-bold text-purple-600 mb-4">{alphabets[currentLetterIndex].letter}</h2>
            <p className="text-4xl font-semibold mb-2">{alphabets[currentLetterIndex].word}</p>
            <p className="text-8xl mb-6">{alphabets[currentLetterIndex].emoji}</p>

            <button
              onClick={() => speakText(`${alphabets[currentLetterIndex].letter} for ${alphabets[currentLetterIndex].word}`)}
              className="bg-yellow-400 hover:bg-yellow-500 px-8 py-4 rounded-2xl mb-6 shadow-lg"
            >
              <Volume2 size={40} className="mx-auto" />
            </button>

            <div className="flex gap-4 justify-center">
              <button
                onClick={handlePrevLetter}
                className="bg-gray-300 hover:bg-gray-400 px-8 py-4 rounded-2xl text-xl font-bold"
              >
                Previous
              </button>
              <button
                onClick={handleNextLetter}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-2xl text-xl font-bold"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 123 SCREEN */}
      {currentScreen === "123" && (
        <div className="flex flex-col items-center pt-4">
          <div className="w-full flex justify-between items-center mb-4">
            <button onClick={() => setCurrentScreen("home")} className="bg-white px-4 py-2 rounded-xl shadow">
              <ArrowLeft />
            </button>
          </div>

          <h2 className="text-4xl font-bold text-white mb-6">Tap to Learn Numbers</h2>

          <div className="grid grid-cols-5 gap-4 w-full max-w-lg">
            {numbers.map((num) => (
              <button
                key={num}
                onClick={() => speakText(num)}
                className="bg-white hover:bg-yellow-200 text-5xl font-bold p-6 rounded-2xl shadow-lg transform hover:scale-110 transition"
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      )}

      {showConfetti && (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none flex items-center justify-center">
          <Star size={100} className="text-yellow-400 animate-bounce" />
        </div>
      )}

    </div>
  );
}