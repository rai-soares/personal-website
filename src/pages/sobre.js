import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { AboutContainer, AboutTitle, AboutDescription, AboutIconContainer } from '../components/About/styles'
import techs from '../components/About/content'
import Icons from '../components/About/icons'

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="Sobre mim" />
      <AboutContainer>
        <AboutTitle>Sobre Mim</AboutTitle>
        <AboutDescription>Engenheiro de software especialista em frontend. Apaixonado por técnologia e inovação. Grande experiência com desenvolvimento de grandes projetos desde o ínicio, atuando na arquitetura, planejamento, desenvolvimento e publicação dos projetos.</AboutDescription>
        <AboutTitle>Tecnologias</AboutTitle>
        {techs?.map((item, index) => {
          const Icon = Icons[index]
          return <AboutIconContainer title={item.name}><Icon /></AboutIconContainer>
        })}
      </AboutContainer>
    </Layout>
  )
}

export default AboutPage
