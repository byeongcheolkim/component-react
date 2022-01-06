## dashboard-react-kits-npm

###실행
- develop start

 : npm start

 : url http://localhost:3000

###빌드하기
- product build
 
 : npm run-script build

### package.json
- babel
```
 : @babel/cli, @babel/core, @bable/plugin-transform-runtime, @babel/preset-env, @babel/preset-react
 : @babel/core 필수 나머지는 preset들은 선택 React 시에는 preset-react 설치 필요
 : preset-env는 브라우저에 필요한 ecmascript 버전을 자동으로 파악해서 polyfill을 넣어준다
 : preset-typescript는 타입스크립트를 사용 시 필요(아직적용 하지않음)
```
- loader
```
  babel-loader, css-loader, sass-loader, style-loader
  babel, css <-> webpack5 연결
```
- eslint, eslint-config-prettier, prettier ...

- webpack-plugin
```
  :html-webpack-plugin
  webpack 번들을 제공하는 HTML 파일 생성을 단순화 한다.
  이 플러그인은 매번 컴파일에 변경되는 해시로 된 파일 이름을 가진 webpack 번들에 특히 유용
  일반 javascript 에서는 css파일, js파일들을 HTML 안에 LINK 태그, script 태그로 추가해줘야한다.)
```

```
  :webpack (SourceMapDevToolPlugin)
  소스맵 생성을 더욱더 세밀하게 제어 할 수 있습니다.
  (소스맵 : 배포용으로 빌드한 파일과 원본 파일을 서로 연결시켜주는 기능)
```
```
  :clean-webpack-plugin
  빌드 이전 결과물을 제거하는 플러그인으로 빌드 결과물은 웹팩에서 아웃풋 경로에 설정한곳으로 폴더 및 파일들이 모이는데 빌드 했을시 이전 빌드내용이 삭제되지 않고 그대로 남아있는 경우도 있어 이것을 해결해주는 플로그인
```

```
  :eslint-webpack-plugin
  javascript 코드에서 문제를 찾아 수정 하는 데 사용 한다.
  다른 옵션을 추가하기 위해서는  .eslintrc 사용
```

```
  :copy-webpack-plugin
  빌드 프로세스에서 생성된 파일을 복사하도록 설계되지 않았습니다. 
  오히려 빌드 프로세스의 일부로 소스 트리에 이미 존재하는 파일을 복사하는 것입니다.
```

```
  :webpack.BannerPlugin
  생성된 빌드에 배너를 추가
```

### redux - toolkit
- "@reduxjs/toolkit": "^1.5.1",
