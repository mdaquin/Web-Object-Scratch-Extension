# Web Object Scratch Extension
A simple scratch extension that allows access to values of JSON objects online.

## What does it do 
This simple javascript extension allows you to access the attributes of JSON objects online from Scratch, from their URL and simple representations of their properties. It adds blocks for declaring objects and properties, and access their values that can be assigned to variables or used directly in expressions to change, for example, the size, direction, position of sprites.

## How to install it
Because this is not an official extension, you need to take some steps to use it:
  1- Create or open a projet on scratch.mit.edu
  2- Open the javascript console in you browser
  3- copy-paste the javascript code of the extension in the console
Once you have done that, new blocks should appear in the "More blocks" section of scratch.
If you have opened a project that already uses this extension, but it is not loaded, the corresponding block will show "undefined". Reproducing the steps above should fix that.

## How to use it
Once you have installed it, the use a relativly simple. You can define an object using its URL, asusming that this URL would respond with JSON code if called. You can define a property using the JSONPath to access the value your are looking for in the corresponding object. For example, getting the value of the first item in a list of search results might look something like "results[0].value"

## Examples and other documentations
... will come soon.
