import React from 'react';
import { Route } from 'react-router-dom';

export const PrivateRoute = ({component: Component, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /login page
        <Route {...rest} render={props => (
            <Component {...props} />
        )} />

    );
};
