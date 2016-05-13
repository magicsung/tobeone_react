var React = require('react');

var SideBar = React.createClass({
  render: function() {
    return (
      <div id="sidebar" className="col-sm-4 col-md-3 xs-pd-0 animated">
        <div className="bg-white pd-40 radius-5 xs-radius-0 sidebar-wrap">

          <div className="avatar">
            <div className="relative">
              <a href="#member" className="">
                <img src="http://dummyimage.com/100x100/cccccc/fff&text=avatar" alt="" className="thumbnail-small" />
              </a>
              <span className="fz-1p5em ml-15">name</span>
            </div>
          </div>

          <div className="personal-function mt-20">
            <ul className="link-red ml-30 xs-list">
              <li className="display-xs-block bg-light">
                <a href="#" className="mt-5">
                  個人專區
                </a>
              </li>
              <li className="display-xs-block notice">
                <a href="#" className="mt-5">
                  <span>通知</span>
                  <span className="badge bg-primary-dark pull-right">9</span>
                </a>
              </li>
              <li>
                <a href="#" className="mt-5">
                  <i className="material-icons fix-icon hidden-xs">&#xE307;</i>
                  <span>我的訂閱</span>
                </a>
              </li>
              <li>
                <a href="#" className="mt-5">
                  <i className="material-icons fix-icon hidden-xs">&#xE63A;</i>
                  <span>我的影音</span>
                </a>
              </li>
              <li>
                <a href="#" className="mt-5">
                  <i className="material-icons fix-icon hidden-xs">&#xE639;</i>
                  <span>我的直播</span>
                </a>
              </li>
              <li>
                <a href="#" className="mt-5">
                  <i className="material-icons fix-icon hidden-xs">&#xE0CB;</i>
                  <span>悄悄話</span>
                </a>
              </li>
              <li className="display-xs-block">
                <a href="#" className="mt-5">
                  <span>我的最新關注</span>
                </a>
              </li>
              <li className="display-xs-block">
                <a href="#" className="mt-5">
                  <span>我的人氣關注</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="category mt-30">
            <CategoryButton />
          </div>

        </div>

      </div>
    );
  }
});

var CategoryButton = React.createClass({
  render: function() {
    var categoryButtons = [
      {id: 2, name: "線上直播", link: "#c1"},
      {id: 3, name: "最新", link: "#c2"},
      {id: 4, name: "熱門", link: "#c3"},
      {id: 5, name: "話題", link: "#c4"},
      {id: 6, name: "愛美", link: "#c5"},
      {id: 7, name: "3C", link: "#c6"},
      {id: 8, name: "運動", link: "#c7"},
      {id: 9, name: "愛車", link: "#c8"}
    ];
    return (
      <ul className="text-center xs-mb-40 xs-list">
        <li className="display-xs-block bg-light">
          <a href="#" className="mt-5">
            分類
          </a>
        </li>
        <li className="mt-15 popover popover-sticky hidden-xs">
          <a href="#" className="form-control hover-red radius-20 lh-1p5em fz-1p1em active">
            我的關注
          </a>
          <ul>
            <li><a href="#">最新關注</a></li>
            <li><a href="#">人氣關注</a></li>
          </ul>
        </li>

        {categoryButtons.map(function(category){
          return <CategoryButtomGruop key={category.id} data={category} />;
        })}

      </ul>
    );
  }
});
var CategoryButtomGruop = React.createClass({
  render: function() {
    return (
      <li className="mt-15">
        <a href={this.props.data.link} className="form-control hover-red radius-20 lh-1p5em fz-1p1em">
          {this.props.data.name}
        </a>
      </li>
    );
  }
});

module.exports = SideBar;
