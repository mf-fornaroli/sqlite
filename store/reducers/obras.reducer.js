import { OBRAS } from '../../data/Obras';
import { ADD_OBRA, SELECT_OBRA, ADD_OBRA_DB, LOAD_OBRAS } from '../actions/obra.action';


const initialState = {
    listaObras: [],
    filteredObras: [],
    selected: null
};

const ObrasReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_OBRA:
            const obra = action.obra;
            return {
                ...state,
                listaObras: [
                    ...state.listaObras,
                    obra
                ]
            }
        
        case SELECT_OBRA:
            const id = action.idObra
            const IndexObra = state.listaObras.findIndex(obra => obra.id === id);
            console.log("index obra reducer: ", IndexObra)

            if (IndexObra === -1) return state

            return { ...state, selected: state.listaObras[IndexObra] }
       
        case ADD_OBRA_DB:
            const newObra = {
                id: action.payload.id,
                idEmpresa: action.payload.idEmpresa,
                establecimeinto: action.payload.establecimeinto,
                nroEstablecimeinto: action.payload.nroEstablecimeinto,
                ubicacion: action.payload.ubicacion,
                nombreContacto: action.payload.nombreContacto,
                telefonoContacto: action.payload.telefonoContacto,
                observaciones: action.payload.observaciones,
                image: action.payload.image
            };
            return {
                ...state, 
                 listaObras: [
                    ...state.listaObras,
                    newObra
                ]
            }
        
        case LOAD_OBRAS:
                  console.log('lista obras reducer', action.listaObras);
            return {
                ...state,
                listaObras: [...action.listaObras]
            }
        
        default:
            return state;           
    }
    
};

export default ObrasReducer;
