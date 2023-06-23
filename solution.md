# Solution details

- I used Angular 16 and Material because right now this is my favourite combination between framework and design library
- I coded unit testing to cover almost up than 90% in al metrics and added karma.conf to create coverage folder with reports
- I have added a constants file to avoid hardcode strings at components
- Due to the size of the app I decided to use a kind of parent/child component architecture for just sharing data and events between them using Input/Outputs from Angular avoiding  unnecessary use of services/requests or async
- I have implemented the new Standalone components configuration from Angular 16 update(this is my first time using this version, I used Angular 14 before) just to get rid of Modules and useless multiple module and components imports and injection
- About the filtering data functionallity I thought filtering and modifying a spread copy of the pet list data Array is better for performance than keep hiding/showing elements manipulating the dom, this is better because you render dinamically the data that is needed at the moment.
- I was thinking about doing a kind of view/component to control the error when the JSON pet data could not be retrieved, but in this case due to the app size I thought that controlling the error with the standard callback and console.log should be enough


# Run the app

1. Clone this repo
2. open terminal and cd root folder (petListApp)
3. run 'npm install' command in terminal
4. run 'npm install -g @angular/cli' command in terminal
5. run 'ng serve' command in terminal to run the app in localhost
6. run 'ng test' command in terminal to run the tests and see the coverage