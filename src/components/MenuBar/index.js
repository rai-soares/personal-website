import React, { useState, useEffect } from "react"

import { Home } from '@styled-icons/boxicons-solid/Home'
import { UpArrowAlt as Arrow } from '@styled-icons/boxicons-regular/UpArrowAlt'
import { Bulb as Light } from '@styled-icons/boxicons-regular/Bulb'
import { Grid } from '@styled-icons/boxicons-solid/Grid'
import { ThList as List } from "@styled-icons/typicons/ThList"
import getThemeColor from "../../utils/getThemeColor"

import { MenuBarWrapper, MenuBarGroup, MenuBarItem, MenuBarLink } from "./styles"

const MenuBar = () => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)
  const isDarkMode = theme === "dark"
  const isListMode = display === "list"

  useEffect(() => {
    setTheme(window.__theme)
    setTheme(window.__display)
    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  return <MenuBarWrapper>
    <MenuBarGroup>
      <MenuBarLink
        to="/"
        cover
        direction="right"
        bg={getThemeColor()}
        duration={0.6}
        title="Voltar para Home"
      >
        <MenuBarItem>
          <Home />
        </MenuBarItem>
      </MenuBarLink>
    </MenuBarGroup>
    <MenuBarGroup>
      <MenuBarItem className={theme} title="Mudar o tema" onClick={() => {
        window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
      }}>
        <Light />
      </MenuBarItem>
      <MenuBarItem title="Mudar visualização" onClick={() => {
        window.__setPreferredDisplay(isListMode ? 'grid' : 'list')
      }}
        className="display">
        {isListMode ?
          <Grid />
          :
          <List />
        }
      </MenuBarItem>
      <MenuBarItem title="Ir para o Topo">
        <Arrow />
      </MenuBarItem>
    </MenuBarGroup>
  </MenuBarWrapper>
}

export default MenuBar