var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
      <footer className="w100 bg-black color-white pd-5">
        <div className="mt-5 mb-5">
          <div className="text-center">
            <ul className="link-white inline-block clearfix">
              <li className="pd-lr-5 mt-5 pull-left">
                <a href="#">關於達人網</a>
              </li>
              <li className="pd-lr-5 mt-5 pull-left">
                <a href="#">服務條款</a>
              </li>
              <li className="pd-lr-5 mt-5 pull-left">
                <a href="#">使用規範</a>
              </li>
              <li className="pd-lr-5 mt-5 pull-left">
                <a href="#">常見問題</a>
              </li>
              <li className="pd-lr-5 mt-5 pull-left">
                <a href="#">隱私權政策</a>
              </li>　 　
            </ul>
            <p className="color-white mt-5">&copy; 2016. All rights reserved. TOBEONE</p>
          </div>
        </div>
      </footer>

    );
  }
});

module.exports = Footer;
