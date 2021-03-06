/**
 * Created by feichongzheng on 16/12/15.
 */
import React, {Component} from 'react';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
const SubMenu = Menu.SubMenu;

let pathname;

class NavLeft extends Component {

    constructor (props) {
        super(props);
        const location = this.props.location;
        pathname = location.pathname;
        pathname = pathname.indexOf('/') === 0 ? pathname : '/' + pathname;
        this.state = {
            current: pathname,
            openKeys: ['/uums'],
        };
    }

    handleClick = (e) => {
        const history = this.props.history;
        let key = e.key;
        if (key !== undefined) {
            this.setState({
                current: key,
            });
            this.props.changeNavTopCurrent(key);
            history.pushState(null, key);
        }
    };

    render () {
        return (
            <Menu onClick={this.handleClick}
                  style={{ width: 150 }}
                  defaultOpenKeys={this.state.openKeys}
                  selectedKeys={[this.state.current]}
                  mode="inline"
                  id="nav-left-menu">
                <SubMenu key='/uums' title={<span><Icon type='appstore' /><span>统一用户</span></span>}>
                    <Menu.Item key='/app'>应用系统</Menu.Item>
                    <Menu.Item key='/user'>用户管理</Menu.Item>
                    <Menu.Item key='/org'>机构管理</Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}

export default NavLeft;
