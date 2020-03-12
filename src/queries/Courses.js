import React, { Component } from "react";
import "./../App.css";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class Course extends Component {
  render() {
    console.log("Cursos", this.props.data.courses);
    console.log("Curso 1", this.props.data.courseOne);
    console.log("Curso 2", this.props.data.courseTwo);
    return <div className="App">Cursos</div>;
  }
}

const repoQuery = gql`
  query {
    courses {
      ...Curso
    }
    courseOne: course(id: "1") {
      ...Curso
    }
    courseTwo: course(id: "2") {
      ...Curso
    }
  }

  fragment Curso on Course {
    id
    title
    description
    clases
    time
    logo
  }
`;

const CoursesWithData = graphql(repoQuery)(Course);

export default CoursesWithData;
