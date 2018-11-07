import React, {Component} from 'react';
import Header from './Header';
import axios from 'axios';
import PropTypes from 'prop-types'; 

class ListProjects extends Component { //herencia
    constructor(props) { 
        super(props); 
        this.state = { projects: [] ,
            headerVal: "",
            readMe: ""
        } 
        this.name = "";
        this.id = 0;
    }

    componentDidMount(){ //llamados al backend
        //eslint-disable-next-line
        const { match: {params} } = this.props;
        axios.get(`https://api.github.com/users/${params.username}/repos`)
        .then(projects => this.setState(() => ({ //despues de que se conecto al servidor, obtenemos los datos
            projects: projects.data, //projects.data es un array, esto es de axios
            headerVal: params.username
        }))
        ).catch(err => console.log(err.message)); //eslint-disable-line
    }

    llenarCosas(username, id, name){
        if(this.props.handlePressProject && username && id && name)
            this.props.handlePressProject(this.props.history, username, id, name);
    }

    goBack(e){
        e.preventDefault();
        this.props.goBack(this.props.history);
    }

    render(){
        return (
            <div>
                <Header headerVal={this.state.headerVal} props={this.goBack.bind(this)} visible={true}/>
                <form onSubmit={this.handleSubmit}>
                <div className="container list">
                    <h4>
                        Projects
                    </h4>
                    <section className="eight offset-by-two columns" style={{boxShadow: ' 0 4px 3px 0 , 0 6px 5px 0'}}>
                        {this.state.projects.map((data) =>
                    <ul key={data.id} >
                      <button type="button" onClick={this.llenarCosas.bind(this, data.owner.login, data.id, data.name)}>
                          {data.name}
                        </button>
                      </ul>
                    )}
                </section>
                </div>
                </form>
                
            </div>
        )
    }
}

ListProjects.propTypes = {
    match: PropTypes.object.isRequired,
    handlePressProject: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    goBack: PropTypes.func.isRequired,
}

export default ListProjects;

