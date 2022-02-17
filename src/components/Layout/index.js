import React from "react"
import { TransitionPortal } from 'gatsby-plugin-transition-link'
import PropTypes from "prop-types"
import { LayoutWrapper, LayoutMain } from "./styles";
import GlobalStyles from '../../styles/global'
import Sidebar from "../Sidebar";
import MenuBar from "../MenuBar"

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <TransitionPortal level="top">
        <Sidebar />
      </TransitionPortal>
      <LayoutMain>{children}</LayoutMain>
      <TransitionPortal level="top">
        <MenuBar />
      </TransitionPortal>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
