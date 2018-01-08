# match-all

return all regexp-match objects for a string

## install

```
npm i @danielberndt/match-all;
```

## usage:

```javascript
import matchAll from "@danielberndt/match-all";

const matches = matchAll("f:1 o:2 o:3", /\w:(\d+)/);
console.log(matches.length); // -> 3
console.log(matches[0][1]); // -> '1'
```
