import React from "react";

export class Comp1 extends React.Component{

    constructor() {
            super();
            this.state = {
                count: 0
            }
    }

    handler = () => {
        let currentCount = this.state.count;
        currentCount++;
        this.setState({
            count: currentCount
        });
    }


    render(){
        return (
            <>
                <h1>State</h1>
                <div>
                    <button onClick={this.handler}>This butt change state</button>
                </div>
                <div>
                    {this.state.count}
                </div>
            </>
        );
    }
}

