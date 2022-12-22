var trace1 = {
  x: ['Avatar',
    'Titanic',
    'The Avengers',
    'Transformers: Dark of the Moon',
    'The Lion King',
    'The Lord of the Rings: The Two Towers',
    'Toy Story 3',
    'Shrek 2',
    'The Dark Knight Rises',
    'Alice in Wonderland',
    'The Dark Knight',
    'Harry Potter and the Chamber of Secrets',
    'The Lord of the Rings: The Return of the King',
    'Ice Age: Dawn of the Dinosaurs',
    'The Lord of the Rings: The Fellowship of the Ring',
    'Harry Potter and the Order of the Phoenix',
    'Ice Age: Continental Drift',
    'Independence Day',
    'Harry Potter and the Goblet of Fire',
    'Jaws'],
  y: [304094700.0,
    266940000.0,
    288697500.0,
    250204500.0,
    105841710.0,
    125461800.0,
    256620000.0,
    89817000.0,
    295113000.0,
    256620000.0,
    237373500.0,
    133470000.0,
    94000000.0,
    115479000.0,
    145482300.0,
    192465000.0,
    121894500.0,
    100102500.0,
    192465000.0,
    24414000.0],
  name: 'Budget',
  type: 'bar',
  marker: { color: '#85929E ' }
};

var trace2 = {
  x: ['Avatar',
    'Titanic',
    'The Avengers',
    'Transformers: Dark of the Moon',
    'The Lion King',
    'The Lord of the Rings: The Two Towers',
    'Toy Story 3',
    'Shrek 2',
    'The Dark Knight Rises',
    'Alice in Wonderland',
    'The Dark Knight',
    'Harry Potter and the Chamber of Secrets',
    'The Lord of the Rings: The Return of the King',
    'Ice Age: Dawn of the Dinosaurs',
    'The Lord of the Rings: The Fellowship of the Ring',
    'Harry Potter and the Order of the Phoenix',
    'Ice Age: Continental Drift',
    'Independence Day',
    'Harry Potter and the Goblet of Fire',
    'Jaws'],
  y: [3265842573.1932,
    2649876411.4794,
    1651039074.321,
    1191675270.5676,
    1164237157.1619,
    1110533279.0517,
    1107535879.0040998,
    1090428110.3897998,
    1088080281.1788,
    1057659206.8224,
    1051575439.4964,
    1039704117.4998,
    1025929521.0,
    1022228854.8927,
    1017749223.4428,
    1013502635.4999,
    990927593.1828,
    990882469.2177,
    958361604.1818,
    933129528.5],
  name: 'Profit',
  type: 'bar',
  marker: { color: '#C70039' }
};

var data = [trace1, trace2];

var layout = {};

var layout = {
  barmode: 'stack',
  title: {
    text: 'Top 20 movies most profitable movies',
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
    title: {
      text: 'Profit [$]',
      font: {
        size: 18,
        color: '#7f7f7f'
      }
    }
  }
};


Plotly.newPlot('money_top_20_movies', data, layout);





