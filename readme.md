# Coding Problems Solutions - TANDEMLOOP

This repository contains solutions to four coding problems using **JavaScript**. Each solution is simple, clear, and easy to understand.

**Prerequisite:**  
Kindly ensure that **Node.js** is installed on your local machine before running the code.

---

## Problem 1: Calculator Using Class

**Description:**  
Create a calculator that can do Addition, Subtraction, Multiplication, and Division.

**Inputs:**  
- `a` (number) – first number  
- `b` (number) – second number  
- `operation` (string) – `"add"`, `"sub"`, `"mul"`, `"div"`

**Example:**  
const calc = new Calculator(5, 3, "add");
console.log(calc.calculate()); // 8

**How it works:**
// Uses a Calculator class
// calculate() method checks the operation and returns the result

**Run Command**
node Problem-1.js <a> <b> <operation>
Example: node Problem-1.js 10 5 add

## Problem 2: Odd Numbers Series (1, 3, 5...)

**Description:**  
Given a number `a`, print the first `a` odd numbers.

**Example:**  
- Input: `1` → Output: `1`  
- Input: `3` → Output: `1, 3, 5`  
- Input: `4` → Output: `1, 3, 5, 7`  

**How it works:**  
- Loop through numbers and select odd numbers until `a` numbers are printed

**Run Command**
node Problem-2.js <a>
Example: node Problem-2.js 10


## Problem 3: Odd Numbers Series (Grouped)

**Description:**
Given a number a, print odd numbers in groups that repeat every two steps.

**Example:**
Input: 1 → Output: 1
Input: 2 → Output: 1
Input: 3 → Output: 1, 3, 5
Input: 4 → Output: 1, 3, 5
Input: 5 → Output: 1, 3, 5, 7, 9

**How it works:**
Uses loops and patterns to print odd numbers in groups

**Run Command**
node Problem-3.js <a>
Example: node Problem-2.js 10


## Problem 4: Count Multiples in Array

**Description:**
Count how many numbers in an array are divisible by numbers 1 to 9.

**Example:**
Input: [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30]
Output: {1: 11, 2: 8, 3: 4, 4: 4, 5: 3, 6: 2, 7: 0, 8: 1, 9: 1}

**How it works:**
Loop through array and check divisibility for 1 to 9
Store counts in an object

**Run Command**
node Problem-4.js <comma separated numbers>
Example: node Problem-3.js 1,2,8,9,12,46,76,82,15,20,30


Author: Ayush Patidar
Portfolio: https://ayush-patidar-portfolio.vercel.app