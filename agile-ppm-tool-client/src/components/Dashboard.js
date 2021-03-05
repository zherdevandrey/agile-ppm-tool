import React from "react";
import {Link} from "react-router-dom";
import ProjectItem from "./ProjectItem";

export default function (props) {

    const projects = [
        {
            id: 123,
            projectName: "projectName",
            projectId: 12345,
            startDate: Date.now(),
            endDate: Date.now(),
            createdDate: Date.now(),
            updatedDate: Date.now()
        }
    ]


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
                            projects.map(project => {
                                return <ProjectItem key={project.id} project={project}/>
                            })
                        }

                    </div>
                </div>
            </div>
        </div>

    )
}