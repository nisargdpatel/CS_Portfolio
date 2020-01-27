import { Project } from './project';

export const PROJECTS: Project[] = [
    {
        id: 1,
        name: "Connect 4",
        intro: "Simple two player connect 4 game that is played in 7 column and 6 row grid.",
        description: "This is an implementation of a GUI and gameplay for a very popular two-player game, Connect Four. Each of the players has either red or green colored disks that he/she will drop down into 7 column by 6 row grid. The initial discs will go to the bottom. A disc may only be placed either onto the bottom or on top of another disc (or either color).",
        date: "Completed on 5 July, 2019",
        status: "Complete",
        imgsrc: "assets/connect4.PNG",
        source: "https://bitbucket.org/nisargp1999/connect-four/src/master/",
        images: String[2] = ["assets/connect4_pics/1.PNG", "assets/connect4_pics/2.PNG", "assets/connect4_pics/3.PNG"]
    },
    {
        id: 2,
        name: "Yahtzee",
        intro: "Yahtzee is a dice game where you can collect different scores after rolling 5 dice.",
        description: "This is a GUI Yahtzee game that allows you to play a solo dice game. To score points, use a scoring category to determine which combination of rolls produces most points. You may only roll for 3 times. Each time, you can choose which dice you want to keep on the side and which dice you want to roll again. Game keeps running until all scoring category is filled. ",
        date: "Completed on 6 February, 2019",
        status: "Complete",
        imgsrc: "assets/yahtzee.jpg",
        source: "https://bitbucket.org/nisargp1999/yahtzee/src/master/",
        images: String[0] = ["assets/yahtzee_pics/1.PNG", "assets/yahtzee_pics/2.PNG"]
    },
    {
        id: 3,
        name: "Snake Game",
        intro: "A classic game of snake growing its size by eating apples and dying when bumping itself or walls.",
        description: "A simple snake game where the player is controlling a line by changing its direction. To survive, player must not let this snake (line) touch itself or any of the 4 walls. The goal is to eat the randomly placed apples (blocks on screen), that allows the snake to extend its length each time an apple is eaten. The score is calculated in terms of how many apples are eaten. This score gets updated on the scoreboard when the player is done playing and wants to save the score. The game is playable on Xbox console as well. Some of the exciting features it has are changing of theme color and the song played in the background. This can be selected from the settings menu.",
        date: "Completed on 23 April, 2019",
        status: "Complete",
        imgsrc: "assets/snake.png",
        source: "https://bitbucket.org/nisargp1999/snake_game/src/master/",
        images: String[0] = [
            "assets/snake_pics/1.PNG", 
            "assets/snake_pics/2.PNG", 
            "assets/snake_pics/3.PNG", 
            "assets/snake_pics/4.PNG", 
            "assets/snake_pics/5.PNG", 
            "assets/snake_pics/6.PNG", 
            "assets/snake_pics/7.PNG", 
            "assets/snake_pics/8.PNG", 
            "assets/snake_pics/9.PNG", 
            "assets/snake_pics/10.PNG"]
    },
    {
        id: 4,
        name: "Brains",
        intro: "A regulation report keeping system monitored by an Oversight team that assigns questions to departments.",
        description: "In order to minimize the time and cost spent on auditing, this program called BRAINS achieves this goal by making sure all the regulations are being followed along with the required evidence relating to specific questions called STENERs. The application includes login screen that provides access to different departments and the Oversight team. Once the user is in, the set of sorted questions will require the user to upload document proving the company is following a specific regulation. The submission of all these questions is reviewable by the Oversight team, who is also responsible to reassign the questions depending on the type of proof submitted or if the company is not in compliance of any regulation.",
        date: "Completed on 17 December, 2019",
        status: "Complete",
        imgsrc: "assets/brains.jpg",
        source: "https://bitbucket.org/gjlynch/brains-data-pirates/src/master/",
        images: String[0] = []
    },
    {
        id: 5,
        name: "Delivery System",
        intro: "Program that manages customers data and shipment information along with its specific destination. ",
        description: "The purpose of this application is to store package data for a shipping facility. The facility will allow for customers to ship packages to a destination. Our database will record customer information, the package information, as well as information for the shipment. The program also allows for the storage and editing of employee information for the company. Our goal is to allow for the company to keep track and view multiple customers and their shipments as well as the employees who will be handling the process.",
        date: "Completed on 8 April, 2019",
        status: "Complete",
        imgsrc: "assets/delivery_system.png",
        source: "https://bitbucket.org/nisargp1999/delivery-system/src/master/",
        images: String[0] = []
    },
    {
        id: 6,
        name: "Inventory Management",
        intro: "Program manages a local inventory by implementing an AVL tree.",
        description: "This is an inventory management simulator where it uses text files to get commands on what operations to perform. The operations it can perform are adding an item to and removing an item from an inventory, which are all saved in a transaction file. There could be multiple transaction files like this to simulate multiple clients. In order for the program to checkout a specific transaction file, there needs to be a input text file that lists operations such as opening or saving a specific file, displaying a specific product information, and also processing a specific transaction file. This program also handles error reporting whenever there is an overflow in the inventory space or when an item is not registered.",
        date: "Completed on 17 December, 2018",
        status: "Complete",
        imgsrc: "assets/inventory_management.png",
        source: "https://github.com/nisargdpatel/Inventory_Management",
        images: String[0] = []
    },
    {
        id: 7,
        name: "Trip Tracker",
        intro: "Program tracks user’s trip information, stores the used vehicle type, and perform multiple actions. ",
        description: "Program has different and specific functions for a driver depending on the type of vehicle involved; Car, Truck, Boat, or Plane. Driver will not only have the ability to see and store data of one or more of these types of vehicles, but also be able command the turns vehicles can take and trace the route of each vehicle.",
        date: "Completed on 27 March, 2018",
        status: "Complete",
        imgsrc: "assets/trip_tracker.PNG",
        source: "https://bitbucket.org/nisargp1999/trip-tracker/src/master/",
        images: String[0] = []
    },
    {
        id: 8,
        name: "Registration Database",
        intro: "Program manages a database of students’ registration for the enrolled courses and perform CRUD operations",
        description: "Using a local database, this program manages student enrolments in classes that are currently available. Students, Courses, Department, and sections can be edited. There is also a filtering functionality to easily find what user is looking for",
        date: "Completed on 4 April, 2019",
        status: "Complete",
        imgsrc: "assets/registration_database.png",
        source: "https://github.com/nisargdpatel/CIS297_Database_Project",
        images: String[0] = []
    },
    {
        id: 9,
        name: "Lexical Analyzer",
        intro: "Running this C++ program, it will read a C program, strip off comments, and generate four symbol tables.",
        description: "Lexical Analyzer reads a C-program through a text file, strips off any comments that are included, and generate four types of symbol tables. These tables are Keyword table, Identifier table, Number table, and Token table. After the table creation, the program outputs the final result to a text file to be reviewed. ",
        date: "Completed on 30 September, 2018",
        status: "Complete",
        imgsrc: "assets/lexical_analyzer.png",
        source: "https://bitbucket.org/nisargp1999/lexical-analyzer/src/master/",
        images: String[0] = []
    },
    {
        id: 10,
        name: "Reinforcement Learning",
        intro: "Implementation of Markov Decision Process to achieve optimal action at each position to reach destination.",
        description: "This program simulates a maze where a robot is trying to reach a goal state. Considering a windy situation where there are costs and rewards for moving in any specific direction. In this case, cost is 1 for moving westward, 2 for moving northward or southward, and 3 for moving eastward. The robot can drift to the left or the right from the perspective of moving direction with probability 0.1. If the drifting direction is an obstacle, it will be bounced back to the original position. In this implementation of Markov Decision, there are 10,000 trials generated, each of which results in a trajectory of (state, action, reward) tuple. The simulator uses Greedy Algorithm to choose an action at each state along each trajectory. The initial state is for each trial is chosen randomly and each trial ends at the goal state. Along each trajectory, the robot uses Q-Learning to update the Q-values. After the trials are finished and the Matrices are filled for all equations, the simulation outputs the access frequency at each index, the Q-value function at each index, and also the optimal action at each index. This will help robot find an optimal path to the goal index.",
        date: "Completed on 28 November, 2019",
        status: "Complete",
        imgsrc: "assets/reinforcement_learning.png",
        source: "https://bitbucket.org/nisargp1999/reinforcement-learning/src/master/",
        images: String[0] = []
    },
    {
        id: 11,
        name: "Tax Calculator",
        intro: "Console Application that uses 2018 brackets and married status to calculate your federal income tax amount",
        description: "This is a C# console application that is a Federal Income Tax Calculator. It prompts the user for all the W2 income one by one along with itemized deductions. In the background, the program makes a decision of giving the user standard deduction if the total deductions is less than the standard deduction. After calculating the Adjusted Gross Income, the application displays the total taxes owed at each bracket for the Adjusted Gross Income, the total taxes owed, the total taxes as % of AGI, and also the total taxes as % of gross income.",
        date: "Completed on 24 January, 2019",
        status: "Complete",
        imgsrc: "assets/calculator.png",
        source: "https://bitbucket.org/nisargp1999/tax-calculator/src/master/",
        images: String[0] = []
    },
    {
        id: 12,
        name: "Seat Reservation System",
        intro: "Implements a seat reservation system for a passenger airplane by accessing seat chart through text file.",
        description: "This project implements a seat reservation system for a passenger airplane assuming it has 10 rows and there are 4 seats per row. The seat chart must be initially stored in a text file with a specific format. This allows the program to read in the seats data and perform multiple actions. The program allows the user to display seat chart, reserve seat, cancel reservation, save the chart to a file, look at seating statistics, and get help.",
        date: "Completed on 12 December, 2017",
        status: "Complete",
        imgsrc: "assets/seat_reservation.png",
        source: "https://bitbucket.org/nisargp1999/seat-reservation-system/src/master/",
        images: String[0] = []
    },
    {
        id: 13,
        name: "Payment Calculator",
        intro: " The program calculates and displays employee payments for a company",
        description: "This project involves creating and deriving several classes such as Employee class, SalaryEmployeePay derived class, HourlyEmployee derived class, HourlyEmployeePay derived class, and also AgencyEmployeePay derived class. The program prompts the user for sample data for the various employee types and then for each type, it calculates the employee's pay and displays his/her pay information on the screen and to an output file.",
        date: "Completed on 6 March, 2018",
        status: "Complete",
        imgsrc: "assets/calculator.png",
        source: "https://bitbucket.org/nisargp1999/employee-payment-calculator/src/master/",
        images: String[0] = []
    },
    {
        id: 14,
        name: "Predictive Parsing",
        intro: "Prints out the contents of stack top and input buffer in each step of parsing an arithmetic expression using a parse table.",
        description: "This program processes the arithmetic expression (id+id*id) and performs Non-Recursive Predictive Parsing. It uses a Parse table that holds Non-terminals and input symbols. Once the left recursion is removed, it loops and prints out the contents of the stack top and the input buffer at each step.",
        date: "Completed on 12 November, 2018",
        status: "Complete",
        imgsrc: "assets/predictive_parsing.jpg",
        source: "https://bitbucket.org/nisargp1999/predictive-parsing/src/master/",
        images: String[0] = []
    },
    {
        id: 15,
        name: "BST Implementation",
        intro: "Program implements Binary Search Tree and traverses the tree in-order, pre-order, and post-order.",
        description: "An input file stores a list of numbers that are read by the program. Once the program saves the data to a temporary array, it calls functions to reorder the data in-order, pre-order, and post-order separately and store it in separate vector variables. At last, each vector is outputted in a readable format.",
        date: "Completed on 25 November, 2018",
        status: "Complete",
        imgsrc: "assets/bst.png",
        source: "https://bitbucket.org/nisargp1999/bst-implementation/src/master/",
        images: String[0] = []
    },
    {
        id: 16,
        name: "UML Modeling",
        intro: "This project includes a set of commonly used UML models for a parental control software system.",
        description: "A scenario is observed that there is a software allows Parents (Main Actor) to check report on their children’s activity online. That software gathers all information from the database and generates a viewable report for parents to look at and understand. Parents can also configure settings so their children can safely browse on Internet. The system lets parents choose from variety of setting configuration, whose data is stored in database, and let them edit individual ones. Lastly, parents are able to uninstall the application for their child’s account only if the log in user is parent or authorized personnel. This project mainly focuses on creating Class Diagram, Use Case Model, State Diagrams, Sequence Diagrams, Requirements Model, Deployment Diagram, and Activity Diagrams for the software system using Enterprise Architect platform.",
        date: "Completed on 3 December, 2019",
        status: "Complete",
        imgsrc: "assets/uml_modeling.png",
        source: "https://bitbucket.org/nisargp1999/uml-modeling/src/master/",
        images: String[0] = []
    }
]