﻿# Architecture-EventDriven-Non-blocking-Node.js

This repository demonstrates key concepts of the Node.js architecture, including:

Event-Driven Programming: Using the EventEmitter class to handle custom events.

Non-Blocking I/O: Using asynchronous file reading with Node.js to illustrate its non-blocking capabilities.

Code Explanation

1. Event-Driven Programming

The first part of the code demonstrates how Node.js leverages an event-driven model using the EventEmitter class. This enables efficient handling of custom events.

How It Works

An instance of EventEmitter is created.

A listener is registered for the custom 'event' using .on().

The event is triggered with .emit('event'), invoking the listener and logging "yes i am working" to the console.

2. Non-Blocking I/O
   
The second part demonstrates how Node.js performs asynchronous file reading, showcasing its non-blocking I/O model.

How It Works

The fs.readFile function reads a file (file.txt) asynchronously.

The callback function is executed only after the file content is read. Errors (if any) are handled in the callback.

Meanwhile, the program logs "First i will give the output" immediately, demonstrating Node.js's non-blocking behavior.

Key Concepts

Event-Driven Architecture:

Node.js handles events asynchronously using the EventEmitter class.

Custom events can be defined and triggered using .on() and .emit().

Non-Blocking I/O:

Node.js performs file and network operations asynchronously.

While operations are in progress, the event loop continues executing other tasks.

Prerequisites

Install Node.js.

Create a file.txt file in the same directory as the script.
