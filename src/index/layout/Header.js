import {connect} from "react-redux";
import React, {Component} from "react";
import { withRouter } from "react-router";
import { Layout } from "antd";

import { removeToken } from '../../index/utils/auth'
import { logout } from '../../common/api/index'
import {
    SettingFilled,
    LogoutOutlined
  } from '@ant-design/icons';

class Header extends Component {
    state = {
    }

    logOut =() =>{
        logout().finally(() => {
            removeToken()
            this.props.history.push('login');
        })
    }

    navigation = (path) => {
        this.props.history.push(path);
    }

    activateClass(path) {
        return new RegExp(`^${path}`).test(this.props.location.pathname) ? 'activate-item' : ''
    }

    render() {
        const { Header } = Layout;

        return (
            <Header ref="head" className="header">
                <div className="site-name" onClick={this.navigation.bind(this, '/')}>
                    <span className="site-name-1">动</span>
                    <span className="site-name-2">物</span>
                    <span className="site-name-3">森</span>
                    <span className="site-name-4">友</span>
                    <span className="site-name-5">会</span>
                </div>
                <div className="menu">
                    <div className={"menu-item " + this.activateClass('/cabbage-market')} onClick={this.navigation.bind(this, '/cabbage-market')}>大头菜市场</div>
                    <div className={"menu-item " + this.activateClass('/my-cabbage')} onClick={this.navigation.bind(this, '/my-cabbage')}>我的大头菜</div>
                </div>
                <div className="user">
                    <div onClick={this.navigation.bind(this, '/settings')}
                        className="user-item setting">
                        <SettingFilled></SettingFilled>
                        {/* <img src={iconSettings} className="setting-icon"/> */}
                        <span>设置</span>
                    </div>
                    <div className="user-item">
                        用户: { this.props.loginUser }
                    </div>
                    <LogoutOutlined className="exit-icon user-item" onClick={ () => { this.logOut() } } />
                </div>
            </Header>
        );
    }
}

const mapStateToProps = state => ({
    loginUser: state.loginReducer.loginUser
});

const mapDispatchToProps = dispatch => ({
});
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Header));
