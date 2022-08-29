export interface pokemonTemplate {
  abilities: [
    {
      ability: {
        name: ''
        url: ''
      }
      is_hidden: false
      slot: 1
    },
    {
      ability: {
        name: ''
        url: ''
      }
      is_hidden: false
      slot: 1
    },
    {
      ability: {
        name: ''
        url: ''
      }
      is_hidden: true
      slot: 1
    }
  ]
  base_experience: 1
  height: 1
  id: 1
  name: ''
  past_types: []
  sprites: {
    back_default: ''
    back_female: null
    back_shiny: ''
    back_shiny_female: null
    front_default: ''
    front_female: null
    front_shiny: ''
    front_shiny_female: null
  }
  stats: [
    {
      base_stat: 80
      effort: 0
      stat: {
        name: 'hp'
        url: 'https://pokeapi.co/api/v2/stat/1/'
      }
    },
    {
      base_stat: 105
      effort: 0
      stat: {
        name: 'attack'
        url: 'https://pokeapi.co/api/v2/stat/2/'
      }
    },
    {
      base_stat: 1
      effort: 0
      stat: {
        name: 'defense'
        url: 'https://pokeapi.co/api/v2/stat/3/'
      }
    },
    {
      base_stat: 1
      effort: 0
      stat: {
        name: 'special-attack'
        url: 'https://pokeapi.co/api/v2/stat/4/'
      }
    },
    {
      base_stat: 1
      effort: 0
      stat: {
        name: 'special-defense'
        url: 'https://pokeapi.co/api/v2/stat/5/'
      }
    },
    {
      base_stat: 1
      effort: 2
      stat: {
        name: 'speed'
        url: 'https://pokeapi.co/api/v2/stat/6/'
      }
    }
  ]
  types: [
    {
      slot: 1
      type: {
        name: ''
        url: ''
      }
    },
    {
      slot: 1
      type: {
        name: ''
        url: ''
      }
    }
  ]
  weight: 1
}

export const pokemonTemplateDefault: pokemonTemplate = {
  abilities: [
    {
      ability: {
        name: '',
        url: ''
      },
      is_hidden: false,
      slot: 1
    },
    {
      ability: {
        name: '',
        url: ''
      },
      is_hidden: false,
      slot: 1
    },
    {
      ability: {
        name: '',
        url: ''
      },
      is_hidden: true,
      slot: 1
    }
  ],
  base_experience: 1,
  height: 1,
  id: 1,
  name: '',
  past_types: [],
  sprites: {
    back_default: '',
    back_female: null,
    back_shiny: '',
    back_shiny_female: null,
    front_default: '',
    front_female: null,
    front_shiny: '',
    front_shiny_female: null
  },
  stats: [
    {
      base_stat: 80,
      effort: 0,
      stat: {
        name: 'hp',
        url: 'https://pokeapi.co/api/v2/stat/1/'
      }
    },
    {
      base_stat: 105,
      effort: 0,
      stat: {
        name: 'attack',
        url: 'https://pokeapi.co/api/v2/stat/2/'
      }
    },
    {
      base_stat: 1,
      effort: 0,
      stat: {
        name: 'defense',
        url: 'https://pokeapi.co/api/v2/stat/3/'
      }
    },
    {
      base_stat: 1,
      effort: 0,
      stat: {
        name: 'special-attack',
        url: 'https://pokeapi.co/api/v2/stat/4/'
      }
    },
    {
      base_stat: 1,
      effort: 0,
      stat: {
        name: 'special-defense',
        url: 'https://pokeapi.co/api/v2/stat/5/'
      }
    },
    {
      base_stat: 1,
      effort: 2,
      stat: {
        name: 'speed',
        url: 'https://pokeapi.co/api/v2/stat/6/'
      }
    }
  ],
  types: [
    {
      slot: 1,
      type: {
        name: '',
        url: ''
      }
    },
    {
      slot: 1,
      type: {
        name: '',
        url: ''
      }
    }
  ],
  weight: 1
}
