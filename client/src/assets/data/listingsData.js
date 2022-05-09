var listingsData = [
  {
    address:'20-34 grand ave',
    city: 'Miami',
    state: 'NY',
    rooms: 1,
    baths: 2,
    isForSale: true,
    isForRent: true,
    wasSold: false,
    listingType: 'isForSale',
    price: 220000,
    floorSpace:2000,
    extras: [
      'elevator',
      'gym'
    ],
    homeType:'apartment',
    image:'http://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/4147-23/the-hesby-apartments-exterior.jpg'
  },
  {
      address:'30 Richmond ave',
      city: 'Jackson',
      state: 'OR',
      rooms: 0,
      baths: 2,
      isForSale: false,
      isForRent: true,
      wasSold: false,
      listingType: 'isForRent',
      price: 50000,
      floorSpace:700,
      extras: [
        'elevator',
        'pool'
      ],
      homeType:'townhouse',
      image:'http://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/4022-48/sakura-crossing-apartments-exterior.jpg'
    },
    {
      address:'2 jack st',
      city: 'Chicago',
      state: 'IL',
      rooms: 3,
      baths: 2,
      isForSale: true,
      isForRent: true,
      wasSold: false,
      listingType: 'isForRent',
      price: 220000,
      floorSpace:2500,
      extras: [
        'pool',
        'gym'
      ],
      homeType:'house',
      image:'http://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/3639-12/mosaic-at-metro-apartments-swimming-pool.jpg'
    },
    {
      address:'78 castleton ave',
      city: 'Staten Island',
      state: 'NY',
      rooms: 3,
      baths: 2,
      isForSale: false,
      isForRent: true,
      wasSold: false,
      listingType: 'isForSale',
      price: 300000,
      floorSpace:1400,
      extras: [
        'elevator',
        'gym'
      ],
      homeType:'apartment',
      image:'https://thenypost.files.wordpress.com/2019/07/re-44-handsome-avenue.jpg?quality=80&strip=all&w=978&h=652'
    },
    {
      address:'20 Grand view ave',
      city: 'Miami',
      state: 'Fl',
      rooms: 3,
      baths: 2,
      isForSale: true,
      isForRent: false,
      wasSold: false,
      listingType: 'wasSold',
      price: 160000,
      floorSpace:2000,
      extras: [
        'elevator',
        'gym'
      ],
      homeType:'townhome',
      image:'https://cdn.vox-cdn.com/thumbor/vAZEMsqZIJsmKcT8paqeFY1xI80=/0x0:1200x800/1200x800/filters:focal(504x304:696x496)/cdn.vox-cdn.com/uploads/chorus_image/image/56604061/090817wBroadway.0.jpg'
    },
    {
      address:'276 greenleaf ave',
      city: 'Staten Island',
      state: 'NY',
      rooms: 2,
      baths: 2,
      isForSale: true,
      isForRent: false,
      wasSold: false,
      listingType: 'wasSold',
      price: 100000,
      floorSpace:2000,
      extras: [
        'elevator',
        'pool'
      ],
      homeType:'condo',
      image:'https://cdn.vox-cdn.com/thumbor/NeX2IvnaTUvJ8UtQ_yLI-jo3gOE=/0x0:2600x1733/1200x800/filters:focal(1092x659:1508x1075)/cdn.vox-cdn.com/uploads/chorus_image/image/60722051/1300PikeSt_Cam3People_111816.0.png'
    },
    {
      address:'76 mohawk ave',
      city: 'Dreamtown',
      state: 'NJ',
      rooms: 1,
      baths: 2,
      isForSale: false,
      isForRent: true,
      wasSold: false,
      listingType: 'isForSale',
      price: 100000,
      floorSpace:2000,
      extras: [
        'elevator',
        'pool'
      ],
      homeType:'townhome',
      image:'http://photos.mredllc.com/photos/property/434/09300434.jpg'
    },
    {
      address:'76 mohawk ave',
      city: 'Dreamtown',
      state: 'NJ',
      rooms: 4,
      baths: 2,
      isForSale: false,
      isForRent: true,
      wasSold: false,
      listingType: 'isForSale',
      price: 100000,
      floorSpace:2000,
      extras: [
        'elevator',
        'pool'
      ],
      homeType:'house',
      image:'https://photos.zillowstatic.com/cc_ft_1536/IS62txkeuo0gce1000000000.webp'
    },
    {
      address:'50 Decker ave',
      city: 'Dreamtown',
      state: 'NJ',
      rooms: 5,
      baths: 2,
      isForSale: false,
      isForRent: true,
      wasSold: false,
      listingType: 'isForSale',
      price: 100000,
      floorSpace:2000,
      extras: [
        'elevator',
        'pool'
      ],
      homeType:'lot',
      image:'https://photos.zillowstatic.com/cc_ft_1536/ISma2jnx1pqodr0000000000.webp'
    },
    {
      address:'20 Jack ave',
      city: 'Dreamtown',
      state: 'KS',
      rooms: 6,
      baths: 2,
      isForSale: false,
      isForRent: true,
      wasSold: false,
      listingType: 'isForSale',
      price: 100000,
      floorSpace:2000,
      extras: [
        'elevator',
        'pool'
      ],
      homeType:'house',
      image:'https://photos.zillowstatic.com/cc_ft_1536/ISyva18icd4m0x1000000000.webp'
    },
    {
      address:'29 Richmond ave',
      city: 'Dreamtown',
      state: 'CA',
      rooms: 8,
      baths: 4,
      isForSale: false,
      isForRent: true,
      wasSold: false,
      listingType: 'isForSale',
      price: 4000000,
      floorSpace:2000,
      extras: [
        'elevator',
        'pool'
      ],
      homeType:'apartment',
      image:'https://photos.zillowstatic.com/cc_ft_1536/IS276kp2mxehwu0000000000.webp'
    },
    {
      address:'20 Willowbrook Road',
      city: 'Middletown',
      state: 'MA',
      rooms: 6,
      baths: 2,
      isForSale: false,
      isForRent: true,
      wasSold: false,
      listingType: 'isForSale',
      price: 429000,
      floorSpace:2000,
      extras: [
        'elevator',
        'pool'
      ],
      homeType:'house',
      image:'https://photos.zillowstatic.com/p_h/ISyvql2w42k9a81000000000.jpg'
    }
]

export default listingsData;