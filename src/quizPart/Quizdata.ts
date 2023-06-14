
 export interface IquizData  {
        id : number , 
        question :string , 
        options : string[] , 
        answer : number , 
        correct:string ,
        type : 'radio'|'checkbox'
}

export const quizData:IquizData[] = [
    {
        id:1 , 
        question : "What is ReactJS mainly used for building?" , 
        options : ["Database" , "Connectivity" , "User interface", "Design platform"] ,
        correct : "User interface" ,
        type : "radio"  ,
        answer : 3
    } ,
    
    {
       id:2 , 
       question : " In which language is React.js written?" , 
       options : ["Python" , "JavaScript" , "Java", "PHP"] ,
       correct : "JavaScript" ,
       answer : 2,
       type : "radio"  ,

    } , 

     {
       id:3 , 
       question : "Who created React.js?" , 
       options : ["Jordan Mike" , "Jordan Walke" , "Tim Lee", "Jordan Lee"] ,
       correct : "Jordan Walke" ,
       answer : 2,
       type : "radio"  ,
       } , 

     {
       id:4 , 
       question : " Identify the one which is used to pass data to components from outside" , 
       options : ["Render with arguments" , "setState" , "PropTypes", "props"] ,
       correct : "props" , 
       answer : 4,
       type : "checkbox"  ,
      } , 

     {
       id:5 , 
       question : "In react, the key should be?" , 
       options : ["Unique among his siblings only" , "unique in the DOM" , "Does not requires to be unique", "all of the above"] ,
       correct : "Unique among his siblings only" ,
       answer : 1,
       type : "radio"  ,

    } , 
     {
       id:6 , 
       question : "What is the correct syntax to write expression in JSX?" , 
       options : ["[ expression ]" , "{ expression }" , "{{ expression }}", "_expression"] ,
       correct : "{ expression }" ,
       answer : 2,
       type : "radio"  ,

    } , 

    {
       id:7 , 
       question : "In ES6 - Which keyword is used to initiate a class?" , 
       options : ["function" , "class" , "ReactClass", "ReactClassJs"] ,
       correct : "class" ,
       answer : 2,
       type : "checkbox",
       } , 

    {
       id:8 , 
       question : " In ES6 - The class properties are assigned inside a _____ method." , 
       options : ["props()" , "properties()" , "constructor()", "react-properties()"] ,
       correct : " constructor()" ,
       answer : 3,
       type : "radio",
       } , 

    {
       id:9 , 
       question : "In ES6 - Which method refers to the parent class?" , 
       options : ["parent()" , "super()" , "top()", "main()"] ,
       correct : "super()" ,
       answer : 2,
       type : "checkbox",
       } , 

    {
       id:10 , 
       question : "With an arrow function - this keyword represents _____. " , 
       options : [  "Header object" , "Content" , "Current object", "Child object"] ,
       correct : "Header object" ,
       answer : 1,
       type : "radio",
    } 
    
   ]
