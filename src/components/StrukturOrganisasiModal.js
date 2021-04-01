import React from 'react'
import PropTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import pic03 from '../images/organization.svg'

import styled from 'styled-components'

const StyledLogo = styled.img``

const StrukturOrganisasiModal = props => {
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
      id="struktur organisasi"
      className={`${props.article === 'struktur organisasi' ? 'active' : ''} ${
        props.articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">Struktur Organisasi</h2>
      <span className="image main">
        <StyledLogo src={pic03} alt="organization" />
      </span>
      <p>
        Untuk melihat lebih detil tentang Struktur Organisasi SDN Mekarjaya 13
        <br />
        <AniLink paintDrip to="/struktur_organisasi" color="white">
          Lihat Selengkapnya
        </AniLink>
      </p>
      {close}
    </article>
  )
}

StrukturOrganisasiModal.propTypes = {
  open: PropTypes.bool,
}

export default StrukturOrganisasiModal
