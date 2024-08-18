import { initialEdges, initialNodes } from "@/app/flow-editor/initialData";
import { uuid } from "@/lib/utils";
import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
} from "@xyflow/react";
import { create } from "zustand";

interface FlowEditorState {
  nodes: Node[];
  edges: Edge[];
  setNodes: (nodes: Node[]) => void;
  setEdges: (edges: Edge[]) => void;
  onAddNode: () => void;
  onDeleteNode: (id: string) => void;
  onNodesChange: (changes: NodeChange[]) => void;
  onEdgesChange: (changes: EdgeChange[]) => void;
  onConnect: (params: Connection) => void;
  onNodeClick: (id: string | null) => void;
}

export const useFlowEditorStore = create<FlowEditorState>((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  selectedNodeId: "",
  setNodes: (nodes) => set({ nodes }),
  setEdges: (edges) => set({ edges }),
  onAddNode: () => {
    const { nodes, setNodes, edges, setEdges } = get();
    const newNode = {
      id: uuid(),
      type: "custom",
      data: { label: `Node ${nodes.length + 1}` },
      position: {
        x: 250,
        y: Math.max(...nodes.map((node) => node.position.y)) + 80,
      },
      selected: true,
    };
    setNodes(
      nodes.map((node) => ({ ...node, selected: false })).concat(newNode)
    );

    if (nodes.length > 0) {
      const newEdge = {
        id: uuid(),
        source: nodes[nodes.length - 1].id,
        target: newNode.id,
        animated: false,
      };
      setEdges([...edges, newEdge]);
    }
  },
  onDeleteNode: (id) => {
    const { nodes, setNodes, edges, setEdges } = get();
    setNodes(
      nodes
        .filter((node) => node.id !== id)
        .map((node, index, arr) => ({
          ...node,
          selected: index === arr.length - 1,
        }))
    );
    setEdges(edges.filter((edge) => edge.source !== id && edge.target !== id));
  },
  onNodesChange: (changes) => {
    const { nodes, setNodes } = get();
    setNodes(applyNodeChanges(changes, nodes));
  },
  onEdgesChange: (changes) => {
    const { edges, setEdges } = get();
    setEdges(applyEdgeChanges(changes, edges));
  },
  onConnect: (params) => {
    const { edges, setEdges } = get();
    setEdges(addEdge(params, edges));
  },
  onNodeClick: (id) => {
    const { nodes, setNodes } = get();
    setNodes(nodes.map((node) => ({ ...node, selected: node.id === id })));
  },
}));
