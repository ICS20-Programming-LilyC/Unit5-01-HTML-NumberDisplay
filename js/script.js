// Copyright (c) 2023 Lily Carroll All rights reserved
//
// Created by: Lily C
// Created on: 05/03/2023
// This file contains the JS functions for index.html

"use strict"

function numbersSent() {
  
  // Establishing empty variables for numbers and message (for later).
  let numbers = "";
  let message = "";

  // Getting the minimum and maxiumum input.
  let minNumber = parseInt(document.getElementById("min-number").value);
  let maxNumber = parseInt(document.getElementById("max-number").value);

  // Initializing counter variable to minNumber.
  let counter = minNumber;

  // If statement to make sure that maximum is greater than minumum.
  if (minNumber > maxNumber) {
    message = "Please make sure that your minimum value is less than or equal to your maximum value.";
  }
    
  // Else, make list of numbers.
  else {

  // While loop that provides the range of numbers determined by user.
    while ((counter >= minNumber) && (counter <= maxNumber)) {
      numbers = numbers + counter + "<br>";
      counter = counter + 1;
      message = "Below are all the numbers between your minimum and your maximum numbers that you entered:<br><br>" + numbers;
    }
  }

  // Displaying the results (the range of numbers) back to the user
  document.getElementById("results").innerHTML = message;
}