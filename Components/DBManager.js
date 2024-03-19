import { openDatabase } from './DBHelper';

let db = openDatabase();

// Función para insertar una partida en la base de datos
export const insertPartida = async (title, image, description) => {
  const sqlStatement = 'INSERT INTO Partidas (Title, Image, Description) VALUES (?, ?, ?)';
  const values = [title, image, description];

  try {
    await new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            sqlStatement,
            values,
            (_, result) => {
              const insertId = result.insertId;
              console.log('Partida insertada con ID:', insertId);
              resolve(insertId);
            },
            (_, error) => {
              console.error('Error al insertar la partida:', error);
              reject(error);
            }
          );
        },
        (_, error) => {
          console.error('Error al iniciar la transacción:', error);
          reject(error);
        },
        async () => {
          // Agregar un pequeño retraso entre las transacciones para evitar conflictos
          await new Promise(resolve => setTimeout(resolve, 100));
          resolve();
        }
      );
    });
  } catch (error) {
    console.error('Error al insertar la partida:', error);
    throw error;
  }

};



  
  // Función para obtener la primera partida existente
  const getFirstPartida = () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql('SELECT * FROM Partidas LIMIT 1', [], (_, { rows }) => {
            const firstPartida = rows.length > 0 ? rows.item(0) : null;
            resolve(firstPartida);
          });
        },
        (_, error) => reject(error),
        null
      );
    });
  };
  

export const insertPista = (type, image, title, description, audio, geolocalizacion, solution, idPartida) => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          'INSERT INTO Pistas (Type, Image, Title, Description, Audio, geolocalizacion, solution, Id_partida) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
          [type, image, title, description, audio, geolocalizacion, solution, idPartida],
          (_, { insertId }) => resolve(insertId),
          (_, error) => reject(error)
        );
      },
      null,
      null
    );
  });
};

export const dropTables = () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql('DROP TABLE IF EXISTS Partidas', [], (_, result) => {
            console.log('Table Partidas dropped successfully');
          });
          tx.executeSql('DROP TABLE IF EXISTS Pistas', [], (_, result) => {
            console.log('Table Pistas dropped successfully');
          });
        },
        (_, error) => reject(error),
        (_, success) => resolve(success)
      );
    });
  };

  export const getAllPartidas = () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            'SELECT * FROM Partidas',
            [],
            (_, result) => {
              const partidas = result.rows._array; // Obtenemos todas las filas
              console.log('Filas obtenidas:', partidas);
              resolve(partidas);
            },
            (_, error) => {
              console.error('Error al ejecutar la consulta:', error);
              reject(error);
            }
          );
        },
        (_, error) => {
          console.error('Error al iniciar la transacción:', error);
          reject(error);
        }
      );
    });
  };
  
  
  

