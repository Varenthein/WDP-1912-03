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
