import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  profile = {
    imgpath: "profilepic.png",
    about: {
      name: "Brandon Scott",
      dob: "01/09/1992",
      location: "Kent WA",
    },
    description: "I am an optimistic computer enthusiast who aspires to become a developer in order to exercise my interests in problem solving and code",
    values: ["Scientific Method", "The Golden Rule", "Mathematics", "Logic", "Enjoying Life"],
    goals: {
      primary: [
        "Get hired as a Developer"
      ],
      shortTerm: [
        "Build an Angular5 application",
        "Learn Korean",
        "Practice using design tools",
        "Find new source of income"
      ],
      longTerm: [
        "Get BA Degree in Computer Science or Computer Networking",
        "Learn a Machine Language",
        "Build an Application using Java"
      ]
    },
    weaknesses: [
      "Putting other before myself",
      "Addictive Personality",
      "Can't seem to understand art",
      "More energy than I can seem to find a use for",
      "Too many goals at the same time",
      "Easily discouraged"
    ],
    strengths: [
      "Problem Solving and Strategic Thinking",
      "JavaScript Development",
      "Enjoy researching and learning new things",
      "Ambitious in quality of my work",
      "Honest with myself and others",
      "Try to find the optimal approach to all things",
      "Try to remain unbiased in all situations",
      "Seek the truth, regardless of whether or not I like it",
      "Customer Service, human interaction and empathy",
      "Taking action without instruction and working autonomously"
    ],
    interests: {
      optimization: {
        imgpath: "./../../../../assets/interests/optimizationicon.svg",
        list: [
          "Productivity",
          "Game Theory",
          "Algorithmic Thinking",
          "Planning",
          "Time Saving",
          "Organization"
        ]
      }
      ,
      design: {
        imgpath: "./../../../../assets/interests/designicon.svg",
        list: [
          "User Experience",
          "Logo Design",
          "Color Theory",
          "Typography",
          "Marketing",
          "Adobe CC",
          "Styleguides"
        ]
      },
      development: {
        imgpath: "./../../../../assets/interests/developmenticon.svg",
        list: [
          "Angular Frameworks",
          "EMCA",
          "Object Oriented Programming",
          "Pre-Processors",
          "Database Modeling",
          "Workflows",
          "Information Architecture",
          "Search Engine Optimization",
          "Modern Frameworks"
        ]
      },
      gaming: {
        imgpath: "./../../../../assets/interests/gamingicon.svg",
        list: [
          "Theory Crafting",
          "Macro Competitive Strategy",
          "Game Mechanics and Systems",
          "Min/Maxing",
          "Cooperative Strategy",
          "Character Building"
        ]
      },
      science: {
        imgpath: "./../../../../assets/interests/scienceicon.svg",
        list: [
          "Physics",
          "Quantum Physics",
          "Psychology",
          "Chemistry",
          "Cosmology",
          "Mechanical Engineering",
          "Electrical Engineering",
          "Computer Science",
          "Sociology",
          "Statistical Analysis",
          "Neural Networks"
        ]
      },
      investigation: {
        imgpath: "./../../../../assets/interests/investigationicon.svg",
        list: [
          "Observation",
          "Detailed Note Taking",
          "Documentation",
          "Body Language Understanding",
          "Pattern Recognition",
          "Abstract Connections",
          "Data Analysis",
          "Surveillance"
        ]
      },
      miscellaneous: {
        imgpath: "./../../../../assets/interests/miscellaneousicon.svg",
        list: [
          "Cooking",
          "Meditation",
          "Self Improvement",
          "Life Documenation",
          "Film Photography",
          "Travel",
          "Long Distance Running",
          "Cognitive Improvement"
        ]
      }
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
