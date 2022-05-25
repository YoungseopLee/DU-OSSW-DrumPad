# OSSW526

Welcome to the DrumPad!!

이지호/이시영/이영섭 Web Audio API 기반 드럼패드 

# 주요기능
## 드럼패드 
web audio api를 통해 드럼패드 제작
DrumPad.js
![siyoung](https://user-images.githubusercontent.com/102271673/170287712-efbc6d95-fba4-4e97-9b0a-74b0548feece.PNG)
holwer.js에 있는 howl 함수를 통해 src로 소스파일 정립하고 sprite함수로 한파일로 이어져있는 오디오컨텍스트를 시간에따라 쪼갠다.

![드럼패드 3](https://user-images.githubusercontent.com/102271673/170289838-1c86f361-2544-45f3-9788-41710b019e34.PNG)
입력받은 오디오파일로 클릭과 터치이벤트를통해 오디오컨텍스트 출력

## 메트로놈
this.start로 타이머시작
this.stop으로 타이머정지
this.round로 시작된 타이머 루프를 기본적으로 하며
![메트로놈](https://user-images.githubusercontent.com/102271673/170296886-6fb05ee7-7d38-41a0-9b07-cc9167162ee0.PNG)
위 변수들로 메트로놈의 비트수와 박자수를 조절한다.
## 로컬에서 오디오 불러오기


# 사용된 기술
## web audio api
첫번째로 버퍼소스를 통해 오디오파일을 입력받고 
두번째로 게인노드를 통해 소리를 다양하게 변화시켜주는 효과를 집어넣고 
그 다음으로 컴프레서를 통해 음을 압축시켜 소리를 더욱 선명하게 들리게 해주는 작업을 해주면서
마지막으로 데스티네이션(출력)에서 모든 function을 순서대로 출력하여 오디오를 출력해주는 방식이다.

## howler.js
 web audio api를 기반으로 제작된 라이브러리

