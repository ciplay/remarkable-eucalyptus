import React from 'react'
import PropTypes from 'prop-types'

const HubungiKamiModal = props => {
  let close = (
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
    ></div>
  )
  return (
    <article
      id="hubungi kami"
      className={`${props.article === 'hubungi kami' ? 'active' : ''} ${
        props.articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">Hubungi Kami</h2>
      <form method="post" action="#">
        <div className="field half first">
          <label htmlFor="name">Nama</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="field half">
          <label htmlFor="email">Alamat Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="field">
          <label htmlFor="message">Pesan</label>
          <textarea name="message" id="message" rows="4"></textarea>
        </div>
        <ul className="actions">
          <li>
            <input type="submit" value="Kirim" className="special" />
          </li>
          <li>
            <input type="reset" value="Hapus" />
          </li>
        </ul>
      </form>
      <ul className="icons">
        <li>
          <a href="/#" className="icon fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="/#" className="icon fa-facebook">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="/#" className="icon fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
      </ul>
      {close}
    </article>
  )
}

HubungiKamiModal.propTypes = {
  open: PropTypes.bool,
}

export default HubungiKamiModal
