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
        .then(data => { //despues de que se conecto al servidor, obtenemos los datos
            var dwnld = data.data.download_url
            axios.get(`${dwnld}`)
            .then(info => this.setState(() => ({ //despues de que se conecto al servidor, obtenemos los datos
                actualInfo: info.data, //projects.data es un array, esto es de axios
                headerVal: params.name,
                username: params.username,
            })) //IMPRIMIR TODAS LAS INFOS A VER QUE VIENE
            ).catch(err => console.log(err.message)) //eslint-disable-line
        } //IMPRIMIR TODAS LAS INFOS A VER QUE VIENE
        ).catch(err => console.log(err.message)); //eslint-disable-line
        console.log("ACTUAL: " + this.state.actualInfo)
        if(this.state.actualInfo == ""){
            this.setState(() => ({
                actualInfo: "No existe README.md para este proyecto",
                headerVal: params.name,
                username: params.username,
            })) 
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

