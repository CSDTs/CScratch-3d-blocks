var ScratchBlocks = require('scratch-blocks');

const commonProps = {
    "category": ScratchBlocks.Categories.motion,
    "colour": ScratchBlocks.Colours.motion.primary,
    "colourSecondary": ScratchBlocks.Colours.motion.secondary,
    "colourTertiary": ScratchBlocks.Colours.motion.tertiary
};

module.exports = {
    'motion_rotate': {
        /**
         * Block to change relative rotation.
         * @this ScratchBlocks.Block
         */
        init: function () {
            this.jsonInit(Object.assign({
                "message0": "rotate by x: %1 y: %2 z: %3 degrees",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "DEGREESX"
                    },
                    {
                        "type": "input_value",
                        "name": "DEGREESY"
                    },
                    {
                        "type": "input_value",
                        "name": "DEGREESZ"
                    }
                ],
                "inputsInline": true,
                "previousStatement": null,
                "nextStatement": null
            }, commonProps));
        },
    },
    'motion_setrotation': {
        /**
         * Block to set absolute rotation.
         * @this ScratchBlocks.Block
         */
        init: function () {
            this.jsonInit(Object.assign({
                "message0": "set rotation to x: %1 y: %2 z: %3 degrees",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "DEGREESX"
                    },
                    {
                        "type": "input_value",
                        "name": "DEGREESY"
                    },
                    {
                        "type": "input_value",
                        "name": "DEGREESZ"
                    }
                ],
                "inputsInline": true,
                "previousStatement": null,
                "nextStatement": null
            }, commonProps));
        }
    },
    'motion_gotoxyz': {
        /**
         * Block to go to X, Y.
         * @this ScratchBlocks.Block
         */
        init: function () {
            this.jsonInit(Object.assign({
                "message0": "go to x: %1 y: %2 z: %3",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "X"
                    },
                    {
                        "type": "input_value",
                        "name": "Y"
                    },
                    {
                        "type": "input_value",
                        "name": "Z"
                    }
                ],
                "inputsInline": true,
                "previousStatement": null,
                "nextStatement": null
            }, commonProps));
        }
    },
    'motion_changezby': {
        /**
         * Block to change Y.
         * @this ScratchBlocks.Block
         */
        init: function () {
            this.jsonInit(Object.assign({
                "message0": "change z by %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "DZ"
                    }
                ],
                "inputsInline": true,
                "previousStatement": null,
                "nextStatement": null
            }, commonProps));
        }
    },
    'motion_setz': {
        /**
         * Block to set Y.
         * @this ScratchBlocks.Block
         */
        init: function () {
            this.jsonInit(Object.assign({
                "message0": "set z to %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "Z"
                    }
                ],
                "inputsInline": true,
                "previousStatement": null,
                "nextStatement": null
            }, commonProps));
        }
    },
    'motion_zposition': {
        /**
         * Block to report Y.
         * @this ScratchBlocks.Block
         */
        init: function () {
            this.jsonInit(Object.assign({
                "message0": "z position",
                "output": "Number",
                "outputShape": ScratchBlocks.OUTPUT_SHAPE_ROUND,
                "checkboxInFlyout": true
            }, commonProps));
        }
    }
};