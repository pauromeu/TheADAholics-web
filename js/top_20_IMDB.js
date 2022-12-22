var data = [
  {
    x: ['The Shawshank Redemption',
 'The Dark Knight',
 'The Godfather',
 'The Lord of the Rings: The Return of the King',
 'Pulp Fiction',
 'Inception',
 'Fight Club',
 'Forrest Gump',
 "Schindler's List",
 'The Lord of the Rings: The Fellowship of the Ring',
 'The Godfather Part II',
 'The Lord of the Rings: The Two Towers',
 'The Matrix',
 'Band of Brothers',
 'Interstellar',
 '12 Angry Men',
 'The Silence of the Lambs',
 'Goodfellas',
 'Saving Private Ryan',
 'The Green Mile'],
    y: [10.0,
 8.748414681345327,
 8.737719031117715,
 7.991805135905703,
 7.845394212962523,
 7.758474584002597,
 7.562925776745044,
 7.522265125947523,
 7.398483455812986,
 7.333555441033211,
 7.279703350824224,
 7.120728801976313,
 7.041013015425742,
 6.753494473281009,
 6.64103435820455,
 6.465609851460204,
 6.253979022567692,
 6.214168266455449,
 6.208761265594141,
 6.105318531599738],
    type: 'bar',
    marker:{color:'#C70039'}
  }
];

var layout = {
  title: {text:'Top 20 best rated movies on IMDB',
    font: {
      size: 24
    },
    xref: 'Movies',
    x: 0.05,
  },
  xaxis: {
    automargin:true,
    title: {
      text: 'Movies',
      font: {
        size: 18,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {automargin:true,
    title: {
      text: 'IMDB rating weighted by number of votes',
      font: {
        size: 18,
        color: '#7f7f7f'
      }
    }
  }
};

Plotly.newPlot('top_20_IMDB', data,layout);

