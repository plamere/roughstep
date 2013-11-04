{
    "intro": {
        "first": {
            "patterns": [],
            "description": "first",
            "next": [
                { "prob":10, "next": "s0" },
                { "prob":10, "next": "s0a" }
            ]
        },
        "s0": {
                "patterns": ["...."],
                "description": "silence",
                "next": [
                    { "prob":20, "next": "s0" },
                    { "prob":10, "next": "s0b" },
                    { "prob":10, "next": "s0a" }
                ]
            },
        "s0a": {
                "patterns": [
                        "g.g.",
                        "...."
                    ],
                "description": "warm up\ncouple of grunts",
                "next": [
                    { "prob":10, "next": "s0a" },
                    { "prob":10, "next": "s0b" },
                    { "prob":10, "next": "s0c" },
                    { "prob":20, "next": "s1" }
                ]
            },
        "s0b": {
                "description": "single grunt",
                "patterns": [
                        "g.*.",
                        "...."
                    ],
                "next": [
                    { "prob":10, "next": "s0a" },
                    { "prob":10, "next": "s0b" },
                    { "prob":10, "next": "s1" }
                ]
            },
        "s0c": {
                "description": "bark and grunt",
                "patterns": [
                        "*.g."
                    ],
                "next": [
                    { "prob":10, "next": "s0c" },
                    { "prob":4, "next": "s0a" }
                ]
            },
        "s1": {
                "description": "Steady state\nbark yip bark yip",
                "patterns": [
                        "*.*.",
                        ".y.y"
                    ],
                "next": [
                    { "prob":10, "next": "s1" },
                    { "prob":10, "next": "s2" },
                    { "prob":10, "next": "s3" },
                    { "prob":10, "next": "s4" },
                    { "prob":5, "next": "s1a" },
                    { "prob":5, "next": "s1b" },
                    { "prob":3, "next": "predrop" }
                ]
            },
        "s1a": {
                "description": "woof yip woof yip",
                "patterns": [
                        "1.1.",
                        ".y.y"
                    ],
                "next": [
                    { "prob":10, "next": "s1a" },
                    { "prob":10, "next": "s1b" },
                    { "prob":10, "next": "s1" }
                ]
            },
        "s1b": {
                "description": "woof/bark yip woof/bark yip",
                "patterns": [
                        "1.1.",
                        "*.*.",
                        ".y.y"
                    ],
                "next": [
                    { "prob":10, "next": "s1b" },
                    { "prob":10, "next": "s1a" },
                    { "prob":10, "next": "s1" },
                    { "prob":10, "next": "s1d" }
                ]
            },
        "s1c": {
                "description": "woof yip bark yip",
                "patterns": [
                        "1.*.",
                        ".y.y"
                    ],
                "next": [
                    { "prob":10, "next": "s1c" },
                    { "prob":10, "next": "s1a" },
                    { "prob":10, "next": "s1b" },
                    { "prob":10, "next": "s1d" }
                ]
            },
        "s1d": {
                "description": "bark yip woof yip",
                "patterns": [
                        "*.1.",
                        ".y.y"
                    ],
                "next": [
                    { "prob":10, "next": "s1d" },
                    { "prob":10, "next": "s1c" },
                    { "prob":10, "next": "s1a" },
                    { "prob":10, "next": "s1b" },
                    { "prob":10, "next": "s1e" }
                ]
            },
        "s1e": {
                "description": "bark grunt woof grunt",
                "patterns": [
                        "*.1.",
                        ".g.g"
                    ],
                "next": [
                    { "prob":10, "next": "s1e" },
                    { "prob":4, "next": "s1d" }
                ]
            },
        "s2": {
                "description": "bark yip bark .. yip",
                "patterns": [
                        "*.*.",
                        "..y...yy"
                    ],
                "next": [
                    { "prob":10, "next": "s1" }
                ]
            },
        "s3": {
                "description": "grunt yip grunt yip",
                "patterns": [
                        "g.g.",
                        ".y.y"
                    ],
                "next": [
                    { "prob":10, "next": "s3" },
                    { "prob":1, "next": "s3a" },
                    { "prob":10, "next": "s1" }
                ]
            },
        "s3a": {
                "description": "grunt/monster yip grunt yip",
                "patterns": [
                        "g.g.",
                        "my.y"
                    ],
                "next": [
                    { "prob":10, "next": "s3" }
                ]
            },
        "s4": {
                "description": ".. .. yip yip .. .. yip yip",
                "patterns": [
                        "**yy**yy"
                    ],
                "next": [
                    { "prob":10, "next": "s4" },
                    { "prob":10, "next": "s1" }
                ]
            },
        "predrop": {
                "description": "Predrop: \ngrunts barks and yips",
                "patterns": [
                        "g.g.",
                        ".*.*",
                        "yyyy"
                    ],
                "next": [
                    { "prob":10, "next": "drop" }
                ]
            },
        "drop": {
                "description": "The Drop: \nhowls grunts and yips",
                "patterns": [
                        "h",
                        "g.g.",
                        ".y.y"
                    ],
                "next": [
                    { "prob":10, "next": "s3" },
                    { "prob":10, "next": "s1" }
                ]
            }
    }
}
