## 구현한 화면 목록
회원가입
1-1-1. 로그인
1-2-1. 회원가입_아이디

제품목록
3-1-1. 제품목록

등록하기
4-1-1. 등록하기

## 구현한 기능
상품등록기능 / 등록한 상품 리스트

## 의도
필수 기능 구현을 하지 못해 남은 시간동안 화면 구현을 집중해서 만들고자 했습니다.
한 페이지에 모든 페이지를 구현하는 것이 어려울 것 같아 세 갈래로 나누어 페이지를 따로 구성했습니다.
제품목록 리스트 페이지인 경우 제품 아이템의 데이터 목록을 배열로 만든 후 map 메서드를 사용해 레이아웃을 짰습니다.
styled components 라이브러리에서 ThemeProvider 를 사용해 스타일가이드의 디자인 양식을 만들어 활용했습니다.

상품을 등록한 내용은 redux 를 통해 상태 관리를 하기로 했습니다.
뷰에서 입력된 이름, 가격, 상세내용이 합쳐져 하나의 데이터가 만들어지기 위해 reducer 에서 concat 메서드를 써서 배열로 업데이트 하게 했습니다.
새로고침 해도 데이터가 남게 하기 위해 redux-persist 라이브러리를 사용해 로컬스토리지에 넣어서 상태를 관리하도록 했습니다.
이미지를 등록하는 부분은 능력 부족으로 구현하지 못했습니다. 그 외 회원가입, 로그인 기능 또한 같은 이유에서 구현하지 못했습니다. 





