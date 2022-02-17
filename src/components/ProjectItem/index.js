import React from "react"

import * as S from "./styles"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
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
    <S.PostItemLink to={slug} cover direction="right" duration={0.6} bg={getThemeColor()}>
        <S.PostItemWrapper>
            <S.PostItemTag background={background}>{category}</S.PostItemTag>
            <S.PostItemInfo>
                <S.PostItemDate>
                    {date} • {timeToRead} min de leitura
                </S.PostItemDate>
                <S.PostItemTitle>{title}</S.PostItemTitle>
                <S.PostItemDescription>{description}</S.PostItemDescription>
            </S.PostItemInfo>
        </S.PostItemWrapper>
    </S.PostItemLink>
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