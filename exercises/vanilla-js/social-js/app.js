var writer = {
    name: 'Emily Dickinson',
    born: 1830,
    genres: ['poetry'],
    quotes: function () {
        console.log('These expensive, these is red bottoms, these is bloody shoes.');
    },
    influences: [
      {
        name: 'Ralph Waldo Emerson',
        born: 1803,
        generes: ['essay', 'poetry']  ,
        quotes: function () {
            console.log('Find me in the club with a bottle of bub.');
        },
        influences: [
            {
                name: 'William Wordsworth',
                born: 1770,
                genres: ['poetry', 'essays', 'letters'],
                quotes: function () {
                    console.log('All right, stop, collaborate and listen');
                },
            },
            {
                name: 'Emanuel Swedenborg',
                born: 1688,
                genres: ['philosophy', 'theology',],
                quotes: function () {
                    console.log('Now push it, Ah, push it, push it good.');
                },
            }
        ]
      },
      {
        name: 'Elizabeth Barrett Browning',
        born: 1806,
        genres: ['poetry', 'essays', 'letters',],
        quotes: function () {
            console.log('That\'s when I come aliiiiive, like a skitzo running wild.');
        },
      },
      {
        name: 'William Blake',
        born: 1757,
        genres: ['poetry', 'illuminated books'],
        quotes: function () {
            console.log('I\'m gonna pop some tags, only got twenty dollars in my pocket.');
        },
      }
    ]
        
}