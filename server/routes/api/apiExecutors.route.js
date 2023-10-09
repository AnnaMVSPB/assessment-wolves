const router = require('express').Router();
const { Executor } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const executors = await Executor.findAll();
    res.status(200).json({ message: 'ok', executors });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});
router.post('/', async (req, res) => {
  try {
    const { name, avatar, style } = req.body;
    if (name && avatar) {
      const newExecutor = await Executor.create({
        name,
        premium: false,
        avatar,
        style,
      });

      res.json({ message: 'ok', newExecutor });
    } else {
      res.json({ message: 'заполните все поля ' });
    }
  } catch ({ message }) {
    res.json({ messageError: message });
  }
});

router.delete('/:idExecutor', async (req, res) => {
  try {
    const { idExecutor } = req.params;

    const respons = await Executor.destroy({ where: { id: idExecutor } });
    if (respons) {
      res.status(200).json({ message: 'ok', id: idExecutor });
    } else {
      res.status(400).json({ message: 'Произошла ошибка' });
    }
  } catch ({ message }) {
    res.json({ messageError: message });
  }
});
router.put('/:idExecutor', async (req, res) => {
  try {
    const { premium } = req.body;
    const { idExecutor } = req.params;
    const executor = await Executor.findOne({ where: { id: idExecutor } });
    executor.premium = premium;
    await executor.save();
    res.json({ executor, message: 'ok' });
  } catch (error) {
    res.json({ message: error.message });
  }
});
module.exports = router;
