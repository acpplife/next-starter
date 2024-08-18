"use client";

import { useFlowEditorStore } from "@/store/flow-editor";
import { Background, Controls, MiniMap, ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import CustomNode from "./custom-node";
import Header from "./header";
import "./index.css";

const nodeTypes = {
  custom: CustomNode,
};

function FlowEditor() {
  const {
    nodes,
    edges,
    onAddNode,
    onDeleteNode,
    onEdgesChange,
    onConnect,
    onNodeClick,
    onNodesChange,
  } = useFlowEditorStore();

  return (
    <div className="h-full">
      <Header />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={(_event, node) => onNodeClick(node?.id || null)}
        onConnect={onConnect}
        onPaneClick={() => onNodeClick(null)}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}

export default FlowEditor;
