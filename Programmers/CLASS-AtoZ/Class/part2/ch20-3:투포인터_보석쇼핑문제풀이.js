/* Ch20-3. 투포인터_보석 쇼핑 문제풀이 */

/*
  * 문제 설명 *

  [본 문제는 정확성과 효율성 테스트 각각 점수가 있는 문제입니다.]

  개발자 출신으로 세계 최고의 갑부가 된 어피치는 스트레스를 받을 때면 이를 풀기 위해 오프라인 매장에 쇼핑을 하러 가곤 합니다.
  어피치는 쇼핑을 할 때면 매장 진열대의 특정 범위의 물건들을 모두 싹쓸이 구매하는 습관이 있습니다.
  어느 날 스트레스를 풀기 위해 보석 매장에 쇼핑을 하러 간 어피치는 이전처럼 진열대의 특정 범위의 보석을 모두 구매하되 특별히 아래 목적을 달성하고 싶었습니다.
  진열된 모든 종류의 보석을 적어도 1개 이상 포함하는 가장 짧은 구간을 찾아서 구매

  예를 들어 아래 진열대는 4종류의 보석(RUBY, DIA, EMERALD, SAPPHIRE) 8개가 진열된 예시입니다.

  진열대 번호 : 1 : 2 : 3 : 4: 5 : 6 :7 :8
  보석 이름 : DIA : RUBY : RUBY : DIA : DIA : EMERALD : SAPPHIRE : DIA

  진열대의 3번부터 7번까지 5개의 보석을 구매하면 모든 종류의 보석을 적어도 하나 이상씩 포함하게 됩니다.

  진열대의 3, 4, 6, 7번의 보석만 구매하는 것은 중간에 특정 구간(5번)이 빠지게 되므로 어피치의 쇼핑 습관에 맞지 않습니다.

  진열대 번호 순서대로 보석들의 이름이 저장된 배열 gems가 매개변수로 주어집니다. 
  이때 모든 보석을 하나 이상 포함하는 가장 짧은 구간을 찾아서 return 하도록 solution 함수를 완성해주세요.
  가장 짧은 구간의 시작 진열대 번호와 끝 진열대 번호를 차례대로 배열에 담아서 return 하도록 하며, 
  만약 가장 짧은 구간이 여러 개라면 시작 진열대 번호가 가장 작은 구간을 return 합니다.

  * 문제유형 *

  보석 쇼핑 문제 내용을 보면 가장 짧은 구간을 찾는다라는 부분이 있다. 
  일차원 배열에서 구간에 대한 탐색이 필요한 경우 투포인터 알고리즘을 적용할 수 있을지 고민해볼 수 있다.

  * 풀이 *

  투포인터로 접근한다면 다음과 같이 진행할 수 있다. 
  목적은 '진열된 모든 종류의 보석을 적어도 1개 이상 포함하는 가장 짧은 구간을 찾아서 구매' 이다. 
  ["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]가 입력으로 들어온다면 
  "DIA", "RUBY", "EMERALD", "SAPPHIRE"가 포함되어야 한다.

  우선 두 포인터 모두 첫 번째 인덱스를 가르킨다.
  |포인터|P1, P2||||||||
  |---|---|---|---|---|---|---|---|---
  |진열대 번호|1|2|3|4|5|6|7|8|
  |보석 이름|DIA|RUBY|RUBY|DIA|DIA|EMERALD|SAPPHIRE|DIA|

  현재 구매할 수 있는 보석은 DIA 밖에 없기 때문에 두 번째 포인터를 증가시킨다.

  포인터	P1	P2						
  진열대 번호	1	2	3	4	5	6	7	8
  보석 이름	DIA	RUBY	RUBY	DIA	DIA	EMERALD	SAPPHIRE	DIA
  이제 RUBY도 구매 할 수 있게 되었다. 현재 구매할 수 있는 보석은 DIA와 RUBY다.
  아직 모든 종류를 선택하지 못했기 때문에 두 번째 포인터를 증가시킨다.

  포인터	P1		P2					
  진열대 번호	1	2	3	4	5	6	7	8
  보석 이름	DIA	RUBY	RUBY	DIA	DIA	EMERALD	SAPPHIRE	DIA
  RUBY가 2개로 늘었다. 현재 구매할 수 있는 보석은 DIA 1개와 RUBY 2개다. 
  아직 모든 종류를 선택하지 못했기 때문에 두 번째 포인터를 증가시킨다.

  포인터	P1			P2				
  진열대 번호	1	2	3	4	5	6	7	8
  보석 이름	DIA	RUBY	RUBY	DIA	DIA	EMERALD	SAPPHIRE	DIA
  DIA가 2개로 늘었다. 현재 구매할 수 있는 보석은 DIA 2개와 RUBY 2개다. 
  아직 모든 종류를 선택하지 못했기 때문에 두 번째 포인터를 증가시킨다.

  포인터	P1				P2			
  진열대 번호	1	2	3	4	5	6	7	8
  보석 이름	DIA	RUBY	RUBY	DIA	DIA	EMERALD	SAPPHIRE	DIA
  DIA가 3개로 늘었다. 현재 구매할 수 있는 보석은 DIA 3개와 RUBY 2개다. 
  아직 모든 종류를 선택하지 못했기 때문에 두 번째 포인터를 증가시킨다.

  포인터	P1					P2		
  진열대 번호	1	2	3	4	5	6	7	8
  보석 이름	DIA	RUBY	RUBY	DIA	DIA	EMERALD	SAPPHIRE	DIA
  EMERALD가 추가되었다. 현재 구매할 수 있는 보석은 DIA 3개와 RUBY 2개, EMERALD 1개다.
  아직 모든 종류를 선택하지 못했기 때문에 두 번째 포인터를 증가시킨다.

  포인터	P1						P2	
  진열대 번호	1	2	3	4	5	6	7	8
  보석 이름	DIA	RUBY	RUBY	DIA	DIA	EMERALD	SAPPHIRE	DIA
  SAPPHIRE가 추가되었다. 현재 구매할 수 있는 보석은 DIA 3개와 RUBY 2개, EMERALD 1개, SAPPHIRE 1개다.
  이제 모든 종류를 선택할 수 있다.
  따라서 현재 구간 (1, 7)을 저장하고 첫 번째 포인터를 증가시킨다.

  포인터		P1					P2	
  진열대 번호	1	2	3	4	5	6	7	8
  보석 이름	DIA	RUBY	RUBY	DIA	DIA	EMERALD	SAPPHIRE	DIA
  DIA가 한 개 줄었다.
  현재 구매할 수 있는 보석은 DIA 2개와 RUBY 2개, EMERALD 1개, SAPPHIRE 1개다.
  아직 모든 종류를 선택할 수 있다. 따라서 현재 구간 (2, 7)으로 갱신한다. 다시 첫 번째 포인터를 증가시킨다.

  포인터			P1				P2	
  진열대 번호	1	2	3	4	5	6	7	8
  보석 이름	DIA	RUBY	RUBY	DIA	DIA	EMERALD	SAPPHIRE	DIA
  RUBY가 한 개 줄었다. 
  현재 구매할 수 있는 보석은 DIA 2개와 RUBY 1개, EMERALD 1개, SAPPHIRE 1개다.
  아직 모든 종류를 선택할 수 있고, 따라서 현재 구간 (3, 7)으로 갱신한다.
  다시 첫 번째 포인터를 증가시킨ㄷ나

  포인터				P1			P2	
  진열대 번호	1	2	3	4	5	6	7	8
  보석 이름	DIA	RUBY	RUBY	DIA	DIA	EMERALD	SAPPHIRE	DIA
  RUBY가 한 개 줄었다. 
  현재 구매할 수 있는 보석은 DIA 2개와 EMERALD 1개, SAPPHIRE 1개다.
  이젠 모든 종류를 선택할 수 없다. 따라서 구간을 갱신하지 않는다.
  이 이후는 진행해도 큰 의미가 없기 때문에 루프를 종료한다.

  이런식으로 투포인터 알고리즘을 이용하여 문제를 풀어나갈 수 있다.
*/

