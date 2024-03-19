import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('QRHunt_db.db');

// Crea las tablas si no existen
const initDatabase = () => {
  const createPartidasTable = `CREATE TABLE IF NOT EXISTS Partidas (Id_partida INTEGER PRIMARY KEY AUTOINCREMENT, Title TEXT NOT NULL, Image TEXT, Description TEXT)`;
  const createPistasTable = `CREATE TABLE IF NOT EXISTS Pistas (Id_pista INTEGER PRIMARY KEY AUTOINCREMENT, Type TEXT, Image TEXT, Title TEXT NOT NULL, Description TEXT, Audio TEXT, geolocalizacion TEXT, solution TEXT, Id_partida INTEGER, FOREIGN KEY (Id_partida) REFERENCES Partidas(Id_partida))`;

  db.transaction((tx) => {
    tx.executeSql(createPartidasTable);
    tx.executeSql(createPistasTable);
  });
};

export const openDatabase = () => {
  initDatabase();
  return db;
};
