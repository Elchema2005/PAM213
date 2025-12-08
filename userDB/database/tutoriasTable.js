import { db } from "./connection";

export const crearTablaTutorias = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS tutorias (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT NOT NULL,
        descripcion TEXT NOT NULL,
        materia TEXT NOT NULL,
        fecha TEXT NOT NULL,
        usuarioId INTEGER
      );`
    );
  });
};


export const agregarTutoria = (tutoria, callback) => {
  const { titulo, descripcion, materia, fecha, usuarioId } = tutoria;

  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO tutorias (titulo, descripcion, materia, fecha, usuarioId)
       VALUES (?, ?, ?, ?, ?);`,
      [titulo, descripcion, materia, fecha, usuarioId],
      (_, resultado) => callback(true, resultado),
      (_, error) => callback(false, error)
    );
  });
};
