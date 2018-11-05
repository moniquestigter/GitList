import React, {Component} from 'react';
import Header from './Header';
import axios from 'axios';
import PropTypes from 'prop-types'; 


class ListProjects extends Component { //herencia
    constructor(props) { 
        super(props); 
        this.state = { projects: [] ,
            headerVal: "",
            readMe: ""}; 
    } 

    componentDidMount(){ //llamados al backend
        //eslint-disable-next-line
        console.log(this.props);
        const { match: {params} } = this.props;
        axios.get(`https://api.github.com/users/${params.username}/repos`)
        .then(projects => this.setState(() => ({ //despues de que se conecto al servidor, obtenemos los datos
            projects: projects.data, //projects.data es un array, esto es de axios
            headerVal: params.username
        }))
        ).catch(err => console.log(err.message)); //eslint-disable-line
    }

    handleSubmit(){
        const { match: {params} } = this.props;
        axios.get(`https://api.github.com/users/${params.username}/${params.name}/readme`)
        .then(p => this.setState(() => ({ //despues de que se conecto al servidor, obtenemos los datos
            readMe: p.name, //projects.data es un array, esto es de axios    
        }))
        ).catch(err => console.log(err.message)); //eslint-disable-line
    }

    
    render(){
        return (
            <div>
                <Header headerVal={this.state.headerVal}/>
                <div className="container list">
                    <h4>
                        Projects
                        <br/>
                        <br/>  
                    </h4>
                    <section className="eight offset-by-two columns" style={{boxShadow: ' 0 4px 8px 0 , 0 6px 5px 0'}}> 
                    {this.state.projects.map((data) =>
                                <ul  className="list"  key={data.id}>
                                    <button onSubmit={this.handleSubmit} style={{border: 'none'}}>
                                        {data.name}
                                    </button>
                                </ul>
                            )}
                            
                    </section>
                </div>
            </div>
        )
    }
}

ListProjects.propTypes = {
    match: PropTypes.object.isRequired
}

export default ListProjects;

