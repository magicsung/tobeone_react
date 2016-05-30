import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="w100 bg-black color-white pd-5">
        <div className="mt-5 mb-5">
          <div className="text-center">
            <ul className="link-white inline-block clearfix">
              <li className="pd-lr-5 mt-5 pull-left">
                <a href="/about">關於達人網</a>
              </li>
              <li className="pd-lr-5 mt-5 pull-left">
                <a href="/policies">服務條款</a>
              </li>
              <li className="pd-lr-5 mt-5 pull-left">
                <a href="/privacy">隱私政策</a>
              </li>
              <li className="pd-lr-5 mt-5 pull-left">
                <a href="/question">常見問題</a>
              </li>
            </ul>
            <p className="color-white mt-5">&copy; 2016. All rights reserved. ToBeOne Co.,Ltd.</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
