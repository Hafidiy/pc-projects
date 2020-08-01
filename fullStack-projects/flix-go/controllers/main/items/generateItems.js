const { Item } = require('../../../models/Item')

const { sendError } = require('../../../utils')

const countries = [
    'Afghanistan',
    'Åland Islands',
    'Albania',
    'Algeria',
    'American Samoa',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antarctica',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Bouvet Island',
    'Brazil',
    'Brunei Darussalam',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Cayman Islands',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Congo',
    'Congo',
    'Cook Islands',
    'Costa Rica',
    'Cote D\'ivoire',
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Faroe Islands',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guadeloupe',
    'Guam',
    'Guatemala',
    'Guernsey',
    'Guinea',
    'Guinea-bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jersey',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea',
    'Kuwait',
    'Kyrgyzstan',
    'Lao People\'s Democratic Republic',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libyan Arab Jamahiriya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macao',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Martinique',
    'Mauritania',
    'Mauritius',
    'Mayotte',
    'Mexico',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'Netherlands Antilles',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Niue',
    'Norfolk Island',
    'Northern Mariana Islands',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Pitcairn',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Reunion',
    'Romania',
    'Russian Federation',
    'Rwanda',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syrian Arab Republic',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Timor-leste',
    'Togo',
    'Tokelau',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks and Caicos Islands',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Venezuela',
    'Viet Nam',
    'Western Sahara',
    'Yemen',
    'Zambia',
    'Zimbabwe',
]

const genres = [
    'Action/Adventure',
    'Animals',
    'Animation',
    'Biography',
    'Comedy',
    'Cooking',
    'Dance',
    'Documentary',
    'Drama',
    'Education',
    'Entertainment',
    'Family',
    'Fantasy',
    'History',
    'Horror',
    'Independent',
    'International',
    'Kids',
    'Kids & Family',
    'Medical',
    'Military/War',
    'Music',
    'Musical',
    'Mystery/Crime',
    'Nature',
    'Paranormal',
    'Politics',
    'Racing',
    'Romance',
    'Sci-Fi/Horror',
    'Science',
    'Science Fiction',
    'Science/Nature',
    'Spanish',
    'Travel',
    'Western'
]

const qualities = [
    'FullHD',
    'HD',
    'mp4',
    '3gp'
]

const uploadPhotos = [
    'cover.jpg',
    'cover2.jpg',
    'cover3.jpg',
    'cover4.jpg',
    'cover5.jpg',
    'cover6.jpg',
    'cover7.jpg',
    'cover8.jpg',
    'cover9.jpg',
    'cover10.jpg',
    'cover11.jpg',
    'cover12.jpg',
    'cover13.jpg',
    'martin.jpg',
    'superman3.jpg',
]

const description = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, facere! Itaque tenetur aliquam laudantium aperiam enim porro non magni quisquam. Nostrum pariatur esse aliquam unde iste iusto vero dolorem asperiores, voluptate, beatae explicabo doloribus praesentium a? Dicta, minus? Vero consectetur blanditiis ad sed delectus reprehenderit, fugiat maxime assumenda quod soluta laborum quidem totam, fugit excepturi? Iste iusto reiciendis sed maxime velit a porro inventore ab omnis illum voluptate quis, sit quisquam repellat aperiam ullam amet quibusdam consequatur quod harum nam maiores quasi? Quia voluptatum dolores perferendis id quae cum. Vel ducimus tempora dolorum quia magni culpa earum obcaecati, porro itaque.'

const tmpUrl = '/uploads/delete/'

const generateItems = async (req, res, next) => {
    console.log('generateItems')

    let items = []

    for (let i = 0; i < 150; i++){
        let tmpCountries = []
        const tmpCountriesLength = (parseInt(Math.random().toString().slice(3)) % 5) + 1
        for (let j = 0; j < tmpCountriesLength; j++){
            tmpCountries.push(countries[parseInt(Math.random().toString().slice(3)) % countries.length])
        }

        let tmpGenres = []
        const tmpGenresLength = (parseInt(Math.random().toString().slice(3)) % 3) + 1
        for (let j = 0; j < tmpGenresLength; j++){
            tmpGenres.push(genres[parseInt(Math.random().toString().slice(3)) % genres.length])
        }

        let tmpUploadPhotos = []
        const tmpUploadPhotosLength = (parseInt(Math.random().toString().slice(3)) % 3) + 3
        for (let j = 0; j < tmpUploadPhotosLength; j++){
            let photo = `${tmpUrl}${uploadPhotos[parseInt(Math.random().toString().slice(3)) % uploadPhotos.length]}`
            while(tmpUploadPhotos.find(uploadPhoto => uploadPhoto === photo)){
                photo = `${tmpUrl}${uploadPhotos[parseInt(Math.random().toString().slice(3)) % uploadPhotos.length]}`
            }
            tmpUploadPhotos.push(photo)
        }

        const tmpQuality = qualities[parseInt(Math.random().toString().slice(3)) % qualities.length]
        
        let cover = `${tmpUrl}${uploadPhotos[parseInt(Math.random().toString().slice(3)) % uploadPhotos.length]}`

        while(tmpUploadPhotos.find(photo => photo === cover)){
            cover = `${tmpUrl}${uploadPhotos[parseInt(Math.random().toString().slice(3)) % uploadPhotos.length]}`
        }

        const item = {
            countries: [...tmpCountries],
            genres: [...tmpGenres],
            uploadPhotos: [...tmpUploadPhotos],
            title: `Title ${i + 1}`,
            description: description,
            releaseYear: 2000 + (parseInt(Math.random().toString().slice(3)) % 21),
            runningTime: 80 + (parseInt(Math.random().toString().slice(3)) % 70),
            quality: tmpQuality,
            age: 10 + (parseInt(Math.random().toString().slice(3)) % 10),
            category: 'movie',
            movie: {
                src: `${tmpUrl}1)JavaScript asoslari. Kirish.mp4`
            },
            cover,
        }

        items.push(item)
    }

    try{
        items = await Item.insertMany([...items])

        res.json({
            success: true,
            // data: items[0]
            data: items
        })
    } catch(err) {
        console.log('Error: ', err)
        res.status(500).send(sendError('Server xatosi'))
        return 0
    }
}

module.exports = generateItems