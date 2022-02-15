import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Avatar from '../Avatar'
import { ProfileAuthor, ProfileDescription, ProfileLink, ProfilePosition, ProfileWrapper } from './styles'

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
      <ProfileLink>
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
