"use client";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import { Drawer, Layout, Menu } from "antd";
import React, { useState } from "react";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import DashboardSidebar from "@/components/dashboard/DashboardSider";
import { dashboardItems } from "@/constants/dashboardItems";
import { USER_ROLE } from "@/constants/userRole";
import SideMenuUI from "@/components/UI/SideMenuUI";

const { Content } = Layout;

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  const screens = useBreakpoint();
  //  !screens is a hooks of ant design for responsive conditionals

  return (
    <Layout
      hasSider
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      {/*//! for Large device drawer */}
      {!screens.sm || !screens.md ? (
        <Drawer
          title={`Admin Dash`}
          placement="left"
          onClose={() => setCollapsed(false)}
          open={collapsed}
        >
          <SideMenuUI
            data={{
              itemsData: dashboardItems(USER_ROLE.admin),
              mainCss: "bg-white",
              menuCss: "bg-slate-50 text-primary my-5 font-[600]",
              subMenuCss: "hover:bg-primary hover:text-white",
            }}
          />
          {/* //! SIdeMenuUI is reusable MenuUI for showing layout sidebar UI with dropdown children */}
        </Drawer>
      ) : (
        <section>
          {/*//! for small & medium device drawer */}
          <DashboardSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        </section>
      )}
      {/* //! Main Content of dashboard with dashboard navbar */}
      <Layout style={{ overflow: "hidden" }}>
        <DashboardNavbar collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          style={{
            padding: "1em",
            minHeight: "100vh",
            overflowY: "initial",
            textAlign: "center",
          }}
        >
          {children}
        </Content>
        {/* <Footer></Footer> */}
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;