import React from 'react';
import Counter from './Counter'
import Header from './Header';

const App = () => {
    return (
        <div style={{'margin':"200px auto",'display':'flex',"flexDirection":"column","alignItems":"center"}}>
            <Header />
            <Counter />
            <Counter num="10" />
            <h2><a href="https://github.com/itsmocomfort/front_End">https://github.com/itsmocomfort/front_End</a></h2>
        </div>
    );
};

export default App;
