import React, { FunctionComponent, useState, LazyExoticComponent, MouseEventHandler } from "react";
import { Layout, Drawer, Col, Row, Button, Modal, Menu } from "antd";
import "antd/es/style/themes/default.less";
import './DuroContent.less'
import "antd/dist/antd.css";
import WorkSpaceIconD from "../Icon/WorkSpaceIconD/Icon";
import WorkSpaceIconB from "../Icon/WorkSpaceIconB/Icon";
import DashboardIcon from "../Icon/DashboardIcon/DashboardIconSvg";
import ProductIcon from "../Icon/ProductIcon/ProductIconSvg";
import ComponentIcon from "../Icon/ComponentsIcon/ComponentIconSvg";
import ExportIcon from "../Icon/ExportIcon";
import ChangeOrderIcon from "../Icon/ChangeOrderIcon";
import { MenuInfo } from "rc-menu/lib/interface";
import SubMenu from "antd/lib/menu/SubMenu";
import { Link } from "react-router-dom";

const { Header, Content } = Layout;

const DuroContent = ({ Component }: { Component: React.FC }) => {
  
  const [workSpaceModal, setWorkSpaceModal] = useState(false)
  const [selectedWorkspace, setSelectedWorkspace] = useState('Design')
  const [currentTab, setCurrentTab] = useState(window.location.pathname)

  const [drawerStyle, setDrawerStyle] = useState({
    width:56,
    padding: '10px',
    backgroundColor:'var(--ant-primary-color)',
  });
  const [navHeaderTextStyle, setHeaderNavTextStyle] = useState({
    display: "none",
    fontWeight: 0,
    padding: '',
    color: 'var(--ant-info-color)',
  });

  const [navTextStyle, setNavTextStyle] = useState({
    display: "none",
    fontWeight: 0,
    color: 'var(--ant-info-color)',
  })

  const handleVisibility = () => {
    setDrawerStyle({
      ...drawerStyle,
      width:185,
    });

    setHeaderNavTextStyle({
      display: "inline-block",
      fontWeight: 600,
      padding: '0 0 0 2rem',
      color: 'var(--ant-info-color)',
    });

    setNavTextStyle({
      display: "inline-block",
      fontWeight: 600,
      color: "var(--ant-info-color)"
    });
  };

  const handleWorkspaceEvent = () => {
    setWorkSpaceModal(true)
  }

  const handleWorkspaceSelect = (event: React.MouseEvent<HTMLElement>) => {
    if ((event.currentTarget as HTMLInputElement).id == 'Build') setSelectedWorkspace('Build')
    else if ((event.currentTarget as HTMLInputElement).id == 'Design') setSelectedWorkspace('Design')
    setWorkSpaceModal(false)
  }

  const handleButtonEvent = (e: MenuInfo) => {
    const ButtonName = e.key;
    switch(ButtonName) {
      case 'WorkSpace':
        handleWorkspaceEvent(); 
      break;
      case 'Dashboard':
        setCurrentTab('/dashboard')
      break;
      case 'Product':
        setCurrentTab('/Products')
      break;
      case 'Component':
        setCurrentTab('/components')
      break;
      case 'Export':
        setCurrentTab('/Export')
        break;
      case 'ChangeOrder':
        setCurrentTab('/change-orders')
        break;
      default:
    } 
    handleOut();
  }

  const handleOut = () => {
    setDrawerStyle({
      ...drawerStyle,
      width:56,
    });
  };

  const selectedTabClass = drawerStyle.width === 56 ? 'tab-select-narrow': 'tab-select-wide';
  return (
    <Layout className="duro-content-layout" >
      <Content className="duro-content-layout">
        <Row gutter={16}>
          <Col className="gutter-row-1" onMouseOver={handleVisibility}>
            <Drawer
              placement={"left"}
              closable={false}
              visible={true}
              width={drawerStyle.width}
              key={"left"}  
              bodyStyle={drawerStyle}
              style={{marginTop: '62px', maxWidth: '0'}}
              headerStyle={{...drawerStyle, border: "none"}}
            >
              <Menu style={{background: 'transparent', borderRight: 'none'}} mode="inline">
                <Menu.Item
                  className="workspace-menu-item"
                  key="WorkSpace"
                  onClick={(e) => handleButtonEvent(e)} 
                  icon={selectedWorkspace === 'Design' ? <WorkSpaceIconD /> : <WorkSpaceIconB />}
                >
                  <div style={{...navHeaderTextStyle, display:"flex", flexDirection: 'column'}}><span style={{height: '1.5rem'}}>{selectedWorkspace}</span><span style={{opacity: '0.5'}}>Workspace</span></div>
                </Menu.Item>
                <Menu.Item
                  key="Dashboard"
                  onClick={(e) => handleButtonEvent(e)} 
                  icon={<DashboardIcon />}
                  className={currentTab === '/dashboard' ? selectedTabClass : ''}
                >
                  <Link to='/dashboard' style={navTextStyle}>Dashboard</Link>
                </Menu.Item>
                <Menu.Item
                  key="Product"
                  onClick={(e) => handleButtonEvent(e)}  
                  className={currentTab === '/Products' ? selectedTabClass : ''}
                  icon={<ProductIcon />}
                  >
                    <Link to='/Products' style={navTextStyle}>Products</Link>
                </Menu.Item>
                <Menu.Item 
                  key="Component"
                  className={currentTab === '/components' ? selectedTabClass : ''}
                  onClick={(e) => handleButtonEvent(e)} 
                  icon={<ComponentIcon />}
                  > <Link to='/components'style={navTextStyle}>Components</Link>
                </Menu.Item>
                <Menu.Item 
                  key="Export"
                  onClick={(e) => handleButtonEvent(e)} 
                  className={currentTab === '/Export' ? selectedTabClass : ''}
                  icon={<ExportIcon />}
                  >
                    <Link to='/Export' style={navTextStyle}>Export</Link>
                </Menu.Item>
                <Menu.Item 
                  key="ChangeOrder"
                  onClick={(e) => handleButtonEvent(e)} 
                  className={currentTab === '/change-orders' ? selectedTabClass : ''}
                  icon={<ChangeOrderIcon />}
                  >
                    <Link to='/change-orders' style={navTextStyle}>Change Order</Link>
                </Menu.Item>
              </Menu>
            </Drawer>
          </Col>
          <Col className="gutter-row-2" span={22}>
            <div style={{background: 'var(--ant-warning-color)', padding: '2.5rem 0 0 5.5rem', width: '280vh', height: '200vh'}}><Component/></div>
          </Col>
          <Col>
            <Modal 
              className="workspace-modal"
              visible={workSpaceModal}
              closable={false}
              width={'200px'}
              closeIcon={null}
              style={{position: "absolute", left: '60px'}}
              mask={false}
              bodyStyle={{background: 'var(--ant-primary-color)'}}
              footer={null}
              title={'Select Workspace'} >
              <div style={{minHeight: '90px'}}>
                <div className={selectedWorkspace === 'Design' ? 'opacity-class' : ''} id={'Design'} onClick={(e) => handleWorkspaceSelect(e)} style={{ marginTop: '10px', position: 'absolute', top: '25px', cursor: 'pointer'}}>  
                  <WorkSpaceIconD />
                  <div style={{ color: 'var(--ant-info-color)', padding: '0 0 0 50px'}}>
                    <div style={{fontWeight: '800'}}>Design</div>
                    <div>Workspace</div>    
                  </div>
                </div>
                <div className={selectedWorkspace === 'Build' ? 'opacity-class' : ''} id={'Build'} onClick={(e) => handleWorkspaceSelect(e)} style={{ marginTop: '7px', position: 'absolute', top: '90px', cursor: 'pointer'}}>  
                  <WorkSpaceIconB />
                  <div style={{ color: 'var(--ant-info-color)', padding: '0 0 0 50px'}}>
                    <div style={{fontWeight: '800'}}>Build</div>
                    <div>Workspace</div>
                  </div>
                </div>
              </div>
            </Modal>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default DuroContent;
