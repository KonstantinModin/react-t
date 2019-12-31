// import { ADD_NEW_ITEM, DELETE_ITEM } from './actions';

const INITIAL_STATE = {
    text: '',
    all: true,
    done: false,
    important: false,
    urgent: false,
    globalImportant: false,
    magicNecessary: false,
    radioactive: false,
    aMatterOfLifeAndDeath: false,
    notImportantAtAll: false,
    youCanForgetAboutIt: false    
};

const filtersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {       
        default: return state;
    }
};

export default filtersReducer;