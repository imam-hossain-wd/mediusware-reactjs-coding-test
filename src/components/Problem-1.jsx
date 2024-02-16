import React, { useState } from 'react';

const Problem1 = () => {
    const [tasks, setTasks] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [filter, setFilter] = useState('all');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const status = event.target.elements.status.value.charAt(0).toUpperCase() + event.target.elements.status.value.slice(1);
        const newTask = { name, status };
        setTasks(prevTasks => [...prevTasks, newTask]);
        if (filter === 'all' || filter === status) {
            setFilteredTasks(prevFilteredTasks => [...prevFilteredTasks, newTask]);
        }
        event.target.reset();
    };

    const handleFilterClick = (val) => {
        setFilter(val);
        if (val === 'all') {
            setFilteredTasks(tasks);
        } else {
            const filtered = tasks.filter(task => task.status.toLowerCase() === val.toLowerCase());
            setFilteredTasks(filtered);
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6">
                    <form onSubmit={handleFormSubmit} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" name="name" className="form-control" placeholder="Name" />
                        </div>
                        <div className="col-auto">
                            <input type="text" name="status" className="form-control" placeholder="Status" />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${filter === 'all' && 'active'}`} type="button" onClick={() => handleFilterClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${filter === 'active' && 'active'}`} type="button" onClick={() => handleFilterClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${filter === 'completed' && 'active'}`} type="button" onClick={() => handleFilterClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTasks.map((task, index) => (
                                <tr key={index}>
                                    <td>{task.name}</td>
                                    <td>{task.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;