function solution(gems) {
  let answer = [0, gems.length]; // 가장 긴 길이로 초기화한다..
  let start = 0; // 첫 번째 포인터
  let end = 0; // 두 번째 포인터

  const gemKinds = new Set(gems).size; // 겹치지 않는 보석의 갯수
  const collect = new Map(); // 보석을 담아둘 변수
  collect.set(gems[0], 1); // 시작하면서 첫 보석을 먼저 담는다

  while (start < gems.length && end < gems.length) { // 두 포인터가 끝에 도달한다면 종료
    if (collect.size === gemKinds) { // 모든 보석을 구매할 수 있다면
      if (end - start < answer[1] - answer[0]) { // 구간을 갱신
        answer = [start + 1, end + 1];
      }

      collect.set(gems[start], collect.get(gems[start]) - 1); // 첫 번째 포인터에 해당하는 보석을 한 개 줄인다.

      if (collect.get(gems[start]) === 0) { // 만약 0이 됐다면 목록에서 제거된다.
        collect.delete(gems[start]);
      }
      start += 1; // 첫 번째 포인터 증가
    } else { // 모든 보석을 구매할 수 없다면
      end += 1; // 두 번째 포인터 증가
      collect.set(gems[end], 1 + (collect.get(gems[end]) || 0)); // 보석을 추가한다.
    }
  }

  return answer; // 결과 반환
}