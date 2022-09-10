import React from 'react';
import './index.css'
import FileStructureTitle from './FileStructureTitle';
import IntroP from './IntroP';
import List from './List';

function App() {
    return (
        <main>
            <h1>Setting Up a React Project</h1>
            <section>
                <FileStructureTitle/>
                <IntroP/>
                <List/>
            </section>
        </main>
    )
}

export default App;