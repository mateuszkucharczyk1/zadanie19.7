import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT} from './actions'

export default function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }
            , ...state];
        case REMOVE_COMMENT:
            return state.filter(comment => comment.id !== action.id);
        case EDIT_COMMENT:
            return state.filter(comment => {
                if(comment.id !== action.id){
                    comment.text = action.text;
                }
            });
        case THUMB_UP_COMMENT:
            return state.filter(comment => {
                if(comment.id !== action.id){
                    comment.vote ++;
                }
            });
        case THUMB_DOWN_COMMENT:
            return state.filter(comment => {
                if(comment.id !== action.id){
                    comment.vote --;
                }
            });
        default:
            return state;
    }
}
