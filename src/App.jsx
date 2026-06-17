import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import './style/StyleComponent';
import Footer from "./components/footer/Footer";
import Header from './components/header/Header';
import { routes } from './routes/Route';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />




      <Routes>
        {routes.map((item, index) => {
          const Component = item.Element;
          return (
            <Route
              key={index}
              path={item.path}
              element={<Component />}
            />
          );
        })}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;