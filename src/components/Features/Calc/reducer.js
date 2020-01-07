const initialState = { first: '', second: '', screen: 0, selected: '', next: false, begin:true };

const processScreen = (prevState) => {
    if (!prevState.next) {
        return {...prevState, screen: prevState.first || 0}
    } else {
        return {...prevState, screen: prevState.second || 0}
    }
}

const calculate = (state) => {
    const { first, second, selected } = state;
    const a = parseFloat(first);
    const b = second ? parseFloat(second) : a;
    switch(selected){
        case 'ADD': return processScreen({...state, first: a+b, second: b, next: false, begin: true });
        case 'SUB': return processScreen({...state, first: a-b, second: b, next: false, begin: true });
        case 'DIV': return processScreen({...state, first: a/b, second: b, next: false, begin: true });
        case 'MUL': return processScreen({...state, first: a*b, second: b, next: false, begin: true });
        default: return state
    }
}

const firstSecondUpdate = (state, func, begin = false, beginFunc) => {
    if (begin && state.begin) return processScreen({ ...state, first: beginFunc(state.first)})
    if (state.next) return processScreen({ ...state, second: func(state.second) });
    return processScreen({ ...state, first: func(state.first) });
}

const reducer = (state = initialState, { type, payload }) => {
    switch( type ) {
        case 'PERC' : {
            if (state.next && state.second) return processScreen({...state, second: state.first/100*state.second });
            return state;
        }
        case 'NUM' : {
            if (state.next){
                if (payload==='.' && ~state.second.indexOf('.')) return state;
                return processScreen({...state, second: state.second + payload})
            } else if (state.begin) {
                return processScreen({...state, begin: false, first: payload });
            } else {
                if (payload==='.' && ~state.first.indexOf('.')) return state;
                return processScreen({...state, first: state.first + payload, begin: false})
            }
        }
        case 'ROOT' : return firstSecondUpdate(state, a => { return Math.sqrt(a) || ''} ); 
        case 'SQR' : return firstSecondUpdate(state, a => a ** 2 );      
        case 'REV' : return firstSecondUpdate(state, a => 1 / a );
        case 'CE' : return firstSecondUpdate(state, a => '');
        case 'C' : return initialState;
        case 'DEL' : return firstSecondUpdate(state, a=>(""+a).slice(0,-1), true, a=>a)
        case 'SELECT' : return {...state, selected: payload, next: true, second:''};       
        case 'CHG' : return firstSecondUpdate(state, a => a * -1);
        case 'EQL' : return (calculate(state));
        default: return state;
    }
}

export default reducer;