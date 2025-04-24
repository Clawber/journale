'use client'

import React, { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface GridSquareProps {
  value: string;
  onChange: (newValue: string) => void;
  isEditing: boolean;
  onFocus: () => void;
  onBlur: () => void;
}

const GridSquare: React.FC<GridSquareProps> = ({ value, onChange, isEditing, onFocus, onBlur }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <div className="relative w-full h-full">
      {isEditing ? (
        <Input
          ref={inputRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          onFocus={onFocus}
          className="w-full h-full p-1 border-2 border-blue-500 focus:ring-2 focus:ring-blue-500"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onBlur();
            }
          }}
        />
      ) : (
        <div
          onClick={onFocus}
          className={cn(
            "w-full h-full p-1 border border-gray-300 dark:border-gray-700 cursor-pointer",
            "hover:bg-gray-100 dark:hover:bg-gray-800",
            "transition-colors duration-200",
            !value && "text-gray-500 dark:text-gray-400" // Placeholder effect
          )}
        >
          {value || <span className="opacity-0">.</span>} {/* Ensure the div has height even when empty */}
        </div>
      )}
    </div>
  );
};

const EditableGrid = () => {
  const [gridData, setGridData] = useState<string[][]>(() => {
    const initialGrid = Array(5).fill(null).map(() => Array(5).fill(''));
    return initialGrid;
  });
  const [editingCell, setEditingCell] = useState<{ row: number; col: number } | null>(null);

  const handleCellClick = (row: number, col: number) => {
    setEditingCell({ row, col });
  };

  const handleCellBlur = () => {
    setEditingCell(null);
  };

  const handleCellChange = (row: number, col: number, newValue: string) => {
    setGridData((prevGridData) => {
      const newGridData = [...prevGridData];
      newGridData[row] = [...newGridData[row]]; // important: copy the row!
      newGridData[row][col] = newValue;
      return newGridData;
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent, row: number, col: number) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (row > 0) {
        setEditingCell({ row: row - 1, col });
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (row < gridData.length - 1) {
        setEditingCell({ row: row + 1, col });
      }
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      if (col > 0) {
        setEditingCell({ row, col: col - 1 });
      }
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      if (col < gridData[row].length - 1) {
        setEditingCell({ row, col: col + 1 })
      }
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Editable Grid</h1>
      <div
        className="grid gap-1"
        style={{
          gridTemplateColumns: `repeat(${gridData[0].length}, 50px)`, // Fixed size for squares
          gridTemplateRows: `repeat(${gridData.length}, 50px)`,
        }}
        onKeyDown={(e) => {
          if (editingCell) {
            handleKeyDown(e, editingCell.row, editingCell.col)
          }
        }}
      >
        {gridData.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <GridSquare
              key={`${rowIndex}-${colIndex}`}
              value={cell}
              onChange={(newValue) => handleCellChange(rowIndex, colIndex, newValue)}
              isEditing={editingCell?.row === rowIndex && editingCell?.col === colIndex}
              onFocus={() => handleCellClick(rowIndex, colIndex)}
              onBlur={handleCellBlur}
            />
          ))
        )}
      </div>
      <p className="mt-4 text-sm text-gray-500">
        Click on a square to edit.  Use arrow keys to navigate.
      </p>
    </div>
  );
};

export default EditableGrid;
