import { ImageSourcePropType } from 'react-native'

type dataTypes = Array<{
    id: number

    latitude: number
    longitude: number

    bicycles: Array<{
        id_bicycle: number
        name: string
        img: ImageSourcePropType
        weight: number
        diameter: number
        countGear: number
        type: string
        price: number
    }>
}>;

const data:dataTypes = [
    {
        id: 1,

        latitude: 49.571333,
        longitude: 25.563406,

        bicycles: [
            {
                id_bicycle: 1,
                name: 'gg',
                img: require('../assets/images/bike.png'),
                weight: 8,
                diameter: 26,
                countGear: 21,
                type: 'Горный MTB',
                price: 150
            },
            {
                id_bicycle: 2,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 3,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            }
        ]
    },
    {
        id: 2,

        latitude: 49.555461,
        longitude: 25.6201973,

        bicycles: [
            {
                id_bicycle: 1,
                name: 'gg',
                img: require('../assets/images/bike.png'),
                weight: 8,
                diameter: 26,
                countGear: 21,
                type: 'Горный MTB',
                price: 150
            },
            {
                id_bicycle: 2,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 3,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 4,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 5,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 6,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 7,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 8,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 9,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            }
        ]
    },
    {
        id: 3,

        latitude: 49.578874,
        longitude: 25.5687463,

        bicycles: [
            {
                id_bicycle: 1,
                name: 'gg',
                img: require('../assets/images/bike.png'),
                weight: 8,
                diameter: 26,
                countGear: 21,
                type: 'Горный MTB',
                price: 150
            },
            {
                id_bicycle: 2,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 3,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 4,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 5,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            }
        ]
    },
    {
        id: 4,

        latitude: 49.540287,
        longitude: 25.592628,

        bicycles: [
            {
                id_bicycle: 1,
                name: 'gg',
                img: require('../assets/images/bike.png'),
                weight: 8,
                diameter: 26,
                countGear: 21,
                type: 'Горный MTB',
                price: 150
            },
            {
                id_bicycle: 2,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 3,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            }
        ]
    },
    {
        id: 5,

        latitude: 49.553517,
        longitude: 25.594767,

        bicycles: [
            {
                id_bicycle: 1,
                name: 'gg',
                img: require('../assets/images/bike.png'),
                weight: 8,
                diameter: 26,
                countGear: 21,
                type: 'Горный MTB',
                price: 150
            },
            {
                id_bicycle: 2,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 3,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 4,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 5,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 6,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 7,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 8,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            }
        ]
    },
    {
        id: 6,

        latitude: 49.512463,
        longitude: 25.6112833,

        bicycles: [
            {
                id_bicycle: 1,
                name: 'gg',
                img: require('../assets/images/bike.png'),
                weight: 8,
                diameter: 26,
                countGear: 21,
                type: 'Горный MTB',
                price: 150
            },
            {
                id_bicycle: 2,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 3,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 4,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 5,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 6,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 7,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            }
        ]
    },
    {
        id: 7,

        latitude: 49.549305,
        longitude: 25.553193,

        bicycles: [
            {
                id_bicycle: 1,
                name: 'gg',
                img: require('../assets/images/bike.png'),
                weight: 8,
                diameter: 26,
                countGear: 21,
                type: 'Горный MTB',
                price: 150
            },
            {
                id_bicycle: 2,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            }
        ]
    },
    {
        id: 8,

        latitude: 49.574627,
        longitude: 25.619036,

        bicycles: [
            {
                id_bicycle: 1,
                name: 'gg',
                img: require('../assets/images/bike.png'),
                weight: 8,
                diameter: 26,
                countGear: 21,
                type: 'Горный MTB',
                price: 150
            },
            {
                id_bicycle: 2,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 3,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 4,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 5,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 6,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 7,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 8,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 9,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 10,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            }
        ]
    },
    {
        id: 9,

        latitude: 49.555651,
        longitude: 25.6381283,

        bicycles: [
            {
                id_bicycle: 1,
                name: 'gg',
                img: require('../assets/images/bike.png'),
                weight: 8,
                diameter: 26,
                countGear: 21,
                type: 'Горный MTB',
                price: 150
            },
            {
                id_bicycle: 2,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 3,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 4,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 5,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 6,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 7,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 8,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            },
            {
                id_bicycle: 9,
                name: 'gg',
                img: require('../assets/images/bike1.jpg'),
                weight: 12.4,
                diameter: 29,
                countGear: 14,
                type: 'Шоссейные велосипеды',
                price: 160
            }
        ]
    },
    {
        id: 10,

        latitude: 49.547572,
        longitude: 25.570549,

        bicycles: [
            {
                id_bicycle: 1,
                name: 'gg',
                img: require('../assets/images/bike.png'),
                weight: 8,
                diameter: 26,
                countGear: 21,
                type: 'Горный MTB',
                price: 150
            }
        ]
    },
];

export default data