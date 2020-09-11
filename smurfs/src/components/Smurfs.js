import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfData } from '../store/actions';

const Smurfs = props => {
    const { fetchSmurfData, smurfs } = props;
    useEffect(() => {
        fetchSmurfData()
    }, [smurfs])
    return (
        <div>
            {
                smurfs.map(item => {
                    return (
                        <div>
                            {item.name}
                        </div>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.fetchSmurf.smurfs
    }
}

export default connect(mapStateToProps, { fetchSmurfData })(Smurfs);