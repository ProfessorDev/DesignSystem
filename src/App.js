import React from 'react';
import classNames from 'classnames';
import Button from "./components/Button/Button";

function App() {
    return (
        <div className={classNames(
            'p-1'
        )}>
            <Button>
                New Button
            </Button>
        </div>
    );
}

export default App;
