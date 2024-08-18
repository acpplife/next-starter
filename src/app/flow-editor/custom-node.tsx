"use client";

import { Handle, NodeProps, Position } from "@xyflow/react";
import clsx from "clsx";
import { ReactNode } from "react";

const CustomNode = ({ id, data, selected }: NodeProps) => {
  return (
    <div
      className={clsx(
        "w-24 text-center px-4 py-2 border rounded bg-white",
        selected ? "border-blue-300" : "border-gray-300"
      )}
    >
      <Handle type="target" position={Position.Top} />
      <div className="text-sm">{data.label as ReactNode}</div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default CustomNode;
