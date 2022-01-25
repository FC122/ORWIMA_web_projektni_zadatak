var questions=[
{
prompt:"Question 1\n(a)a\n(b)b\(c)c",
answer:"a"
}
]
var score=0;

for(var i=0;i<questions.length;i++){
var response=window.prompt(questions[i].prompt);
  if(response==questions[i].answer){
    score++;
    alert("Točno")
  }else{
    alert("Netočno")
}
alert("Točno je odgovoreno "+score+" pitanja")
}