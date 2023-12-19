import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Burger from './components/Burger/Burger';
import Home from './pages/Home';

function App() {
  const [activeBurger, setActiveBurger] = useState(false);
  const [editor, setEditor] = useState([]);

  useEffect(() => {
    const fetchEditor = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/editor.json`);
        const editorData = await response.json();

        setEditor(editorData);
      } catch (error) {
        console.error('Ошибка при получений редактора:', error);
      }
    };
    fetchEditor();
  }, []);

  const handleBurger = () => {
    setActiveBurger((prev) => !prev);
  };

  return (
    <div className="App">
      <Header editor={editor.header} activeBurger={activeBurger} handleBurger={handleBurger} />
      <Burger
        editor={editor.header}
        activeBurger={activeBurger}
        handleBurger={handleBurger}
        setActiveBurger={setActiveBurger}
      />
      {/* <Burger /> */}
      <Routes>
        <Route path="/" element={<Home editor={editor.home} />} />
      </Routes>
    </div>
  );
}

export default App;
