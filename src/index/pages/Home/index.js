import {connect} from "react-redux";
import React from "react";
import { withRouter } from "react-router";

function Login(props) {
    return (
        <div className="home-page">
            主页
        </div>
    )
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
