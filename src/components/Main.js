import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

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
        <article
          id="sejarah"
          className={`${this.props.article === 'sejarah' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Sejarah</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>Sekolah Dasar Negeri Mekarjaya 13 berdiri pada tahun ...</p>
          <p>Ini Contoh Untuk Paragraf ke dua</p>
          {close}
        </article>

        <article
          id="prestasi"
          className={`${this.props.article === 'prestasi' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Prestasi</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>Sekolah Dasar Negeri Mekarjaya 13 Mempunyai banyak prestasi</p>
          <p>Ini Contoh Untuk Paragraf ke dua</p>
          {close}
        </article>

        <article
          id="struktur organisasi"
          className={`${
            this.props.article === 'struktur organisasi' ? 'active' : ''
          } ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Struktur Organisasi</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Untuk Melihat lebih detil tentang Struktur Organisasi SDN Mekarjaya
            13 Silakan Untuk <br />
            <a href="/struktur_organisasi">Lihat Lebih Jelas</a>
          </p>
          {close}
        </article>

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
