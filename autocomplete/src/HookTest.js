import React, { useState } from 'react';
import './Text.css';

const HookTest = (props) => {
    const [countries, setCountries] = useState({
        suggestions:[],
        text:'',
    })

    const onTextChanged= (e) =>{
        const{items}= props;
        const value= e.target.value;
        var suggestions=[];
        if(value.length>0){
            const regex= new RegExp(`^${value}`,'i');
            suggestions=items.sort().filter(v=>regex.test(v));

        }
        setCountries(()=>({suggestions,text:value}));
    }

    const suggestionSelected = (value) => {
        setCountries(() => ( {
            text:value,
            suggestions :[],
        }))
    }

    const renderSuggestions = () => {
        const {suggestions} = countries;
        if(suggestions.length===0){
            return null;
        }
        return(
          
            <ul>
                {suggestions.map((item)=><li onClick={()=> suggestionSelected(item)}>{item}</li>)}
            </ul>
        )
    }

        return( 
            
            <div className="Text">
                <input value={countries.text}  onChange={onTextChanged} type="text" /> <i className="fas fa-caret-down"></i>
                {renderSuggestions()}
            </div>
        ); 
}

export default HookTest;
