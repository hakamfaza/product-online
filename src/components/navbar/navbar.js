import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

export default function Navbar() {
  const nav = ['Home', 'About', 'Contact'];
  return (
    <Layout>
      <Header
        style={{
          position: 'fixed',
          zIndex: 50,
          width: '100%',
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={nav.map((item) => ({
            key: item,
            label: (
              <Link to={item.toLocaleLowerCase() === 'home' ? '/' : `/${item.toLocaleLowerCase()}`}>
                <p style={{
                  padding: '0',
                  margin: '0',
                  color: 'white',
                }}
                >
                  {item}

                </p>
              </Link>
            ),
          }))}
        />
      </Header>
    </Layout>
  );
}
