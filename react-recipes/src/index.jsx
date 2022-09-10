import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

ReactDOM.render(
    <App />,
    // <p>These are the steps to beginning a React app using Snowpack:</p>,
    // <ul>
    //     <li>In the terminal:
    //         <code>
    //             md react-recipes &#38;&#38; cd react-recipes
    //             md src
    //             md public
    //             echo package.json
    //             echo "{}" &#62; package.json
    //         </code>
    //     </li>
    //     <li>
    //         <code>
    //             npm install --save-dev snowpack
    //             npm install react react-dom
    //         </code>
    //     </li>
    //     <li>Open the directory in VS Code with:
    //         <code>code .</code>
    //     </li>
    //     <li>Indicate the folder structure by: 
    //         <ul>
    //             <li>Create a new file called <code>snowpack.config.js</code></li>
    //             <li>
    //                 <code>
    //                     `module.exports = {
    //                         mount: {
    //                             'public': '/',
    //                             'src': '/dist'
    //                         }
    //                     }`
    //                 </code>
    //             </li>
    //         </ul>
    //     </li>
    //     <li>Create the npm scripts by opening the <code>package.json</code> file and adding:
    //         <code>
    //             `"scripts:" {
    //                 "start": "snowpack dev",
    //                 "build": "snowpack build"
    //             }`
    //         </code>
    //     </li>
    // </ul>,
    document.getElementById('app')
);