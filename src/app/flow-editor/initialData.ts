import { Edge, Node } from "@xyflow/react";

export const initialNodes: Node[] = [
  {
    id: "1",
    type: "custom",
    data: { label: "Node 1" },
    position: { x: 250, y: 0 },
  },
  {
    id: "2",
    type: "custom",
    data: { label: "Node 2" },
    position: { x: 250, y: 80 },
  },
  {
    id: "3",
    type: "custom",
    data: { label: "Node 3" },
    position: { x: 250, y: 160 },
  },
];

export const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e2-3", source: "2", target: "3", animated: false },
  { id: "e3-4", source: "3", target: "4", animated: false },
];
