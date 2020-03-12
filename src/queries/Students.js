import React, { Component } from 'react';
import './../App.css';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class Student extends Component {
  render() {
    console.log('Estudiantes', this.props.data.students);
    console.log('Estudiante 1', this.props.data.studentOne);
    console.log('Estudiante 2', this.props.data.studentTwo)
    return (
      <div className="App">
        Estudiantes
      </div>
    );
  }
  
  
}

const repoQuery = gql`
  query {
    students {
      ...Estudiante
    },
    studentOne: student(id: "1") {
      ...Estudiante
    },
    studentTwo: student(id: "2") {
      ...Estudiante
    }
  }

  fragment Estudiante on Student {
    id
    name
    email
    website
    courses {
      id
      title
      description
      clases
      time
      logo
    }
  }
`

const StudentsWithData = graphql(
  repoQuery
)(Student)

export default StudentsWithData;
