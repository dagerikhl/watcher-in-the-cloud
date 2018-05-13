import { IMovieData } from '@/interfaces';

export function seedMovies(database: any, accessor: string) {
    let movies: IMovieData[] = [];
    switch (accessor) {
    case 'moviesMarvel':
        movies = moviesMarvel;
        break;
    case 'moviesDc':
        movies = moviesDc;
        break;
    default:
        console.error('No movie list with that accessor exists.');
    }

    for (let movie of movies) {
        database.collection(accessor)
            .add(movie as any)
            .then(() => {
                console.log(accessor + ' added successfully.');
            })
            .catch((error: any) => {
                console.log(accessor + ' not added.');
                console.error(error);
            });
    }
}

const moviesMarvel: IMovieData[] = [
    {
        category: 'Live-action films',
        studios: 'Republic Pictures',
        universe: 'Republic',
        title: 'Captain America',
        year: 1944,
        downloaded: true,
        seen: false
    },
    {
        category: 'Live-action films',
        studios: 'Universal Studios',
        universe: 'Universal',
        title: 'Howard the Duck',
        year: 1986,
        downloaded: true,
        seen: false
    },
    {
        category: 'Live-action films',
        studios: 'Live Entertainment',
        universe: 'Live',
        title: 'The Punisher',
        year: 1989,
        downloaded: true,
        seen: false
    },
    {
        category: 'Live-action films',
        studios: '21st Century Film Corporation',
        universe: '21st Century',
        title: 'Captain America',
        year: 1990,
        downloaded: true,
        seen: false
    },
    {
        category: 'Live-action films',
        studios: 'Constantin Film Production',
        universe: 'Constantin',
        title: 'The Fantastic Four',
        year: 1994,
        downloaded: true,
        seen: false
    },
    {
        category: 'Live-action films',
        studios: 'New Line Cinema',
        universe: 'Blade',
        title: 'Blade',
        year: 1998,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: '20th Century Fox',
        universe: 'X-Men',
        title: 'X-Men',
        year: 2000,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'New Line Cinema',
        universe: 'Blade',
        title: 'Blade II',
        year: 2002,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Columbia Pictures',
        universe: 'Columbia',
        title: 'Spider-Man',
        year: 2002,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: '20th Century Fox',
        universe: 'X-Men',
        title: 'Daredevil',
        year: 2003,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: '20th Century Fox',
        universe: 'X-Men',
        title: 'X2',
        year: 2003,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Universal Studios',
        universe: 'Universal',
        title: 'Hulk',
        year: 2003,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Artisan Entertainment',
        universe: 'Punisher',
        title: 'The Punisher',
        year: 2004,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Columbia Pictures',
        universe: 'Columbia',
        title: 'Spider-Man 2',
        year: 2004,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'New Line Cinema',
        universe: 'Blade',
        title: 'Blade: Trinity',
        year: 2004,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: '20th Century Fox',
        universe: 'X-Men',
        title: 'Elektra',
        year: 2005,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Lionsgate Films / Artisan Entertainment',
        universe: 'Lionsgate',
        title: 'Man-Thing',
        year: 2005,
        downloaded: true,
        seen: false
    },
    {
        category: 'Live-action films',
        studios: '20th Century Fox',
        universe: 'X-Men',
        title: 'Fantastic Four',
        year: 2005,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: '20th Century Fox',
        universe: 'X-Men',
        title: 'X-Men: The Last Stand',
        year: 2006,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Columbia Pictures',
        universe: 'Columbia',
        title: 'Ghost Rider',
        year: 2007,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Columbia Pictures',
        universe: 'Columbia',
        title: 'Spider-Man 3',
        year: 2007,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: '20th Century Fox',
        universe: 'X-Men',
        title: 'Fantastic Four: Rise of the Silver Surfer',
        year: 2007,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Marvel Studios',
        universe: 'MCU',
        title: 'Iron Man',
        year: 2008,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Marvel Studios',
        universe: 'MCU',
        title: 'The Incredible Hulk',
        year: 2008,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Marvel Studios',
        universe: 'Punisher',
        title: 'Punisher: War Zone',
        year: 2008,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: '20th Century Fox',
        universe: 'X-Men',
        title: 'X-Men Origins: Wolverine',
        year: 2009,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Marvel Studios',
        universe: 'MCU',
        title: 'Iron-Man 2',
        year: 2010,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Marvel Studios',
        universe: 'MCU',
        title: 'Thor',
        year: 2011,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: '20th Century Fox',
        universe: 'X-Men',
        title: 'X-Men: First Class',
        year: 2011,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Marvel Studios',
        universe: 'MCU',
        title: 'Captain America: The First Avenger',
        year: 2011,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Columbia Pictures',
        universe: 'Columbia',
        title: 'Ghost Rider: Spirit of Vengeance',
        year: 2012,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Marvel Studios',
        universe: 'MCU',
        title: 'The Avengers',
        year: 2012,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Columbia Pictures',
        universe: 'Columbia',
        title: 'The Amazing Spider-Man',
        year: 2012,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Marvel Studios',
        universe: 'MCU',
        title: 'Iron Man 3',
        year: 2013,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: '20th Century Fox',
        universe: 'X-Men',
        title: 'The Wolverine',
        year: 2013,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Marvel Studios',
        universe: 'MCU',
        title: 'Thor: The Dark World',
        year: 2013,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Marvel Studios',
        universe: 'MCU',
        title: 'Captain America: The Winter Soldier',
        year: 2014,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Columbia Pictures',
        universe: 'Columbia',
        title: 'The Amazing Spider-Man 2',
        year: 2014,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: '20th Century Fox',
        universe: 'X-Men',
        title: 'X-Men: Days of Future Past',
        year: 2014,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Marvel Studios',
        universe: 'MCU',
        title: 'Guardians of the Galaxy',
        year: 2014,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Marvel Studios',
        universe: 'MCU',
        title: 'Avengers: Age of Ultron',
        year: 2015,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Marvel Studios',
        universe: 'MCU',
        title: 'Ant-Man',
        year: 2015,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: '20th Century Fox',
        universe: 'X-Men',
        title: 'Fantastic Four',
        year: 2015,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: '20th Century Fox',
        universe: 'X-Men',
        title: 'Deadpool',
        year: 2016,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Marvel Studios',
        universe: 'MCU',
        title: 'Captain America: Civil War',
        year: 2016,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: '20th Century Fox',
        universe: 'X-Men',
        title: 'X-Men: Apocalypse',
        year: 2016,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Marvel Studios',
        universe: 'MCU',
        title: 'Doctor Strange',
        year: 2016,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: '20th Century Fox',
        universe: 'X-Men',
        title: 'Logan',
        year: 2017,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Marvel Studios',
        universe: 'MCU',
        title: 'Guardians of the Galaxy 2',
        year: 2017,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Columbia Pictures / Marvel Studios',
        universe: 'MCU',
        title: 'Spider-Man: Homecoming',
        year: 2017,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Marvel Studios',
        universe: 'MCU',
        title: 'Thor: Ragnarok',
        year: 2017,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Marvel Studios',
        universe: 'MCU',
        title: 'Avengers: Infinity War',
        year: 2018,
        downloaded: false,
        seen: false
    },
    {
        category: 'Live-action films',
        studios: 'Marvel Studios',
        universe: 'MCU',
        title: 'Black Panther',
        year: 2018,
        downloaded: false,
        seen: false
    },
    {
        category: 'Live-action films',
        studios: 'Marvel Studios',
        universe: 'MCU',
        title: 'Captain Marvel',
        year: 2019,
        downloaded: false,
        seen: false
    },
    {
        category: 'Live-action films',
        studios: 'Marvel Studios',
        universe: 'MCU',
        title: '"Untitled Avengers film"',
        year: 2019,
        downloaded: false,
        seen: false
    },
    {
        category: 'Live-action films',
        studios: 'Columbia Pictures',
        universe: 'Venom',
        title: '"Untitled Venom film"',
        year: 2018,
        downloaded: false,
        seen: false
    },
    {
        category: 'Animation',
        studios: 'Marvel Animation',
        universe: 'Marvel Animation',
        title: 'Iron Man and Hulk - Heroes United',
        year: 2013,
        downloaded: true,
        seen: false
    },
    {
        category: 'Live-action films',
        studios: 'Marvel Studios',
        universe: 'MCU',
        title: 'Ant-Man and the Wasp',
        year: 2018,
        downloaded: false,
        seen: false
    },
    {
        category: 'Live-action films',
        studios: 'Columbia Pictures / Marvel Studios',
        universe: 'MCU',
        title: 'Spider-Man: Homecoming 2',
        year: 2019,
        downloaded: false,
        seen: false
    },
    {
        category: 'Live-action films',
        studios: 'Marvel Studios',
        universe: 'MCU',
        title: '"Untitled Gambit film"',
        year: null,
        downloaded: false,
        seen: false
    },
    {
        category: 'Live-action films',
        studios: '20th Century Fox',
        universe: 'X-Men',
        title: '"Untitled Fantastic Four film"',
        year: null,
        downloaded: false,
        seen: false
    }
];

