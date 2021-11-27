#trabajando...
import pymongo
import os

client = pymongo.MongoClient("mongodb+srv://jean-rafael:lokazo.420@clustercertus.6mvum.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
unaDireccion ={}

db = client.db_gcp

coll = db.ventadirec

os.system('cls')
print('INFORMACIÓN DE ENTREGA')
nombre = input('Nombres: ')
apellidos = input('Apellidos: ')
provincia = input('Provincia: ')
distrito = input('Distrito: ')
calle = input('Calle: ')
numero = input('Numero: ')
interior = input('Interior: ')
telefonos= input('Telefonos - Si son más de uno separalos por comas (,): ')

misTelefonos = []
for telefono in telefonos.split(','):
    misTelefonos.append(telefonos)

unaDireccion['nombre'] = nombre
unaDireccion['apellidos'] = apellidos
unaDireccion['provincia'] = provincia
unaDireccion['distrito'] = distrito
unaDireccion['calle'] = calle
unaDireccion['numero'] = numero
unaDireccion['interior'] = interior
unaDireccion['telefonos'] = telefonos

print('Grabando su información...')
dato = coll.insert_one(unaDireccion)

os.system('cls')
print('Los datos de la venta fueron guardados en el Id: ', dato.inserted_id)





