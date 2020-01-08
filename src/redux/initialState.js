const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],

  brands: [
    {
      id: 'brands1',
      image:
        'https://images.pexels.com/photos/1437318/pexels-photo-1437318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'brands2',
      image:
        'https://images.pexels.com/photos/988952/pexels-photo-988952.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'brands3',
      image:
        'https://images.pexels.com/photos/1236792/pexels-photo-1236792.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'brands4',
      image:
        'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'brands5',
      image:
        'https://images.pexels.com/photos/1435750/pexels-photo-1435750.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'brands6',
      image:
        'https://images.pexels.com/photos/170809/pexels-photo-170809.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'brands7',
      image:
        'https://images.pexels.com/photos/258174/pexels-photo-258174.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'brands8',
      image:
        'https://images.pexels.com/photos/2568270/pexels-photo-2568270.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'brands9',
      image:
        'https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'brands10',
      image:
        'https://images.pexels.com/photos/758702/pexels-photo-758702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'brands11',
      image:
        'https://images.pexels.com/photos/593099/pexels-photo-593099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'brands12',
      image:
        'https://images.pexels.com/photos/934974/pexels-photo-934974.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'brands13',
      image:
        'https://images.pexels.com/photos/1447254/pexels-photo-1447254.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'brands14',
      image:
        'https://images.pexels.com/photos/159886/pexels-photo-159886.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'brands15',
      image:
        'https://images.pexels.com/photos/639146/pexels-photo-639146.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'brands16',
      image:
        'https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'brands17',
      image:
        'https://images.pexels.com/photos/1470165/pexels-photo-1470165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'brands18',
      image:
        'https://images.pexels.com/photos/39671/physiotherapy-weight-training-dumbbell-exercise-balls-39671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'brands19',
      image:
        'https://images.pexels.com/photos/216489/pexels-photo-216489.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'brands20',
      image:
        'https://images.pexels.com/photos/317140/pexels-photo-317140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'brands21',
      image:
        'https://images.pexels.com/photos/164903/pexels-photo-164903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'brands22',
      image:
        'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'brands23',
      image:
        'https://images.pexels.com/photos/34299/herbs-flavoring-seasoning-cooking.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'brands24',
      image:
        'https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'brands25',
      image:
        'https://images.pexels.com/photos/207555/pexels-photo-207555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'brands26',
      image:
        'https://images.pexels.com/photos/191327/pexels-photo-191327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'brands27',
      image:
        'https://images.pexels.com/photos/158741/gshock-watch-sports-watch-stopwatch-158741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'brands28',
      image:
        'https://images.pexels.com/photos/1447259/pexels-photo-1447259.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'brands29',
      image:
        'https://images.pexels.com/photos/3020129/pexels-photo-3020129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'brands30',
      image:
        'https://images.pexels.com/photos/3065600/pexels-photo-3065600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'brands31',
      image:
        'https://images.pexels.com/photos/724635/pexels-photo-724635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'brands32',
      image:
        'https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'brands33',
      image:
        'https://images.pexels.com/photos/1267684/pexels-photo-1267684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'brands34',
      image:
        'https://images.pexels.com/photos/943101/pexels-photo-943101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'brands35',
      image:
        'https://images.pexels.com/photos/3419331/pexels-photo-3419331.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'brands36',
      image:
        'https://images.pexels.com/photos/53422/ironing-iron-press-clothing-53422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'brands37',
      image:
        'https://images.pexels.com/photos/163774/star-vehicle-pkw-mercedes-163774.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'brands38',
      image:
        'https://images.pexels.com/photos/257988/pexels-photo-257988.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
  ],

  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'chair',
      price: 30,
      oldPrice: 0,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      gallery: true,
      galleryId: 'FEATURED',
      galleryPhoto: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/210/300',
        'https://picsum.photos/220/300',
        'https://picsum.photos/230/300',
        'https://picsum.photos/240/300',
        'https://picsum.photos/250/300',
        'https://picsum.photos/260/300',
        'https://picsum.photos/270/300',
        'https://picsum.photos/280/300',
        'https://picsum.photos/290/300',
        'https://picsum.photos/211/300',
        'https://picsum.photos/222/300',
      ],
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'sofa',
      price: 30,
      oldPrice: 0,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      gallery: true,
      galleryId: 'TOP SELLER',
      galleryPhoto: [
        'https://picsum.photos/200/310',
        'https://picsum.photos/210/320',
        'https://picsum.photos/220/330',
        'https://picsum.photos/230/340',
        'https://picsum.photos/240/350',
        'https://picsum.photos/250/360',
        'https://picsum.photos/260/370',
        'https://picsum.photos/270/380',
        'https://picsum.photos/280/390',
        'https://picsum.photos/290/311',
        'https://picsum.photos/211/322',
        'https://picsum.photos/222/333',
      ],
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'sofa',
      price: 30,
      oldPrice: 0,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      gallery: true,
      galleryId: 'SALE OFF',
      galleryPhoto: [
        'https://images.pexels.com/photos/3455450/pexels-photo-3455450.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/5959/blue-table-wooden-design.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/2089696/pexels-photo-2089696.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/1571469/pexels-photo-1571469.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/920382/pexels-photo-920382.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/3366282/pexels-photo-3366282.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/374044/pexels-photo-374044.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      ],
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      oldPrice: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      gallery: true,
      galleryId: 'TOP RATED',
      galleryPhoto: [
        'https://images.pexels.com/photos/154161/pexels-photo-154161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/349749/kitchen-stove-sink-kitchen-counter-349749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/133919/pexels-photo-133919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/154161/pexels-photo-154161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/349749/kitchen-stove-sink-kitchen-counter-349749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/133919/pexels-photo-133919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/154161/pexels-photo-154161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/349749/kitchen-stove-sink-kitchen-counter-349749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/133919/pexels-photo-133919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      ],
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'chair',
      price: 30,
      oldPrice: 0,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'table',
      price: 30,
      oldPrice: 38,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/154161/pexels-photo-154161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'dining',
      price: 30,
      oldPrice: 0,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/349749/kitchen-stove-sink-kitchen-counter-349749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'sofa',
      price: 30,
      oldPrice: 0,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/133919/pexels-photo-133919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'chair',
      price: 30,
      oldPrice: 44,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/265004/pexels-photo-265004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'dining',
      price: 30,
      oldPrice: 38,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'sofa',
      price: 30,
      oldPrice: 0,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      oldPrice: 34,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/1248583/pexels-photo-1248583.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'dining',
      price: 30,
      oldPrice: 0,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/279648/pexels-photo-279648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'table',
      price: 30,
      oldPrice: 0,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/2275294/pexels-photo-2275294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'btable',
      price: 30,
      oldPrice: 0,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/271805/pexels-photo-271805.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'chair',
      price: 30,
      oldPrice: 0,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      oldPrice: 0,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/879010/pexels-photo-879010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      oldPrice: 38,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/916337/pexels-photo-916337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'table',
      price: 30,
      oldPrice: 0,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/1534924/pexels-photo-1534924.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'sofa',
      price: 30,
      oldPrice: 0,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/1543447/pexels-photo-1543447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      oldPrice: 38,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/1827054/pexels-photo-1827054.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'chair',
      price: 30,
      oldPrice: 38,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/1390062/pexels-photo-1390062.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      oldPrice: 0,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/2249959/pexels-photo-2249959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      price: 30,
      oldPrice: 0,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image:
        'https://images.pexels.com/photos/459976/pexels-photo-459976.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
  ],
  cart: {
    products: [],
  },
  compare: {
    products: [],
  },
};

export default initialState;
