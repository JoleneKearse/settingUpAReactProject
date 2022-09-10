import React from 'react';

function List() {
    const stepsList = 
        `<li>In the terminal:
            <code>
                md react-recipes &#38;&#38; cd react-recipes
                md src
                md public
                echo package.json
                echo "{}" &#62; package.json
            </code>
        </li>`;
        return (
            <ul>{ stepsList }</ul>
        )
}
export default List;