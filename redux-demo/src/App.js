iimport React from 'react';
import './App.css';
import CommentListContainer from './CommentsListContainer';

const App = () => {
    return (
        <div className="App">
            Tu będzie lista komentarzy!
            <CommentListContainer />
        </div>
    );
};

export default App;
