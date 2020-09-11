import React, { useEffect } from "react";
import { connect } from 'react-redux';
import "./App.css";

import { fetchSmurfData } from '../store/actions';

const App = (props) => {
  const { fetchSmurfData } = props;
  useEffect(() => {
    fetchSmurfData()
  }, [fetchSmurfData])

  return (
    <div>
      It works
    </div>
  )
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps, { fetchSmurfData })(App);
