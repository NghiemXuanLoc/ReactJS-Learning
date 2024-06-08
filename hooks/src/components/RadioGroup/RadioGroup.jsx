import React from "react";

class RadioGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Hoobis: ["Java", "PHP", "JS", "ReactJS"],
            isShowSelect: false,
            value: null
        }
    }

    headleShowSelect = (hoobi) => {
        this.setState({
            ...this.state,
            isShowSelect: true,
            value: hoobi
        })
    }


    render() {
        return (
            <>
                <h3>Select Option</h3>

                {
                    this.state.Hoobis.map((hoobi) => {
                        return (
                            <div key={hoobi}>
                            <label onClick={() => {this.headleShowSelect(hoobi)}}><input type="radio" name='hoobi' /> {hoobi}</label>
                            </div>
                        )
                    })
                }

                {this.state.isShowSelect && `Lua chon cua ban: ${this.state.value}`}
            </>
        )
    }
}

export default RadioGroup;