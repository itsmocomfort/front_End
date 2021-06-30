import React from 'react';
import Counter from './Counter'

const App = () => {
    return (
        <div style={{'margin':"200px auto",'display':'flex',"flexDirection":"column","alignItems":"center"}}>
            <h1>김재천</h1>
            <Counter />
            <Counter num="10" />
            <h2><a href="https://github.com/itsmocomfort/front_End">https://github.com/itsmocomfort/front_End</a></h2>
        </div>
    );
};

export default App;