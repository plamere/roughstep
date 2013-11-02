
// use 0123456789ab - for scale y-yip g-grunt !-chain 
// various howls - hHjJkKwWsSmM

var patternGraph = {
    intro: {
        first: {
            patterns: [],
            next: [
                { prob:10, next: 's0' },
                { prob:10, next: 's0a' }
            ]
        },
        s0: {
                patterns: ['....'],
                next: [
                    { prob:20, next: 's0' },
                    { prob:10, next: 's0b' },
                    { prob:10, next: 's0a' },
                ]
            },
        s0a: {
                patterns: [
                        'g.g.',
                        '....'
                    ],
                next: [
                    { prob:10, next: 's0a' },
                    { prob:10, next: 's0b' },
                    { prob:10, next: 's0c' },
                    { prob:20, next: 's1' },
                ]
            },
        s0b: {
                patterns: [
                        'g.*.',
                        '....'
                    ],
                next: [
                    { prob:10, next: 's0a' },
                    { prob:10, next: 's0b' },
                    { prob:10, next: 's1' },
                ]
            },
        s0c: {
                patterns: [
                        '*.g.',
                    ],
                next: [
                    { prob:10, next: 's0c' },
                    { prob:4, next: 's0a' },
                ]
            },
        s1: {
                patterns: [
                        '*.*.',
                        '.y.y'
                    ],
                next: [
                    { prob:10, next: 's1' },
                    { prob:10, next: 's2' },
                    { prob:10, next: 's3' },
                    { prob:10, next: 's4' },
                    { prob:5, next: 's1a' },
                    { prob:5, next: 's1b' },
                    { prob:3, next: 'predrop' },
                ]
            },
        s1a: {
                patterns: [
                        '1.1.',
                        '.y.y'
                    ],
                next: [
                    { prob:10, next: 's1a' },
                    { prob:10, next: 's1b' },
                    { prob:10, next: 's1' },
                ]
            },
        s1b: {
                patterns: [
                        '1.1.',
                        '*.*.',
                        '.y.y'
                    ],
                next: [
                    { prob:10, next: 's1b' },
                    { prob:10, next: 's1a' },
                    { prob:10, next: 's1' },
                    { prob:10, next: 's1d' },
                ]
            },
        s1c: {
                patterns: [
                        '1.*.',
                        '.y.y'
                    ],
                next: [
                    { prob:10, next: 's1c' },
                    { prob:10, next: 's1a' },
                    { prob:10, next: 's1b' },
                    { prob:10, next: 's1d' },
                ]
            },
        s1d: {
                patterns: [
                        '*.1.',
                        '.y.y'
                    ],
                next: [
                    { prob:10, next: 's1d' },
                    { prob:10, next: 's1c' },
                    { prob:10, next: 's1a' },
                    { prob:10, next: 's1b' },
                    { prob:10, next: 's1e' },
                ]
            },
        s1e: {
                patterns: [
                        '*.1.',
                        '.g.g'
                    ],
                next: [
                    { prob:10, next: 's1e' },
                    { prob:4, next: 's1d' },
                ]
            },
        s2: {
                patterns: [
                        '*.*.',
                        '..y...yy'
                    ],
                next: [
                    { prob:10, next: 's1' },
                ]
            },
        s3: {
                patterns: [
                        'g.g.',
                        '.y.y',
                    ],
                next: [
                    { prob:10, next: 's3' },
                    { prob:1, next: 's3a' },
                    { prob:10, next: 's1' },
                ]
            },
        s3a: {
                patterns: [
                        'g.g.',
                        'my.y',
                    ],
                next: [
                    { prob:10, next: 's3' },
                ]
            },
        s4: {
                patterns: [
                        '**yy**yy',
                    ],
                next: [
                    { prob:10, next: 's4' },
                    { prob:10, next: 's1' },
                ]
            },
        predrop: {
                patterns: [
                        'g.g.',
                        '.*.*',
                        'yyyy',
                    ],
                next: [
                    { prob:10, next: 'drop' },
                ]
            },
        drop: {
                patterns: [
                        'h',
                        'g.g.',
                        '.y.y',
                    ],
                next: [
                    { prob:10, next: 's3' },
                    { prob:10, next: 's1' },
                ]
            },
    },
};

var howlPatterns = [
    'H',
    'gggg',
    '..j'
];


var superHowlPatterns = [
    'H..H',
    'gggg',
    '..j',
    '.jh'
];


