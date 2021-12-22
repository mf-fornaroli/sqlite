import  EMPRESAS   from '../../data/Empresas';
import { ADD_EMPRESA, CONFIRM_EMPRESA, SELECT_EMPRESA, ADD_EMPRESA_DB, LOAD_EMPRESAS } from '../actions/empresa.action';

const initialState = {
    /**listaEmpresas: EMPRESAS,*/
    listaEmpresas: [],
    selected: null
};

const EmpresasReducer = (state = initialState, action) => {
    
    switch (action.type) {
        
        case ADD_EMPRESA:
            const empresa = action.empresa;
            return {
                ...state,
                listaEmpresas: [
                    ...state.listaEmpresas,
                    empresa
                ]
            }
        case SELECT_EMPRESA:
            const id = action.idEmpresa
            const IndexEmpresa = state.listaEmpresas.findIndex(empresa => empresa.id === id);
            console.log("index empresa reducer: ", IndexEmpresa)

            if (IndexEmpresa === -1) return state

            return { ...state, selected: state.listaEmpresas[IndexEmpresa] }
        
            //case CONFIRM_EMPRESA:

        case ADD_EMPRESA_DB:
            const newEmpresa = {
                idEmpresa: action.payload.id,
                razonSocial: action.payload.razonSocial,
                cuit: action.payload.cuit,
                telefono: action.payload.telefono,
                email: action.payload.email,
                artContratada: action.payload.artContratada,
                lat: action.payload.lat,
                lng: action.payload.lng
            };

            return {
                ...state, 
                 listaEmpresas: [
                    ...state.listaEmpresas,
                    newEmpresa
                ]
            }
            
        case LOAD_EMPRESAS:
      
            return {
                ...state,
                listaEmpresas: [...action.listaEmpresas]
            }
        
        default:
            return state
    }
    //return state;
};

export default EmpresasReducer;