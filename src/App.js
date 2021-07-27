import React from "react";
import Counter from "./component/Counter/Counter";
import { Header } from "./component/Header/Header";
import User from "./component/User/User";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import DisplayState from "./component/DisplayState/DisplayState";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Header />
        <User />
        <Counter />
        <DisplayState />
      </PersistGate>
    </Provider>
  );
}

export default App;
