import React from 'react';
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <Book name="처음 만난 리액트" numOfPage={300}/>
            <Book name="저번에 만난 JS" numOfPage={400}/>
            <Book name="내일 만날 리액트" numOfPage={500}/>
        </div>
    );
}

export default Library;