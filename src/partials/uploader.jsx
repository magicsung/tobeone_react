import React, {Component} from 'react';

class Uploader extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      videoName: '',
      videoDescription: '',
      category: '',
      privacy: '',
      switchState: {
        facebook: false,
        google: false,
        weibo: false
      },
      warningMessage: {
        videoName: null,
        videoDescription: null,
        category: null,
        privacy: null
      },
      videoThumbnail: [
        { selected: false, url: 'http://dummyimage.com/420x240/cccccc/fff&text=thumbnail' },
        { selected: false, url: 'http://dummyimage.com/420x240/cccccc/fff&text=thumbnail' },
        { selected: false, url: 'http://dummyimage.com/420x240/cccccc/fff&text=thumbnail' },
      ]
    };
  };
  handleUploadSubmit(event) {
    event.preventDefault();
    let videoName, videoDescription, category, privacy = null;
    this.state.videoName        == '' ? videoName        = '請輸入影片名稱！' : videoName = null;
    this.state.videoDescription == '' ? videoDescription = '請輸入影片描述！' : videoDescription = null;
    this.state.category         == '' ? category         = '請選擇影片分類！' : category = null;
    this.state.privacy          == '' ? privacy          = '請選擇隱私設定！' : privacy = null;
    let state = Object.assign(this.state, {
      warningMessage: Object.assign(this.state.warningMessage, {
        videoName: videoName,
        videoDescription: videoDescription,
        category: category,
        privacy: privacy
      }),
    });
    this.setState(state);
    if (!videoName && !videoDescription && !category && !privacy) {
      this.props.handleUploadSubmit({
        title: this.state.videoName,
        description: this.state.videoDescription
      });
    }
  }
  handleVideoNameChange(event) {
    this.setState({ videoName: event.target.value });
  }
  handleVideoDescriptionChange(event) {
    this.setState({ videoDescription: event.target.value });
  }
  handleCategoryChange(event) {
    this.setState({ category: event.target.value });
  }
  handlePrivacyChange(event) {
    this.setState({ privacy: event.target.value });
  }
  handleShareSwitch(event) {
    let socialMedia = (event.target.id).replace('share-', '');
    let switchState = this.state.switchState;
    let facebook, google, weibo = null;
    socialMedia == 'facebook' ? facebook = !switchState.facebook : facebook = switchState.facebook;
    socialMedia == 'google' ? google = !switchState.google : google = switchState.google;
    socialMedia == 'weibo' ? weibo = !switchState.weibo : weibo = switchState.weibo;
    let state = Object.assign(this.state, {
      switchState: Object.assign(this.state.switchState, {
        facebook: facebook,
        google: google,
        weibo: weibo
      }),
    });
    this.setState(state);
  }
  handleThumbnailSelect(key) {
    let videoThumbnails = this.state.videoThumbnail.map((tuhmbnail, index) => {
      return {
        selected: (index == key ? true : false),
        url: tuhmbnail.url
      }
    })
    this.setState({videoThumbnail: videoThumbnails});
  }
  render() {
    return (
      <div className="col-lg-10 col-sm-9 col-md-9 xs-pd-0">
        <div className="uploads bg-white pd-40 xs-pd-15 radius-5 xs-radius-0">
          <VideoUploader />
          <VideoInfo videoName={this.state.videoName}
                     videoDescription={this.state.videoDescription}
                     Category={this.state.category}
                     Privacy={this.state.privacy}
                     handleVideoNameChange={this.handleVideoNameChange.bind(this)}
                     handleVideoDescriptionChange={this.handleVideoDescriptionChange.bind(this)}
                     handleCategoryChange={this.handleCategoryChange.bind(this)}
                     handlePrivacyChange={this.handlePrivacyChange.bind(this)}
                     switchState={this.state.switchState}
                     handleShareSwitch={this.handleShareSwitch.bind(this)}
                     warningMessage={this.state.warningMessage} />
          <VideoThumbnails videoThumbnail={this.state.videoThumbnail}
                           handleThumbnailSelect={this.handleThumbnailSelect.bind(this)} />
          <div className="confirm mt-50 text-center">
            <a href="#"
               className="btn btn-red width-250"
               onClick={this.handleUploadSubmit.bind(this)} >
               完成
            </a>
          </div>
        </div>
      </div>
    );
  }
}

