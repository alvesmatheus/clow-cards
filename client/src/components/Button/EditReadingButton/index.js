import React from 'react';

import './index.css';

const EditReadingButton = ({ isEditing, setIsEditing, onSave }) => {
    const handleClick = async () => {
        if (isEditing) await onSave();
        setIsEditing(!isEditing);
    };

    return (
        <button
            className={
                isEditing ? 'save-reading-button' : 'edit-reading-button'
            }
            type='button'
            onClick={handleClick}
        >
            {isEditing ? 'Save' : 'Edit'}
        </button>
    );
};

export default EditReadingButton;
