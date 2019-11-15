import React from 'react';
import Select from 'react-select';


const options = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'},
];

class SelectPlugin extends React.Component {
    render() {
        return (
            <div>
                <h2>Плагина Select</h2>
                <Select
                    className="select"
                    defaultValue={[options[1]]}
                    isMulti
                    options={options}
                />
            </div>
        )
    }
}


export default SelectPlugin;