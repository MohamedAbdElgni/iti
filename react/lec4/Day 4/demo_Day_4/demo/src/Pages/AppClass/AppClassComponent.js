
import React from "react";
import { Button, Card } from "react-bootstrap";
import MyButton from "../../Components/MyButton";
import MyTitle from "../../Components/MyTitle";
import "./AppClassComponent.css";
import {connect} from "react-redux";
import {changeLang} from "../../Store/Actions/LangAction"
import {ThemeAction} from "../../Store/Actions/ThemeAction"
class AppClassCompnent extends  React.Component {
    
    constructor(props){
        console.log("I am Constructor", props)
        super()
        this.state = { // local varaiable
            name: "ali",
            age :20,
            position: "Developer"
        }
    }

    componentDidMount(){
        // call API 
        // load page after constructo render == document.ready(JQ)
        // console.log("I am Component Did Mount");
    }

    componentDidUpdate(){
        // when any chnage in component
        // Egypt --> Cairo 
        // console.log("I am Component Did Update");
    }

    componentWillUnmount(){
        // console.log("I am componentWillUnmount" )
    }

    changeUserData = () => {
        this.setState({
            name: "ahmed"
        })
    }

    render(){
        // console.log("I am Render")
        return( 
            <>
                <button className="btn btn-primary"
                        onClick={() => this.props.changeLang(this.props.mapLang == "EN" ? "AR" : "EN")}> 
                        Change Lang </button>

                        <button className="btn btn-info"
                        onClick={() => this.props.ThemeAction(this.props.mapTheme == "Light" ? "Dark" : "Light")}> 
                        Change Theme </button>
                <h1 className="text-danger"> My Current Theme: {this.props.mapTheme} </h1>
                <h1 className="text-info"> My Current Lang: {this.props.mapLang} </h1>


                <h1 style={{"color": "red"}}>I am Class Component</h1>
                <Button variant="danger"> From React Bootstrap </Button>

                <div className="card" style={{"width": "18rem"}}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>

                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                
                <h2 className="myclass"> Name: {this.state.name} </h2>
                <h2> Age: {this.state.age} </h2>
                <h2> Position: {this.state.position} </h2>
                <button onClick={() => this.changeUserData()}> Change User Data </button>

                <MyTitle title="App Class Component" />

                <MyButton btnname="sign in" btnclass="btn-warning"/>
            </>
        )
    }


}

// export default AppClassCompnent 
const mapStateToProps = (state) => {
    return{
        mapLang: state.combineLang.lang, 
        mapTheme: state.combineTheme.theme,
    }
}


export default connect(mapStateToProps, {changeLang, ThemeAction})(AppClassCompnent)