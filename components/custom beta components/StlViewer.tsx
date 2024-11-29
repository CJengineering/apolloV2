"use client";
import { StlViewer } from "react-stl-viewer";

const url = "/models/BRUVS 3D Model.stl";
const style = {
  top: 0,
  left: 0,
  width: "50vw",
  height: "50vh",
};

export default function StlViewerComponent() {
  return (
    <div className="bg-green-600 w-1/2">
        <h3>Nat RTL</h3>
      <StlViewer style={style} orbitControls shadows url={url} />
    </div>
  );
}
