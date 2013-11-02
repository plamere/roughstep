
// use 0123456789ab - for scale y-yip g-grunt !-chain 
// various howls - hHjJkKwWsSmM

var patternGraph = {
    intro: {
        first: {
            patterns: [],
            next: [
                { prob:10, next: 's0' },
                { prob:10, next: 's1' }
            ]
        },
        s0: {
                patterns: ['....'],
                next: [
                    { prob:10, next: 's0' },
                    { prob:10, next: 's1' },
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
                    { prob:3, next: 'predrop' },
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
                    { prob:10, next: 's1' },
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
                        'H',
                        'g.g.',
                        '.y.y',
                    ],
                next: [
                    { prob:10, next: 's3' },
                    { prob:10, next: 's1' },
                ]
            },
    },
}


var oldPatternGraph = {
    intro: {
        first: {
            pattern: '',
            next: [
                { prob:10, next: 's0' },
                { prob:10, next: 's1' }
            ]
        },
        s0: {
                pattern: '....',
                next: [
                    { prob:10, next: 's0' },
                    { prob:10, next: 's1' },
                    { prob:10, next: 's1a' }
                ]
            },

        s1: {
                pattern: '0',
                next: [
                    { prob:10, next: 's1' },
                    { prob:10, next: 's1a' },
                    { prob:10, next: 's2' }
                ]
            },
        s1a: {
                pattern: '0.0.0..y',
                next: [
                    { prob:10, next: 's1a' },
                    { prob:10, next: 's2' }
                ]
            },

        s2: {
                pattern: '0.0.',
                next: [
                    { prob:5, next: 's1' },
                    { prob:20, next: 's2' },
                    { prob:10, next: 's3' },
                    { prob:10, next: 's2b' }
                ]
            },
        s2a: {
                pattern: '0234',
                next: [
                    { prob:10, next: 's2' },
                    { prob:20, next: 's2' },
                    { prob:10, next: 's3' },
                    { prob:10, next: 's4a' },
                    { prob:10, next: 's5' }
                ]
            },
        s2b: {
                pattern: '0000',
                next: [
                    { prob:10, next: 's2b' },
                    { prob:4, next: 's2' },
                ]
            },
        s3: {
                pattern: '0..2',
                next: [
                    { prob:10, next: 's2' },
                    { prob:10, next: 's3' },
                    { prob:10, next: 's4' },
                    { prob:10, next: 'predrop1' },
                    { prob:10, next: 'drop2' }
                ]
            },
        s4: {
                pattern: '0.0.0..y',
                next: [
                    { prob:20, next: 's3' },
                    { prob:20, next: 's4a' }
                ]
            },
        s4a: {
                pattern: '0y2y1y2y',
                next: [
                    { prob:40, next: 's4a' },
                    { prob:20, next: 's3' }
                ]
            },

        s5: {
                pattern: '3yyy',
                next: [
                    { prob:20, next: 's4' },
                    { prob:5, next: 's2' }
                ]
            },

        predrop1: {
            pattern: 'yyyy',
            next: [
                { prob:20, next: 'predrop1' },
                { prob:20, next: 'predrop2' }
            ]
        },

        predrop2: {
            pattern: 'yyyyyyyy',
            next: [
                { prob:10, next: 'predrop2' },
                { prob:20, next: 'predrop3' }
            ]
        },

        predrop3: {
            pattern: 'yyy.yyy.',
            next: [
                { prob:20, next: 'drop1' },
                { prob:20, next: 'drop2' }
            ]
        },

        drop1: {
            pattern: 'Hy01',
            next: [
                { prob:20, next: 's2' }
            ]
        },
        drop2: {
            pattern: 'h.01',
            next: [
                { prob:20, next: 's2' }
            ]
        }
    }
}

