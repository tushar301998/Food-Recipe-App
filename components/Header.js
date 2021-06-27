import React from 'react'

const Header = (props)=>{
    const {search , onInputChange , onSearchClick} = props;
    return (
       <div className="jumbotron">
      <h1 className="display-1">Food Recipe</h1>
      <div className="input-group w-50 mx-auto">
  <input type="text" className="form-control" placeholder="Search your Favourite Recipes" value={search} onChange={onInputChange}/>
  <button className="btn btn-dark" onClick={onSearchClick}>Search Recipe</button>
</div>
       </div>
    )
}


export default Header;