import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-8 bg-white rounded shadow-lg">
                <h1 className="mb-4 text-2xl font-semibold">Welcome to the School Portal</h1>
                <div className="flex justify-between">
                    <Link to='/TeacherLogin'>
                        <button className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600">
                            Teacher Login
                        </button>
                    </Link>

                    <Link to='/Student_Login'>
                        <button className="px-4 py-2 font-semibold text-white bg-green-500 rounded hover:bg-green-600">
                            Student Login
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
