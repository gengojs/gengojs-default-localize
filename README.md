# gengojs-default-localize
The default localisation plugin for gengojs

The default accept plugin for gengo.js, the best i18n library for Express, Koa, Hapi.*

[![Build Status](https://travis-ci.org/iwatakeshi/gengojs-default-localize.svg?branch=master)](https://travis-ci.org/iwatakeshi/gengojs-default-localize)

This module is a "plugified" version of [tokei](https://github.com/iwatakeshi/tokei) for the upcoming [gengo.js](https://github.com/iwatakeshi/gengojs) **1.0.0**.

An example usage with options is:

```js

var gengo = require('gengojs');
var localize = require('gengojs-default-header');

/* In whatever framework you are using: */
 
// I'll use express for an example
// but it shouldn't matter

var app = require('express')();
app.use(gengo({
   // Specify the type
   // of option to modify
	localize:{
		/* options */
	}
},/*localize()*/));
```
The default localize is already included in gengojs so you should not have to require it.


##Options

None

## Internal API

None

For more documentation, visit the [GitHub page](https://github.com/iwatakeshi/tokei).

## Dependencies

`getLocale()` from `Header` class

## Debug

None