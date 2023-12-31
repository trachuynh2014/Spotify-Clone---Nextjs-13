"use client";

import * as RadixSlider from "@radix-ui/react-slider";
import React from "react";
import { twMerge } from "tailwind-merge";

interface SliderProps {
  value?: number;
  onChange?: (value: number) => void;
  className?: string;
}

const Slider: React.FC<SliderProps> = ({ value = 1, onChange, className }) => {
  const handleChange = (newValue: number[]) => {
    onChange?.(newValue[0]);
  };
  return (
    <RadixSlider.Root
      className={twMerge(
        `relative flex items-center select-none touch-none w-full h-10`,
        className
      )}
      defaultValue={[1]}
      value={[value]}
      onValueChange={handleChange}
      max={1}
      step={0.1}
      aria-label="Volume"
    >
      <RadixSlider.Track className="bg-neutral-600 relative grow rounded-full h-[3px]">
        <RadixSlider.Range className="absolute bg-white rounded-full h-full" />
      </RadixSlider.Track>
    </RadixSlider.Root>
  );
};

export default Slider;
