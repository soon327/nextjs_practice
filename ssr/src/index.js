import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// render 대신 hydrate함수 사용. hydrate함수는 서버사이드 렌더링의 결과로 만들어진 돔 요소에 필요한 이벤트처리함수를 붙여준다.
ReactDOM.hydrate(<App initialPage="home" />, document.getElementById('root'));
