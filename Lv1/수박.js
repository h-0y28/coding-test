function solution(n) {
    var answer = '';
    const str = "수박"
    if(n%2===0) answer = str.repeat(n/2);
    else answer = str.repeat(n/2)+"수";

    return answer;
}