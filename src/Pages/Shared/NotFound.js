import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import BackButton from './BackButton';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className="bg h-screen text-center text-white">
            <div className="py-20">
                <FontAwesomeIcon icon={faExclamationTriangle} className="text-9xl" />
                <h1 >Opps ! Page Not Found</h1>

            </div>
        </div>
    );
};

export default NotFound;