class VideoUploader extends Component {
  render() {
    return (
      <div className="upload-video mt-15">
        <h4>
          <i className="material-icons relative top-5px mr-5">&#xE064;</i>
          上傳影片
        </h4>
        <div className="ml-30 xs-margin-0">
          <div>
            <span className="inline-block">上傳影片</span>
            <label htmlFor="" className="bg-light radius-5 pd-5 ml-15 height-30">格式wmv,avi,mov,flv,mpg</label>
            <input type="file"
                   name="name"
                   className="hidden"
                   id="upload-file" />
            <span className="display-xs-block mt-10"></span>
            <label htmlFor="upload-file" className="btn btn-sm btn-gray radius-5 ml-10 xs-ml-75">選擇檔案...</label>
            <button type="button" name="button" className="btn btn-sm btn-blue-light radius-5 ml-10">上傳！</button>
          </div>
          <div className="progress xs-mt-15">
            上傳中...
            <span className="progress-bar">
              <span className="progress-bar-inner"></span>
            </span>
            <span className="progress-ok down ml-5">OK!</span>
          </div>
          <div>
            <p>
              將影片提交到 達人網 即表示您同意遵守達人網的
              <a href="#" id="upload-policy">《服務條款》</a>。
            </p>
            <ul className="dot ml-25">
              <li>不允許商業、政治或是任何形式的廣告內容。達人網只允許用於個人和非營利。</li>
              <li>不要上傳電視節目、你在其他網站找到的影片或是遊戲影片。</li>
              <li>當然也不可以上傳成人或是色情內容的影片。</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

class VideoInfo extends Component {
  render() {
    let categoryList = [
      { name: '分類1', value: 'category1' },
      { name: '分類2', value: 'category2' },
      { name: '分類3', value: 'category3' },
      { name: '分類4', value: 'category4' } ];
    let categoryOption = categoryList.map((category, index) => {
      return <option key={index} value={category.value} >{category.name}</option>
    }, this)
    let privacy = [
      { name: '公開', value: 'public' },
      { name: '只有關注我的人', value: 'onlyFollower' },
      { name: '不公開', value: 'unpublic' } ];
    let privacyOption = privacy.map((privacy, index) => {
      return <option key={index} value={privacy.value} >{privacy.name}</option>
    }, this)
    return (
      <div className="video-info mt-15">
        <h4>
          <i className="material-icons relative top-5px mr-5">&#xE02F;</i>
          填寫影片資訊
        </h4>
        <div className="ml-30 xs-margin-0">
          <div className="form-group">
            <label htmlFor="video-name">影片名稱</label>
            <span className="notice color-primary ml-15 fw-700">
              {this.props.warningMessage.videoName}
            </span>
            <input id="video-name"
                   type="text"
                   name="video-name"
                   placeholder="請輸入影片名稱..."
                   className="form-control border-none bg-light radius-5"
                   value={this.props.videoName}
                   onChange={this.props.handleVideoNameChange.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="video-description">影片描述</label>
            <span className="notice color-primary ml-15 fw-700">
              {this.props.warningMessage.videoDescription}
            </span>
            <textarea name="video-description"
                      rows="8" cols="40"
                      placeholder="請輸入影片描述..."
                      id="video-description"
                      className="form-control border-none bg-light radius-5"
                      value={this.props.videoDescription}
                      onChange={this.props.handleVideoDescriptionChange.bind(this)} >
            </textarea>
          </div>
          <div className="form-group">
            <label htmlFor="video-category">分類</label>
            <span className="notice color-primary ml-15 fw-700">
              {this.props.warningMessage.category}
            </span>
            <div className="relative">
              <select className="form-control border-none bg-light radius-5"
                      name="video-category"
                      id="video-category"
                      value={this.props.category}
                      onChange={this.props.handleCategoryChange.bind(this)} >
                <option value="0">請選擇分類</option>
                {categoryOption}
              </select>
              <label htmlFor="video-category" className="material-icons inner-btn" style={{right: "10px", top: "5px"}}>&#xE313;</label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="video-privacy">隱私設定</label>
            <span className="notice color-primary ml-15 fw-700">
              {this.props.warningMessage.privacy}
            </span>
            <div className="relative">
              <select className="form-control border-none bg-light radius-5"
                      name="video-privacy"
                      id="video-privacy"
                      value={this.props.privacy}
                      onChange={this.props.handlePrivacyChange.bind(this)} >
                <option value="0">請選擇隱私設定</option>
                {privacyOption}
              </select>
              <label htmlFor="video-privacy" className="material-icons inner-btn" style={{right: "10px", top: "5px"}}>&#xE313;</label>
            </div>
          </div>
          <ShareSwitchs switchState={this.props.switchState}
                        handleShareSwitch={this.props.handleShareSwitch.bind(this)}/>
        </div>
      </div>
    );
  }
}

class VideoThumbnails extends Component {
  render() {
    let thumbnails = this.props.videoThumbnail.map((thumbnail, index) => {
      return <VideoThumbnailItem key={index}
                                 index={index}
                                 videoThumbnail={thumbnail}
                                 handleThumbnailSelect={this.props.handleThumbnailSelect.bind(this)} />
    }, this);
    return (
      <div className="video-thumbnail mt-15">
        <h4>
          <i className="material-icons relative top-5px mr-5">&#xE251;</i>
          選擇縮圖
        </h4>
        <div className="ml-30 xs-margin-0 clearfix">
          {thumbnails}
        </div>
      </div>
    );
  }
}

class VideoThumbnailItem extends Component {
  handleThumbnailSelect(event) {
    event.preventDefault();
    this.props.handleThumbnailSelect(this.props.index);
  }
  render() {
    let videoThumbnailClass;
    this.props.videoThumbnail.selected ? videoThumbnailClass = "w100 active" : videoThumbnailClass = "w100"
    return (
      <div className="inline-block pd-lr-5 item-3 xs-mt-5 xs-w50">
        <a href="#"
           onClick={this.handleThumbnailSelect.bind(this)} >
          <img src={this.props.videoThumbnail.url} alt="" className={videoThumbnailClass}/>
        </a>
      </div>
    );
  }
}

class ShareSwitchs extends Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor="">同步分享至其他社群網站</label>
        <div className="mt-10">

          <div className="inline-block mr-15 xs-margin-0 xs-item-3">
            <div className="onoffswitch facebook">
              <input type="checkbox"
                     className="onoffswitch-checkbox"
                     id="share-facebook"
                     checked={this.props.switchState.facebook}
                     onChange={this.props.handleShareSwitch.bind(this)} />
                   <label className="onoffswitch-label" htmlFor="share-facebook">
                <span className="onoffswitch-inner"></span>
                <span className="onoffswitch-switch"></span>
              </label>
            </div>
          </div>

          <div className="inline-block mr-15 xs-margin-0 xs-item-3">
            <div className="onoffswitch google">
              <input type="checkbox"
                     className="onoffswitch-checkbox"
                     id="share-google"
                     checked={this.props.switchState.google}
                     onChange={this.props.handleShareSwitch.bind(this)} />
              <label className="onoffswitch-label" htmlFor="share-google">
                <span className="onoffswitch-inner"></span>
                <span className="onoffswitch-switch"></span>
              </label>
            </div>
          </div>

          <div className="inline-block mr-15 xs-margin-0 xs-item-3">
            <div className="onoffswitch weibo">
              <input type="checkbox"
                     className="onoffswitch-checkbox"
                     id="share-weibo"
                     checked={this.props.switchState.weibo}
                     onChange={this.props.handleShareSwitch.bind(this)} />
              <label className="onoffswitch-label" htmlFor="share-weibo">
                <span className="onoffswitch-inner"></span>
                <span className="onoffswitch-switch"></span>
              </label>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Uploader;
