import { usePathfinding } from "../hooks/usePathfinding";
import { MAZES } from "../utils/constants";
import { resetGrid } from "../utils/resetGrid";
import { MazeType } from "../utils/types";
import { Select } from "./Select";
import { useTile } from "../hooks/useTile";
import { runMazeAlgorithm } from "../utils/runMazeAlgorithm";
import { useSpeed } from "../hooks/useSpeed";
import { useState } from "react";

export function Nav() {
  const [isDisabled, setIsDisabled] = useState(false);
  const {maze, setMaze, grid, setGrid, setIsGraphVisualized} = usePathfinding();
  const {startTile, endTile} = useTile();
  const {speed} = useSpeed();

  const handleGenerateMaze = (maze: MazeType) => {
    if(maze == 'NONE') {
      setMaze(maze);
      resetGrid({ grid, startTile, endTile });
      return;
    }

    setMaze(maze);
    setIsDisabled(true);
    runMazeAlgorithm({
      maze,
      grid,
      startTile,
      endTile,
      setIsDisabled,
      speed,
    });
    const newGrid = grid.slice();
    setGrid(newGrid)
    setIsGraphVisualized(false);
  };

  return (
    <div className="flex items-center justify-center min-h-[4.5rem] border-b shadow-gray-600 sm:px-5 px-0">
      <div className="flex item-center lg:justify-between juster-center w-full sm:w-[52rem]">
        <h1 className="lg:flex hidden w-[40%] text-2xl pl-1">
          Pathfinding Visualizer
        </h1>
        <div className="flex sm:items-end item-center justify-start sm:justify-between sm:flex-row flex-col sm:space-y-0 space-y-3 sm:py-0 py-4 sm:space-x-4">
          <Select
            label="Maze"
            value={maze}
            options={MAZES}
            onChange={(e) => {
              handleGenerateMaze(e.target.value as MazeType);
            }}
          />
        </div>
      </div>
    </div>
  )
}

function setMaze(maze: string) {
  throw new Error("Function not implemented.");
}
