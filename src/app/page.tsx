import { ReactFlowProvider } from "@xyflow/react";
import FlowEditor from "./flow-editor";

export default function App() {
  return (
    <ReactFlowProvider>
      <FlowEditor />
    </ReactFlowProvider>
  );
}
