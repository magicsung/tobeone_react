import React, {Component} from 'react';

class UploadStep extends Component {
  render() {
    return (
      <div className="col-lg-2 col-sm-3 col-md-3 xs-pd-0 hidden-xs">
        <div className="bg-white pd-20 radius-5 xs-radius-0">
          <div className="text-center fz-1p2em mb-10">第一步</div>
          <div className="step1 bg-primary-dark radius-20 mb-15 pd-15 color-white text-center square-120 center-block">
            <p className="color-white mb-5">上傳影片</p>
            <i className="material-icons relative top-6px fz-3em">&#xE064;</i>
          </div>
          <div className="square-60 center-block mb-15">
            <div className="line-right"></div>
            <div className="red-ball center-block"></div>
          </div>
          <div className="text-center fz-1p2em mb-10">第二步</div>
          <div className="step2 bg-primary-dark radius-20 mb-15 pd-15 color-white text-center square-120 center-block">
            <p className="color-white mb-5">填寫影片資訊</p>
            <i className="material-icons relative top-6px fz-3em">&#xE02F;</i>
          </div>
          <div className="square-60 center-block mb-15">
            <div className="line-right"></div>
            <div className="red-ball center-block"></div>
          </div>
          <div className="text-center fz-1p2em mb-10">第三步</div>
          <div className="step3 bg-gray-lighter radius-20 mb-15 pd-15 color-white text-center square-120 center-block">
            <p className="color-white mb-5">選擇影片縮圖</p>
            <i className="material-icons relative top-6px fz-3em">&#xE251;</i>
          </div>
          <div className="square-60 center-block mb-15">
            <div className="line-right"></div>
            <div className="red-ball center-block"></div>
          </div>
          <div className="finish text-center fz-1p2em">上傳完成！</div>
        </div>
      </div>
    );
  }
}

export default UploadStep;
