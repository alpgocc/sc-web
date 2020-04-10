import {connect} from "react-redux";
import React, {Component} from "react";
import { withRouter } from "react-router";
import { Layout } from "antd";

import iconSettings from "../../images/icon_settings.svg";
import iconExit from "../../images/icon_exit.svg";
import { removeToken } from '../../index/utils/auth'
import { logout } from '../../common/api/index'

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
                <div className="site-name" onClick={this.navigation.bind(this, '/')}>Mysite</div>
                <div className="menu">
                    <div className={"menu-item " + this.activateClass('/test')} onClick={this.navigation.bind(this, '/test')}>Test</div>
                </div>
                <div className="user">
                    <div onClick={this.navigation.bind(this, '/setting')}
                        className="user-item setting">
                        <img src={iconSettings} className="setting-icon"/>
                        <span>设置</span>
                    </div>
                    <div className="user-item">
                        用户: { this.props.loginUser }
                    </div>
                    <img src={iconExit} className="exit-icon user-item" onClick={ () => { this.logOut() } } />
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
