var ScratchBlocks = require('scratch-blocks');

const commonProps = {
    "category": ScratchBlocks.Categories.looks,
    "colour": ScratchBlocks.Colours.looks.primary,
    "colourSecondary": ScratchBlocks.Colours.looks.secondary,
    "colourTertiary": ScratchBlocks.Colours.looks.tertiary
};

module.exports = {
    'looks_setscaleto': {
        /**
         * Block to set size
         * @this ScratchBlocks.Block
         */
        init: function () {
            this.jsonInit(Object.assign({
                "message0": "set scale to x: %1 y: %2 z: %3",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "SCALEX"
                    },
                    {
                        "type": "input_value",
                        "name": "SCALEY"
                    },
                    {
                        "type": "input_value",
                        "name": "SCALEZ"
                    }
                ],
                "previousStatement": null,
                "nextStatement": null
            }, commonProps));
        }
    }
}