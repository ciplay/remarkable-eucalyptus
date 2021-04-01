import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <h1>Tidak Ditemukan</h1>
    <p>
      Yah, Halaman Yang Anda Cari Tidak Ada
      <span className="icon fa-smile-o" style={{ paddingLeft: '10px' }}></span>
    </p>
    <Link to="/">Kembali Ke Halaman Depan</Link>
  </Layout>
)

export default NotFoundPage
