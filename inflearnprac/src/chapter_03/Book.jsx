import React from 'react';

function Book(props) {
    return (
        <div>
            <div>{`이 책의 이름은 '${props.name}'입니다.`}</div>
            <div>{`이 책은 총 '${props.numOfPage}'페이지로 이루어져 있습니다.`}</div>
        </div>
    );
}

export default Book;