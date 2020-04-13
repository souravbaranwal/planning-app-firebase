import React from "react";

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div>
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Project Title - {id}</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              doloribus in ea, reiciendis officia corporis quibusdam, nam nulla,
              praesentium animi ullam odit et. Nobis odio laudantium quibusdam
              consequatur. Exercitationem, eaque!
            </p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by Sourav</div>
            <div>3rd March, 3 Pm</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
