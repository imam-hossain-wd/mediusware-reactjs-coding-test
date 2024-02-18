import React, { useEffect, useState } from 'react';

const Problem1 = () => {

    const [tasks, setTasks] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [filter, setFilter] = useState('active');
    

    useEffect(() => {
        if (filter === "active") {
            setFilteredTasks(tasks.filter(task => task.status === 'Active'));
        } else if (filter === "completed") {
            setFilteredTasks(tasks.filter(task => task.status === 'Completed'));
        } else {
            setFilteredTasks(tasks);
        }
    }, [tasks, filter]);



    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const status = event.target.elements.status.value.charAt(0).toUpperCase() + event.target.elements.status.value.slice(1);
        const newTask = { name, status };
        setTasks(prevTasks => [...prevTasks, newTask]);
        event.target.reset();
    };


    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                {/* form  */}
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
                {/* form end */}
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${filter === 'active' && 'active'}`} type="button" onClick={() => setFilter('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${filter === 'completed' && 'active'}`} type="button" onClick={() => setFilter('completed')}>Completed</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${filter === 'all' && 'active'}`} type="button" onClick={() => setFilter('all')}>All</button>
                        </li>
                    </ul>
                    {/* table */}
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
                                    <td style={{width: "300px"}}>{task.name}</td>
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

