var data = [
  {
    x: ['The Matrix',
      'Avengers: Endgame',
      'Spider-Man: Homecoming',
      'Doctor Who',
      'Ponniyin Selvan',
      'Fantastic Beasts: The Crimes of Grindelwald',
      'Batman',
      'All Quiet on the Western Front',
      'The Shawshank Redemption',
      'The Amazing Spider-Man 2',
      'Jurassic World',
      'Spider-Man 3',
      'Get Out',
      'Blade Runner',
      'Jurassic Park',
      'Jurassic World: Fallen Kingdom',
      'West Side Story',
      "Schindler's List",
      'Goodfellas',
      "The Handmaid's Tale"],
    y: [371788.72159090906,
      321330.2445652174,
      311412.8700592886,
      293771.60770750995,
      257791.2756916996,
      235747.72397891965,
      214854.53063241104,
      201793.8181818181,
      193589.6113306983,
      187832.36166007904,
      186438.7371541502,
      184785.91798418973,
      183787.912055336,
      183239.1861001317,
      182321.412055336,
      177588.24967061923,
      173420.2674571805,
      172619.2131916996,
      168027.00296442688,
      167057.53754940713],
    type: 'bar',
    marker: { color: '#C70039' }
  }
];

var layout = {
  title: {
    text: 'Top 20 movies with most Wikipedia pageviews',
    font: {
      size: 24
    },
    xref: 'Movies',
    x: 0.05,
  },
  xaxis: {
    automargin: true,
    title: {
      text: 'Movies',
      font: {
        size: 18,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {
    automargin: true,
    title: {'xanchor': 'center',
      text: 'Average monthly pageviews in 2022',
      font: {
        size: 18,
        color: '#7f7f7f'
      }
    }
  }
};

Plotly.newPlot('top_20_pageviews', data, layout);

