import "./App.css";
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LayoutRoutes from "./routes/LayoutRoutes";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor, history } from "./redux/store";
import CustomRouter from "./utils/CustomRouter";
import NotFound from "./components/NotFound/index";

const App = () => {
  return (
    <Provider store={store}>
      <CustomRouter history={history}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            {LayoutRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </PersistGate>
      </CustomRouter>
    </Provider>
  );
};

export default App;
