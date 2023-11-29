import { createRoot } from "react-dom/client";
import Food from "./Food";
import "./App.css";
const App = () => {
  return (
    <div>
      <h1 className="text-red-500 text-3xl font-bold underline">Adopt Me!</h1>
      <Food name="Luna" animal="dog" breed="Havanese" />
      <Food name="Pepper" animal="bird" breed="Cockatiel" />
      <Food name="Doink" animal="cat" breed="Mix" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
