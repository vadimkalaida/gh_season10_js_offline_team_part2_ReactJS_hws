import './App.scss';
import LiveClock from "./components/LiveClock/LiveClock";
import { AppBlock } from "./elements";

const App = () => {
  return (
    <AppBlock>
      <LiveClock />
    </AppBlock>
  );
};

export default App;
