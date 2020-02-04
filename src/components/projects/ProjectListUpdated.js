import React from 'react';
import moment from 'moment'

const ProjectListUpdated = (props) => {

    const liste = props.projectsBase || []
    const listeHtml = liste.map( (item) => (         
        <tr key = { item.id } > 
            <td> { item.title } </td>
            <td> { item.content } </td>
            <td> { moment( item.createdAt.toDate().toString() ).calendar() } </td>
            <td> 
                <button 
                    onClick = { () => { props.deleteProject(item.id) } } 
                    className="btn red lighten-1"
                >
                    Delete
                </button> 
            </td>
            <td> 
                <button 
                    onClick = { () => { props.handleUpdate( item.id, item.title, item.content ) } } 
                    className="btn blue lighten-1"
                >
                    Edit
                </button> 
            </td>

        </tr> 
        )
    );

    return (
        <div>
            <h2> All Projects </h2> 
            <table className = "table">
                <thead>
                    <tr>
                        <th scope = "col"> title </th>
                        <th scope = "col"> content </th>
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

export default ProjectListUpdated;