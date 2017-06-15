var ScratchBlocks = require('scratch-blocks');

module.exports = {
    'motion_rotate': {
        /**
         * Block to change relative rotation.
         * @this ScratchBlocks.Block
         */
        init: function () {
            this.jsonInit({
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
                "nextStatement": null,
                "category": ScratchBlocks.Categories.motion,
                "colour": ScratchBlocks.Colours.motion.primary,
                "colourSecondary": ScratchBlocks.Colours.motion.secondary,
                "colourTertiary": ScratchBlocks.Colours.motion.tertiary
            });
        },
    },
    'motion_setrotation': {
        /**
         * Block to set absolute rotation.
         * @this ScratchBlocks.Block
         */
        init: function () {
            this.jsonInit({
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
                "nextStatement": null,
                "category": ScratchBlocks.Categories.motion,
                "colour": ScratchBlocks.Colours.motion.primary,
                "colourSecondary": ScratchBlocks.Colours.motion.secondary,
                "colourTertiary": ScratchBlocks.Colours.motion.tertiary
            });
        }
    },
    'motion_gotoxyz': {
        /**
         * Block to go to X, Y.
         * @this ScratchBlocks.Block
         */
        init: function () {
            this.jsonInit({
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
                "nextStatement": null,
                "category": ScratchBlocks.Categories.motion,
                "colour": ScratchBlocks.Colours.motion.primary,
                "colourSecondary": ScratchBlocks.Colours.motion.secondary,
                "colourTertiary": ScratchBlocks.Colours.motion.tertiary
            });
        }
    },
    'motion_changezby': {
        /**
         * Block to change Y.
         * @this ScratchBlocks.Block
         */
        init: function () {
            this.jsonInit({
                "message0": "change z by %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "DZ"
                    }
                ],
                "inputsInline": true,
                "previousStatement": null,
                "nextStatement": null,
                "category": ScratchBlocks.Categories.motion,
                "colour": ScratchBlocks.Colours.motion.primary,
                "colourSecondary": ScratchBlocks.Colours.motion.secondary,
                "colourTertiary": ScratchBlocks.Colours.motion.tertiary
            });
        }
    },
    'motion_setz': {
        /**
         * Block to set Y.
         * @this ScratchBlocks.Block
         */
        init: function () {
            this.jsonInit({
                "message0": "set z to %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "Z"
                    }
                ],
                "inputsInline": true,
                "previousStatement": null,
                "nextStatement": null,
                "category": ScratchBlocks.Categories.motion,
                "colour": ScratchBlocks.Colours.motion.primary,
                "colourSecondary": ScratchBlocks.Colours.motion.secondary,
                "colourTertiary": ScratchBlocks.Colours.motion.tertiary
            });
        }
    },
    'motion_zposition': {
        /**
         * Block to report Y.
         * @this ScratchBlocks.Block
         */
        init: function () {
            this.jsonInit({
                "message0": "z position",
                "output": "Number",
                "outputShape": ScratchBlocks.OUTPUT_SHAPE_ROUND,
                "category": ScratchBlocks.Categories.motion,
                "colour": ScratchBlocks.Colours.motion.primary,
                "colourSecondary": ScratchBlocks.Colours.motion.secondary,
                "colourTertiary": ScratchBlocks.Colours.motion.tertiary,
                "checkboxInFlyout": true
            });
        }
    },
    'looks_setscaleto': {
        /**
         * Block to set size
         * @this ScratchBlocks.Block
         */
        init: function () {
            this.jsonInit({
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
                "nextStatement": null,
                "category": ScratchBlocks.Categories.looks,
                "colour": ScratchBlocks.Colours.looks.primary,
                "colourSecondary": ScratchBlocks.Colours.looks.secondary,
                "colourTertiary": ScratchBlocks.Colours.looks.tertiary
            });
        }
    }
}