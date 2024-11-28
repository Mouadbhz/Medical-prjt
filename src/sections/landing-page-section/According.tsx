"use client"
import React, { createRef, useEffect, useState, RefObject, MouseEvent } from "react";
import { IconArrowRight } from "@tabler/icons-react";

interface AccordionItem {
  title: string;
  content: string;
}

const content: AccordionItem[] = [
  {
    title: "What are the factors that lead to addiction to video games? ",
    content:
      "Video game addiction can be influenced by various factors. One factor is consumer video game engagement, which includes dimensions such as dedication, absorption, conscious attention, social connection, enthusiasm, and interaction. Another factor is the impact of behavioral disorders on human life and social connection.",
  },
  // Add other items as needed
];

function joinClasses(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ") as string;
}

export default function Accordion() {
  const [open, setOpen] = useState<number[]>([]);
  const [heights, setHeights] = useState<{ [key: number]: string }>({});
  const refs: RefObject<HTMLDivElement>[] = content.map(() => createRef<HTMLDivElement>());

  const onClick = (index: number) => {
    if (open.includes(index)) {
      setOpen(open.filter((i) => i !== index));
    } else {
      setOpen([...open, index]);
    }
  };

  useEffect(() => {
    const newHeights: { [key: number]: string } = {};
    content.forEach((item, i) => {
      newHeights[i] = open.includes(i) ? `${refs[i].current?.scrollHeight}px` : "0px";
    });
    setHeights(newHeights);
  }, [open]);

  return (
    <div className="flex flex-col max-w-3xl">
      {content.map((item: AccordionItem, index: number) => (
        <div key={index} className="border border-blue-500 rounded-lg mb-4">
          <div
            className={joinClasses(
              "flex justify-between items-center py-6 px-6 gap-4 cursor-pointer hover:bg-gray-100 transition-all duration-300",
              index === 0 && "rounded-t-lg",
              index === content.length - 1 && !open.includes(index) && "rounded-b-lg"
            )}
            onClick={() => onClick(index)}
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <IconArrowRight
              className={joinClasses(
                "w-4 h-4 text-gray-900 transition-transform duration-300 shrink-0",
                open.includes(index) && "transform rotate-90"
              )}
            />
          </div>
          <div
            ref={refs[index]}
            style={{ maxHeight: heights[index] }}
            className="overflow-hidden transition-all duration-300 ease-in-out"
          >
            <p className="px-6 pt-2 pb-6 text-lg text-gray-900">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}