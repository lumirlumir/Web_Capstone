# ChatGPT를 활용한 인터뷰 서비스 개발

이 문서는 '전북대학교' '산학실전캡스톤2(2분반)' '김용현 김영수 김영아' 팀의 'ChatGPT를 활용한 인터뷰 서비스 개발' 프로젝트에 관한 문서이다.

## 0. Index

- [0. Index](#0-index)
- [1. Basic Information](#1-basic-information)
  - [1-1. Project Info](#1-1-project-info)
  - [1-2. Team Info](#1-2-team-info)
  - [1-3. Scheduling Info](#1-3-scheduling-info)
- [2. Requirements Specification](#2-requirements-specification)
  - [2-1. 참여 기관의 제안 내용](#2-1-참여-기관의-제안-내용)
  - [2-2. 과제 배경 및 목적](#2-2-과제-배경-및-목적)
  - [2-3. 기대 효과 및 활용 방안](#2-3-기대-효과-및-활용-방안)
- [3. Design](#3-design)
  - [3-1. Web Front-End Development](#3-1-web-front-end-development)
  - [3-2. Chat-GPT Prompt Engineering](#3-2-chatgpt-prompt-engineering)
  - [3-3. Administrative Processing and Data Research](#3-3-administrative-processing-and-data-research)
- [4. Implementation](#4-implementation)

## 1. Basic Information

### 1-1. Project Info

- 과제명: ChatGPT를 활용한 인터뷰 서비스 개발
- 지원 유형: 산학 과제
- 과제 분야: 인공지능, 웹서비스
- 수행 기간: 2024년 3월 25일 ~ 2024년 06월 17일

### 1-2. Team Info

- 팀명: 김용현 김영수 김영아
- 팀장: 김용현
- 팀원: 김용현, 김영수, 김영아
- 역할:
  이름 | 담당 | 수행역할 | 비고
  :---: | :--- | :--- | :---:
  김용현 | Web Front-End Development | React.js 기반의 SPA Front-End Web Page 개발, 각종 마크다운 문서ㆍ한글 문서ㆍ 계획서ㆍ보고서 작성, Repository 관리, 발표 등. | 팀장
  김영수 | Administrative Processing, Research | 행정 처리, 재무 관리, 자료 조사 등.| 팀원
  김영아 | ChatGPT Prompt Engineering | ChatGPT Prompt Engineering, ChatGPT API 개발 등. | 팀원

### 1-3. Scheduling Info

***Github Issues***와 ***Github Projects***를 통한 세부적인 스케쥴 관리 진행.

- ***Github Issues***: <https://github.com/lumirlumir/Web_Capstone/issues>
- ***Github Projects***: <https://github.com/users/lumirlumir/projects/2>

개략적인 일정은 아래와 같다.

추진 내용 | \~3.25 | \~4.15 | \~4.31 | \~5.15 | \~5.31 | \~6.17
--- | :---: | :---: | :---: | :---: | :---: | :---:
Acquisition of development related knowledge. | O | O
ChatGPT Prompt Engineering. | | | O | O
Web Front-End design and implementation. | | | O | O | O
Testing and debugging. | | | | | O
Feedback. | | | | | | O

## 2. Requirements Specification

> 참여 기관의 불참으로 협업이 불가능해져, 산학 연계 프로젝트가 아닌 단순 팀 프로젝트로 변경되었다.

### 2-1. 참여 기관의 제안 내용

개발자 채용 과정에서의 인력을 대체하여 기술 인터뷰를 진행할 수 있는 AI 면접 서비스를 개발한다. 이는 기술 인터뷰 과정에서 AI 면접관을 배치하여 인터뷰를 진행하고, 인터뷰 내용을 기반으로 등급을 채점해주는 서비스를 만드는 것이다. 요구 사항은 아래와 같다.

1. 전문성 검증을 위한 질문 자동 생성. (CS, FE, BE, DB, OOP)
    - ChatGPT API를 활용하여 관련 질문을 생성한다.
    - 질문은 중복되지 않아야 한다.
    - 질문 수는 영역(CS, FE, BE, DB, OOP)별로 설정할 수 있어야 한다.
    - 질문 수(메인 질문/꼬리 질문)를 설정할 수 있어야 한다.
    - 꼬리 질문은 인터뷰이의 답변을 기반으로 연관된 질문이 생성되어야 한다.

2. 인터뷰 진행.
    - 답변 시간을 제한할 수 있어야 한다.
    - 답변은 음성과 텍스트로 제출될 수 있다.

3. 인터뷰 결과.
    - 인터뷰이의 정보, 질문, 질문에 대한 답변, 답변에 대한 등급을 확인할 수 있어야 한다.
    - 답변 내용을 기반으로 미흡, 보통, 우수 등급으로 채점한다.
    - 채용과 관련하여 AI 면접관의 종합의견이 작성되어야 한다.

### 2-2. 과제 배경 및 목적

해외에는 ‘LeetCode-Mock Interview’, ‘Interview Buddy’, ‘Pramp’, ‘Gianlo’ 등의 다양한 모의 인터뷰(Mock Interview) 서비스들이 존재한다. 하지만, 국내에는 자연어 처리 AI(ChatGPT 등)를 활용한 이러한 서비스들이 거의 존재하지 않는 상황이다. 그렇다면, 기업에서 이러한 인터뷰 서비스들이 필요한 이유는 무엇일까?

IT 기업의 일반적인 채용 절차를 살펴보자. 이는 대체로 ‘서류 - 코딩테스트 - 과제테스트 - 1차면접 - 2차면접’의 순서를 따른다. 인터뷰는 주로 채용 절차의 후반부에 진행된다. 인터뷰를 진행할 수 있는 시간과 인력이 한정적이기에, ‘서류 - 코딩테스트 - 과제테스트’란 객관적 지표로 지원자들을 상당수 추려낸 다음에 이후의 채용 절차를 진행하는 것이다.

그렇기에 만약, 채용 절차에 AI를 이용한 인터뷰 서비스를 도입하여 성적을 매기고 합격ㆍ불합격 여부를 판단할 수 있게 된다면, 인터뷰를 진행하고 관리 감독하는 인원을 줄일 수 있게 된다. 채용 절차에서 소모되는 시간ㆍ인력ㆍ비용을 줄일 수 있다면 효율적인 인력 배치가 가능하게 되고, 이는 궁극적으로 회사의 생산성과 영업 이익의 향상을 가져오게 된다.

### 2-3. 기대 효과 및 활용 방안

개발하려는 플랫폼의 이식성과 확장성이 보장된다면, 해당 플랫폼은 IT 분야 뿐만 아니라 다양한 기업에서의 채용 과정에서 활용될 수 있다.

단적인 예로, 다양한 IT 기업의 채용 과정에서 활용되는 국내의 ‘프로그래머스’ 플랫폼을 살펴보자. 이는 PS(Problem Solving)를 위해 사용되는 플랫폼이다. 다양한 기업들이 해당 플랫폼을 이용하여 채용 과정에서의 코딩 테스트를 진행한다. 만약, 기업에서 개별적으로 PS플랫폼을 구축하거나, PS 시험을 보기위해 인력을 투입하게 된다면, 상당한 비용 손실이 발생할 것이다. ‘바퀴를 다시 발명하지 마라.’라는 말이 있다. 기업은 채용 과정에서의 시험을 위해 새로운 플랫폼을 구축하거나 인력을 투입할 필요 없이, 이미 잘 만들어진 플랫폼을 활용하면 되는 것이다. 따라서, ‘ChatGPT를 활용한 인터뷰 서비스’를 이식성 및 확장성있게 개발한다면, 해당 채용 절차에 소모되는 인력ㆍ시간ㆍ비용을 줄여 기업의 영업 이익 향상을 가져올 수 있다.

또 다른 예로, ‘LeetCode’란 해외 웹 플랫폼을 살펴보자. 이는 국내의 ‘프로그래머스 ’, ‘백준’와 같은 PS(Problem Solving) 문제들을 제공하는 플랫폼이다. 단, 여기에는 하나 큰 차이점이 있다. ‘LeetCode’는 이미 해외 기업(Google, Facebook 등)들의 다양한 모의 인터뷰를 제공한다는 것이다. 여기에는 우리가 개발하고자 하는 기술과 거의 유사한 기술이 사용된다. 그렇기에, 국내에서도 이러한 기술을 개발하여 ‘프로그래머스’등의 이미 잘 알려진 플랫폼에 해당 기능을 이식한다면, 개발 면접을 준비하는 취업 준비생들과 채용 절차를 진행하는 기업 모두에게 도움을 줄 수 있다.

## 3. Design

과제의 설계 및 구현 분야는 크게 3가지로 나눌 수 있다. 첫째는 ‘Web Front-End Development’, 둘째는 ‘ChatGPT Prompt Engineering’, 마지막으로는 ‘Administrative Processing and Data Research’이다. 각각의 내용을 자세히 살펴보자.

### 3-1. Web Front-End Development

‘Web Front-End Development’에서는 기본적으로 인터뷰 서비스를 위한 Web UI를 설계하고, API를 통해 Back-End Server의 역할을 하는 ChatGPT와 통신한다. 개발 과정에서의 협업과 일관성을 위해 다양한 도구들이 사용된다. 개발을 위해 알아야 할 기술들은 다음과 같다.

1. VScode: Editor
1. Github: Configuration Management, Issues Tracking, Distribution, Deploy, CI/CD
    - Github: 협업 및 형상관리를 위해 사용.
    - Github Issues/Projects: 개발 중 발생하는 Issues Tracking과 일정 관리를 위해 사용.
    - Github Pages: 개발을 완료한 후, 웹 페이지 배포를 위해 사용.
    - Github Workflows: 배포 및 API Key 관리를 효율적으로 진행하기 위한 CI/CD 도구.
1. HTML: Language
1. Markdown: Language
1. CSS: Language
1. SCSS: Language
1. JavaScript(ES6): Language
1. React.js: Library
1. Node: Environment
    - Node
    - NPM
    - Dotenv
1. Webpack: Module Bundler
1. JSON, YAML: Data Communication
1. esLint: JS Convention
1. Prettier: JS Convention
1. markdownlint: MD Convention
1. EditorConfig: Global Convention
1. ChatGPT API

### 3-2. ChatGPT Prompt Engineering

‘ChatGPT Prompt Engineering’에서는 질문에 대한 올바른 답변을 제공하기 위해, 다양한 Data들을 통해 ChatGPT를 학습시킨다. Front-End에서 요청한 JSON 형식을 확인하여 다양한 조건 값에 따른 올바른 응답을 제공해야 한다. 개발을 위해 알아야 할 기술들은 다음과 같다.

1. ChatGPT Prompt Engineering
1. ChatGPT API

### 3-3. Administrative Processing and Data Research

‘Administrative Processing and Data Research’에서는 행정 처리, 재무 관리, 자료 조사 등을 진행한다. 개발 과정에서 필수적인 외적인 요소들을 모두 관리한다.

## 4. Implementation
