import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FoundOutlined,
  MenuOutlined,
  FunctionOutlined,
  BoldOutlined,
} from "@ant-design/icons";
import icon from "../images/cryptocurrency.png";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to={"/"}>Crypto Curency</Link>
        </Typography.Title>
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/">home</Link>
          </Menu.Item>
          <Menu.Item icon={<FunctionOutlined />}>
            <Link to="/">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/">News</Link>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
