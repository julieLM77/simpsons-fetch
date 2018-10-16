import React, { Component } from "react"

class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "" }
        this.onChange = this.onChange.bind(this);
      }
  

  onChange = (event) => {
    this.setState({name: event.target.value})
  }



      render() {  
             return (
              <form>
                    <label htmlFor="name">Name :</label>
                    <input id='name' value={this.state.name}  type="text" onChange={this.onChange} />
                
                    </form>
                    )
      }
    }

export default NameForm;