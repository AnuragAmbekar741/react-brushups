import React, { useState } from "react";
import Column from "./Column";

export type ItemT = {
  columnNumber: number;
  id: number;
  title: string;
};

const Retell: React.FC = () => {
  const [items, setItems] = useState<ItemT[]>([]);

  const moveElement = (to: number, id: number) => {
    const ele = items?.find((ele) => ele.id === id);
    if (!ele) return;
    const newEle: ItemT = { id: ele.id, title: ele.title, columnNumber: to };
    setItems([...items.filter((ele) => ele.id !== id), newEle]);
  };

  return (
    <div className="flex w-full gap-4 p-10">
      <Column
        items={items}
        setItems={setItems}
        columnNumber={1}
        moveElement={moveElement}
      />
      <Column
        items={items}
        setItems={setItems}
        columnNumber={2}
        moveElement={moveElement}
        isMiddle
      />
      <Column
        items={items}
        setItems={setItems}
        columnNumber={3}
        moveElement={moveElement}
      />
    </div>
  );
};

export default Retell;
