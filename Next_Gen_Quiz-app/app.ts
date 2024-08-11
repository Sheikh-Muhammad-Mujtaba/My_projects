#! /usr/bin/env node

// Import necessary modules and functions
import { input, select, confirm } from "@inquirer/prompts"; // For user input and selection
import chalk from "chalk"; // For colorful CLI output
import { islamicQuestions } from './questionModules/Islamic_quiz.js'; // Import Islamic quiz questions
import { tsQuestions } from './questionModules/ts_quiz.js'; // Import TypeScript quiz questions
import { jsQuestions } from './questionModules/js_quiz.js'; // Import JavaScript quiz questions
import { iqQuestions } from './questionModules/IQ_quiz.js'; // Import IQ quiz questions
import { Question } from './questionModules/types.js'; // Import the Question type

// Define a banner to be displayed at the start of the app
const banner = `
${chalk.blue.bold('**************************************')}
${chalk.blue.bold('*                                    *')}
${chalk.blue.bold(`*       ${chalk.green.bold('Next_Gen_Quiz-app')}            *`)}
${chalk.blue.bold('*                                    *')}
${chalk.blue.bold('**************************************')}
`;

// Display the banner in the console
console.log(banner);

// Define a type for the different quiz topics
type QuizType = 'islamic' | 'typescript' | 'javascript' | 'iq';

// Main class for the Quiz application
class QuizApp {
    // A dictionary to hold questions for each quiz type
    private questions: { [key in QuizType]: Question[] };
    private recentScore: number | null = null;  // To store the most recent score
    private recentQuestions: Question[] = [];   // To store the most recent questions

    constructor() {
        // Initialize the questions dictionary with the imported question sets
        this.questions = {
            islamic: islamicQuestions,
            typescript: tsQuestions,
            javascript: jsQuestions,
            iq: iqQuestions,
        };
    }

    // Main method to start the quiz process
    public async start(): Promise<void> {
        await this.runQuizProcess(); // Start the quiz process
    }

    // Method to run the entire quiz process
    private async runQuizProcess(): Promise<void> {
        const topic = await this.selectTopic(); // Ask user to select a quiz topic
        const numQuestions = await this.selectNumberOfQuestions(); // Ask user for the number of questions
        const confirmStart = await this.confirmStart(); // Confirm to start the quiz
    
        if (confirmStart) {
            const quizQuestions = this.getQuestions(topic, numQuestions); // Get the selected questions
            await this.runQuiz(quizQuestions); // Run the quiz with the selected questions
            await this.handleOptions(); // Show options for the user after quiz completion
        } else {
            console.log(chalk.red('Quiz aborted.')); // Abort the quiz if the user chooses not to start
        }
    }

    // Method to prompt the user to select a quiz topic
    
    private async selectTopic(): Promise<QuizType> {
        const result = await select({
            message: 'Select the topic for the quiz:',
            choices: [
                { name: 'Islamic', value: 'islamic' },
                { name: 'TypeScript', value: 'typescript' },
                { name: 'JavaScript', value: 'javascript' },
                { name: 'IQ', value: 'iq' },
            ],
        });

        console.log('Selected topic result:', result); // Debugging line

        if (result && (result as QuizType)) {
            return result as QuizType;
        } else {
            console.error(chalk.red('Error: No topic selected.'));
            throw new Error('Topic selection failed');
        }
    }

    // Method to prompt the user to select the number of questions
    private async selectNumberOfQuestions(): Promise<number> {
        const numQuestions = await select({
            message: 'Select the number of questions for your quiz:',
            choices: [
                { name: '5 Questions', value: 5 },
                { name: '10 Questions', value: 10 },
                { name: '15 Questions', value: 15 },
                { name: '20 Questions', value: 20 },
                { name: '25 Questions', value: 25 },
            ],
        }) as number;
    
        return numQuestions; // Return the selected number of questions
    }
    
    
    // Method to confirm if the user wants to start the quiz
    private async confirmStart(): Promise<boolean> {
        return await confirm({ 
            message: 'Do you want to start the quiz? (y/n): ', 
            default: true // Set "yes" as the default option
        });
    }
    

