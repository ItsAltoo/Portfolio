// App.tsx
import { Home } from "./app/Home";

function App() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-[#608BC1] to-[#1f55b2]" />
        <div className="relative z-10">
          <Home />
        </div>
    </>
  );
}

export default App;
