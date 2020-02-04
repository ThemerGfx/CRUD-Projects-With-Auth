import React from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment'

const ProjectList = (props) => {

    const liste = props.projectsBase || []
    //console.log('liste',props.projectsBase)
    const listeHtml = liste.map( (item) => (
        <tr key = { item.id } >
            <td> { item.title } </td>
            <td> { item.content } </td>
            <td> { item.authorFirstName } </td>
            <td> { moment( item.createdAt.toDate().toString()).calendar() } </td>
            <Link 
                to = { '/project/' + item.id } 
                key = { item.id } 
                className = "btn gery lighten-1"
            >
                Details
            </Link>
        </tr> 
    ));

    return (
        <div>
            <h2> All Projects </h2> 
            <table className = "table">
                <thead>
                    <tr>
                        <th scope = "col"> title </th>
                        <th scope = "col"> content </th>
                        <th scope = "col"> user </th>
                        <th scope = "col"> created at </th>
                    </tr>
                </thead>
                <tbody>
                    { listeHtml }
                </tbody>
            </table>
        </div>
    );
}

export default ProjectList;