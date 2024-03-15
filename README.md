
# Capitalize The Names

## 8 Kyu

Details found here:

```bash
Room: 03
Name: Mohamedamin
Link: https://github.com/SchoolOfCode/bc16-w6-hackathon-make-a-codewars-challenge-ma-amiin.git
Overview:
 * Hello challenger! You're a teacher at a school and you've notice that not all the names on the school register have been capitalized. 
 *  Your task is to write a function named `capitalizeNames` which takes in an array and returns back the array but with all the non-capitalized words having been capitalized
```


## Setting up

Follow this setup guide if you need help:

```bash
- start of by creating a seperate branch and call it your name ( be sure not to merge it back )
- In your new branch, "npm install" to install the node modules
- run the command "npm run test" so that you can check if the function you write is right in real time 
```

## Feedback

Some key feedbacks include:

```bash
- This project allowed me to get stuck into the ins and outs of testing and it's importance 
- Making sure not to ove complicate my tests was very key
- My function was simple enough to solve in few MVPs
```
## Solution

The solution to the problem can be found here:

```bash
export function capitalizeNames(array) {
  let newArr = []
    for(let i = 0; i < array.length; i++){
      let capitalizeWord = array[i].charAt(0).toUpperCase() + array[i].slice(1);
      newArr.push(capitalizeWord)
    }
    return newArr
  }
```