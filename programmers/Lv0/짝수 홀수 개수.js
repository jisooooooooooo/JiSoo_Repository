function solution(num_list) {
  var e = 0;
  var o = 0;

  for(var i=0;i<num_list.length;i++){
    if(num_list[i] % 2 == 0)
      e += 1;
    else
      o += 1;
  }
  var answer = [];
  answer[0] = e;
  answer[1] = o;
  
  return answer;
}