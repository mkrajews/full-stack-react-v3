import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

function handlers(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      return <WrappedComponent {...this.state} {...this.props} />;
    }
  };
}

export default compose(connect(mapStateToProps, mapDispatchToProps), handlers);
