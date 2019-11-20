import React, { Component } from 'react';

class Repository extends Component {
  renderLanguage(language) {
    switch (language) {
      case 'Python':
        return <span className="lang-python">{language}</span>;
      case 'PHP':
        return <span className="lang-php">{language}</span>;
      case 'HTML':
        return <span className="lang-php">{language}</span>;
      case 'Ruby':
        return <span className="lang-ruby">{language}</span>;
      default:
        return <span className="lang-other">{language}</span>;
    }
  }

  renderDate = date => {
    return new Date(date).toUTCString();
  };

  render() {
    return (
      <div className="repository">
        <div className="repository-head">
          <h4>
            <a href={this.props.url} target="_blank" rel="noopener noreferrer">
              {this.props.name}
            </a>
          </h4>
          <span>Updated at {this.renderDate(this.props.updated)}</span>
        </div>
        <div className="repository-info">
          <div className="repository-lang">
            Language:{' '}
            {this.props.language ? this.renderLanguage(this.props.language) : 'not specified'}
          </div>
          <div>Stars: {this.props.stars}</div>
        </div>
      </div>
    );
  }
}

export default Repository;
