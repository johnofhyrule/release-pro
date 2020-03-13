# Release Pro

## Why Release Pro?
Release Pro was created for engineering teams to use to help keep track of all the steps it takes for an app to be released for production. All the pertinent information is easily available for any member to find out about current releases and any previous release.

## User Story
As a member of an engineering team, I want to be able to quickly view information about our current app releases and the status of release candidates.

Engineering team members will be able to create an account and log in. The team member will be able to go to their profile and edit their information. 

The team member will land on the Release tab of the app. The releases will be shown in card form factor with current releases shown and previous releases shown under current releases.

Any team member can create a Release Form. Each release form will have information that is specific to that release such as type, OS, version, release manager, experiments, and notes. After a form has been submitted, additional fields will show to add incidents and post mortem notes.

Each member will have access to the Features Owner Doc. This doc will be a source of truth for all project owners. Members will be able to see all key stakeholders and relevant information relating to the feature such as slack channels, tech specs, product specs, testing specs, and key PR’s

## Wireframes
![landing:login](https://user-images.githubusercontent.com/8944581/76157162-0a3a5500-60ba-11ea-9d2b-e57356a6dc5b.JPG)
![signup:release](https://user-images.githubusercontent.com/8944581/76157163-0d354580-60ba-11ea-9f9a-59c598031fe5.JPG)
![profile:edit](https://user-images.githubusercontent.com/8944581/76157164-0dcddc00-60ba-11ea-81c4-55aef35e003f.JPG)
![release:edit](https://user-images.githubusercontent.com/8944581/76157166-0e667280-60ba-11ea-9c7e-0ca7c7c34767.JPG)
![owner:calendar](https://user-images.githubusercontent.com/8944581/76157167-0eff0900-60ba-11ea-997d-75e8f45a2824.JPG)

## Data Models
![app thoughts](https://user-images.githubusercontent.com/8944581/76157156-f8f14880-60b9-11ea-8eb8-a363eb0c7f70.JPG)

## ERD
![releaseERD](https://user-images.githubusercontent.com/8944581/76157141-bc255180-60b9-11ea-94fb-9a618d04dc74.JPG)

## Milestones
Create Frontend/Backend

Create Users

Create Release Forms

Create Features Owner Doc

Create Landing

## Dependencies Installed
bcryptjs

body-parser

connect-mongo

express

express-session

handsontable

mongodb

mongoose

nodemon

## Technologies
Frontend - HTML, CSS, JS

Backend - Mongoose, Express, Node

Auth - Users