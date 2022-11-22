import { useState } from "react";
import { HangmanDrawing } from "./hangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";
import words from "./wordlist.json";

function App() {
  const [wordToguess, setWordToguess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  console.log(wordToguess);
  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>Lose Win</div>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
    </div>
  );
}

export default App;
