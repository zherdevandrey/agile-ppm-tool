import React, {Component} from 'react'
import ProjectItem from "./ProjectItem";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createProject, getProject} from "../actions/projectActions"

class UpdateProject extends Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            projectName: "",
            projectId: "",
            description: "",
            startDate: "",
            endDate: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getProject(id)
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const project = {
            projectName: nextProps.project.projectName,
            projectId: nextProps.project.projectId,
            description: nextProps.project.description,
            startDate: nextProps.project.startDate,
            endDate: nextProps.project.endDate,
        }

        this.state = {
            projectName: project.projectName,
            projectId: project.projectId,
            description: project.description,
            startDate: project.startDate,
            endDate: project.endDate
        }
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const project = {
            id: this.props.project.id,
            projectName: this.state.projectName,
            projectId: this.state.projectId,
            description: this.state.description,
            startDate: this.state.startDate,
            endDate: this.state.endDate
        }

        this.props.createProject(project, this.props.history)
    }

    render() {
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Update Project form</h5>
                            <hr/>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg "
                                        placeholder="Project Name"
                                        name="projectName"
                                        value={this.state.projectName}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Unique Project ID"
                                        name="projectId"
                                        value={this.state.projectId}
                                        onChange={this.onChange}
                                        disabled
                                    />
                                </div>
                                <div className="form-group">
                    <textarea
                        className="form-control form-control-lg"
                        placeholder="Project Description"
                        name="description"
                        onChange={this.onChange}
                        value={this.state.description}
                    />
                                </div>
                                <h6>Start Date</h6>
                                <div className="form-group">
                                    <input
                                        type="date"
                                        className="form-control form-control-lg"
                                        name="startDate"
                                        value={this.state.startDate}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <h6>Estimated End Date</h6>
                                <div className="form-group">
                                    <input
                                        type="date"
                                        className="form-control form-control-lg"
                                        name="endDate"
                                        value={this.state.endDate}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <input
                                    type="submit"
                                    className="btn btn-primary btn-block mt-4"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

UpdateProject.propTypes = {
    project: PropTypes.object.isRequired,
    getProject: PropTypes.func.isRequired,
    createProject: PropTypes.func.isRequired
};

const mapStateToProps = function (state) {
    return {
        project: state.project
    }
};


export default connect(mapStateToProps, {getProject, createProject})(UpdateProject);