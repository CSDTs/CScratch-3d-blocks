var ScratchBlocks = require('scratch-blocks');

module.exports = {
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
                "category": ScratchBlocks.Categories.looks,
                "extensions": ["colours_looks", "shape_statement"]
            });
        }
    },
    'looks_setcamerato': {
        /**
         * Block to set camera position
         * @this ScratchBlocks.Block
         */
        init: function () {
            this.jsonInit({
                "message0": "set camera to x: %1 y: %2 z: %3",
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
                "category": ScratchBlocks.Categories.looks,
                "extensions": ["colours_looks", "shape_statement"]
            });
        }
    },
    'looks_changecameraxby': {
        /**
         * Block to change camera x position
         * @this ScratchBlocks.Block
         */
        init: function () {
            this.jsonInit({
                "message0": "change camera x by %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "DX"
                    }
                ],
                "category": ScratchBlocks.Categories.looks,
                "extensions": ["colours_looks", "shape_statement"]
            });
        }
    },
    'looks_changecamerayby': {
        /**
         * Block to change camera y position
         * @this ScratchBlocks.Block
         */
        init: function () {
            this.jsonInit({
                "message0": "change camera y by %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "DY"
                    }
                ],
                "category": ScratchBlocks.Categories.looks,
                "extensions": ["colours_looks", "shape_statement"]
            });
        }
    },
    'looks_changecamerazby': {
        /**
         * Block to change camera z position
         * @this ScratchBlocks.Block
         */
        init: function () {
            this.jsonInit({
                "message0": "change camera z by %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "DZ"
                    }
                ],
                "category": ScratchBlocks.Categories.looks,
                "extensions": ["colours_looks", "shape_statement"]
            });
        }
    },
    'looks_turncameraaroundx': {
        /**
         * Block to rotate camera around x-axis
         * @this ScratchBlocks.Block
         */
        init: function () {
            this.jsonInit({
                "message0": "turn camera %1 deg around x-axis",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "DEGREES"
                    }
                ],
                "category": ScratchBlocks.Categories.looks,
                "extensions": ["colours_looks", "shape_statement"]
            });
        }
    },
    'looks_turncameraaroundy': {
        /**
         * Block to rotate camera around y-axis
         * @this ScratchBlocks.Block
         */
        init: function () {
            this.jsonInit({
                "message0": "turn camera %1 deg around y-axis",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "DEGREES"
                    }
                ],
                "category": ScratchBlocks.Categories.looks,
                "extensions": ["colours_looks", "shape_statement"]
            });
        }
    },
    'looks_turncameraaroundz': {
        /**
         * Block to rotate camera around z-axis
         * @this ScratchBlocks.Block
         */
        init: function () {
            this.jsonInit({
                "message0": "turn camera %1 deg around z-axis",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "DEGREES"
                    }
                ],
                "category": ScratchBlocks.Categories.looks,
                "extensions": ["colours_looks", "shape_statement"]
            });
        }
    }
};