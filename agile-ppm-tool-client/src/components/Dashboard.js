import React, {Component} from 'react'
import ProjectItem from '../components/ProjectItem';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getProjects} from "../actions/projectActions";
import {Link} from "react-router-dom";

class DashBoard extends Component {

    componentDidMount() {
        this.props.getProjects();
    }

    render() {

        const projects = this.props.projects
        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">Projects</h1>
                            <br/>
                            <Link to="addProject" className="btn btn-lg btn-info">
                                Create a Project
                            </Link>

                            <br/>
                            <hr/>

                            {
                                projects.map(project => (
                                <ProjectItem key={project.id} project={project}/>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

DashBoard.propTypes = {
    projects: PropTypes.arrayOf(ProjectItem.object).isRequired,
    getProjects: PropTypes.func.isRequired
};

const mapStateToProps = function (state) {
    return {
        projects: state.projects
    }
};

export default connect(
    mapStateToProps,
    {getProjects}
)(DashBoard);