import React, {Component} from 'react';
import Header from './Header';
import axios from 'axios';
import PropTypes from 'prop-types'; 

class ListProjects extends Component { //herencia
    constructor(props) { 
        super(props); 
        this.state = { projects: [] }; 
    } 

    componentDidMount(){ //llamados al backend
        //eslint-disable-next-line
        console.log(this.props);
        const { match: {params} } = this.props;
        axios.get(`https://api.github.com/users/${params.username}/repos`)
        .then(projects => this.setState(() => ({ //despues de que se conecto al servidor, obtenemos los datos
            projects: projects.data //projects.data es un array, esto es de axios
        }))
        ).catch(err => console.log(err.message)); //eslint-disable-line
    }

    render(){
        return (
            <div>
                <Header />
                <div className="container list">
                    <section className="eight offset-by-two columns"> 
                        <h4>
                            Projects
                            
                        </h4>
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

