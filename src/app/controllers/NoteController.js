import Note from '../models/Note';

class NoteController {
  async index(req, res) {
    try {
      const notes = await Note.findAll();

      return res.json({ notes });
    } catch (error) {
      return res.json({ error });
    }
  }

  async show(req, res) {
    try {
      const { uid } = req.params;
      const note = await Note.findOne({ where: { uid } });

      return res.json({ note });
    } catch (error) {
      return res.json({ error });
    }
  }

  async store(req, res) {
    try {
      const note = await Note.create(req.body);

      return res.json(note);
    } catch (error) {
      const response = {
        message: 'dados incorretos',
        error,
      };
      return res.json(response);
    }
  }

  async update(req, res) {
    try {
      const { uid } = req.params;
      const [updated] = await Note.update(req.body, { where: { uid } });

      if (!updated) {
        throw Error('Usuário não encontrado');
      }

      return res.json({ result: 'DATA_UPDATE' });
    } catch (error) {
      return res.json({ error });
    }
  }

  async delete(req, res) {
    try {
      const { uid } = req.params;

      const deleted = await Note.destroy({ where: { uid } });
      if (!deleted) {
        throw Error('Usuário não encontrado');
      }

      return res.json({ deleted });
    } catch (error) {
      return res.json({ error });
    }
  }
}

export default new NoteController();
