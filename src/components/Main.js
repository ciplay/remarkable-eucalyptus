import PropTypes from 'prop-types'
import React from 'react'
import SejarahModal from './SejarahModal'
import PrestasiModal from './PrestasiModal'
import StrukturOrganisasiModal from './StrukturOrganisasiModal'
import HubungiKamiModal from './HubungiKamiModal'

class Main extends React.Component {
  render() {
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

        <HubungiKamiModal
          article={this.props.article}
          onCloseArticle={this.props.onCloseArticle}
          articleTimeout={this.props.articleTimeout}
        />
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
