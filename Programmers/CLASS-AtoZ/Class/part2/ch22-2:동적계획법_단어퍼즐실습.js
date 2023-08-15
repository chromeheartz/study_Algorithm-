/* Ch22-2. 동적계획법_단어 퍼즐 실습 */

/*
  * 문제 설명 *

  단어 퍼즐은 주어진 단어 조각들을 이용해서 주어진 문장을 완성하는 퍼즐입니다. 
  이때, 주어진 각 단어 조각들은 각각 무한개씩 있다고 가정합니다. 
  예를 들어 주어진 단어 조각이 [“ba”, “na”, “n”, “a”]인 경우 "ba", "na", "n", "a" 단어 조각이 각각 무한개씩 있습니다. 
  이때, 만들어야 하는 문장이 “banana”라면 “ba”, “na”, “n”, “a”의 4개를 사용하여 문장을 완성할 수 있지만, 
  “ba”, “na”, “na”의 3개만을 사용해도 “banana”를 완성할 수 있습니다. 
  사용 가능한 단어 조각들을 담고 있는 배열 strs와 완성해야 하는 문자열 t가 매개변수로 주어질 때, 
  주어진 문장을 완성하기 위해 사용해야 하는 단어조각 개수의 최솟값을 return 하도록 solution 함수를 완성해 주세요. 
  만약 주어진 문장을 완성하는 것이 불가능하면 -1을 return 하세요.

  * 제한사항 *

  - strs는 사용 가능한 단어 조각들이 들어있는 배열로, 길이는 1 이상 100 이하입니다.
  - strs의 각 원소는 사용 가능한 단어조각들이 중복 없이 들어있습니다.
  - 사용 가능한 단어 조각들은 문자열 형태이며, 모든 단어 조각의 길이는 1 이상 5 이하입니다.
  - t는 완성해야 하는 문자열이며 길이는 1 이상 20,000 이하입니다.
  - 모든 문자열은 알파벳 소문자로만 이루어져 있습니다.

  * 입출력 예 *

  strs : t : result
  ["ba","na","n","a"] : "banana" : 3
  ["app","ap","p","l","e","ple","pp"] : "apple" : 2
  ["ba","an","nan","ban","n"] : "banana" : -1

  문제 링크 : https://school.programmers.co.kr/learn/courses/13213/lessons/91430
*/

function solution(strs, t) {
  const dp = Array.from({ length: t.length + 1 }, () => 0);
  const strsSet = new Set(strs);

  for (let i = 1; i < t.length + 1; i += 1) {
      dp[i] = Infinity;
      for (let j = 1; j < Math.min(i + 1, 6); j += 1) {
          const start = i - j;
          const end = i;
          if (strsSet.has(t.slice(start, end))) {
              dp[i] = Math.min(dp[i], dp[i - j] + 1);
          }
      }
  }

  return dp[dp.length - 1] === Infinity ? -1 : dp[dp.length - 1];
}
