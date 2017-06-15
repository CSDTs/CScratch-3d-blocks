var Blockly = require('scratch-blocks');
var NewBlocks = require('./blocks');
var Toolbox = require('./default_toolbox');

for (opcode in NewBlocks) {
    if (NewBlocks.hasOwnProperty(opcode)) {
        Blockly.Blocks[opcode] = NewBlocks[opcode];
    }
}

Blockly.Blocks.defaultToolbox = Toolbox;

module.exports = Blockly;
