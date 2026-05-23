# TASK MANAGER DASHBOARD (TO-DO APP) 

## Overview
A simple web application that helps users keep track of their daily tasks. Users can create new tasks, update descriptions, mark things as finished, and delete items they no longer need. The app automatically saves all tasks to the web browser so no information is lost when the page refreshes. It also automatically reorganizes the layout to fit perfectly on desktops, tablets, and smartphones.

---

## Live Demo
[View Live Project](https://pattyruk.github.io/todo/)

---

## Core Features
* **REDUCER:** Uses a single master function to handle all task tasks (adding, editing, and deleting) safely without mixing up data.
* **Smart Grid Layout:** Displays tasks in a neat 4-column layout on computers. This automatically shrinks to fewer columns on smaller screens so it stays easy to read.
* **In-Place Editing:** Modifying a task updates its description and sets a new date while keeping the task in its original spot in the list.
* **Input Checks:** Includes automated validation rules that stop users from submitting empty tasks and shows a helpful error message.
* **Automatic Saving:** Saves your tasks directly to your local storage in the web browser memory so your tasks remain even when you close the tab.
* **Task Indicators:** Changes the background color, border color, and crosses out the text when a task is marked as completed.

---

## Tools Used
* **React:** The main building block software used to create the user interface and run the development app.
* **React Hook Form:** A small assistant tool that handles form typing, text checks, and resetting text fields.
* **React Icons:** A set of clean symbols used for the application buttons (checkmarks, arrows, pencils, and trash cans).
* **Local Storage API:** The browser's built-in memory layer used to save task lists without needing an external account.
* **CSS Variables:** A central style sheet system used to set up the color codes and handle mobile layout screens.

---

## State Reducer Operations

The master function inside the app handles the main app logic that watches for five specific commands:
1. `LOAD`: Pulls your saved list out of the browser memory when the webpage opens.
2. `ADD`: Takes a new task description, gives it a unique number ID, attaches today's date, and adds it to the list.
3. `DELETE`: Filters through the list and throws away the item you clicked to remove.
4. `COMPLETE`: Flips a task between "unfinished" and "completed" to change its layout colors.
5. `UPDATE`: Replaces an old task text description with a new one and adds a fresh date badge without moving the item around.