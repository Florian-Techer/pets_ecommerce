import './homeSearchBar.css'
import { useState } from 'react';

import search from '../../assets/svg/search.svg'

function HomeSearchBar() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(inputValue);
    };
  return (
    <>
    <div className='search_input_container'>
            <input 
                value={inputValue}
                onChange={handleChange} 
                className='search_input'
                type="text" 
                id="monInput" 
                name="monInput" 
                placeholder="Rechercher" 
            />
            <div 
                className='search_icon_container' 
                onClick={handleSubmit}
            >
                <img className='search_icon' src={search} alt="" />
            </div>
        </div>
    </>
  )
}

export default HomeSearchBar