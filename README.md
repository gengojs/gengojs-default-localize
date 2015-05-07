# gengojs-default-localize
The default localisation plugin for gengojs

The default accept plugin for gengo.js.

[![Build Status](https://travis-ci.org/iwatakeshi/gengojs-default-localize.svg?branch=master)](https://travis-ci.org/iwatakeshi/gengojs-default-localize)

This module is a "plugified" version of [Tokei](https://github.com/iwatakeshi/tokei) [gengo.js](https://github.com/iwatakeshi/gengojs).

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

* `this.localize` (Type:Class/Function)

**Example**:

```js
// Assuming core's context is in the API class
var _this = this.context;
// In the localization API
function localizeAPI(){
	// Context
	return _this.localize.apply(this, arguments);
}
```

For more documentation, visit the [GitHub page](https://github.com/iwatakeshi/tokei).

## Dependencies

`this.header.getLocale()` from `Header` class

## Debug

None

## Contribute

Feel free to contribute or even fork the project. This plugin has been
written in ES6 and can be seen under `lib/index.js`. If you would like
to contribute to the localization library, visit
[Tokei's GitHub page](https://github.com/iwatakeshi/tokei).
