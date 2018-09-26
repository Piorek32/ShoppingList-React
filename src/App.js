import React from "react";
import PropTypes from 'prop-types';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buyItems: ['milk', 'bread', 'fruti']
        }
    }

    addItem(e) {
        e.preventDefault();
        const {buyItems} = this.state;
        const newItem = this.newItem.value;

        this.setState({
            buyItems: [...this.state.buyItems, newItem]
        })

    }

    delate() {
        this.setState({})
    }

    render() {
        const {buyItems} = this.state;
        return (
            <div>
                <h1>Shopping List</h1>

                <form className="form-inline" onSubmit={(e) => {
                    this.addItem(e)
                }}>
                    <div>
                        <label htmlFor="newItemInput">Add new item</label>
                        <input ref={input => this.newItem = input} type="text" id="newItemInput"/>
                    </div>
                    <button type="submit"></button>
                </form>

                <table className="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>item</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        buyItems.map(item => {
                            return <tr key={item}>
                                <th>1</th>
                                <td>{item}</td>
                                <td onClick={this}>Button</td>

                            </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}


export default App;