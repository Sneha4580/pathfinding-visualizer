import { Children, createContext, useState } from "react";
import { AlgorithmType, GirdType, MazeType} from "../utils/types";
import { createGrid } from "../utils/helpers";
import { START_TILE_CONFIGURATION, END_TILE_CONFIGURATION} from "../utils/constants";
//import { START_TILE_STYLE } from "../utils/constants";


interface PathfindingContextInterface{
  algorithm: AlgorithmType;
  setAlgorithm: (algorithm: AlgorithmType) => void;
  maze: MazeType;
  setMaze:(maze: MazeType) => void;
  grid: GirdType;
  setGrid: (grid: GirdType) => void;
  isGraphVisualized: boolean;
  setIsGraphVisualized: (isGraphVisualized: boolean) => void;

}

export const PathfindingContext = createContext<PathfindingContextInterface | undefined>(undefined);

export const PathfindingProvider = ({children}: {children: React.ReactNode}) => {
  const [algorithm, setAlgorithm] = useState<AlgorithmType>("BFS");
  const [maze, setMaze] = useState<MazeType>("NONE");
  const [grid, setGrid] = useState<GirdType>(createGrid(START_TILE_CONFIGURATION, END_TILE_CONFIGURATION));
  const [isGraphVisualized, setIsGraphVisualized] = useState<boolean>(false);

  return (
    <PathfindingContext.Provider
      value={{
        algorithm,
        setAlgorithm,
        maze,
        setMaze,
        grid,
        setGrid,
        isGraphVisualized,
        setIsGraphVisualized,
      }}
    
    >{children}</PathfindingContext.Provider>
  )
}