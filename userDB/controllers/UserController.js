import { db } from "../database/DB";

export const addUser = (nombre, email, password, rol, callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO usuarios (nombre, email, password, rol) VALUES (?, ?, ?, ?)",
      [nombre, email, password, rol],
      (_, result) => callback(true),
      (_, error) => {
        console.log(error);
        callback(false);
      }
    );
  });
};

export const getUserByEmail = (email, callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT * FROM usuarios WHERE email = ?",
      [email],
      (_, { rows }) => callback(rows._array[0]),
      (_, error) => console.log(error)
    );
  });
};

export const updatePassword = (email, newPass, callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      "UPDATE usuarios SET password = ? WHERE email = ?",
      [newPass, email],
      (_, result) => callback(true),
      (_, error) => {
        console.log(error);
        callback(false);
      }
    );
  });
};