    // Method to get the required number of questions based on the selected topic
   private getQuestions(topic: QuizType, numQuestions: number): Question[] {
    // Retrieve all questions for the selected topic
    const allQuestions = this.questions[topic];

    // Check if questions are available for the selected topic
    if (!allQuestions || allQuestions.length === 0) {
        console.error(chalk.red(`Error: No questions found for topic "${topic}".`));
        return []; // Return an empty array if no questions are found
    } else {
        console.log(numQuestions);
        
    // Slice the questions array to return the requested number of questions
    return allQuestions.slice(0, numQuestions);
}
}

    
    // Method to run the quiz
    private async runQuiz(questions: Question[]): Promise<void> {
        let score = 0; // Initialize score
    
        for (const [index, q] of questions.entries()) {
            console.log(chalk.yellow(`\nQuestion ${index + 1}: ${q.question}`)); // Display question
            const answer = await this.getUserAnswer(q.question, q.options); // Get user answer
            if (answer === q.correctAnswer) {
                console.log(chalk.green('Correct!')); // Correct answer
                score++;
            } else {
                console.log(chalk.red(`Wrong. The correct answer is: ${q.correctAnswer}`)); // Wrong answer
            }
        }
        // Store the recent quiz results
        this.recentScore = score;
        this.recentQuestions = questions;
        // Display the final score
        console.log(chalk.blue.bold(`\nQuiz finished! Your score: ${score} out of ${questions.length}`)); // Display final score
    }

    // Method to prompt the user for their answer
    private async getUserAnswer(question: string, options: string[]): Promise<string> {
        // Convert options from string[] to { name: string; value: string; }[]
        const formattedOptions = options.map(option => ({
            name: option,  // Display text
            value: option  // Actual value returned
        }));
    
        // Prompt the user to select an answer
        const answer = await select({
            message: question, // Question to ask user
            choices: formattedOptions, // Choices to present to the user
        });
    console.log(answer);
    
        // Return the selected answer
        return answer;
    }
    
    
    // Placeholder method for showing results, can be expanded with detailed results if needed
    private async showResults(): Promise<void> {
        if (this.recentScore === null || this.recentQuestions.length === 0) {
            console.log(chalk.red('No recent quiz results to display.'));
            return;
        }
    
        console.log(chalk.blue.bold(`\nYour most recent quiz results:`));
        console.log(chalk.blue(`Score: ${this.recentScore} out of ${this.recentQuestions.length}`));
    
        for (const [index, question] of this.recentQuestions.entries()) {
            console.log(chalk.yellow(`\nQuestion ${index + 1}: ${question.question}`));
            console.log(chalk.green(`Correct Answer: ${question.correctAnswer}`));
        }
    }
    
    
    // Method to handle options after the quiz ends
    private async handleOptions(): Promise<void> {
        const option = await select({
            message: 'What would you like to do next?', // Question to ask user
            choices: [
                { name: 'Exit', value: 'exit' },
                { name: 'Retry', value: 'retry' },
                { name: 'Show Results', value: 'results' },
            ],
        }) as unknown as 'exit' | 'retry' | 'results'; // Explicitly cast to the expected type
    
        await this.executeOption(option); // Call the function to handle the selected option
    }
    
    // Function to handle the selected option
    private async executeOption(option: 'exit' | 'retry' | 'results'): Promise<void> {
        switch (option) {
            case 'exit':
                this.exitApplication();
                break;
            case 'retry':
                await this.retryQuiz();
                break;
            case 'results':
                await this.showResults();
                await this.handleOptions(); // Ask what to do next after showing results
                break;
        }
    }
    
    // Function to exit the application
    private exitApplication(): void {
        console.log(chalk.red('Exiting the application.'));
        process.exit(); // Exit the application
    }
    
    // Function to retry the quiz
    private async retryQuiz(): Promise<void> {
        console.log(chalk.blue('Retrying the quiz...'));
        await this.start(); // Restart the quiz from the beginning
    }
    
}

// Create an instance of QuizApp and start it
const quizApp = new QuizApp();
quizApp.start();
