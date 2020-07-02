import React from 'react';

export const LinkForm = () => {
    return (
        <form className="card card-body">
            <div className="form-group input-group">
                <div className="input-group-text-bg-light">
                    <i className="material-icons">insert_link</i>
                </div>
                <input type="text" className="form-control" placeholder="url" name="url"/>
            </div>

        </form>
        )
}

export default LinkForm;