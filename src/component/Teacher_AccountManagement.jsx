import React, { useState, useEffect } from 'react';
import Teacher_Navbar from './Teacher_Navbar';
import { useTable } from 'react-table';
import { BiEditAlt } from "react-icons/bi";

function Teacher_AccountManagement() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch the JSON data from the local file
        fetch('/src/Student_Data/MOCK_DATA.json') // Replace with the actual path
            .then((response) => response.json())
            .then((jsonData) => {
                setData(jsonData);
            })
            .catch((error) => {
                console.error('Error fetching JSON data:', error);
            });
    }, []);

    // Define your columns and data here
    const columns = React.useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'ID',
            },
            {
                Header: 'GRADE LEVEL',
                accessor: 'GRADELEVEL',
            },
            {
                Header: 'LASTNAME',
                accessor: 'LASTNAME',
            },
            {
                Header: 'FIRSTNAME',
                accessor: 'FIRSTNAME',
            },
            {
                Header: 'EMAIL',
                accessor: 'EMAIL',
            },
            {
                Header: 'EDIT',
                accessor: 'EDIT_STATUS',
                Cell: () => (
                    <button className='flex items-center justify-center px-8 m-auto text-white bg-green-500 rounded-full'>
                        <span className='flex items-center'>
                            <BiEditAlt className='mr-2 cursor-pointer' />
                            Edit
                        </span>
                    </button>
                ),
            },
            {
                Header: 'STATUS',
                accessor: 'STATUS',
                Cell: ({ value }) => (
                    <span
                        className={` m-auto px-2 py-1 rounded ${value === 'ACTIVE' ? 'bg-green-500 rounded-full px-9' : value === 'DISABLE' ? 'bg-red-500 px-7' : 'bg-white'
                            } text-white`}
                    >
                        {value}
                    </span>
                ),
            },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    });

    return (
        <>
            <div className='backgroundYellow'>
                <Teacher_Navbar />
                <header className='grid bg-red-500  grid-row-[50%_50%]  mx-4 rounded-3xl gap-3 p-4 text-4xl font-reemkufifont font-bold '>
                    <h1>ACCOUNT MANAGEMENT</h1>
                </header>

                <main className='bg-[#a5d6a7]  mx-4 mt-2 rounded-lg p-5'>


                    <table {...getTableProps()} style={{ borderCollapse: 'collapse', width: '100%' }}>
                        <thead>
                            {headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()} >
                                    {headerGroup.headers.map((column) => (
                                        <th
                                            {...column.getHeaderProps()}
                                            style={{

                                            }}
                                            className='p-2 py-4 text-3xl text-center text-white bg-black'
                                        >
                                            {column.render('Header')}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {rows.map((row, index) => {
                                prepareRow(row);

                                return (
                                    <tr
                                        {...row.getRowProps()}
                                        className='gap-5 font-semibold border-8 border-[#a5d6a7] '
                                        style={{

                                            background: index % 2 === 0 ? '#b6b6b6' : 'white', // Apply gray background for even rows
                                        }}

                                    >
                                        {row.cells.map((cell) => {
                                            return (
                                                <td
                                                    {...cell.getCellProps()}
                                                    className='p-2 py-5 text-2xl text-center border-black'
                                                >
                                                    {cell.render('Cell')}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </main>
            </div>
        </>
    );
}

export default Teacher_AccountManagement;