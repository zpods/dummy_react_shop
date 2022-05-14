import React from 'react';
import { Link } from 'react-router-dom';

function JumbotronElement () {
    return (
        <section className="jumbotron text-center my-5">
            <div className="container">
            <h1 className="jumbotron-heading my-4">Shop Products</h1>
            <p className="lead text-muted">Sed id enim eget libero hendrerit imperdiet. Nulla ac erat at diam rutrum tincidunt. In hac habitasse platea dictumst. Quisque feugiat pellentesque tellus egestas pharetra. Etiam ultricies tristique neque a bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            <p>
                <Link to="/aa" style={{width: 200}} className="btn btn-primary m-2">Show Promotions</Link>
                <Link to="/bb" style={{width: 200}} className="btn btn-secondary m-2">Most Viewed Products</Link>
            </p>
            </div>
        </section>
    )
}

export default JumbotronElement;