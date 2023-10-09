const router = require('express').Router();
const { Song } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const songs = await Song.findAll();
    res.status(200).json({ message: 'ok', songs });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.post('/', async (req, res) => {
  try {
    const {
      url, name,
    } = req.body;

    if (url && name) {
      const song = await Song.create({
        name, hit: true, executorId: 4, url,
      });

      res.status(201).json(song);
    } else {
      res.status(400).json({ message: 'Заполните все поля' });
    }
  } catch ({ message }) {
    console.log(message);
    res.status(500).json({ message });
  }
});
router.delete('/:idSong', async (req, res) => {
  try {
    const { idSong } = req.params;
    const respons = await Song.destroy({ where: { id: idSong } });
    if (respons) {
      res.status(200).json({ id: +idSong });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});
router.put('/:idSong', async (req, res) => {
  try {
    const { idSong } = req.params;
    const { hit } = req.body;
    if (hit) {
      const song = await Song.findOne({
        where: { id: idSong },
      });
      song.hit = hit;

      song.save();
      res.status(200).json(song);
    } else {
      res.status(400).json({ message: 'Заполните все поля' });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
