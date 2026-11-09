import { formatCount, toast } from "@gardusi-gustavo/ts";

export function App() {
  return (
    <main>
      <h1>package-ts React example</h1>
      <p>Formatted: {formatCount(1234)}</p>
      <button onClick={() => toast("Hello from package-ts")}>Show toast</button>
    </main>
  );
}
