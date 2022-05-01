import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div>
            <h1>Admin Portal</h1>
            <Link to={'/admin/add'}>
                Add a Cat
            </Link>
        </div>
    );
};

export default Admin;