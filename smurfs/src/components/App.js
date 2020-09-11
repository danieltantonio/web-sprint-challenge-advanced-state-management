import React, { useEffect } from "react";
import { connect } from 'react-redux';
import "./App.css";

// Components
import CreateSmurf from './CreateSmurf';
import Smurfs from './Smurfs';

// Actions
import { fetchSmurfData } from '../store/actions';

const App = (props) => {
  const { fetchSmurfData } = props;
  useEffect(() => {
    fetchSmurfData()
  }, [fetchSmurfData])

  return (
    <div>
      <CreateSmurf />
      <Smurfs />
    </div>
  )
};

const mapStateToProps = state => {
  return {
    smurfs: state.fetchSmurf.smurfs,
    isLoading: state.fetchSmurf.isLoading,
    error: state.fetchSmurf.error
  }
}

export default connect(mapStateToProps, { fetchSmurfData })(App);
