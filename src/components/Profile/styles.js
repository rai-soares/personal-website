import styled from "styled-components"
import AniLink from 'gatsby-plugin-transition-link/AniLink'


export const ProfileWrapper = styled.section`
  color: var(--texts);
  display: flex;
  flex-direction: column;
`

export const ProfileLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: var(--highlight);
  }
`

export const ProfileAuthor = styled.h1`
  font-size: 1.6rem;
  margin: 0.5rem auto 1.5rem;
`

export const ProfilePosition = styled.small`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
`

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
`