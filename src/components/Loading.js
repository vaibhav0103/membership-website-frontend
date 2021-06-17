import React from 'react'

const Loading = () => {
    return (
        <div className="container">
            <div className="text-center">
                <div className="spinner-border text-info" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default Loading
