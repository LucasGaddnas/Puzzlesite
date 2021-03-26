import React, { useState } from 'react';
import Progress from './Progress';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [fileData, setFileData] = useState({name: 'Okänt', brand: 'Okänt', type: 'Okänt', description: '-'});
    const [event, setEvent] = useState(null);

    // Allowed filetypes to upload
    const fileTypes = ['image/png', 'image/jpeg'];

    // Handler for setting values from the inputfields
    const changeHandler = (e) => {
        
        if (e.target.value)
        {
            setFileData({...fileData, [e.target.name]: e.target.value});
        } else {
            setFileData({...fileData, [e.target.value]: 'Okänt'});
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
            setError('Välj en fil med formatet .png eller .jpg');
        }
    }
    
    return (
        <form className="upload-form" onSubmit={submitHandler}>
            <div>
                <div className="row">
                    <input className="control input" type="file" name="file"/>
                </div>
                <div className="row">
                    <div className="inputwrap">
                        <label htmlFor="name">Namn</label>
                        <input className="input" type="text" name="name" onChange={changeHandler}/>
                        <label htmlFor="brand">Märke</label>
                        <input className="input" type="text" name="brand" onChange={changeHandler}/>
                    </div>
                    <div className="inputwrap">
                        <label htmlFor="type">Typ</label>
                        <input className="input" type="text" name="type" onChange={changeHandler}/>
                        <label htmlFor="description">Beskrivning</label>
                        <input className="input" type="text" name="description" onChange={changeHandler}/>
                    </div>
                </div>
                <button className="control" type="submit">Sänd</button>
            </div>
            <div className="output" >
            { error && <div className="error">{ error }</div> }
            { file && <div>{ file.name }</div> }
            { file && <Progress file={file} setFile={setFile} fileData={fileData} setFileData={setFileData} event={event}/> }
            </div>
        </form>
    )
}

export default UploadForm;