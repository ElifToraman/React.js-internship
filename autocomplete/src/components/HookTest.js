import React, { useState } from 'react';
import './Text.css';

const HookTest = (props) => {
    const [suggestions, setSuggestions] = useState(props.items)
    const [searchText, setSearchText] = useState('')

    const onTextChanged= (e) =>{
        const countryItems = props.items;
        const searchValue= e.target.value;
        var suggestions = [];

        if(searchValue.length>0){
            const regex = new RegExp(`^${searchValue}`,'i');
            suggestions = countryItems && countryItems.sort().filter(countryVal=>regex.test(countryVal));
        }

        if(suggestions.length === 0){
            setSuggestions(countryItems)
        }
        else{
            setSuggestions(suggestions)
        }

        setSearchText(searchValue)
    }

    const suggestionSelected = (suggestion) => {
        setSuggestions([])
        setSearchText(suggestion)
    }

    const renderSuggestions = () => {
        if(suggestions.length === 0){
            return null;
        }

        return(
            <ul>
                {
                   suggestions.map((item,index)=>{
                       return <li key={index} onClick={()=> suggestionSelected(item)}>{item}</li>
                    })
                }
            </ul>
        )
    }

        return(

            <div className="Text">
                <input value={searchText}  onChange={onTextChanged} type="text" />
                <i className="fas fa-caret-down"></i>
                {renderSuggestions()}
            </div>
        );
}

export default HookTest;
