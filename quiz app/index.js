const data = [
    {
        question: "wheen dinisours died", 
        options: ['1229', '12334','687', '790'], 
        answer: 'c'    
    }, 
    {
        question: "who is president of America", 
        options: ['1229', '12334','687', '790'], 
        answer: 'a'   
    }, 
    {
        question: "who is president of America", 
        options: ['1229', '12334','687', '790'], 
        answer: 'b'    
    }, 
    {
        question: "wheen dinisours died", 
        options: ['1229', '12334','687', '790'], 
        answer: 'd'    
    },
]    

const submitBtn = document.getElementById("submit");
const question = document.getElementById("question"); 
const ul = document.querySelector(".overall");   
const answer = document.querySelectorAll(".answer"); 
const a_text = document.getElementById("a_text"); 
const b_text = document.getElementById("b_text"); 
const c_text = document.getElementById("c_text"); 
const d_text = document.getElementById("d_text");  

let quizCounter = 0;
let score = 0;  

const showingElements = (counter) => { 
     deSelect(); 
     const singElement = data[counter];  

     question.innerHTML = singElement.question; 
     a_text.innerText = singElement.options[0]; 
     b_text.innerText = singElement.options[1]; 
     c_text.innerText = singElement.options[2]; 
     d_text.innerText = singElement.options[3]; 

} 

const getAnswer = () => {    
    let optionAnswer = undefined; 

    answer.forEach(value => {
       if(value.checked) {
        optionAnswer = value.id; 
       }
    }) 
    

    return optionAnswer; 
} 

const deSelect = () => {
    answer.forEach(value => {
       value.checked = false; 
     }) 
}

submitBtn.addEventListener("click", () => {        

     const answer = getAnswer(); 

      if(answer) {

        if(answer == data[quizCounter].answer)  {
            score++;   
        } 
        
        quizCounter++; 

        if(quizCounter == data.length) { 
            alert(`number of right answers ${score}/${data.length}`) 
            quizCounter = 0;  
            score = 0;
         } 
    
        showingElements(quizCounter); 
     }
     
     if(!answer) {
        alert("choose option"); 
     }

   
})
