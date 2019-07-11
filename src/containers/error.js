import React from 'react';
import { connect } from 'react-redux';

const Error = ({ error }) => (
  <div>
    {error && (
      <p>{`${error.description} ${error.reason ? `(${error.reason})` : ''}`}</p>
    )}
  </div>
);

const mapStateToProps = ({ error }) => ({
  error
});

export default connect(mapStateToProps)(Error);
