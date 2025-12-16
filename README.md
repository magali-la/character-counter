# Charactrer Counter

#### A text analysis tool that counts your characters and words and estimates reading time in real-time

## Description
This tool was created with Vite, React, TypeScript, and Material UI components and custom styling. 

Future iterations will enhance styling and integrate full responsive support for mobile devices. This project was completed as part of a lab assignment in Per Scholas Full Stack Engineering Bootcamp, to manage state, props, and component interactions with TypeScript.

Visit the live site: https://magali-la.github.io/character-counter/ 

## Table of Contents
* [Tech Stack](#techstack)
* [Features](#features)
* [Design Process](#design)
* [Project Reflections](#reflections)
* [Deployment](#deployment)
* [About the Author](#author)

## <a name="techstack"></a>Tech Stack
### Languages
* TypeScript
* JavaScript
* CSS3
### Libraries
* React
* Material UI
### Build Tool
* Vite

## Features
1. Real-time text statistics - app dynamically updates character count, word count, and estimated reading time in minutes 
2. Dynamic word count styling - the min and max word count determine the color of the number, red or green
3. Responsive Layout - uses Materil Ui's grid and box components with responsive sizing to adapt across different screen sizes
4. Custom Themes - integrates Material UI theming with custom fonts from fontsource
5. Controlled component pattern to log changes to user input in state

## <a name="design"></a>Design Process
The design phase of the project included learning about how to implement Material UI components. Fonts were sourced and imported in the app using Fontsource. This font is a serif and monospaced font, reminiscent of typewriter text.

### Fonts used
* [Iosevka Etoile](https://fontsource.org/fonts/iosevka-etoile) - App Font

## <a name="reflections"></a>Project Reflections
### Handling state with input fields
I was able to implement controlled components, by attaching the user's input in the text field to a state, so that every change was accounted for. This use of controlled components allows for React and state to manage rendering the user's words and keep an updated count for the stats display. This allowed for responsive rendering of stats in the UI

### Calculating stats
In order to calculate my stats, I linked the character count directly to the state variable with the user's input. Then for calculating word count, I implemented logic to take the input and split it into an array at the spaces, while also filtering out any leftover strings with a singular space to keep word count accurate. For average reading time, I looked online for how it is typically calculated which is 200-250 words per minute. For this stage of the project, I cut the calculation to 100 words per minute and set my max word count to 500 for ease of testing. I included a ternary to correctly pluralize minutes in the UI when the amount was more than 1.

### Challenges
One main challenge was trying to implement Material UI custom themes for the fonts I imported and understanding how to integrate and customize MUI components. To overcome it, I reviewed a few YouTube lessons to understand best practices as well as review the official documentation. 

Regarding state management, I had challenges as I originally had App.tsx host both components, instead of creating a character counter that would manage the calculations and logic for both the input and stats display component. This helped with being able to separate concerns more easily and clean up my code, leaving App.tsx as a wrapper for the app. While working on the real time word count calculations, I encountered a bug with my method as an empty string was still remaining in my array when no words were typed in the input I was using to determine word count, so i added filter to manage the edge case and keep an accurate count

## <a name="deployment"></a>Deployment
This app is hosted on GitHub Pages
[Live Site](https://magali-la.github.io/character-counter/)

### Instructions to run the project locally:

1. Clone the repository
2. Run `npm install` to retrieve dev dependencies
3. Run `npm run dev` to open the server
4. Write at least 25 words to see the word count style change

## <a name="author"></a>About The Author
Hi, I'm Magali. I'm a design-minded engineer with strengths in front-end development, accessibility, and UX design. I enjoy building products with accessibility in mind so that everyone can have access to information. This project allowed me to learn how to integrate Material UI customizations, styling, and components as well as reinforce skills with React, TypeScript, and state management.