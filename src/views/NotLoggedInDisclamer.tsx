import React from 'react'

const NotLoggedInDisclamer = () => {
    return (
        <div>
            <h1>You need to be logged in to see this page.</h1>
            <a href="/">Login</a>
            <a href="/register">Register an account</a>
        </div>
    )
}

export default NotLoggedInDisclamer
