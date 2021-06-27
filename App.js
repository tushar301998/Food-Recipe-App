import './App.css';
import Header from './components/Header'
import Recipes from './components/Recipes'
import { useState, useEffect } from 'react'
import Axios from 'axios';



function App() {
  const [search, setSearch] = useState("panner");
  const [recipe, setRecipe] = useState([]);
  const APP_ID = "3dc2f04e";
  const APP_KEY = "3b0fc8226c2a50efc3642fa4e6a764e8";

  useEffect(async () => {
    getRecipes();
  }, [])

  const getRecipes = async () => {
    const res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);

    setRecipe(res.data.hits);

  }

  const onSearchClick = ()=>{
    getRecipes();
  }

  const onInputChange = (e) => {
    setSearch(e.target.value);
  }
  return (
    <div className="App">
      <Header search={search} onInputChange={onInputChange} onSearchClick={onSearchClick} />
      <div className="container"><Recipes recipe={recipe} /></div>
    </div>
  );
}

export default App;
