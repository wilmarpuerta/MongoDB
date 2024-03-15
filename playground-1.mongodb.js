
// Creacion de colecciones
db.createCollection('users')

// Ingresar datos de forma individual
db.users.insertOne(
    {
        nombre: 'Juankyy',
        apellido: 'Herreara',
        correo: 'example@example.com',
        genero: 'M',
    }
)

// Ingresar datos de forma masiva
db.users.insertMany([
     {
        nombre: 'John',
        apellido: 'Gomez',
        correo: 'example@example.com',
        genero: 'M',
        edad: 20
    },
    {
        nombre: 'Alice',
        apellido: 'Smith',
        correo: 'alice.smith@example.com',
        genero: 'F',
        edad: 25
    },
    {
        nombre: 'Michael',
        apellido: 'Johnson',
        correo: 'michael.j@example.com',
        genero: 'M',
        edad: 30
    },
    {
        nombre: 'Emily',
        apellido: 'Brown',
        correo: 'emilybrown@example.com',
        genero: 'F',
        edad: 22
    },
    {
        nombre: 'Daniel',
        apellido: 'Martinez',
        correo: 'd.martinez@example.com',
        genero: 'M',
        edad: 28
    },
    {
        nombre: 'Sophia',
        apellido: 'Taylor',
        correo: 'sophia.taylor@example.com',
        genero: 'F',
        edad: 27
    },
    {
        nombre: 'William',
        apellido: 'Anderson',
        correo: 'will.anderson@example.com',
        genero: 'M',
        edad: 24
    },
    {
        nombre: 'Olivia',
        apellido: 'Johnson',
        correo: 'olivia.johnson@example.com',
        genero: 'F',
        edad: 23
    },
    {
        nombre: 'James',
        apellido: 'Brown',
        correo: 'james.b@example.com',
        genero: 'M',
        edad: 26
    },
    {
        nombre: 'Emma',
        apellido: 'Davis',
        correo: 'emma.davis@example.com',
        genero: 'F',
        edad: 29
    }
])

// Igual
db.users.find({edad: { $eq: 20}}); 

// Diferente
db.users.find({edad: { $ne: 20}}); 

// Mayor a 
db.users.find({edad: { $gt: 25}}); 

// Mayor o igual
db.users.find({edad: { $gte: 20}}); 

// Menor a 
db.users.find({edad: { $lt: 25}}); 

// Menor o igual
db.users.find({edad: { $lte: 25}}); 

// Array de valores
db.users.find({edad: { $in: [20, 23, 28]}}); 

// Valores que no se encuentra en arrays
db.users.find({edad: { $nin: [20, 23, 28]}}); 

// Si no existe
db.users.find({edad: { $exists: false}}); 

// Busqueda con expreiones regulares
db.users.find({nombre: {$regex: /^wil/ }}); 

// Busqueda con multiples condiciones
db.users.find(
    {$and:
    [
        {edad:{$gt: 20}}, // Mayor que
        {edad:{$lt: 30}} // Menor que
    ]
    });