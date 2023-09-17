import React from 'react';
import ReactDOM  from 'react-dom/client';


function Greeting(){
    return (
        <div>
            <h2>
                My First COomponent
            </h2>
        </div>
    )
}

// function Greeting(){
//     return React.createElement('h2',{}, 'hello World')
// }
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting></Greeting>)