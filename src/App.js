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
               newItem !== "" && this.setState({
                    buyItems: [...this.state.buyItems, newItem],
                   message : ''
                })
            }
        }
    

    delateItem(item) {
        const newBuyItems = this.state.buyItems.filter(buyItems => {
            return buyItems !== item
        })


        this.setState({
            buyItems : [...newBuyItems ]
        })
    }

    clear() {
        this.setState({
            buyItems : [],
            message : 'no item on the list'
        })
    }

    render() {
        const {buyItems, message} = this.state;
        return (
            <div className='app-container'>
                <header>
                <h1 className="app-tittle">Shopping List</h1>
                <div >{
                    message !== "" && <p>{message}</p>
                }


                </div>
                </header>
                        <form className="" onSubmit={(e) => {
                        this.addItem(e)}}>
                        <label htmlFor="newItemInput">Add new item</label>
                        <input ref={input => this.newItem = input} type="text" id="newItemInput"/>

                    <button className="btn-default" type="submit">dodaj</button>
                </form>


                <table className="app-table">

                    {
                    buyItems.length > 0 &&
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>item</th>
                            <th>Action</th>
                        </tr>
                        </thead>

                    }
                    < tbody >

                    {
                        buyItems.map(item => {
                            return <tr key={item}>
                                <th>1</th>
                                <td>{item}</td>
                                <td>
                                    <button
                                    onClick={(e) => this.delateItem(item)}>Button
                                    </button>
                                </td>
                            </tr>
                        })
                    }
                    </tbody>
                    <tfoot>
                    <td></td>
                    <td>
                        <button onClick={this.clear.bind(this)}  >clear</button>
                    </td>
                    </tfoot>
                </table>
            </div>
        )
    }
}


export default App;

