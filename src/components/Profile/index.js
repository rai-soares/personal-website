import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Avatar from '../Avatar'
import { ProfileAuthor, ProfileDescription, ProfileLink, ProfilePosition, ProfileWrapper } from './styles'
import getThemeColor from "../../utils/getThemeColor"

const Profile = () => {
  const {
    site: {
      siteMetadata: {
        title,
        description,
        position,
      }
    }
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        id
        siteMetadata {
          title
          description
          position
        }
      }
    }
  `)

  return (
    <ProfileWrapper>
      <ProfileLink to="/" cover direction="left" bg={getThemeColor()} duration={0.6}>
        <Avatar />
        <ProfileAuthor>
          {title}
          <ProfilePosition>{position}</ProfilePosition>
        </ProfileAuthor>
        <ProfileDescription>{description}</ProfileDescription>
      </ProfileLink>
    </ProfileWrapper>
  )
}


export default Profile
