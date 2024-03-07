
import inquirer from 'inquirer';
import chalk from 'chalk'
import chalkAnimation from "chalk-animation"
import boxen from 'boxen'

console.log('helllo world')

interface QuizQuestion{
   question:string,
   choices:string[],
   correctanswer:string
}

class quizApp{

private userscore:number=0;

private  question:QuizQuestion[]=[
    {
        question:'What does TypeScript bring to JavaScript?',
        choices:[ 
        "Static Typing",
        "Dynamic Typing",
        "No Typing",
        "Strong Typing",
    ],
        correctanswer:'Strong Typing'

    },
    {
        question:'Which keyword is used to declare a variable with a fixed type in TypeScript?',
        choices:[
            "let", "var", "const", "type"
        ],
        correctanswer:'const'

    },
    {
        question:'What is the purpose of the "interface" keyword in TypeScript?',
        choices:[ 
        "To define a class",
        "To define a function",
        "To define a type structure",
        "To create an object",
    ],
        correctanswer:'To define a type structure'

    },
     {
        question: 'What is the TypeScript equivalent of "undefined" in JavaScript?',
        choices:["null", "undefined", "void", "NaN"],
        correctanswer:'undefined'

    },
    {
        question:'How do you define an optional property in a TypeScript interface?',
        choices:[
            "property?",
            "property!: type",
            "property?: type",
            "property!: type | undefined",
        ],
        correctanswer:'property?: type',
    },

    {
        question:'Which TypeScript compiler option is used to watch for file changes and recompile?',
        choices:["--outFile", "--watch", "--strict", "--target"],
        correctanswer:'--watch'

    },
    {
        question:'What is a union type in TypeScript?',
        choices:[
            "A type that can be either null or undefined",
            "A type that can be of multiple types",
            "A type that can only be null",
            "A type that can only be undefined",
        ],
        correctanswer:"A type that can be of multiple types"

    },
    {
        question:'How do you explicitly specify the type of a variable in TypeScript?',
        choices:[ 
        'Using the "type" keyword',
        'Using the "var" keyword',
        'Using the "as" keyword',
        'Using the "let" keyword',
    ],
        correctanswer:'Using the "as" keyword'

    },
    {
        question:'Which version of ECMAScript is TypeScript based on?',
        choices:["ES5", "ES6", "ES2015", "ES2019"],
        correctanswer:'ES2015'

    },
    {
        question:'What is the purpose of the "readonly" modifier in TypeScript?',
        choices:[
            "To make a property writable",
            "To make a property read-only",
            "To specify a variable type",
            "To define a constant",
        ],
        correctanswer:'To make a property read-only'

    },
]
private totalscore:number=this.question.length  

public async Welcomeanimation(){
    
     const animation=chalkAnimation.neon(boxen(`
     Welcome To Our
     ┏┓┳┳┳┏┓  ┏┓┏┓┏┓
     ┃┃┃┃┃┏┛  ┣┫┃┃┃┃
     ┗┻┗┛┻┗┛  ┛┗┣┛┣┛
     Project` ,
     {    title:"Quiz Project",
          titleAlignment:'center',
          textAlignment:'center',
          padding:1,
          margin:1,
          //borderStyle:'double',
          //borderColor:'magenta'
     }
     ))   
     await this.stopanimation(animation,3)
     await this.startquiz()

}

async endinganimation(){
    const animation=chalkAnimation.karaoke(boxen('Thanks for using our quiz app',
    {
        textAlignment:'center',
        borderStyle:'single'
    }))
this.stopanimation(animation,3)

}

async stopanimation(animation:any,duration:number):Promise<void>{
    return new Promise<void>((resolve)=>
     setTimeout(()=>{
     animation.stop(),
     resolve();
           }  ,duration *1000    )   
        )
} 

public async startquiz(){
   for (const question of this.question){
      await this.askquestion(question)
   }
   console.log(chalk.bold.magenta(`You scored ${this.userscore} out of ${this.totalscore}`))
     
   await this.restartquiz()
} 

private  async askquestion(question:QuizQuestion){
const  answer=await inquirer.prompt([{
    name:'useranswer',
    type:'list',
    message:chalk.bold.underline.italic.rgb(186, 126, 206)(question.question),
    choices:question.choices
}])
    await this.checkanswer(answer.useranswer,question.correctanswer)
}

private checkanswer(useranswer:string,correctanswer:string){
   if(useranswer  === correctanswer){
       this.userscore++;
   }
   console.log()
}

private async restartquiz(){
    const userchoices:string[]=['Yes','No'];
    const userresponse=await inquirer.prompt([
        {
    name:'response',
    choices:userchoices,
    type:'list',
    message:'Do you want to attempt quiz again?',

    },
]);
    if(userresponse.response === userchoices[0]){
        await this.startquiz()
    }else{
        await this.endinganimation()
    }
}
 }


 const quizapp=new quizApp()
 quizapp.Welcomeanimation()
 //quizapp.restartquiz()






















