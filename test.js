// Question 1
// You are working on a web application for a car rental company. They want to keep track
// of their car inventory and rental information. Your task is to create a JavaScript class or
// function constructor for representing cars in their inventory and another one for
// representing rental information.

// Requirements:
// 1) Create a Car class or function constructor that has the following properties:
// a. make (string): The make of the car, e.g., "Toyota".
// b. model (string): The model of the car, e.g., "Camry".
// c. year (number): The year the car was manufactured, e.g., 2020.
// d. isAvailable (boolean): Indicates if the car is currently available for rent.
// The Car class or function constructor should also have a method called
// toggleAvailability that changes the isAvailable property to its opposite value (true to
// false, false to true)
class Car{
    constructor(make, model, year, isAvailable){
        this.make = make;
        this.model = model;
        this.year = year;
        this.isAvailable;
    }
    toggleAvailability(){
        this.isAvailable = !this.isAvailable;
    }
}
const myCar = new Car('Toyota', 'Corolla', 2001, false);
myCar.toggleAvailability();
console.log(myCar.isAvailable);  // changes to false

myCar.toggleAvailability();   // changes to true
console.log(myCar.isAvailable);



// 2) Create a Rental class or function constructor that has the following properties:
// ● car (Car object): The car that has been rented.
// ● renterName (string): The name of the person who rented the car.
// ● rentalStartDate (Date object): The start date of the rental period.
// ● rentalEndDate (Date object): The end date of the rental period.
// The Rental class or function constructor should also have a method called
// calculateRentalDuration that returns the rental duration in days.
class Rental{
    constructor(car, renterName, rentalStartDate, rentalEndDate){
        this.car = car;
        this.renterName = renterName;
        this.rentalStartDate = rentalStartDate;
        this.rentalEndDate = rentalEndDate;
    }
    calculateRentalDuration(){
        const oneDay = 24 *60 * 60 * 1000;
        const startDate = new Date(this.rentalStartDate);
        const endDate = new Date(this.rentalEndDate);
        return Math.round(Math.abs((startDate - endDate) / oneDay));
    }
}


// 3) Create an instance of the Car class or function constructor for a car in the
// inventory. Then, create an instance of the Rental class or function constructor for
// a rental involving the car you created. Finally, calculate the rental duration using
// the calculateRentalDuration method.
const newCar = new Car("Toyota", "Nissan", 2008, true);
const renting1 = new Rental(
    "BMW",
    "Megan",
    "2001-01-01",
    "2020-02-02"
);

console.log(renting1.calculateRentalDuration());


// Question  2
// You are building a simple quiz app that contains multiple-choice questions. Your task is
// to create two JavaScript classes: Question and Quiz. The Question class will represent
// individual questions, and the Quiz class will manage a collection of questions and the
// user's progress.
// 1. Create a Question class with the following properties:
// ● text(string): The text of the question.
// ● options(array): An array containing the multiple-choice options.
// ● correctAnswer(string): The correct answer to the question.
// The Question class should also have a method called checkAnswer that takes a
// user's answer as a parameter and returns true if the answer is correct and false
// otherwise.
class Question{
    constructor(text, options, correctAnswer){
        this.text = text;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }
    checkAnswer(userAnswer){
        return userAnswer === this.correctAnswer;
    }
}
const question1 = new Question(
    "Cows produce eggs", ["True", "False"], "False"
);
console.log(question1.checkAnswer("True"));
console.log(question1.checkAnswer("False"));

// 2. Create a Quiz class with the following properties:
// ● questions(array):An array of Question objects.
// ● currentQuestionIndex(number): The index of the current question in the
// questions array.
// ● score(number): The user’s current score.
// The Quiz class should have the following methods:
// ● addQuestion: Takes a Question object as a parameter and adds it to the
// questions array.
// ● nextQuestion: Advances to the next question in the quiz by incrementing the
// currentQuestionIndex.
// ● submitAnswer: Takes a user's answer as a parameter, checks if the answer is
// correct using the checkAnswer method of the Question class, and updates the
// score if the answer is correct.
class Quiz extends Question{
    constructor(questions, currentQuestionIndex, score){
        super(text, options, correctAnswer);
        this.questions = questions;
        this.currentQuestionIndex = currentQuestionIndex;
        this.score = score;
    }
    addQuestion(questionObject){
        return questionObject += this.questions;
    }
    nextQuestion(){
        this.currentQuestionIndex++;
    }
    submitAnswer(userAnswer1){
        return userAnswer === this.correctAnswer;
    }
}
