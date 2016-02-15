var testPo = require('./test.po.js');

describe('ngpo-ui-select', function() {

    it('makeUiSelectPo should have a working enterValue() method', function() {
      browser.get('/');
      testPo.personInput.enterValue('Amalie'); 
      expect(testPo.personName.getValue()).toBe('Amalie'); 

      testPo.personInput.enterValue('Samantha'); 
      expect(testPo.personName.getValue()).toBe('Samantha'); 
    });  

    it('makeUiSelectPo should have a working clear() method', function() {
      testPo.personInput.enterValue('Amalie'); 
      expect(testPo.personName.getValue()).toBe('Amalie'); 

      testPo.personInput.clear(); 
      expect(testPo.personName.getValue()).toBe(''); 

    });  

    it('makeUiSelectPo should have a working getValue() method', function() {
      testPo.personInput.enterValue('Samantha'); 
      expect(testPo.personName.getValue()).toBe('Samantha'); 
      expect(testPo.personInput.getValue()).toBe('Samantha'); 
    });  


    it('makeUiSelectMultiPo should have a working enterValue() method', function() {
      testPo.colorsInput.enterValue('Red'); 
      expect(testPo.colorsInput.getValue()).toContain('Red');

      testPo.colorsInput.enterValue('Green'); 
      expect(testPo.colorsInput.getValue()).toContain('Red');
      expect(testPo.colorsInput.getValue()).toContain('Green');

    });  


    it('makeUiSelectMultiPo should have a working clear() method', function() {
      expect(testPo.colorsInput.getValue()).toContain('Red');
      expect(testPo.colorsInput.getValue()).toContain('Green');
      testPo.colorsInput.clear(); 
      expect(testPo.colorsInput.getValue()).toBe('');

    });  

    it('makeUiSelectPo should work within a list', function() {
      expect(testPo.blankets.getRow(0).blanket.getValue()).toBe('Blue');

      expect(testPo.blankets.getRow(2).blanket.getValue()).toBe('Maroon');
      testPo.blankets.getRow(2).blanket.clear();
      testPo.blankets.getRow(2).blanket.enterValue('Umbra');
      expect(testPo.blankets.getRow(2).blanket.getValue()).toBe('Umbra');

    });  

    it('makeUiSelectMultPo should work within a list', function() {
      expect(testPo.crayons.getRow(0).crayon.getValue()).toContain('Green');
      expect(testPo.crayons.getRow(0).crayon.getValue()).toContain('Yellow');

      expect(testPo.crayons.getRow(2).crayon.getValue()).toContain('Maroon');
      testPo.crayons.getRow(2).crayon.clear();
      testPo.crayons.getRow(2).crayon.enterValue('Umbra');
      expect(testPo.crayons.getRow(2).crayon.getValue()).toContain('Umbra');

    });  



});  // end of inner describe 
