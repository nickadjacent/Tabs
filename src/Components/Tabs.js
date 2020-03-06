import React, { useState } from 'react';


const Tabs = props => {
    console.log(props);
    const [tab, setTab] = useState()



    return (
        <div>
            <button style={{ backgroundColor: tab === 'Tab 1' ? 'black' : 'white', color: tab === 'Tab 1' ? 'white' : 'black' }} onClick={() => setTab('Tab 1')}>Tab 1</button>
            <button style={{ backgroundColor: tab === 'Tab 2' ? 'black' : 'white', color: tab === 'Tab 2' ? 'white' : 'black' }} onClick={() => setTab('Tab 2')}>Tab 2</button>
            <button style={{ backgroundColor: tab === 'Tab 3' ? 'black' : 'white', color: tab === 'Tab 3' ? 'white' : 'black' }} onClick={() => setTab('Tab 3')}>Tab 3</button>
            <fieldset>{tab} content is showing here.</fieldset>
        </div>
    )
}

export default Tabs;