export interface Character {
  url: string;
  name: string;
  gender: string;
  culture: string;
  born: string;
  died: string;
  titles: string[];
  aliases: string[];
  father: string;
  mother: string;
  spouse: string;
  allegiances: string[];
  books: string[];
  povBooks: string[];
  tvSeries: string[];
  playedBy: string[];
}

export const dummyCharacters: Character[] = [
  {
    url: 'https://anapioficeandfire.com/api/characters/583',
    name: 'Jon Snow',
    gender: 'Male',
    culture: 'Northmen',
    born: 'In 283 AC',
    died: '',
    titles: ["Lord Commander of the Night's Watch"],
    aliases: ['Lord Snow', "Ned Stark's Bastard", 'The White Wolf'],
    father: '',
    mother: '',
    spouse: '',
    allegiances: ['House Stark of Winterfell'],
    books: ['A Game of Thrones', 'A Clash of Kings', 'A Storm of Swords'],
    povBooks: ['A Storm of Swords', 'A Dance with Dragons'],
    tvSeries: [
      'Season 1',
      'Season 2',
      'Season 3',
      'Season 4',
      'Season 5',
      'Season 6',
      'Season 7',
      'Season 8',
    ],
    playedBy: ['Kit Harington'],
  },
  {
    url: 'https://anapioficeandfire.com/api/characters/271',
    name: 'Eddard Stark',
    gender: 'Male',
    culture: 'Northmen',
    born: 'In 263 AC at Winterfell',
    died: '299 AC',
    titles: ['Lord of Winterfell', 'Warden of the North', 'Hand of the King'],
    aliases: ['Ned'],
    father: '',
    mother: '',
    spouse: 'Catelyn Tully',
    allegiances: ['House Stark of Winterfell'],
    books: ['A Game of Thrones'],
    povBooks: ['A Game of Thrones'],
    tvSeries: ['Season 1'],
    playedBy: ['Sean Bean'],
  },
  {
    url: 'https://anapioficeandfire.com/api/characters/1303',
    name: 'Daenerys Targaryen',
    gender: 'Female',
    culture: 'Valyrian',
    born: 'In 284 AC, at Dragonstone',
    died: '305 AC',
    titles: [
      'Queen of Meereen',
      'Khaleesi of the Great Grass Sea',
      'Queen of the Andals and the Rhoynar and the First Men',
      'Protector of the Realm',
      'Lady of Dragonstone',
    ],
    aliases: [
      'Dany',
      'Daenerys Stormborn',
      'Mother of Dragons',
      'Breaker of Chains',
      'The Unburnt',
    ],
    father: 'Aerys II Targaryen',
    mother: 'Rhaella Targaryen',
    spouse: 'Khal Drogo',
    allegiances: ["House Targaryen of King's Landing"],
    books: ['A Game of Thrones', 'A Clash of Kings', 'A Storm of Swords', 'A Dance with Dragons'],
    povBooks: ['A Clash of Kings', 'A Storm of Swords', 'A Dance with Dragons'],
    tvSeries: [
      'Season 1',
      'Season 2',
      'Season 3',
      'Season 4',
      'Season 5',
      'Season 6',
      'Season 7',
      'Season 8',
    ],
    playedBy: ['Emilia Clarke'],
  },
  {
    url: 'https://anapioficeandfire.com/api/characters/1052',
    name: 'Tyrion Lannister',
    gender: 'Male',
    culture: 'Westerlands',
    born: 'In 273 AC, at Casterly Rock',
    died: '',
    titles: ['Hand of the King', 'Master of Coin'],
    aliases: ['The Imp', 'Halfman'],
    father: 'https://anapioficeandfire.com/api/characters/529',
    mother: '',
    spouse: 'https://anapioficeandfire.com/api/characters/2044',
    allegiances: ['https://anapioficeandfire.com/api/houses/229'],
    books: [
      'https://anapioficeandfire.com/api/books/1',
      'https://anapioficeandfire.com/api/books/2',
      'https://anapioficeandfire.com/api/books/3',
    ],
    povBooks: [
      'https://anapioficeandfire.com/api/books/2',
      'https://anapioficeandfire.com/api/books/3',
    ],
    tvSeries: ['Season 1', 'Season 2', 'Season 3', 'Season 4', 'Season 5', 'Season 6'],
    playedBy: ['Peter Dinklage'],
  },
];
