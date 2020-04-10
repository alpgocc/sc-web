import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router";
import darkTheme from "@ant-design/dark-theme";
import { Layout } from "antd";
import ErrorCatch from "../../index/layout/ErrorCatch";
import Header from "../../index/layout/Header";
import { getToken } from '../../index/utils/auth'

import Login from "../../index/pages/Login/index";
import Home from "../../index/pages/Home/index";

import {
    getInfo
} from '../api/index'

import { loginAction } from '../../index/actions/login';

function Routes (props) {
    const [ isLoginPage, setIsLoginPage ] = useState(true)

    useEffect(() => {
        window.less.modifyVars(darkTheme).then(() => {
        }).catch(error => {
            console.log(error);
        });
    }, [])

    useEffect(() => {
        const loginPage = new RegExp(`^/login`).test(props.location.pathname)
        const isAuth = Boolean(getToken())
        setIsLoginPage(loginPage)

        if (!isAuth) {
            props.history.push('login')
        } else {
            getInfo().then((res) => {
                if (res && res.user) {
                    props.loginAction(res.user.userName, getToken())
                }
            }).catch(() => {
                props.history.push('login')
            })
        }
    }, [props.location.pathname])

    return (
        <Layout className="darkTheme">
            <ErrorCatch>
                {
                    !isLoginPage && <Header />
                }
                {
                    isLoginPage
                    ? <Switch>
                        <Route exact path="/login" component={Login} />
                      </Switch>
                    : <Switch>
                        <Route exact path="/" component={Home} />
                      </Switch>
                }
            </ErrorCatch>
        </Layout>
    );
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    loginAction: (params, callback) => dispatch(loginAction(params, callback)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
