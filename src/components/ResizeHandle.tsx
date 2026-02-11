"use client";
import React, { useCallback, useEffect, useState } from "react";

interface Props {
  onResize: (deltaX: number) => void;
  onResizeEnd: () => void;
}

export default function ResizeHandle({ onResize, onResizeEnd }: Props) {
  const [dragging, setDragging] = useState(false);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setDragging(true);
  }, []);

  useEffect(() => {
    if (!dragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      onResize(-e.movementX);
    };

    const handleMouseUp = () => {
      setDragging(false);
      onResizeEnd();
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.body.style.userSelect = "none";
    document.body.style.cursor = "col-resize";

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.userSelect = "";
      document.body.style.cursor = "";
    };
  }, [dragging, onResize, onResizeEnd]);

  return (
    <div
      onMouseDown={handleMouseDown}
      className="w-1 shrink-0 cursor-col-resize bg-gray-800
                 hover:bg-blue-500 transition-colors"
      style={dragging ? { backgroundColor: "rgb(59,130,246)" } : undefined}
    />
  );
}
