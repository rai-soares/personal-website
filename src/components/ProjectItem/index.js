import React from "react"

import { PostItemLink, PostItemWrapper, PostItemTag, PostItemInfo, PostItemDate, PostItemDescription, PostItemTitle } from "./styles"
import PropTypes from "prop-types"
import getThemeColor from "../../utils/getThemeColor"

const ProjectItem = ({
    slug,
    background,
    category,
    date,
    timeToRead,
    title,
    description,
}) => (
    <PostItemLink to={slug} cover direction="right" duration={0.6} bg={getThemeColor()}>
        <PostItemWrapper>
            <PostItemTag background={background}>{category}</PostItemTag>
            <PostItemInfo>
                <PostItemDate>
                    {date} • {timeToRead} min de leitura
                </PostItemDate>
                <PostItemTitle>{title}</PostItemTitle>
                <PostItemDescription>{description}</PostItemDescription>
            </PostItemInfo>
        </PostItemWrapper>
    </PostItemLink>
)

ProjectItem.propTypes = {
    slug: PropTypes.string.isRequired,
    background: PropTypes.string,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    timeToRead: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default ProjectItem