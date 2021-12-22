import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//importo los reducers definidos
import EmpresasReducer from './reducers/empresas.reducer';
import ObrasReducer from './reducers/obras.reducer';
import AuthReducer from './reducers/auth.reducer';

//rootReducer: combina los diferentes reducers
const rootReducer = combineReducers({
    empresas: EmpresasReducer,
    obras: ObrasReducer,
    auth: AuthReducer
});

//store de Redux
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;