import React, {Component} from 'react';
import Header from './Header';
import axios from 'axios';
import PropTypes from 'prop-types'; 
import ReactMarkdown from 'react-markdown';


class Details extends Component { //herencia
    constructor(props) { 
        super(props); 
        this.state = { username: "",
        name: "",
        info: [],
        actualInfo: ""}; 
    } 

    componentDidMount(){ //llamados al backend
        const {match: { params }} = this.props;
        axios.get(`https://api.github.com/repos/${params.username}/${params.name}/readme`)
        .then(data => this.setState(() => ({ //despues de que se conecto al servidor, obtenemos los datos
            info: data.data, //projects.data es un array, esto es de axios
            headerVal: params.name,
            username: params.username
        }))
        ).catch(err => console.log(err.message)); //eslint-disable-line
        var enc = window.btoa(this.state.info.content);
        console.log("ENC: " + enc);
        var getActualInfo = window.atob(enc);
        console.log("ACTUAL: " + getActualInfo);
        if(getActualInfo == "undefined"){
            this.setState(() => ({
                actualInfo: "NO Existe README"
            }));
        } else{
            this.setState(() => ({
                actualInfo: getActualInfo
            }));
        }

        
    }

    goBack(e){
        e.preventDefault();
        this.props.goBack(this.props.history, this.state.username);
    }

    
    render(){
        return (
            <div>
                <Header headerVal={this.state.headerVal} props={this.goBack.bind(this)}/>
                <div className="container list">
                    <ReactMarkdown source={this.state.actualInfo}/>
                </div>
            </div>
        )
    }
}

Details.propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    goBack: PropTypes.func.isRequired,
}

export default Details;

