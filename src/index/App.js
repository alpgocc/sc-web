import store from "../common/store";
import Routes from "../common/routes/Routes";
import history from "./utils/history";
import { Provider } from "react-redux";
import React, { Component } from "react";
import { Router } from "react-router-dom";
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConfigProvider locale={ zhCN }>
                    <Router history={history}>
                        <Routes type={this.props.type} />
                    </Router>
                </ConfigProvider>
            </Provider>
        );
    }
}
export default App;