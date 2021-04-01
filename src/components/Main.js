import PropTypes from 'prop-types'
import React from 'react'
import SejarahModal from './SejarahModal'
import PrestasiModal from './PrestasiModal'
import StrukturOrganisasiModal from './StrukturOrganisasiModal'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <SejarahModal
          article={this.props.article}
          onCloseArticle={this.props.onCloseArticle}
          articleTimeout={this.props.articleTimeout}
        />

        <PrestasiModal
          article={this.props.article}
          onCloseArticle={this.props.onCloseArticle}
          articleTimeout={this.props.articleTimeout}
        />

        <StrukturOrganisasiModal
          article={this.props.article}
          onCloseArticle={this.props.onCloseArticle}
          articleTimeout={this.props.articleTimeout}
        />

        <article
          id="hubungi kami"
          className={`${
            this.props.article === 'hubungi kami' ? 'active' : ''
          } ${this.props.articleTimeout ? 'timeout' : ''}`}
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
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
