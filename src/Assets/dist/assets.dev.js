"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.songsData = exports.albumsData = exports.assets = void 0;

var _bell = _interopRequireDefault(require("./bell.png"));

var _home = _interopRequireDefault(require("./home.png"));

var _like = _interopRequireDefault(require("./like.png"));

var _loop = _interopRequireDefault(require("./loop.png"));

var _mic = _interopRequireDefault(require("./mic.png"));

var _next = _interopRequireDefault(require("./next.png"));

var _play = _interopRequireDefault(require("./play.png"));

var _pause = _interopRequireDefault(require("./pause.png"));

var _plays = _interopRequireDefault(require("./plays.png"));

var _prev = _interopRequireDefault(require("./prev.png"));

var _search = _interopRequireDefault(require("./search.png"));

var _shuffle = _interopRequireDefault(require("./shuffle.png"));

var _speaker = _interopRequireDefault(require("./speaker.png"));

var _stack = _interopRequireDefault(require("./stack.png"));

var _zoom = _interopRequireDefault(require("./zoom.png"));

var _plus = _interopRequireDefault(require("./plus.png"));

var _arrow = _interopRequireDefault(require("./arrow.png"));

var _miniPlayer = _interopRequireDefault(require("./mini-player.png"));

var _queue = _interopRequireDefault(require("./queue.png"));

var _volume = _interopRequireDefault(require("./volume.png"));

var _right_arrow = _interopRequireDefault(require("./right_arrow.png"));

var _left_arrow = _interopRequireDefault(require("./left_arrow.png"));

var _spotify_logo = _interopRequireDefault(require("./spotify_logo.png"));

var _clock_icon = _interopRequireDefault(require("./clock_icon.png"));

var _img = _interopRequireDefault(require("./img1.jpg"));

var _img2 = _interopRequireDefault(require("./img2.jpg"));

var _img3 = _interopRequireDefault(require("./img3.jpg"));

var _img4 = _interopRequireDefault(require("./img4.jpg"));

var _img5 = _interopRequireDefault(require("./img5.jpg"));

var _img6 = _interopRequireDefault(require("./img6.jpg"));

var _img7 = _interopRequireDefault(require("./img7.jpg"));

var _img8 = _interopRequireDefault(require("./img8.jpg"));

var _img9 = _interopRequireDefault(require("./img9.jpg"));

var _img10 = _interopRequireDefault(require("./img10.jpg"));

var _img11 = _interopRequireDefault(require("./img11.jpg"));

var _img12 = _interopRequireDefault(require("./img12.jpg"));

var _img13 = _interopRequireDefault(require("./img13.jpg"));

var _img14 = _interopRequireDefault(require("./img14.jpg"));

var _img15 = _interopRequireDefault(require("./img15.jpg"));

var _img16 = _interopRequireDefault(require("./img16.jpg"));

var _song = _interopRequireDefault(require("./song1.mp3"));

var _song2 = _interopRequireDefault(require("./song2.mp3"));

var _song3 = _interopRequireDefault(require("./song3.mp3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var assets = {
  bell_icon: _bell["default"],
  home_icon: _home["default"],
  like_icon: _like["default"],
  loop_icon: _loop["default"],
  mic_icon: _mic["default"],
  next_icon: _next["default"],
  play_icon: _play["default"],
  plays_icon: _plays["default"],
  prev_icon: _prev["default"],
  search_icon: _search["default"],
  shuffle_icon: _shuffle["default"],
  speaker_icon: _speaker["default"],
  stack_icon: _stack["default"],
  zoom_icon: _zoom["default"],
  plus_icon: _plus["default"],
  arrow_icon: _arrow["default"],
  mini_player_icon: _miniPlayer["default"],
  volume_icon: _volume["default"],
  queue_icon: _queue["default"],
  pause_icon: _pause["default"],
  arrow_left: _left_arrow["default"],
  arrow_right: _right_arrow["default"],
  spotify_logo: _spotify_logo["default"],
  clock_icon: _clock_icon["default"]
};
exports.assets = assets;
var albumsData = [{
  id: 0,
  name: "Top 50 Global",
  image: _img8["default"],
  desc: "Your weekly update of the most played tracks",
  bgColor: "#2a4365"
}, {
  id: 1,
  name: "Top 50 India",
  image: _img9["default"],
  desc: "Your weekly update of the most played tracks",
  bgColor: "#22543d"
}, {
  id: 2,
  name: "Trending India",
  image: _img10["default"],
  desc: "Your weekly update of the most played tracks",
  bgColor: "#742a2a"
}, {
  id: 3,
  name: "Trending Global",
  image: _img16["default"],
  desc: "Your weekly update of the most played tracks",
  bgColor: "#44337a"
}, {
  id: 4,
  name: "Mega Hits",
  image: _img11["default"],
  desc: "Your weekly update of the most played tracks",
  bgColor: "#234e52"
}, {
  id: 5,
  name: "Happy Favorites",
  image: _img15["default"],
  desc: "Your weekly update of the most played tracks",
  bgColor: "#744210"
}];
exports.albumsData = albumsData;
var songsData = [{
  id: 0,
  name: "Song One",
  image: _img["default"],
  file: _song["default"],
  desc: "Put a smile on your face with these happy tunes",
  duration: "3:00"
}, {
  id: 1,
  name: "Song Two",
  image: _img2["default"],
  file: _song2["default"],
  desc: "Put a smile on your face with these happy tunes",
  duration: "2:20"
}, {
  id: 2,
  name: "Song Three",
  image: _img3["default"],
  file: _song3["default"],
  desc: "Put a smile on your face with these happy tunes",
  duration: "2:32"
}, {
  id: 3,
  name: "Song Four",
  image: _img4["default"],
  file: _song["default"],
  desc: "Put a smile on your face with these happy tunes",
  duration: "2:50"
}, {
  id: 4,
  name: "Song Five",
  image: _img5["default"],
  file: _song2["default"],
  desc: "Put a smile on your face with these happy tunes",
  duration: "3:10"
}, {
  id: 5,
  name: "Song Six",
  image: _img14["default"],
  file: _song3["default"],
  desc: "Put a smile on your face with these happy tunes",
  duration: "2:45"
}, {
  id: 6,
  name: "Song Seven",
  image: _img7["default"],
  file: _song["default"],
  desc: "Put a smile on your face with these happy tunes",
  duration: "2:18"
}, {
  id: 7,
  name: "Song Eight",
  image: _img12["default"],
  file: _song2["default"],
  desc: "Put a smile on your face with these happy tunes",
  duration: "2:35"
}];
exports.songsData = songsData;