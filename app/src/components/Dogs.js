import React, {useEffect} from 'react';
import { connect} from 'react-redux';

import {getDog} from '../store/actions/index';

const Dogs =({ getDog, dog, isFetching, error}) => {
    if (isFetching) {
        return <h2>Sit and stay while we fetching your doggo</h2>
    }
    if (error) {
        return <h2>{error}</h2>
    }
    return (
        <div>
            <h2>Your Doggo:</h2>
            <img src={dog} />
            <br />
            <button onClick={getDog}> Get New Dog</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        dog: state.dog,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, {getDog})(Dogs)