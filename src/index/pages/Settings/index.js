import {connect} from "react-redux";
import React, { useEffect } from "react";
import { withRouter } from "react-router";

function Settings(props) {
    useEffect(() => {
    }, [])

    return (
        <div className="settings-page">
            设置页面
        </div>
    )
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Settings));
