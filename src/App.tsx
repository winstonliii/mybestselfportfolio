import { Button } from "@/components/ui/button";
import { log } from "@/lib/logger";

function App() {
  log.debug("Hello, world!");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Button>Welcome to Winston's Best Self Portfolio!</Button>
    </div>
  );
}

export default App;
