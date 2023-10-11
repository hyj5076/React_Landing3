# 리액트 반응형 랜딩페이지
입주전시회 사전예약을 위한 반응형 랜딩페이지 입니다.

## 프로젝트 개요
* 목적 : 입주전시회 사전예약 랜딩페이지 제작
* 기간 : 2023.
* 기여도 : UIUX, Front-end 100% 개인작업

## 기술 스택
### 언어
* HTML
* CSS
* JavaScript
  
### 라이브러리 & 프레임워크
* React
* React Router
* Bootstrap

### 도구 & 배포
* GitHub (버전관리)
* Netlify (배포)
* Visual Studio Code (코드에디터)

## 페이지별 주요 기능
### 메인 랜딩페이지

#### Interactive Functions
* __Navigation__
  * fade-toggle, slide-toggle
  * 스크롤 위치에 따라 header 디자인 변경
* __Menu__
  * 해당 섹션으로 부드럽게 이동
* __section 참가혜택, 참여품목__
  * 콘텐츠 더보기 버튼
* __section 참여업체__
  * Infinite slider 콘텐츠 자동 흐르기
* __section 사전예약__
  * keyframe rotate 360도 회전

#### Technical Features
* __Main__
  * Viewport 높이 자동 조정
  * Mobile 핸드 스냅
* __전시회 일정/장소__
  * flatPicker 달력 띄우기, 날짜 표시
  * 주소 기반으로 구글맵 링크 연결
  * 주소 복사
* __section 사전예약__
  * 남은 기간/시간 카운트다운
  * 기한 지났을 경우 안내 문구 띄움
* __section 고객센터__
  * 전화 연결

### 서브 예약페이지
#### Technical Features
* __Form__
  * Input 연락처 자동 하이픈 넣기
  * Input 숫자만 입력, 입력칸 수 제한
  * Input 입력 후 자동 넘김
  * 모든 입력칸 초기화 버튼
* 유효성 검사
  * checkbox 미체크시 경고창 및 안내문구 펼침
  * 빈칸일 시 경고창 및 해당 칸 포커싱
