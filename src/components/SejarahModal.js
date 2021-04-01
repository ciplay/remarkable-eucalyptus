import React from 'react'
import PropTypes from 'prop-types'
import SvgAnimated from './Svg1'

const SejarahModal = props => {
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
      id="sejarah"
      className={`${props.article === 'sejarah' ? 'active' : ''} ${
        props.articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">Sejarah</h2>
      <span className="image main">
        <SvgAnimated />
      </span>
      <p>Sekolah Dasar Negeri Mekarjaya 13 berdiri pada tahun ...</p>
      <p>
        Beralamatkan di Jl. Merapi, Abadijaya, Kec. Sukmajaya, Kota Depok, Jawa
        Barat 16417
      </p>
      {close}
    </article>
  )
}

SejarahModal.propTypes = {
  open: PropTypes.bool,
}

export default SejarahModal
