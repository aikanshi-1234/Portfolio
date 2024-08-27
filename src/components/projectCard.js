import React from 'react';
import PropTypes from 'prop-types';
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-3">View Project</a>
        </div>
      </div>
    </Col>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};