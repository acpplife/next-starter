"use client";

import { Button } from "@/components/ui/button";
import { useFlowEditorStore } from "@/store/flow-editor";

interface HeaderProps {}

function Header({}: HeaderProps) {
  const { nodes, onAddNode, onDeleteNode } = useFlowEditorStore();
  const selectedNodeId = nodes.find((node) => node.selected)?.id;

  return (
    <div className="flex justify-between items-center p-2 bg-gray-200 absolute top-0 left-0 right-0 z-10">
      <h1 className="text-xl font-bold">Flow Editor</h1>
      <div className="flex gap-2">
        <Button onClick={onAddNode}>添加节点</Button>
        <Button
          onClick={() => onDeleteNode(selectedNodeId || "")}
          variant="danger"
          disabled={!selectedNodeId}
        >
          删除节点
        </Button>
      </div>
    </div>
  );
}

export default Header;
