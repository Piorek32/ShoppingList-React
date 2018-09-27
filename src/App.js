import React from "react";
import PropTypes from 'prop-types';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buyItems: ['milk', 'bread', 'fruti'],
            message : ""
        }
    }

    addItem(e) {
        e.preventDefault();
        const {buyItems, message} = this.state;

        const newItem = this.newItem.value;

        const isOneTheList = buyItems.includes(newItem);
        if (isOneTheList) {
            this.setState({
                message: "is on the list"
            })
             } else {
                this.setState({
                    buyItems: [...this.state.buyItems, newItem]
                })
        }
    }
    

    delate(item) {
        const newBuyItems = this.state.buyItems.filter(buyItems => {
            return buyItems !== item
        })


        this.setState({
            buyItems : [...newBuyItems ]
        })
    }





    render() {
        const {buyItems, message} = this.state;
        return (
            <div>
                <h1>Shopping List</h1>
                <div>{
                    message !== "" && <p>{message}</p>
                }
                <form className="form-inline" onSubmit={(e) => {
                    this.addItem(e)
                }}>
                    <div>
                        <label htmlFor="newItemInput">Add new item</label>
                        <input ref={input => this.newItem = input} type="text" id="newItemInput"/>
                    </div>
                    <button type="submit"></button>
                </form>

                </div>
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
                                <td>
                                    <button
                                    onClick={(e) => this.delate(item)}>Button
                                    </button>
                                </td>

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