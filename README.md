# History_Cypress_Test
This is my first automation test with Cypress automation tool, a modern framework for automation testing. In this respect, I organized a tests suite for the website of the Faculty of History and Philosophy from Babeș-Bolyai University, Cluj-Napoca, Romania.



------



## :pushpin: Inspiration and personal purpose :chart_with_upwards_trend:
This automation project was created to learn a new automation framework, Cypress. In order to apply practically my knowledge about Cypress, I chose to write some automation tests on various functionalities on the website of the Faculty of History and Philosophy, Babeș-Bolyai University, Cluj-Napoca, Romania.






## :pushpin: Project technologies :computer:
+ **JavaScript** as programming language
+ **Node.js** as runtime environment
+ **Cypress** as automation framework for web applications
+ **Google Chrome** as test browser, with chromedriver

     <a href= "https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://user-images.githubusercontent.com/115346533/207126821-44c69b50-e31e-47cf-807d-360653372d09.png" width="91" height="91"></a>     <a href= "https://nodejs.org/en/docs/"><img src="https://user-images.githubusercontent.com/115346533/207125973-3188c005-11c9-4c49-ab8c-b71e5c58a5c4.png" width="80" height="91"></a>     <a href= "https://www.cypress.io/"><img src="https://user-images.githubusercontent.com/115346533/219746300-c4dd96d6-f951-4f4b-886e-832cd07736cb.png" width="91" height="91"></a>     <a href = "https://www.google.com/chrome/?brand=YTUH&gclid=Cj0KCQiAnsqdBhCGARIsAAyjYjThEbMgK-Pyt6tXBBxBf9wk8TAD19OKn0FRnMlz45Ul0fZ5ogPb9gEaAjOhEALw_wcB&gclsrc=aw.ds"><img src="https://user-images.githubusercontent.com/115346533/208242996-fae0e828-b968-45cd-ab0c-1a73c9825b65.png" width="91" height="91"></a>
    
    
    
    
   
   
## :pushpin: Setup and installation :hammer_and_wrench:	
1. The first time I created a remote repository on GitHub, then a local repository on my computer.
2. In the project's local folder, I installed the WebdriverIO automatic testing framework from the Command Terminal, by executing the command: "npm init wdio .".
3. Before the final installation of the drivers required for automated testing, I had to configure WebdriverIO by choosing certain options in the form in Terminal: selecting the base URL, using Google Chrome with chromedriver, setting the specific location where the files are located of the JavaScript test code ("./test/specs/**/*.js"), changing the command to run the test in the configuration file to "npm test".
4. After we have finished installing the necessary files, I open a JS code file in the "test/specs" folder and add the unitary organized test suite with proper names for all the tests in it, following the documentation of the WebdriverIO framework.
5. The automated test suite is executed by running the "npm test" command in the Command Terminal.






## :pushpin: Web support :link:
As support, I used **the website https://academicinfo.ubbcluj.ro/Info/** for these automation test.






## :pushpin: Testing objectives :microscope:
This project was thought as a way to:
+ check if **certain functions of the site can be automated**, 
+ if **it respects a Positive Flow for a normal user / student**, 
+ **to check certain static details (buttons, titles, text, etc.)**.

:bangbang: **N.B.  From the flow of tests thought and written by me, the only functionality that could not be automated is the reCAPTCHA element. This is the only button accessed manually during the execution of the automated test.**






## :pushpin: Demo videos of the Automation test :clapper:
There are **2 versions** of the test execution presented below in 2 short videos. 

1. The first version verifies that all the tests are working properly, with no coding errors. :point_down:


https://user-images.githubusercontent.com/115346533/208291491-e323eb3d-b3d6-4227-be22-544e0bdac654.mp4





2. The second version contains a test that verifies the existence of Copyright for the current year (2022). It is observed in the video that the test fails for this reason, the Copyright of the web platform not being updated, which is a bug. :point_down:


https://user-images.githubusercontent.com/115346533/208291507-aa66ab45-7997-4844-86f6-7ef5909b6879.mp4




------

