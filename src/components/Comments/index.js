import React from "react"
import PropTypes from "prop-types"
import ReactDisqusComments from "react-disqus-comments"

import { CommentsWrapper, CommentsTitle } from "./styles"

const Comments = ({ url, title }) => {
  const completeURL = `https://www.raisoares.me${url}`
  return (
    <CommentsWrapper>
      <CommentsTitle>Comentários</CommentsTitle>
      <ReactDisqusComments
        shortname="rai_soares_dev"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </CommentsWrapper>
  )
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Comments