var ngpo = require('ngpo'); 
var ngpoUiSelect = require('../lib/index.js'); 

var els = {
  personInput: {
    locator: by.model('person.selected'),
    po: ngpoUiSelect.makeUiSelectPo},
  personName: {
    locator: by.binding('person.selected.name'),
    po: ngpo.makeTextPo
  },
  colorsInput: {
    locator: by.model('multipleDemo.colors'),
    po: ngpoUiSelect.makeUiSelectMultiPo},
  blankets: {
    locator: by.repeater('blanket in blankets'),
    po: ngpo.makeListPo,
    els: {
      blanket: {
        locator: by.model('blanket'),
        po: ngpoUiSelect.makeUiSelectPo
      }
    }
  },
  crayons: {
    locator: by.repeater('crayon in crayons'),
    po: ngpo.makeListPo,
    els: {
      crayon: {
        locator: by.model('crayon'),
        po: ngpoUiSelect.makeUiSelectMultiPo
      }
    }
  }
}; 

var pos = ngpoUiSelect.makePos(els); 

module.exports = pos; 

