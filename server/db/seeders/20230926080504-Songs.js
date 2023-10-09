/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Songs', [
      {
      name: 'Седьмой лепесток',
      executorId:1,
      hit:true,
      url:'https://cdns-images.dzcdn.net/images/cover/3395f13600a7ebc46aff1f3165e04df7/500x500.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: '3 сентября',
      executorId:2,
      hit:true,
      url:'https://cdn.ren.tv/cache/960x540/media/img/80/51/8051b40ce33e1d17037c1e2aa3b41dc497984d55.jpeg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Starman',
      executorId:3,
      hit:true,
      url:'https://i1.sndcdn.com/artworks-jz8GouEkjfWJx0yV-MlZFIw-t500x500.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {});
  },

  async down(queryInterface, Sequelize) {

      await queryInterface.bulkDelete('Songs', null, {});
     
  },
};
