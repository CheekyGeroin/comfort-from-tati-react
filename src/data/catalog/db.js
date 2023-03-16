const db = {
  plaids: [
    {
      id: 'braided_Plaid',
      title: 'Плед плетінка',
      description: 'Данний плед зроблен в кольорі #360 "королівський синій"',
      size: '150х200',
      price: '2600₴/58$',
      alt: 'Плетінка',
      entires: [
        {
          id: 1,
          original: `${require('images/catalog-list/entires/blue/blue-first-desk.jpg')}`,
          imgDesk2x: `${require('images/catalog-list/entires/blue/blue-first-desk@2x.jpg')}`,
          thumbnail: `${require('images/catalog-list/entires/blue/blue-first-desk-thumb.jpg')}`,
        },
        {
          id: 2,
          original: `${require('images/catalog-list/entires/blue/blue-second-desk.jpg')}`,
          imgDesk2x: `${require('images/catalog-list/entires/blue/blue-second-desk@2x.jpg')}`,
          thumbnail: `${require('images/catalog-list/entires/blue/blue-second-desk-thumb.jpg')}`,
        },
        {
          id: 3,
          original: `${require('images/catalog-list/entires/blue/blue-third-desk.jpg')}`,
          imgDesk2x: `${require('images/catalog-list/entires/blue/blue-third-desk@2x.jpg')}`,
          thumbnail: `${require('images/catalog-list/entires/blue/blue-third-desk-thumb.jpg')}`,
        },
        {
          id: 4,
          original: `${require('images/catalog-list/entires/blue/blue-fourth-desk.jpg')}`,
          imgDesk2x: `${require('images/catalog-list/entires/blue/blue-fourth-desk@2x.jpg')}`,
          thumbnail: `${require('images/catalog-list/entires/blue/blue-fourth-desk-thumb.jpg')}`,
        },
        {
          id: 5,
          original: `${require('images/catalog-list/entires/blue/blue-fifth-desk.jpg')}`,
          imgDesk2x: `${require('images/catalog-list/entires/blue/blue-fifth-desk@2x.jpg')}`,
          thumbnail: `${require('images/catalog-list/entires/blue/blue-fifth-desk-thumb.jpg')}`,
        },
      ],
      basketInfo: {
        imgDesk: `${require('images/basket/basket_braided_desk.jpg')}`,
        imgDesk2x: `${require('images/basket/basket_braided_desk@2x.jpg')}`,
        basketTitle: 'Плед плетінка',
        basketPrice: '2600 ₴',
      },
    },
    {
      id: 'honeycombs_Plaid',
      title: 'Плед соти',
      description: 'Данний плед зроблен в кольорі #31 "дитячий рожевий"',
      size: '160х200',
      price: '2600₴/58$',
      alt: 'Соти',
      entires: [
        {
          id: 1,
          imgDesk: `${require('images/catalog-list/entires/yellow/yellow-first-desk.jpg')}`,
          imgDesk2x: `${require('images/catalog-list/entires/yellow/yellow-first-desk@2x.jpg')}`,
        },
        {
          id: 2,
          imgDesk: `${require('images/catalog-list/entires/yellow/yellow-second-desk.jpg')}`,
          imgDesk2x: `${require('images/catalog-list/entires/yellow/yellow-second-desk@2x.jpg')}`,
        },
        {
          id: 3,
          imgDesk: `${require('images/catalog-list/entires/yellow/yellow-third-desk.jpg')}`,
          imgDesk2x: `${require('images/catalog-list/entires/yellow/yellow-third-desk@2x.jpg')}`,
        },
        {
          id: 4,
          imgDesk: `${require('images/catalog-list/entires/yellow/yellow-fourth-desk.jpg')}`,
          imgDesk2x: `${require('images/catalog-list/entires/yellow/yellow-fourth-desk@2x.jpg')}`,
        },
        {
          id: 5,
          imgDesk: `${require('images/catalog-list/entires/yellow/yellow-fifth-desk.jpg')}`,
          imgDesk2x: `${require('images/catalog-list/entires/yellow/yellow-fifth-desk@2x.jpg')}`,
        },
      ],
      basketInfo: {
        imgDesk: `${require('images/basket/basket_honey_desk.jpg')}`,
        imgDesk2x: `${require('images/basket/basket_honey_desk@2x.jpg')}`,
        basketTitle: 'Плед соти',
        basketPrice: '2600 ₴',
      },
    },
    {
      id: 'heart_Plaid',
      title: 'Плед серденько',
      description: 'Данний плед зроблен в кольорі  «742» «медовий»',
      size: '190х210',
      price: '2799₴/70$',
      alt: 'Серденько',
      entires: [
        {
          id: 1,
          imgDesk: `${require('images/catalog-list/entires/pink/pink-first-desk.jpg')}`,
          imgDesk2x: `${require('images/catalog-list/entires/pink/pink-first-desk@2x.jpg')}`,
        },
        {
          id: 2,
          imgDesk: `${require('images/catalog-list/entires/pink/pink-second-desk.jpg')}`,
          imgDesk2x: `${require('images/catalog-list/entires/pink/pink-second-desk@2x.jpg')}`,
        },
        {
          id: 3,
          imgDesk: `${require('images/catalog-list/entires/pink/pink-third-desk.jpg')}`,
          imgDesk2x: `${require('images/catalog-list/entires/pink/pink-third-desk@2x.jpg')}`,
        },
        {
          id: 4,
          imgDesk: `${require('images/catalog-list/entires/pink/pink-fourth-desk.jpg')}`,
          imgDesk2x: `${require('images/catalog-list/entires/pink/pink-fourth-desk@2x.jpg')}`,
        },
        {
          id: 5,
          imgDesk: `${require('images/catalog-list/entires/pink/pink-fifth-desk.jpg')}`,
          imgDesk2x: `${require('images/catalog-list/entires/pink/pink-fifth-desk@2x.jpg')}`,
        },
      ],
      basketInfo: {
        imgDesk: `${require('images/basket/basket_heart_desk.jpg')}`,
        imgDesk2x: `${require('images/basket/basket_heart_desk@2x.jpg')}`,
        basketTitle: 'Плед серденько',
        basketPrice: '2799 ₴',
      },
    },

    {
      id: `children's_blanket`,
      title: 'Дитячий плед',
      description: 'Данний плед зроблен в кольорі водяна зелень',
      size: '85х80',
      price: '650₴',
      alt: 'Дитячий',
      entires: [
        {
          id: 1,
          imgDesk: `${require('images/catalog-list/entires/kids/kids-first-desk.jpg')}`,
          imgDesk2x: `${require('images/catalog-list/entires/kids/kids-first-desk@2x.jpg')}`,
        },
        {
          id: 2,
          imgDesk: `${require('images/catalog-list/entires/kids/kids-second-desk.jpg')}`,
          imgDesk2x: `${require('images/catalog-list/entires/kids/kids-second-desk@2x.jpg')}`,
        },
        {
          id: 3,
          imgDesk: `${require('images/catalog-list/entires/kids/kids-third-desk.jpg')}`,
          imgDesk2x: `${require('images/catalog-list/entires/kids/kids-third-desk@2x.jpg')}`,
        },
        {
          id: 4,
          imgDesk: `${require('images/catalog-list/entires/kids/kids-fourth-desk.jpg')}`,
          imgDesk2x: `${require('images/catalog-list/entires/kids/kids-fourth-desk@2x.jpg')}`,
        },
        {
          id: 5,
          imgDesk: `${require('images/catalog-list/entires/kids/kids-fifth-desk.jpg')}`,
          imgDesk2x: `${require('images/catalog-list/entires/kids/kids-fifth-desk@2x.jpg')}`,
        },
      ],
      basketInfo: {
        imgDesk: `${require('images/basket/basket_kids_desk.jpg')}`,
        imgDesk2x: `${require('images/basket/basket_kids_desk@2x.jpg')}`,
        basketTitle: 'Дитячий плед',
        basketPrice: '650 ₴',
      },
    },

    {
      id: 'bath_mat',
      title: 'Килим у ванну',
      description: 'Данний плед зроблен в кольорі «7259»',
      size: '75х50',
      price: '999₴/25$',
      alt: 'Килим',
      entires: [
        {
          id: 1,
          imgDesk: `${require('images/catalog-list/entires/bath/bath-first-desk.jpg')}`,
          imgDesk2x: `${require('images/catalog-list/entires/bath/bath-first-desk@2x.jpg')}`,
        },
        {
          id: 2,
          imgDesk: `${require('images/catalog-list/entires/bath/bath-second-desk.jpg')}`,
          imgDesk2x: `${require('images/catalog-list/entires/bath/bath-second-desk@2x.jpg')}`,
        },
        {
          id: 3,
          imgDesk: `${require('images/catalog-list/entires/bath/bath-third-desk.jpg')}`,
          imgDesk2x: `${require('images/catalog-list/entires/bath/bath-third-desk@2x.jpg')}`,
        },
        {
          id: 4,
          imgDesk: `${require('images/catalog-list/entires/bath/bath-fourth-desk.jpg')}`,
          imgDesk2x: `${require('images/catalog-list/entires/bath/bath-fourth-desk@2x.jpg')}`,
        },
      ],
      basketInfo: {
        imgDesk: `${require('images/basket/basket_bath_desk.jpg')}`,
        imgDesk2x: `${require('images/basket/basket_bath_desk@2x.jpg')}`,
        basketTitle: 'Килим у ванну',
        basketPrice: '999 ₴',
      },
    },
  ],
};

export const getPlaidById = plaidId => {
  return Promise.resolve(db.plaids.find(plaid => plaid.id === plaidId));
};
