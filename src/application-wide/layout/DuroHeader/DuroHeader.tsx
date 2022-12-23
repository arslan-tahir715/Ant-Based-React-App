import React, { useState, FunctionComponent } from "react";
import { Layout, Input, Switch , ConfigProvider} from "antd";
import "antd/es/style/themes/default.less";
import "../../../../node_modules/antd/es/style/themes/default.less";
import "./DuroHeader.less";
import DuroIcon from "../Icon/DuroIcon/Icon"


const { Header } = Layout;

const DuroHeader: FunctionComponent = () => {
 const [mode, setMode] = useState("Dark")

  const handleAppMode = () => {
    if (mode === 'Light') {
      setMode('Dark');
      ConfigProvider.config({
        theme: {
          primaryColor: "#353540",
          infoColor: '#bfbfca',
          warningColor: '#282c34',
          successColor: '#18171d'
        }  
      });
    }
    else {
      setMode('Light');
      ConfigProvider.config({
        theme: {
          primaryColor: "#bfbfca",
          infoColor: '#353540', 
          warningColor: 'white',
          successColor: '#807f85'
        }     
      });
    }
  }

  return (
    <Layout className="duro-header-layout" >
      <Header style={{zIndex: 99999, backgroundColor: 'var(--ant-success-color)'}} className="duro-header-layout--header">
        <DuroIcon/>
        <Input size="large" style={{color:'var(--ant-info-color)', width: "40%", marginLeft: '27rem', height: "2rem", borderRadius: '8px' ,border: 'solid 2px var(--ant-primary-color-outline)', backgroundColor: 'var(--ant-primary-color)'}}  />
        <Switch unCheckedChildren={`${mode} Mode`} checkedChildren={`${mode} Mode`} onChange={handleAppMode} style={{margin: "0 0 0 15rem", color: 'var(--ant-info-color)', border: 'solid 2px var(--ant-primary-color-outline)', backgroundColor: 'var(--ant-primary-color)', cursor: "pointer" }}></Switch>
      </Header>
    </Layout>
  );
};

export default DuroHeader;
