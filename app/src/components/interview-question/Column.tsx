import React, { useState, type SetStateAction } from "react";
import { type ItemT } from "./Retell";

const Column: React.FC<{
  columnNumber: number;
  items: ItemT[];
  setItems: React.Dispatch<SetStateAction<ItemT[]>>;
  moveElement: (to: number, id: number) => void;
  isMiddle?: boolean;
}> = ({ isMiddle = false, columnNumber, items, setItems, moveElement }) => {
  const [inputText, setInputText] = useState<string>("");

  const handleAddItems = () => {
    const newItem: ItemT = {
      columnNumber: columnNumber,
      id: Math.floor(Math.random() * 1000000),
      title: inputText,
    };
    setInputText("");
    setItems((prevItems) => [...prevItems, newItem]);
  };
  return (
    <div className="w-1/3 flex flex-col gap-2 border border-slate-50 shadow-md p-3">
      <div className="flex justify-between items-center gap-1 p-2 border border-slate-100 bg-slate-50 rounded-md">
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="px-2 py-1.5 border border-slate-200 rounded-md w-full"
          placeholder="@title"
        />
        <button
          onClick={handleAddItems}
          className="px-2 py-1.5 border border-slate-200 rounded-md"
        >
          Add
        </button>
      </div>
      {items
        ?.filter((ele) => ele.columnNumber === columnNumber)
        .map((item) => (
          <>
            {isMiddle ? (
              <div className="flex items-center justify-between p-1 rounded-md border border-slate-200">
                <button
                  onClick={() => moveElement(1, item.id)}
                  className="rounded-md border border-slate-200 px-2 py-1"
                >
                  Move
                </button>
                <p className="text-md font-medium">{item.title}</p>
                <button
                  onClick={() => moveElement(3, item.id)}
                  className="rounded-md border border-slate-200 px-2 py-1"
                >
                  Move
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between p-1 rounded-md border border-slate-200">
                <p className="text-md font-medium">{item.title}</p>
                <button
                  onClick={() => moveElement(2, item.id)}
                  className="rounded-md border border-slate-200 px-2 py-1"
                >
                  Move
                </button>
              </div>
            )}
          </>
        ))}
    </div>
  );
};

export default Column;
