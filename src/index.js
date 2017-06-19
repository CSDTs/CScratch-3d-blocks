var Blockly = require('scratch-blocks');
var NewBlocks = require('./blocks');
var Toolbox = require('raw-loader!./default_toolbox.xml');

for (opcode in NewBlocks) {
    if (NewBlocks.hasOwnProperty(opcode)) {
        Blockly.Blocks[opcode] = NewBlocks[opcode];
    }
}

Blockly.Blocks.defaultToolbox = Toolbox;

module.exports = Blockly;
