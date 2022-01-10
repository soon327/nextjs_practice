# 😎 nextjs_preactice

## Directory

- ssr: 프레임워크 없이 직접 서버사이드 렌더링 환경 구축
- nextjs: 넥스트를 사용하여 서버사이드 렌더링 환경 구축
- exercise-note: 넥스트를 사용한 운동노트 페이지 

---

</br>

## 서버사이드 렌더링이 필요한 이유

1. 검색엔진 최적화 (search engine optimization, SEO)

- 구글을 제외한 검색 엔진에서는 자바스크립트를 실행하지 않기 때문에 SEO를 위해서는 서버사이드 렌더링이 필요하다. 게다가 구글의 검색엔진도 서버사이드 렌더링을 하는 사이트에 더 높은 점수를 부연한다.

2. 빠른 첫 페이지 렌더링이 필요할 때

- 클라이언트 렌더링의 경우 자바스크립트를 실행해야만 화면이 보이기때문에, 저사양기기를 사용하는 사람이 많거나 네트워크 인프라가 약한 나라에서는 서버사이드 렌더링을 고려해봐야 한다.
