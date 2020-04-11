import {connect} from "react-redux";
import React, { useEffect } from "react";
import { withRouter } from "react-router";

function MyCabbage(props) {
    useEffect(() => {
    }, [])

    return (
        <div className="my-cabbage-page">
            我的大头菜
        </div>
    )
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyCabbage));
