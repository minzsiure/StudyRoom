import React, { Component } from "react";
import ExplainButton from "../modules/ExplainButton.js"

import "../../utilities.css";
import "./WhatDo.css";

class WhatDo extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {

    }

    render() {
        return (
            <div className = "WhatDo">
                <h1 className="WhatDo-header u-textCenter">
                    About Us
                </h1>
                <p className="WhatDo-body">
                    Our mission is to create an enjoyable study environment. Join your 
                    customized study room with a cute bear study buddy! 
                </p>
                <p className="WhatDo-body">
                    Over quarantine or even during normal times, we feel the need to work 
                    alone sometimes to keep ourselves focused. Here, we provide a website 
                    *with a cute bear* to give you some company. When you make progress on 
                    your plan, you will earn honey to make your bear happier and cuter. If 
                    you are distracted from entertainments such as YouTube - uh oh - the 
                    bear will be sad and your progress may be lost. Of course, the bear 
                    will remind you to take a break and drink some water as it deeply 
                    cares about your health. 
                </p>
                <div className="WhatDo-ExplainButton">
                    <ExplainButton/>
                </div>
            </div>
        )
    }
}

export default WhatDo;