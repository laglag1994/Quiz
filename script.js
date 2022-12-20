 const quizData=[

    {
        question:'who are the Queen & Queen of the castle? ',
        a:'Trinity and Nader',
        b:'Kiara and Kero',
        c:'Goon and Malik',
        d:'Eyad and 3aneed',
        correct:'c'
    },
    {
        question: 'how many fifis do we have?',
        a:'2',
        b:'3',
        c:'4',
        d:'5',
        correct:'d'
    },
    {
        question:"Who is my baby? ",
        a: 'Trinity is my baby',
        b: 'Malik is my baby',
        c: 'Katana is my baby',
        d: 'Goon is my baby',
        correct:'a'
    },
    {
        question: 'will you marry me? ',
        a: 'yes',
        b: 'yes',
        c:'yes',
        d:'yes',
        correct: 'a'& 'b' &'c'&'d'
    }
 ];

 const quiz=document.getElementById('quiz')
 const answerEls=document.querySelectorAll('.answers')
 const questionEL =document.getElementById('question');
 const a_text =document.getElementById('a-text');
 const b_text =document.getElementById('b-text');
 const c_text =document.getElementById('c-text');
 const d_text =document.getElementById('d-text');
 const submit=document.getElementById('btn');

 let currentQuiz=0;
 let score=0;

 loadQuiz();

 function loadQuiz(){
    deselected();
    const currentQuizData=quizData[currentQuiz]

    questionEL.innerText=currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;
    
 } 

 function selected(){
    let answer=undefined;
    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer=answerEl.id
        }
    })
    return answer
 }


 function deselected(){

    answerEls.forEach(answerEl => answerEl.checked =false)
 }

function click_me (){
         const answer=selected();
        if(answer){
            if(currentQuiz===3 || answer===quizData[currentQuiz].correct){
            score++
        
        }
        }
        currentQuiz++;

        if(currentQuiz<quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML=`<h2> your score is ${score}/${quizData.length}</h2>`
        }
        
}



submit.addEventListener('click',click_me)