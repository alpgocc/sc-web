import {connect} from "react-redux";
import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { Form, Input, Row, Col, Button, message } from 'antd';
import { useCallback } from "react";
import { login } from '../../../common/api/index';
import { setToken, removeToken } from '../../utils/auth'
import { loginAction } from '../../actions/login';

function Login(props) {
    const [ loginForm ] = Form.useForm();

    // 登录事件
    const submit = useCallback(() => {
        loginForm.validateFields().then(() => {
            const data = loginForm.getFieldsValue()

            login(data).then((res) => {
                if (res && res.data) {
                    setToken(res.data.token)
                    props.history.push('/')
                    props.loginAction(data.userName, res.data.token)
                }
            }).catch(() => {
            })
        }).catch(() => {})
    })

    // 回车
    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            submit()
        }
    }

    useEffect(() => {
        removeToken()
    }, [])

    return (
        <div className="login-page">
            <div className="login-header">
                <div className="site-name">Mysite</div>
            </div>
            <div className="login-main">
                <div className="login-content">
                    <div className="title">
                        用户登录
                    </div>
                    <Form form={ loginForm } className="login-form">
                        <Form.Item labelCol={{span: 5}} name="username" label="用户名" rules={[
                            { required: true, message: '输入用户名' }
                        ]}>
                            <Input autoComplete={"off"} placeholder="用户名" />
                        </Form.Item>
                        <Form.Item labelCol={{span: 5}} name="password" label="密码"rules={[
                            { required: true, message: '输入密码' }
                        ]}>
                            <Input autoComplete={"off"} placeholder="密码" type="password" onKeyDown={ handleKeyDown } />
                        </Form.Item>
                        <Row>
                            <Col span={19} offset={5}>
                                <Button type="primary" className="login-btn" onClick={ () => submit() }>登录</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    loginToken: state.loginReducer.loginToken,
    loginUser: state.loginReducer.loginUser,
});

const mapDispatchToProps = dispatch => ({
    loginAction: (params, callback) => dispatch(loginAction(params, callback)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
