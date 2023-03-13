const initialState ={
    pokemon: [],
    allPok: [],
    types: [],
    detail: [],
}

    function rootReducer (state = initialState, action){
        switch (action.type){
            case "GET_POK":
                return {
                    ...state,
                    pokemon: action.payload,
                    allPok: action.payload,
                  
                }

                //buscar
            case "GET_NAME_POK":
                return {
                    ...state,
                    pokemon: action.payload,
                }
                
                //detalle
                case "GET_DETAILS":
                    return {
                        ...state,
                        detail: action.payload
                    }
                case "DELETE":
                    return {
                        ...state,
                        detail: []
                    } 
                    
                //boton de orden asc y desc creados
                case "ORDER_BY_NAME": 
                let sortedArr = action.payload === "asc" ?
                    state.pokemon.sort(function(a,b){
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (b.name > a.name) {
                            return - 1;
                        }
                        return 0;
                    }) : 
                    state.pokemon.sort(function(a,b){
                        if (a.name > b.name) {
                            return -1;
                        }
                        if (b.name > a.name) {
                            return  1;
                        }
                        return 0;
                
                    })
                    return {
                    ...state,
                    pokemon: sortedArr
    
                    }
    
                case "ORDER_BY_ATTACK": 
                let sortedArrAttack = action.payload === 'desA' ? 
                state.pokemon.sort(function (a, b){
                    if (a.attack > b.attack) {
                        return 1;
                    }
                    if (b.attack > a.attack) {
                        return - 1;
                    }
                    return 0;
                }) : 
                state.pokemon.sort(function(a, b){
                    if (a.attack > b.attack) {
                        return -1;
                    }
                    if (b.attack > a.attack) {
                        return  1;
                    }
                    return 0;
            
                })
                return{
                ...state,
                pokemon: sortedArrAttack
                } 
        

                case "FILTER_CREATED":
                const allpoke = state.allPok 
                const pokeCreado = action.payload === "created" ?  allpoke.filter (e => e.createdInDb): 
                allpoke.filter (e => !e.createdInDb)
                return { 
                ...state,
                pokemon: action.payload === 'all' ? allpoke : pokeCreado
                };

                //pokCreate
                
                case "POST_POK":
                return {
                    ...state,
                    
                }

               case "GET_TIPO":
                return {
                    ...state,
                    types: action.payload,
                }


                case "FILTER_BY_TYPES":
            
                    const allPok = state.allPok;
                    const typeFiltered = allPok.filter(e => (e.types[0]?.name === action.payload                               || e.types[1]?.name === action.payload || e.types[2]?.name === action.payload || e.types[3]?.name === action.payload || e.types[4]?.name === action.payload || e.types[5]?.name === action.payload))
                    if (typeFiltered.length !== 0)
                    return {
                        ...state, 
                        pokemon: typeFiltered,
                        
                    };
                    else {
                        return {
                            ...state, 
                            types: state.types
                                      
                        };
                        
                        // ...state, 
                        // pokemon: allPok,
                        
                        // alert ("Filtro no encontrado, prueba con filtros que no sean: fighting, rock, ghost, steel, psychic, ice, dragon, dark, unknown, shadow")
                    }
     
                    //VOLVER
                    case "VOLVER":
                return {
                        ...state, 
                        pokemon: state.allPok,
                  
                }

                default:
                    return state;
                }
            }   

            
            export default rootReducer;        