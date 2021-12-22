import * as SQLite  from 'expo-sqlite';

const db = SQLite.openDatabase('empresas.db');

export const init = () => {
 const promise = new Promise((resolve, reject) => {
  //4 parametros: 1. la instrucción, 2. las variables que se pasan a la instrucción, 3. función callback resolve, 4. funcion callback reject
  db.transaction((tx) => {
    tx.executeSql('CREATE TABLE IF NOT EXISTS empresas (id INTEGER PRIMARY KEY NOT NULL,   razonSocial TEXT NOT null, Cuit TEXT NOT null, ubicacion TEXT not null, telefono TEXT NOT NULL, email TEXT NOT NULL, artContratada TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL)',
      [],
      () => { resolve() },
      (_, err) => { reject(err) });
    
   tx.executeSql('CREATE TABLE IF NOT EXISTS obras (id INTEGER PRIMARY KEY NOT NULL, idEmpresa INTEGER NOT NULL,  establecimiento TEXT NOT null, nroEstablecimiento INTEGER NOT null, ubicacion TEXT not null, nombreContacto TEXT NOT NULL, telefonoContacto TEXT NOT NULL, observaciones TEXT NOT NULL, image TEXT NOT NULL)',
      [],
      () => { resolve() },
     (_, err) => { reject(err) }); 
    
    
  })
 })
 return promise;
};

export const deleteTables = () => {
 const promise = new Promise((resolve, reject) => {
  //4 parametros: 1. la instrucción, 2. las variables que se pasan a la instrucción, 3. función callback resolve, 4. funcion callback reject
  db.transaction((tx) => {
    
    tx.executeSql('DELETE FROM obras',
      [],
      () => { resolve() },
      (_, err) => { reject(err) });
  })
 })
 return promise;
};

      

  
export const insertEmpresa = (
 razonSocial,
 cuit,
 ubicacion,
 telefono,
 email,
 artContratada,
 lat,
 lng
) => {
 const promise = new Promise((resolve, reject) => {
  db.transaction((tx) => {
   tx.executeSql('INSERT INTO empresas (razonSocial, cuit, ubicacion, telefono, email, artContratada, lat, lng) VALUES (?,?,?,?,?,?,?,?)',
    [razonSocial, cuit, ubicacion, telefono, email, artContratada, lat, lng],
    (_, result) => resolve(result),
    (_, err) => reject(err)
   )
  })
 })
 return promise;
};

export const insertObra = (
 idEmpresa,
 establecimeinto,
 nroEstablecimiento,
 ubicacion,
 nombreContacto,
 telefonoContacto,
 observaciones,
 image
) => {
 const promise = new Promise((resolve, reject) => {
  db.transaction((tx) => {
   tx.executeSql('INSERT INTO obras (idEmpresa, establecimiento, nroEstablecimiento, ubicacion, nombreContacto, telefonoContacto, observaciones, image) VALUES (?,?,?,?,?,?,?,?)',
    [idEmpresa, establecimeinto, nroEstablecimiento, ubicacion, nombreContacto, telefonoContacto, observaciones, image],
    (_, result) => resolve(result),
    (_, err) => reject(err)
   )
  })
 })
 return promise;
};

export const fetchEmpresas = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM empresas',
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      )
    });
  });
  return promise;
};

export const fetchObras = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM obras',
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      )
    });
  });
  return promise;
};

