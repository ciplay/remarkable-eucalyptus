import React from 'react'
import PropTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import pic02 from '../images/achievement.svg'

import styled from 'styled-components'

const StyledLogo = styled.img``

const PrestasiModal = props => {
  const close = (
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
    ></div>
  )
  return (
    <article
      id="prestasi"
      className={`${props.article === 'prestasi' ? 'active' : ''} ${
        props.articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">Prestasi</h2>
      <span className="image main">
        <StyledLogo src={pic02} alt="achievement" />
      </span>
      <p>
        Sekolah Dasar Negeri Mekarjaya 13 Memiliki Berbagai Prestasi
        <br />
        <AniLink paintDrip to="/prestasi" color="white">
          Lihat Selengkapnya
        </AniLink>
      </p>
      {close}
    </article>
  )
}

PrestasiModal.propTypes = {
  open: PropTypes.bool,
}

export default PrestasiModal
