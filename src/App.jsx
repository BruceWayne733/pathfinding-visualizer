import Grid from "./components/Grid";

function App() {
  return (
    <div className="min-h-screen bg-white text-black p-4">
      <h1 className="text-2xl font-bold text-center">Pathfinding Visualizer</h1>

      <div className="bg-red-500 text-white text-center mt-4 p-2">
        If you see this red box, Tailwind is working.
      </div>

      {/* Visible container with scrolling support */}
      <div className="flex justify-center mt-8 overflow-auto border border-gray-800 p-4">
        <Grid />
      </div>
    </div>
  );
}

export default App;
