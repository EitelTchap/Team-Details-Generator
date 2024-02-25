const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

//Global variable for the team input
let team = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.
// Manager prompt questions
const ManagerQuestions = [
    {
        type: 'input',
        name: 'ManagerName',
        message: 'What is the name of the manager?'
    },
    {
        type: 'input',
        name: 'ManagerID',
        message: 'What is the Employee ID of the manager?'
    },
    {
        type: 'input',
        name: 'ManagerEmail',
        message: 'What is the email address of the manager?'
    },
    {
        type: 'input',
        name: 'OfficeNumber',
        message: 'What is the office number of the manager?'
    }
];

//Menu prompt
const Menu = [
    {
        type: 'list',
        name: 'Menu',
        message: 'Select another team member to input details:',
        choices: [
            'Add an engineer',
            'Add an intern',
            'Finish building the team',
        ]
    }
]

//Engineer prompt questions
const EngineerQuestions = [
    {
        type: 'input',
        name: 'EngineerName',
        message: 'What is the name of the engineer?'
    },
    {
        type: 'input',
        name: 'EngineerID',
        message: 'What is the Employee ID of the engineer?'
    },
    {
        type: 'input',
        name: 'EngineerEmail',
        message: 'What is the email address of the engineer?'
    },
    {
        type: 'input',
        name: 'Github',
        message: 'What is the Github username of the engineer?'
    }
];

//Intern prompt questions
const InternQuestions = [
    {
        type: 'input',
        name: 'InternName',
        message: 'What is the name of the intern?'
    },
    {
        type: 'input',
        name: 'InternID',
        message: 'What is the Employee ID of the intern?'
    },
    {
        type: 'input',
        name: 'InternEmail',
        message: 'What is the email address of the intern?'
    },
    {
        type: 'input',
        name: 'School',
        message: 'What is the school of the intern?'
    }
];

// Function to initialise the program - start with manager prompts
const promptManager = async () => {
    console.log("Please enter the team manager's details below:");
    const managerAnswers = await inquirer.prompt(ManagerQuestions);
    console.log(managerAnswers);
    //Instance of Enginee class with collected data
    const manager = new Manager(managerAnswers.ManagerName,
        managerAnswers.ManagerID,
        managerAnswers.ManagerEmail,
        managerAnswers.OfficeNumber);                 
    team = [manager];    // team array with all the employee objects.
    await promptMenu();
};

// Function for the Menu prompt
const promptMenu = async () => {
    const menuAnswers = await inquirer.prompt(Menu);
    //If statement based on user's choice to initialise other prompts
    if(menuAnswers.Menu === 'Add an engineer') {
        await promptEngineer(); //Engineer prompt
    } else if(menuAnswers.Menu === 'Add an intern') {
        await promptIntern();
    } else if(menuAnswers.Menu === 'Finish building the team') {
        // For 'Finish building the team' option
        console.log("Team building completed. Generating the Team Profile...");
        
        // Call function to generate HTML and catch any error.
        try {
            BuildTeam()
        } catch (err){
            console.log(err);
        }
    }
}

// Function for team engineer's prompt
const promptEngineer = async () => {
    console.log("Please enter the team engineer's details below:");
    const engineerAnswers = await inquirer.prompt(EngineerQuestions);
    console.log(engineerAnswers);
    //Instance of Enginee class with collected data
    const engineer = new Engineer(engineerAnswers.EngineerName,
        engineerAnswers.EngineerID,
        engineerAnswers.EngineerEmail,
        engineerAnswers.Github);                 
    team.push(engineer);    
    await promptMenu();
}

// Function for team intern's prompt
const promptIntern = async () => {
    console.log("Please enter the team intern's details below:");
    const internAnswers = await inquirer.prompt(InternQuestions);
    console.log(internAnswers);
        //Instance of Intern class with collected data
        const intern = new Intern(internAnswers.InternName,
            internAnswers.InternID,
            internAnswers.InternEmail,
            internAnswers.School);                 
    team.push(intern);   
    await promptMenu();
}

// function to initialize program
const BuildTeam = async () => {
    try {
        // Generate HTML using the collected team data
        const renderedHTML = render(team);

        //Write the HTML to file
        fs.writeFileSync(outputPath, renderedHTML);

    } catch (err) {         //Catch error
        console.log('Error occured', err);
    }
};

// Start the application with the project manager prompt
promptManager();