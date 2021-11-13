import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router';

const BackButton = () => {
    const history = useHistory()
    return (
        <div className="text-lg my-10 text-center">
            <button onClick={() => {
                history.push('/')
            }} className="btn-1"><FontAwesomeIcon icon={faArrowLeft} className="mr-3" /> go Back</button>
        </div>
    );
};

export default BackButton;