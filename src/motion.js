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
                "category": ScratchBlocks.Categories.motion,
                "extensions": ["colours_motion", "shape_statement"]
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
                "category": ScratchBlocks.Categories.motion,
                "extensions": ["colours_motion", "shape_statement"]
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
                "category": ScratchBlocks.Categories.motion,
                "extensions": ["colours_motion", "shape_statement"]
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
                "category": ScratchBlocks.Categories.motion,
                "extensions": ["colours_motion", "shape_statement"]
            });
        }
    },
    'motion_setz': {
        /**
         * Block to set Z.
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
                "category": ScratchBlocks.Categories.motion,
                "extensions": ["colours_motion", "shape_statement"]
            });
        }
    },
    'motion_zposition': {
        /**
         * Block to report Z.
         * @this ScratchBlocks.Block
         */
        init: function () {
            this.jsonInit({
                "message0": "z position",
                "category": ScratchBlocks.Categories.motion,
                "checkboxInFlyout": true,
                "extensions": ["colours_motion", "output_number"]
            });
        }
    }
};