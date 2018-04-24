import {TROCA_NOME} from './actionsApp';

const DEFAULT_STATE = {
    nome: 'Mathias'
}
export default (state = DEFAULT_STATE, {type, payload}) => {
    switch (type) {
        case TROCA_NOME:
            return {...state, nome:payload};
            break;
    
        default:
            break;
    }
    return state;
}