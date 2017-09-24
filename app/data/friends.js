// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
  {
    name: "Tweedle Dee",
    photo: "https://vignette.wikia.nocookie.net/kingdom-hearts-unlimited/images/b/b9/TD5.jpg/revision/latest/scale-to-width-down/342?cb=20150111195622",
    scores: [
    	1,
    	5,
    	5,
    	1,
    	3,
    	4,
    	1,
    	5,
    	1,
    	5
    ]
  },
  {
  	name: 'Tweedle Dum',
  	photo: 'http://www.cornel1801.com/disney/Alice-Wonderland-1951/characters/tweedledee-tweedledum325.jpg',
  	scores: [
  		5,
  		1,
  		1,
  		5,
  		3,
  		2,
  		5,
  		1,
  		5,
  		1
  	]
  },
  {
  	name: 'Alice',
  	photo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/Alice_in_wonderland_1951.jpg',
  	scores: [
  		3,
  		2,
  		2,
  		3,
  		2,
  		1,
  		4,
  		2,
  		4,
  		2
  	]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;
