# 
Created by Arielle Posadas and Kelly Shen for [!Freetail Hacker's Learn-a-thon 2021](https://freetail-hackers-learnathon.devpost.com/)!

## Inspiration
Every year, 1.5 million shelter animals are put down because they can’t find an owner. With our project, Critter Picker, we aim to make the process of finding a shelter pet as easy as possible to give these critters a loving home.

## Built With
React, Javascript, Firebase, CSS, HTML, PetFinder API
 
## What It Does
Using the PetFinder API, we allow the user to input their location, preferred species of their desired pet, and then the pet’s size and gender for us to make a query. The website will show pets available that match the user's preferences, obtained from the PetFinders database. The user can click on one of their pet matches to travel to the pet’s profile on PetFinder.com, where we hope they will find themselves with a happy match.

We intended the app’s interface to be similar to apps such as Tinder to make the searching process easier for the user. Unfortunately, we didn’t have enough time to implement swiping for “yes” and “no,” but we hope to do so in the future!
 
## What We Learned
From this Learn-a-thon, we learned so much about Python, AWS, and Databases, and we were excited to get a chance to actually deploy our website on Firebase! We both learned a great deal about making API calls and used this as an opportunity to brush up on or React and web development skills.
 
## Challenges
One of the largest struggles we had was getting the PetFinder API call to work and then connecting it to our website. We tried using axios, but we realized we needed to use fetch to get it functioning correctly due to something related to CORS. Turns out that the PetFinder API token expires every hour, so Kelly found herself needing to run back and forth to get a new API Token each time the old one expired! In the end, we got the PetFinder API to work with our app, and we’re super happy about that.

Other challenges included designing our app and finishing everything in time. Neither of us are graphic designers, so designing our app together on Figma was a challenging and new experience for both of us. The project's scope quickly got out of hand as we added more libraries (Redux, Firebase, React Bootstrap, and even React Three Fiber) so we needed to prune back a little in order to have something ready to submit.

Lastly, we both needed to figure out how to deploy our app to Firebase, since neither of us were experienced in that aspect as well. After a little bit of elbow grease, we actually have a public working website that you can visit, linked below in the "Try it out" section!
 
## What’s Next
- We want to make the app’s interface more similar to Tinder so the user can swipe on their preferences
- User authentication with Firebase to allow users to return to our website and keep track of preferences and past swipes
- General polishing up on UI
