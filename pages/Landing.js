import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router'

// const dataFile = {
//   name: "MA",
//   city: "HYD"
// }
// const neFs = fs.watchFile('newdata.json', dataFile);
// console.log(neFs, "FS");

// import modulelist from '../modulelist.json'

const Landing = () => {
    const router = useRouter()

    // const mod = router.query?.modName
    const modPage = router.query?.moduleData

    console.log(modPage, `mod`)

    const [data, setData] = useState({})
    const [formsdata, setFormsdata] = useState([])
    const [formName1, setFormName] = useState("")
    const [name1, setName] = useState("")
    const [placeholder1, setPlaceholder] = useState("")
    const [inputtype1, setInputtype] = useState("")
    const [mandatory1, setMandatory] = useState("")
    const [default1, setDefault] = useState("")
    const [maxlength1, setMaxlength] = useState("")
    const [validation1, setValidationmessage] = useState("")
    const [check1, setCheck1] = useState(false)
    const [defval, setDefval] = useState([])
    let formSchema = {
        formName: formName1,
        fieldname: name1,
        placeholder: placeholder1,
        fieldtype: inputtype1,
        requiredfield: mandatory1,
        defaultvalue: default1,
        maxlength: maxlength1,
        validationmessage: validation1
    }

    //submit handler
    const submitHandler = async (e) => {
        const str = default1
        const arr = str.split(",")
        setDefval(arr)
        console.log(arr)
        e.preventDefault();
        console.log(formSchema, "form schema");
        let nameofForm = {
            formName: formSchema.formName
        }
        let nameofFields = {
            fieldname: formSchema.fieldname,
            placeholder: formSchema.placeholder,
            fieldtype: formSchema.fieldtype,
            requiredfield: formSchema.requiredfield,
            defaultvalue: arr,
            maxlength: formSchema.maxlength,
            validationmessage: formSchema.validationmessage

        }
        await axios.patch("http://localhost:4000/formName/1", nameofForm).then(res => { console.log(res) })

        await axios.post('http://localhost:4000/formdata', nameofFields).then(response => console.log(response))
        setName("")
        setPlaceholder("")
        setInputtype("")
        setMandatory("")
        setDefault("")
        setMaxlength("")
        setValidationmessage("")


    }
    return (
        <div>
            {/* preview list button */}
            <div className='flex justify-end'>
                <Link href={{ pathname: '../modulelist' }}>
                    <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Preview List</a>
                </Link>
            </div>

            {/*Form Name Div */}
            {modPage ? null : <div onSubmit={submitHandler} className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">Name of the form</label>
                <input onChange={(e) => { setFormName(e.target.value) }} type="text" id="text" autoComplete='off'
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                    focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required>
                </input>
            </div>}


            {/* Input Form */}
            <div className="m-8 border-gray-500 shadow">
                <div className="container justify-center ">
                    <form id="inputForm" onSubmit={submitHandler} className="m-8 p-8" autoComplete='off' >



                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Field Name</label>
                            <input onChange={(e) => { setName(e.target.value) }} value={name1} type="text" id="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required>
                            </input>
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Place Holder</label>
                            <input onChange={(e) => { setPlaceholder(e.target.value) }} value={placeholder1} type="text" id="formLabel"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                      focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                      dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required>
                            </input>
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mandatory</label>
                            <select
                                onChange={(e) => { setMandatory(e.target.value) }} value={mandatory1}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                      focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required>
                                <option className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                      focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value="" disabled selected hidden>Choose and option</option>
                                <option >Yes</option>
                                <option >No</option>

                            </select>
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Input Type</label>
                            <select
                                onChange={(e) => { setInputtype(e.target.value) }} value={inputtype1}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                      focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required>
                                <option className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                      focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value="" disabled selected hidden>Choose the Input type</option>
                                <option value="text">Text</option>
                                <option value="number">Number</option>
                                <option value="datetime-local">date</option>
                                <option value="url">URL</option>
                                <option value="file">File Upload</option>
                                <option value="radio">Radio</option>

                            </select>
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default values</label>
                            <input onChange={(e) => { setDefault(e.target.value) }} value={default1} type="text" id="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </input>
                        </div>

                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Maximum length</label>
                            <input onChange={(e) => { setMaxlength(e.target.value) }} value={maxlength1} type="text" id="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </input>
                        </div>

                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Validation message</label>
                            <input onChange={(e) => { setValidationmessage(e.target.value) }} value={validation1} type="text" id="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </input>
                        </div>

                        <center><button type="submit"
                            className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 
              font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 
            dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Submit</button>
                        </center>
                    </form>
                </div>
            </div>



        </div >
    )

}



export default Landing