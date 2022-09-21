import React, { useEffect, useState } from 'react'
import './AutoComplete.css'
import { getAllPokemon } from '../../utils/ApiCalls'
import { Link } from 'react-router-dom'
import Autosuggest from 'react-autosuggest'
const suggestionsData: any[] = []
const data = async () => {
  const response = await getAllPokemon()
  return response
}
function AutoComplete () {
  const [pokemonArray, setPokemonArray] = useState([])
  const [value, setValue] = useState('')
  const [pokemonSuggestions, setPokemonSuggestions] = useState(suggestionsData)
  const [selectedPokemon, setSelectedPokemon] = useState({ name: '', url: '' })
  useEffect(() => {
    if (pokemonArray.length !== 0) {
      suggestionsData.push(pokemonArray)
    } else {
      data()
        .then((response) => {
          suggestionsData.push(...response)
          setPokemonArray({ ...response })
        }
        )
        .catch((error) => {
          console.log(error)
        }
        )
    }
  }, [])

  const onSuggestionsFetchRequested = ({ value }: any) => {
    setPokemonSuggestions(filterPokemons(value))
  }
  const filterPokemons = (value: any) => {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length

    const filtered = suggestionsData.filter((pokemon: { name: string}) => {
      const pokemonName = pokemon.name

      if (pokemonName.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .includes(inputValue)) {
        return pokemon
      } else {
        return false
      }
    })

    return inputLength === 0 ? [] : filtered
  }
  const onSuggestionsClearRequested = () => {
    setPokemonSuggestions([])
  }
  const getSuggestionValue = (suggestion: { name: '', url: '' }) => {
    return `${suggestion.name} `
  }
  const renderSuggestion = (suggestion: { name: '', url: '' }) => (
    <div className='suggestion' onClick={() => selectPokemon(suggestion)}>
      {`${suggestion.name}`}
    </div>
  )
  const selectPokemon = (suggestion: { name: '', url: '' }) => {
    setSelectedPokemon(suggestion)
  }
  const onChange = (e: any, { newValue }: any) => {
    setValue(newValue)
  }
  const inputProps = {
    placeholder: 'Pokemon Name',
    value,
    onChange
  }
  const eventEnter = (e: any) => {
    if (e.key === 'Enter') {
      const split = e.target.value.split('-')
      const pokemonName = {
        name: split[0].trim(),
        url: split[1].trim()
      }
      selectPokemon(pokemonName)
    }
  }

  return (
  <div className="AutoComplete">
    <div>
    <Autosuggest
      suggestions={pokemonSuggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
      onSuggestionSelected={eventEnter}
     />
    </div>
    <div>
      <Link className='search-button' to={{ pathname: `/pokemon/${selectedPokemon.name}` }} >Search</Link>
    </div>
  </div>
  )
}
export default AutoComplete
