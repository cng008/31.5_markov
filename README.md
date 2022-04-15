# **Markov**

## **Overview**

The main feature of this application is an algorithm for generating realistic machine-made text from an original source text.

For example, if we feed in the source text of “Alice’s Adventures in Wonderland”, we might get output like this:

> _‘You are old,’ said the Dormouse, who was talking. Alice could only see her. She is such a new pair of white kid gloves and the blades of grass, but she remembered the number of bathing machines in the kitchen that did not like the wind, and was just beginning to grow up any more if you’d like it put the Dormouse again, so she went nearer to make out that it was certainly English. ‘I don’t quite understand you,’ she said, ‘for her hair goes in such confusion that she was looking down with it._

(that text isn’t directly in the source book, but it’s built via an algorithm to be similar to the text in the book).

# **Markov Machines**

A Markov Machine emits output of a “Markov Chain.”

A Markov Chain is a chain of possible outcomes, given a particular “state”.

For example, consider the phrase “the cat in the hat is in the hat”. We could build a table of each word in this phrase, along with the word that comes after that phrase:

the | cat, hat, hat  
cat | in  
in | the, the  
hat | is, null  
is | in

To emit realistic-but-random text, we could pick a starting word randomly (say, “in”). Then we would:

find all words that can come after that word
pick one of those next-words randomly
if we picked null, we’ve reached the end of the chain, so stop
otherwise, restart at step 1
For example, from that simple phrase, we could find:

“in the cat in the hat”
“in the hat is in the hat”
“in the cat in the cat in the cat in the hat”

## Technologies Used:

- [Node.js](https://nodejs.org/en/)
- [Axios](https://axios-http.com/docs/intro)
- [Jest](https://jestjs.io)
- [VSCode](https://code.visualstudio.com/docs)
