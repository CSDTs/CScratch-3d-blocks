var ScratchBlocks = require('scratch-blocks');

const commonProps = {
    "category": ScratchBlocks.Categories.pen,
    "colour": ScratchBlocks.Colours.pen.primary,
    "colourSecondary": ScratchBlocks.Colours.pen.secondary,
    "colourTertiary": ScratchBlocks.Colours.pen.tertiary
};

module.exports = {
    'pen_sphere': {
        /**
         * Block to draw sphere
         * @this ScratchBlocks.Block
         */
        init: function () {
            this.jsonInit(Object.assign({
                "message0": "sphere radius: %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "RADIUS"
                    }
                ],
                "previousStatement": null,
                "nextStatement": null
            }, commonProps));
        }
    },
    'pen_box': {
        /**
         * Block to draw cube
         * @this ScratchBlocks.Block
         */
        init: function () {
            this.jsonInit(Object.assign({
                "message0": "box width: %1 height: %2 depth: %3",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "WIDTH"
                    },
                    {
                        "type": "input_value",
                        "name": "HEIGHT"
                    },
                    {
                        "type": "input_value",
                        "name": "DEPTH"
                    }
                ],
                "previousStatement": null,
                "nextStatement": null
            }, commonProps));
        }
    },
    'pen_arc': {
        /**
         * Block to draw cube
         * @this ScratchBlocks.Block
         */
        init: function () {
            this.jsonInit(Object.assign({
                "message0": "arc width: %1 height: %2",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "WIDTH"
                    },
                    {
                        "type": "input_value",
                        "name": "HEIGHT"
                    }
                ],
                "previousStatement": null,
                "nextStatement": null
            }, commonProps));
        }
    },
    'pen_cylinder': {
        /**
         * Block to draw cube
         * @this ScratchBlocks.Block
         */
        init: function () {
            this.jsonInit(Object.assign({
                "message0": "cylinder top: %1 bottom: %2 height: %3",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "TOP"
                    },
                    {
                        "type": "input_value",
                        "name": "BOTTOM"
                    },
                    {
                        "type": "input_value",
                        "name": "HEIGHT"
                    }
                ],
                "previousStatement": null,
                "nextStatement": null
            }, commonProps));
        }
    },
    'pen_text': {
        /**
         * Block to draw cube
         * @this ScratchBlocks.Block
         */
        init: function () {
            this.jsonInit(Object.assign({
                "message0": "text %1 height: %2 depth: %3",
                "args0": [
                    {
                        "type": "field_input",
                        "name": "TEXT"
                    },
                    {
                        "type": "input_value",
                        "name": "HEIGHT"
                    },
                    {
                        "type": "input_value",
                        "name": "DEPTH"
                    }
                ],
                "previousStatement": null,
                "nextStatement": null
            }, commonProps));
        }
    }
};
/*
sphere radius: 50
box width: 50 height: 50 depth: 50
arc width: 100 height: 100
cylinder top: 50 bottom: 50
text [] size: 30 height: 3
*/