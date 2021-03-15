import React, { useState } from 'react';
import Progress from './Progress';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [fileData, setFileData] = useState({name: 'Unknown', brand: 'Unknown', type: 'Unknown', description: 'None'});
    const [event, setEvent] = useState(null);

    // Allowed filetypes to upload
    const fileTypes = ['image/png', 'image/jpeg'];

    // Handler for setting values from the inputfields
    const changeHandler = (e) => {
        
        if (e.target.value)
        {
            setFileData({...fileData, [e.target.name]: e.target.value});
        } else {
            setFileData({...fileData, [e.target.value]: 'Unknown'});
        }
    }

    // Uploads the file and data
    const submitHandler = (e) => {
        e.preventDefault();
        e.persist();
        
        setEvent(e);
        let uploadedFile = e.target.file.files[0];

        // Checks that the chosen file is allowed
        if (uploadedFile && fileTypes.includes(uploadedFile.type)) {
            setFile(uploadedFile);
            setError('');
        } else {
            setFile(null);
            setError('Please select a png or jpg');
        }
    }
    
    return (
        <form className="upload-form" onSubmit={submitHandler}>
            <input className="control" type="file" name="file"/>
            <label htmlFor="name">Name</label>
            <input className="control" type="text" name="name" onChange={changeHandler}/>
            <label htmlFor="brand">Brand</label>
            <input className="control" type="text" name="brand" onChange={changeHandler}/>
            <br></br>
            <label htmlFor="type">Type</label>
            <input className="control" type="text" name="type" onChange={changeHandler}/>
            <label htmlFor="description">Description</label>
            <input className="control" type="text" name="description" onChange={changeHandler}/>
            <button className="control" type="submit">Submit</button>
            <div className="output" >
            { error && <div className="error">{ error }</div> }
            { file && <div>{ file.name }</div> }
            { file && <Progress file={file} setFile={setFile} fileData={fileData} setFileData={setFileData} event={event}/> }
            </div>
        </form>
    )
}

export default UploadForm;