import React, { useState, useMemo, type KeyboardEvent } from "react";
import { twMerge } from "tailwind-merge";

const MAX_GUESS_COUNT: number = 5;
const MAX_INPUT_LENGTH: number = 5;

const solution: string = "earth";

const Wordle: React.FC = () => {
  const [input, setInput] = useState("");
  const [guesses, setGuesses] = useState<string[]>([]);

  const status = useMemo(() => {
    if (guesses.includes(solution)) return "win";
    if (guesses.length === MAX_GUESS_COUNT) return "loss";
    return "playing";
  }, [guesses]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === "Enter" &&
      input.length === 5 &&
      guesses.length < MAX_GUESS_COUNT
    ) {
      setGuesses([...guesses, input]);
      setInput("");
    }
  };

  const getColor = (char: string, index: number) => {
    if (solution[index] === char) return "bg-green-300";
    else if (solution.includes(char)) return "bg-yellow-300";
    else return "bg-gray-300";
  };

  return (
    <div className="w-2/3 justify-center items-center grid m-10">
      <h1 className="m-2 text-2xl font-medium text-center">Wordle</h1>
      <div className="w-full">
        {guesses.map((row, rowIndex) => (
          <div className="flex" key={rowIndex}>
            {row.split("").map((col, colIndex) => (
              <div
                className={twMerge(
                  "py-1 rounded-sm px-3 text-lg m-1 border-2 font-bold",
                  getColor(col, colIndex)
                )}
                key={colIndex}
              >
                {col}
              </div>
            ))}
          </div>
        ))}
      </div>

      {status === "playing" && (
        <input
          type="text"
          maxLength={MAX_INPUT_LENGTH}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="border my-5 p-1"
          value={input}
        />
      )}

      {status === "win" && <h1>Yos won the game</h1>}

      {status === "loss" && <h1>Yos lost the game</h1>}
    </div>
  );
};

export default Wordle;
