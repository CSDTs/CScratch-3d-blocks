var ScratchBlocks = require('scratch-blocks');

module.exports = {
    'pen_sphere': {
        /**
         * Block to draw sphere
         * @this ScratchBlocks.Block
         */
        init: function () {
            this.jsonInit({
                "message0": "sphere radius: %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "RADIUS"
                    }
                ],
                "category": ScratchBlocks.Categories.pen,
                "extensions": ["colours_pen", "shape_statement"]
            });
        }
    },
    'pen_box': {
        /**
         * Block to draw cube
         * @this ScratchBlocks.Block
         */
        init: function () {
            this.jsonInit({
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
                "category": ScratchBlocks.Categories.pen,
                "extensions": ["colours_pen", "shape_statement"]
            });
        }
    },
    'pen_arc': {
        /**
         * Block to draw cube
         * @this ScratchBlocks.Block
         */
        init: function () {
            this.jsonInit({
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
                "category": ScratchBlocks.Categories.pen,
                "extensions": ["colours_pen", "shape_statement"]
            });
        }
    },
    'pen_cylinder': {
        /**
         * Block to draw cube
         * @this ScratchBlocks.Block
         */
        init: function () {
            this.jsonInit({
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
                "category": ScratchBlocks.Categories.pen,
                "extensions": ["colours_pen", "shape_statement"]
            });
        }
    },
    'pen_text': {
        /**
         * Block to draw cube
         * @this ScratchBlocks.Block
         */
        init: function () {
            this.jsonInit({
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
                "category": ScratchBlocks.Categories.pen,
                "extensions": ["colours_pen", "shape_statement"]
            });
        }
    }
};