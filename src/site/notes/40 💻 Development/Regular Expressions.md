---
{"dg-publish":true,"permalink":"/40-development/regular-expressions/","noteIcon":"","created":"2024.08.29 17:17","updated":"2024.09.09 16:17"}
---


## Regular Expressions

A way to more "generically" search for something inside of a string.

### Types of Characters

-   Literal characters: Literally the character so `a` is literally lowercase "a".
-   Meta characters: Characters that represent sets of characters so `\d` means "any single digit".

### Meta Characters

#### Single Characters

-   `\d`: "digit" or 0-9
-   `\w`: "word" or A-Z, a-z, 0-9
-   `\s`: "whitespace" or spaces and tabs
-   `.`: Any character whatsoever
    -   Example of a "greedy" character because it just keeps going and finds all characters.
-   Capital versions are negations so `\D` is "not a digit", `W` is "not a word", etc.

#### Quantifiers

-   `*`: 0 or more
-   `+`: 1 or more
-   `?`: 0 or 1
-   `\w{5}`: Find all 5 letter words

#### Position

-   `^`: Beginning of line
-   `$`: End of line

### Alternation

-   `(com|net|edu)`: Matches "com" OR "net" OR "edu"

### Capture Groups

-   Groups results so you can reference the groups later

### Back Reference
