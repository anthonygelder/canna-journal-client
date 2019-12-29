import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {      
            return (
                <section className="sections">
                    <h2>An error has occurred...</h2>
                </section>
            );
        }
        return this.props.children;
    }  
}

export default ErrorBoundry;