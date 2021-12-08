const config = require('./.babelrc.common.js');
// @babel/preset-env 은 주로 오래된 브라우저를 지원하는 용도이므로 클라측 바벨설정에만 포함시킨다.
config.presets.push('@babel/preset-env');
module.exports = config;
