/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Executors', [
      {
        name: 'Антон Токарев',
        style: 'POP',
        premium: false,
        avatar: 'https://go.zvuk.com/thumb/1500x0/filters:quality(75):no_upscale()/imgs/2022/10/10/17/5620471/67689f252ed44b0a75437e1d8684a85b91d8372a.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Михаил Шуфутинский',
        style: 'CHANSON',
        premium: true,
        avatar: 'https://www.proconcert.ru/netcat_files/multifile/2560/mihail_shufutinskiy3.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Дэвид Боуи',
        style: 'ROCK',
        premium: true,
        avatar: 'https://cdnn21.img.ria.ru/images/92862/71/928627146_0:366:6877:4234_1920x0_80_0_0_ba9c9a8138850597d28e467044c9f8bc.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Тайный исполнитель',
        style: '*',
        premium: true,
        avatar: 'https://cdn-edge.kwork.ru/pics/t3/90/26052629-641cb2729618e.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Executors', null, {});
  },
};
