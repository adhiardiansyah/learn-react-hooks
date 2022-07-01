import './App.css';
import UseCallbackHook from './components/useCallbackHook';
import UseCustomHook from './components/useCustomHook';
import UseEffectHook from './components/useEffectHook';
import UseMemoHook from './components/useMemoHook';
import UseRefHook from './components/useRef';
import UseStateHook from './components/useStateHook';

function App() {
  return (
    <div className="App">
      {/* <UseStateHook/> */}
      {/* <UseEffectHook/> */}
      <UseCallbackHook/>
      {/* <UseMemoHook/> */}
      {/* <UseRefHook/> */}
      {/* <UseCustomHook/> */}
    </div>
  );
}

export default App;
