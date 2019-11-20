import React, { Component } from 'react';

class Repository extends Component {
  renderLanguage() {
    let lang;
    if (this.props.language === 'Python') {
      lang = <span className="lang-python">{this.props.language}</span>;
    } else if (this.props.language === 'PHP') {
      lang = <span className="lang-php">{this.props.language}</span>;
    } else if (this.props.language === 'HTML') {
      lang = <span className="lang-html">{this.props.language}</span>;
    } else if (this.props.language === 'Ruby') {
      lang = <span className="lang-ruby">{this.props.language}</span>;
    } else {
      lang = <span className="lang-other">{this.props.language}</span>;
    }
    return lang;
  }

  // getDateUpdated = (date) => {
  //   return new Date(date).toUTCString();
  // };

  render() {
    return (
      <div className="repository">
        <div className="repository-head">
          <h4>
            <a href={this.props.url} target="_blank" rel="noopener noreferrer">
              {this.props.name}
            </a>
          </h4>
          <span>Updated at {this.props.updated}</span>
        </div>
        <div className="repository-info">
          <div className="repository-lang">
            Language: {this.props.language ? this.renderLanguage() : 'not specified'}
          </div>
          <div>Stars: {this.props.stars}</div>
        </div>
      </div>
    );
  }
}

export default Repository;
