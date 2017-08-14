# ngpo-ui-select
Create page objects with helper functions for [AngularJs Protractor](http://www.protractortest.org/#/) tests for [angular-ui ui-select](https://github.com/angular-ui/ui-select) using [ngpo](https://github.com/tonybranfort/ngpo).

* `makeUiSelectPo` returns a protractor element that has these methods (all other Protractor methods are available and not impacted) 
    - enterValue
    - getValue
    - clear
    - isVisible - true if both isPresent and isDisplayed
* `makeUiSelectMultiPo` returns a protractor element that has these methods (all other Protractor methods are available and not impacted) 
    - enterValue
    - getValue - Gets string with all values; suggest expect(...).toContain(); 
    - clear
    - isVisible - true if both isPresent and isDisplayed
* `makePos` passthrough for [ngpo](https://github.com/tonybranfort/ngpo) makePos function 

**ngpo-ui-select v2.x**: requires nodejs 6.x or greater (no breaking api changes from ngpo-ui-select v1.x).  Tested with angularJs 1.5.0, angular-ui-select 0.19, Protractor 5.1.2, chromedriver 2.31. 

**ngpo-ui-select v1.x**: Tested with Protractor versions 2.5 and 5.1.

# Examples

Page Object file using ngpo template
```javascript
// person.po.js
var ngpoUis = require('ngpo-ui-select'); 

var els = {
  personInput: {
    locator: by.model('person.selected'),
    po: ngpoUiSelect.makeUiSelectPo},
  colorsInput: {
    locator: by.model('multipleDemo.colors'),
    po: ngpoUiSelect.makeUiSelectMultiPo}    
};

var pos = ngpoUis.makePos(els); 

module.exports = pos; 

```

Protractor test: 
```javascript
var personPo = require('person.po.js');

describe('person', function() {

    it('should allow name to be selected and cleared', function() {
      browser.get('/');

      testPo.personInput.enterValue('Amalie'); 
      expect(testPo.personInput.getValue()).toBe('Amalie'); 

      testPo.personInput.clear(); 
      expect(testPo.personInput.getValue()).toBe(''); 

    });

    it('should colors (multiple) to be selected and cleared', function() {

      testPo.colorsInput.enterValue('Red');
      // getValue() on makeUiSelectMultiPo returns a string with all values
      expect(testPo.colorsInput.getValue()).toContain('Red'); 

      testPo.colorsInput.enterValue('Green'); 
      expect(testPo.colorsInput.getValue()).toContain('Red'); 
      expect(testPo.colorsInput.getValue()).toContain('Green'); 

      testPo.colorsInput.clear(); 
      expect(testPo.colorsInput.getValue()).toBe(''); 

    });

});

```

See [test\test.js](https://github.com/tonybranfort/ngpo-ui-select/blob/master/test/test.js) and [test\test.po.js](https://github.com/tonybranfort/ngpo-ui-select/blob/master/test/test.po.js) for more examples. 


