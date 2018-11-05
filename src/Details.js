import React, {Component} from 'react';
import Header from './Header';
import axios from 'axios';
import PropTypes from 'prop-types'; 


class Details extends Component { //herencia
    constructor(props) { 
        super(props); 
        this.state = { projects: [],
            headerVal: ""}; 
    } 

    componentDidMount(){ //llamados al backend
        //eslint-disable-next-line
        console.log(this.props);
        const { match: {params} } = this.props;
        axios.get(`https://api.github.com/users/${params.username}/${params.name}/readme`)
        .then(projects => this.setState(() => ({ //despues de que se conecto al servidor, obtenemos los datos
            projects: projects.data, //projects.data es un array, esto es de axios
            headerVal: params.name
        }))
        ).catch(err => console.log(err.message)); //eslint-disable-line
    }

    
    render(){
        return (
            <div>
                <Header headerVal={this.state.headerVal}/>
                <div className="container list">
                    <h4>
                    {this.state.projects.map((data) =>
                                <ul key={data.id}>
                                    {data.name}
                                </ul>
                            )}
                    </h4>
                    
                </div>
            </div>
        )
    }
}

Details.propTypes = {
    match: PropTypes.object.isRequired
}

export default Details;