const moviesDc: IMovieData[] = [
    {
        category: 'Live-action films',
        studios: 'Lippert Pictures',
        universe: 'Lippert',
        title: 'Superman and the Mole Men',
        year: 1951,
        downloaded: true,
        seen: false
    },
    {
        category: 'Live-action films',
        studios: 'Government produced',
        universe: '-',
        title: 'Stamp Day for Superman',
        year: 1954,
        downloaded: false,
        seen: false
    },
    {
        category: 'Live-action films',
        studios: '20th Century Fox',
        universe: 'Batman',
        title: 'Batman: The Movie',
        year: 1966,
        downloaded: true,
        seen: false
    },
    {
        category: 'Live-action films',
        studios: 'Dovemead Film Export A.G./International Film Productions',
        universe: 'Superman',
        title: 'Superman',
        year: 1978,
        downloaded: true,
        seen: false
    },
    {
        category: 'Live-action films',
        studios: 'Dovemead Film Export A.G./International Film Productions',
        universe: 'Superman',
        title: 'Superman II',
        year: 1980,
        downloaded: true,
        seen: false
    },
    {
        category: 'Live-action films',
        studios: 'Embassy Pictures',
        universe: 'Swamp Thing',
        title: 'Swamp Thing',
        year: 1982,
        downloaded: true,
        seen: false
    },
    {
        category: 'Live-action films',
        studios: 'Cantharus Productions N.V./Dovemead Films',
        universe: 'Superman2',
        title: 'Superman III',
        year: 1983,
        downloaded: true,
        seen: false
    },
    {
        category: 'Live-action films',
        studios: 'Artistry Ltd/Cantharus Productions/Pueblo Film Group',
        universe: 'Superman',
        title: 'Supergirl',
        year: 1984,
        downloaded: true,
        seen: false
    },
    {
        category: 'Live-action films',
        studios: 'Golan-Globus/Cannon Films',
        universe: 'Superman2',
        title: 'Superman IV: The Quest for Peace',
        year: 1987,
        downloaded: true,
        seen: false
    },
    {
        category: 'Live-action films',
        studios: 'Golan-Globus/Cannon Films',
        universe: 'Swamp Thing',
        title: 'The Return of the Swamp Thing',
        year: 1989,
        downloaded: true,
        seen: false
    },
    {
        category: 'Live-action films',
        studios: 'Warner Bros.',
        universe: 'Batman',
        title: 'Batman',
        year: 1989,
        downloaded: true,
        seen: false
    },
    {
        category: 'Live-action films',
        studios: 'Warner Bros.',
        universe: 'Batman',
        title: 'Batman Returns',
        year: 1992,
        downloaded: true,
        seen: false
    },
    {
        category: 'Live-action films',
        studios: 'Warner Bros.',
        universe: 'Batman',
        title: 'Batman Forever',
        year: 1995,
        downloaded: true,
        seen: false
    },
    {
        category: 'Live-action films',
        studios: 'Warner Bros.',
        universe: 'Batman',
        title: 'Batman & Robin',
        year: 1997,
        downloaded: true,
        seen: false
    },
    {
        category: 'Live-action films',
        studios: 'Warner Bros.',
        universe: 'Steel',
        title: 'Steel',
        year: 1997,
        downloaded: false,
        seen: false
    },
    {
        category: 'Live-action films',
        studios: 'Warner Bros.',
        universe: 'Catwoman',
        title: 'Catwoman',
        year: 2004,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Warner Bros.',
        universe: 'Batman2',
        title: 'Batman Begins',
        year: 2005,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Warner Bros.',
        universe: 'Superman3',
        title: 'Superman Returns',
        year: 2006,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Warner Bros.',
        universe: 'Superman',
        title: 'Superman II: The Richard Donner Cut',
        year: 2006,
        downloaded: true,
        seen: false
    },
    {
        category: 'Live-action films',
        studios: 'Warner Bros.',
        universe: 'Batman2',
        title: 'The Dark Knight',
        year: 2008,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Warner Bros.',
        universe: 'Watchmen',
        title: 'Watchmen',
        year: 2009,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Warner Bros.',
        universe: 'Jonah Hex',
        title: 'Jonah Hex',
        year: 2010,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Warner Bros.',
        universe: 'Green Lantern',
        title: 'Green Lantern',
        year: 2011,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Warner Bros.',
        universe: 'Batman2',
        title: 'The Dark Knight Rises',
        year: 2012,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Warner Bros.',
        universe: 'DC Extended Universe',
        title: 'Man of Steel',
        year: 2013,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Warner Bros.',
        universe: 'DC Extended Universe',
        title: 'Batman v Superman: Dawn of Justice',
        year: 2016,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Warner Bros.',
        universe: 'DC Extended Universe',
        title: 'Suicide Squad',
        year: 2016,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Warner Bros.',
        universe: 'DC Extended Universe',
        title: 'Wonder Woman',
        year: 2017,
        downloaded: true,
        seen: true
    },
    {
        category: 'Live-action films',
        studios: 'Warner Bros.',
        universe: 'DC Extended Universe',
        title: 'Justice League',
        year: 2017,
        downloaded: true,
        seen: false
    },
    {
        category: 'Live-action films',
        studios: 'Warner Bros.',
        universe: 'DC Extended Universe',
        title: 'Aquaman',
        year: 2018,
        downloaded: false,
        seen: false
    },
    {
        category: 'Live-action films',
        studios: 'Warner Bros.',
        universe: 'DC Extended Universe',
        title: 'The Kitchen',
        year: 2019,
        downloaded: false,
        seen: false
    },
    {
        category: 'Live-action films',
        studios: 'Warner Bros.',
        universe: 'DC Extended Universe',
        title: 'Shazam',
        year: 2019,
        downloaded: false,
        seen: false
    },
    {
        category: 'Live-action films',
        studios: 'Warner Bros.',
        universe: 'DC Extended Universe',
        title: 'Wonder Woman 2',
        year: 2019,
        downloaded: false,
        seen: false
    }
];
