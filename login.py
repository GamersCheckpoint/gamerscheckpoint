import pymongo
import os

client = pymongo.MongoClient("mongodb+srv://jean-rafael:lokazo.420@clustercertus.6mvum.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
unCliente = {}
#Nos conectamos a la BD db_gcp
db = client.db_gcp

#Seteaos la columna a users
coll = db.users

#Pedimos que ingrese los datos del cliente
os.system('cls')
print('Datos del Cliente')
nombre = input('Ingrese su nombre: ')
apellido = input('Ingrese su apellido: ')
edad = input('Ingrese su edad: ')
sexo = input('Ingrese su sexo (M/F) : ')
nacimiento = input('Ingrese su fecha de nacimiento (dd/mm/aaaa): ')
correo = input('Ingrese su correo elctrónico: ')
usuario = input('Ingrese su usuario: ')
password = input('Ingrese su contraseña: ')

#Guardamos la información
unCliente['nombre'] = nombre
unCliente['apellido'] = apellido
unCliente['sexo'] = sexo
unCliente['nacimiento'] = nacimiento
unCliente['correo'] = correo
unCliente['usuario'] = usuario
unCliente['password'] = password

print('Grabando tu información ....')
dato=coll.insert_one(unCliente)

os.system('cls')
print('Registro exitoso con Id: ', dato.inserted_id)