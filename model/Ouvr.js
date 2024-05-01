const db = require("../config/db");

class OuvrModal {
  static async getOuvr() {
    return new Promise((resolve) => {
      db.query("select * from ouvrage", [], (error, result) => {
        if (!error) {
          resolve(result);
        }
      });
    });
  }

  static async addOuvr(cote, titre, auteur, editeur, theme, type, lieu, annee) {
    return new Promise((resolve) => {
      db.query(
        "insert into ouvrage (cote , titre , auteur , editeur,theme,type,lieu,annee) values(?,?,?,?,?,?,?,?)",
        [cote, titre, auteur, editeur, theme, type, lieu, annee],
        (error, result) => {
          error ? resolve(false) : resolve(true);
        }
      );
    });
  }

  static async deleteOuvr(id) {
    return new Promise((resolve) => {
      db.query("delete from ouvrage where id=?", [id], (error, result) => {
        error ? resolve(false) : resolve(true);
      });
    });
  }

  static async edit(
    id,
    cote,
    titre,
    auteur,
    editeur,
    theme,
    type,
    lieu,
    annee,
    mots_cles
  ) {
    return new Promise((resolve) => {
      db.query(
        "update ouvrage set cote=? , titre=? , auteur=? , editeur=?,theme=?,type=?,lieu=?,annee=?,mots_cles=? where id=?",
        [cote, titre, auteur, editeur, theme, type, lieu, annee, mots_cles, id],
        (error, result) => {
          error ? resolve(false) : resolve(true);
        }
      );
    });
  }

  static async search(cote) {
    return new Promise((resolve) => {
      db.query(
        "select * from ouvrage where cote=?",
        [cote],
        (error, result) => {
          if (!error) {
            resolve(result);
          }
        }
      );
    });
  }

  static async search_by_filter(req, res) {
    var cote = req.body.cote
        var titre = req.body.titre
        var auteur = req.body.auteur
        var editeur = req.body.editeur
        var theme = req.body.theme
        var type = req.body.type
        var lieu = req.body.lieu
        var annee = req.body.annee

    let whereClause = [];
    const params = [];

    if (cote) {
      whereClause.push("cote LIKE ?");
      params.push(`%${cote}%`);
    }
    if (titre) {
      whereClause.push("titre LIKE ?");
      params.push(`%${titre}%`);
    }
    if (annee) {
      whereClause.push("annee = ?");
      params.push(`%${annee}%`);
    }
    if (auteur) {
      whereClause.push("auteur = ?");
      params.push(`%${auteur}%`);
    }
    if (editeur) {
      whereClause.push("editeur = ?");
      params.push(`%${editeur}%`);
    }
    if (theme) {
      whereClause.push("theme = ?");
      params.push(`%${theme}%`);
    }
    if (type) {
      whereClause.push("type = ?");
      params.push(`%${type}%`);
    }
    if (lieu) {
      whereClause.push("lieu = ?");
      params.push(`%${lieu}%`);
    }

    const finalWhereClause =
      whereClause.length > 0 ? ` WHERE ${whereClause.join(" AND ")}` : "";

    const query = `SELECT * FROM ouvrage ${finalWhereClause}`;

    try {
      const rows = await db.query(query, params);
      res.send(rows);
    } catch (err) {
      console.error(err);
      res.status(500).send("Error retrieving data");
    }
  }
}

module.exports = OuvrModal;
