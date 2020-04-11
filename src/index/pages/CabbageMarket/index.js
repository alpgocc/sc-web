import {connect} from "react-redux";
import React, { useEffect } from "react";
import { withRouter } from "react-router";

function CabbageMarket(props) {
    useEffect(() => {
    }, [])

    return (
        <div className="cabbage-market-page">
            大头菜市场
        </div>
    )
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CabbageMarket));
