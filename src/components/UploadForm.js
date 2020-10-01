import React, { useState } from 'react';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const fileTypes = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        let uploadedFile = e.target.files[0];

        if (uploadedFile && fileTypes.includes(uploadedFile.type)) {
            setFile(uploadedFile);
            setError('');
        } else {
            setFile(null);
            setError('Please select a png or jpg');
        }
    }

    return (
        <form>
            <input type="file" onChange={changeHandler}/>
            <div className="output">
                { error && <div className="error">{ error }</div> }
                { file && <div>{ file.name }</div> }
            </div>
        </form>
    )
}

export default UploadForm;