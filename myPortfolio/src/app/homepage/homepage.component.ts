import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  aboutMe: String[] = [
      "What is my life without coding?",
      "It is anything but the combinations of 0’s and 1’s.",
      "Ever since I was introduced to giving commands to computer resulting in a desired output, I was hooked into the world of possibilities it can create. Programming became my passion and I immediately started out taking Computer Science courses and soon became a self-learner. I can proudly say I am now a multilingual; I don’t only speak English & Gujarati, but also HTML, C++, C#, Java, Angular, and a little on Python.",
      "Running a web designing club for almost 2 years back in high school made me realize how dependent this world is on computers. Teaching fellow students the process of web development, I was not only able to help the community by having websites built, but also by sparking a fire in those students who would soon pursue their career as programmers.",
      "Previously, I have worked with Ford to get the hands-on experience I need in my pursued Computer Science career. I got the chance to understand and follow the software’s agile development process, learn and practice programming with Angular, and create simple web applications. The team that I worked with also showed me what it is like to work and have fun concurrently. The regular team meetings, quick stand up meetings, and retrospective meetings all in all played a major role in opening opportunity doors for my career.",
      "Outside of this professional life, I see myself at the gym almost every day. Sitting on a chair in front of a computer all day is not something I have always liked. In my free time, I am usually moving around, working out, going out to movies, playing video games, or simply doing some lawn maintenance. I truly believe living life outdoors is as important as it is inside.",
      "Thanks for taking some time getting to know me. However, I can best be known if you contact me. Please feel free to reach out with any questions or comments.",
      "01001100 01101001 01110110 01100101 00100000 01101100 01101001 01100110 01100101 00100000 01100001 01110100 00100000 01101001 01110100 01110011 00100000 01100010 01100101 01110011 01110100 "
  ];

  constructor() { 
    
  }

  ngOnInit() {
  }

}
