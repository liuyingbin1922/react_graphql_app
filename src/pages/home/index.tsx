import './index.css';
import SpaceXComponent from '../../components/SpaceXBody';
import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import React , {useState} from 'react';
import 'antd/dist/antd.css';

function App() {
    const [state , setState] = useState<string>('past'); 
    const { Header, Content, Sider } = Layout;
    const items2: MenuProps['items'] = [UserOutlined].map(
        (icon, index) => {
          const key = String(index + 1);
      
          return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,
      
            children: new Array(2).fill(null).map((_, j) => {
              const subKey = index * 4 + j + 1;
              return {
                key: subKey,
                label: `option${subKey}`,
                onClick: (item:any) => {
                    if (item.key === '1') {
                        setState('past');
                    } else if(item.key === '2') {
                        setState('next');
                    }
                }
              };
            }),
          };
        },
      );
      
    return (
        <div className="App">
        <Layout>
            <Header className="header">
                <div className="logo" />
            </Header>
            <Layout>
            <Sider width={200} className="site-layout-background">
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                items={items2}
            />
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
            <Content
                className="site-layout-background"
                style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                }}
            >
                <SpaceXComponent showTag={state}></SpaceXComponent>
            </Content>
            </Layout>
        </Layout>
        </Layout>
        </div>
    );
}

export default App;
