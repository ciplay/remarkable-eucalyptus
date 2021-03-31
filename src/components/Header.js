import PropTypes from 'prop-types'
import React from 'react'
import Logo from '../images/logo.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon">
        <img src={Logo} alt="logo" />
      </span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>SDN Mekarjaya 13</h1>
        <p>Sekolah Dasar Negeri Mekarjaya 13 Kecamatan Sukmajaya Kota Depok</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('sejarah')
            }}
          >
            Sejarah
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('prestasi')
            }}
          >
            Prestasi
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('struktur organisasi')
            }}
          >
            Struktur Organisasi
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('hubungi kami')
            }}
          >
            Hubungi Kami
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
