import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('QRHunt_db.db');

// Crea las tablas si no existen
const initDatabase = () => {
  db.transaction((tx) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS Partidas (Id_partida INTEGER PRIMARY KEY AUTOINCREMENT, Title TEXT NOT NULL, Image TEXT, Description TEXT)'
    );
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS Pistas (Id_pista INTEGER PRIMARY KEY AUTOINCREMENT, Type TEXT, Image TEXT, Title TEXT NOT NULL, Description TEXT, Audio TEXT, geolocalizacion TEXT, solution TEXT, Id_partida INTEGER, FOREIGN KEY (Id_partida) REFERENCES Partidas(Id_partida))'
    );
  });
};

export const openDatabase = () => {
  initDatabase();
  return db;
};
