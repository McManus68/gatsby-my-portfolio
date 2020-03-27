import React, { Component } from "react";

import footerStyles from "./footer.module.scss";

export default class footer extends Component {
  render() {
    return (
      <div className={footerStyles.footer} id="footer">
        <div className="container">
          <span>{this.props.siteName}</span>
        </div>
      </div>
    );
  }
}
