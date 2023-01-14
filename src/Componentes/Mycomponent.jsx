import { Component } from "react";

class Mycomponent extends Component {
     constructor(props) {
        super(props);
        this.state = {
            Age: this.props.Age
        }
    }
    sum = () => this.setState({Age: this.state.Age + 1})
    render()
    { 
        
        return (
            <div className="datos">
                    <h1 className="datitos">{this.props.lastName}, {this.props.firstName}</h1>
                    <p className="datitos">Age: {this.state.Age}</p>
                    <p className="datitos">{this.props.haircolor}</p>
                    <button onClick = {this.sum}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        );
    }
}
 
export default Mycomponent;