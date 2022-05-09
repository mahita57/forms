// import React from 'react'
// import modulelist from '../modulelist.json'
//import fs from 'fs'
//import path from 'path'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import db from "../db.json"
//import Landing from './Landing';
import Router from 'next/router';


const ModuleList = (mList) => {

    console.log(db.moduledata, "Module list data")

    // let pagename = db.moduledata
    const [moduleName, setModuleName] = useState([]);
    const [moduleData, setModuleData] = useState([]);

    const moduleDatahandler = async () => {
        const gettingModuleData = await axios.get('http://localhost:4000/db');
        console.log(gettingModuleData, "Getting Module Data ");
        setModuleData(gettingModuleData?.data);
    }
    useEffect(() => {
        moduleDatahandler();

    }, [])

    // async function getData() {
    //     const filePath = path.join(process.cwd(), 'db.json');
    //     const jsonData = await fs.readFile(filePath);
    //     const data = JSON.parse(jsonData);
    //     return data;
    //     console.log(data, 'module list data')
    // }

    let modName = db.modulename;
    console.log(db, "db from json")


    return (
        <div>
            <div className='flex justify-center'>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 mb-5 ml-5 rounded">
                    Button
                </button> </div>
            <div className="container flex justify-center mx-auto">
                <div className="flex flex-col">
                    <div className="w-/2">
                        <div className="border-b border-gray-200 shadow">

                            <table>
                                <thead className="bg-gray-50">
                                    <tr className="bg-blue-300">

                                        <th className="px-6 py-2 text-sm texr-black-500">
                                            Module Name
                                        </th>
                                        <th className="px-6 py-2 text-sm text-black-500">
                                            Page Name
                                        </th>
                                        <th className="px-6 py-2 text-sm text-black-500">
                                            Button
                                        </th>

                                    </tr>
                                </thead>
                                <tbody className="bg-white">





                                    {/*<td className="px-6 py-4 text-sm text-gray-500">
                                            {db.modulename}
                                 </td>*/}


                                    {/*{db.moduledata.map((res) => {
                                                    return res.pagename
                                                })}*/}
                                    {db.moduledata.map((res) => {
                                        return <tr whitespace-nowrap>
                                            <td className="px-6 py-4 text-sm text-gray-500">{modName}</td>

                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                {res.pagename}
                                            </td>

                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                <a className="bg-transparent hover:bg-blue-500 text-blue-500 
                                                font-semibold hover:text-white py-2 px-4 border 
                                                border-blue-500 hover:border-transparent rounded"
                                                    onClick={() => {
                                                        Router.push({
                                                            pathname: "/Landing",
                                                            query: {
                                                                // modName: db.modulename,
                                                                moduleData: res.pagename
                                                            },
                                                        });
                                                    }}
                                                >Add Fields</a>
                                            </td></tr>
                                    })}










                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}


export default ModuleList