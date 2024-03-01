#crear una lista vacia y agg 5 num con append()

# numeros=[]

# num = numeros.append(int(input("Ingresa 5 numeros :,")))
# print (f'La lista de numeros es: {numeros}') 

# num1= int(input ("ingrese el primer numero"))
# numeros.append(num1)
# num2= int(input ("ingrese el segundo numero"))
# numeros.append(num2)
# num3 = int(input("Ingrese el tercer numero"))
# numeros.append(num3)
# num4 =int(input("Ingrese cuarto numero"))
# numeros.append(num4)
# num5 = int(input("Ingrese el quinto numero"))
# numeros.append(num5)

#con ciclo for

# for numeroVueltas in range(1):
#     numero=(int(input("Ingrese un numero")))
#     numeros.append(numero)
# print(f"Los numeros ingresados son:{numeros}")

#con while 
# numeroVueltas=1
# while numeroVueltas != 6:
#     numero=(int(input(f"Ingrese un numero : {numeroVueltas} => " )))
#     numeros.append(numero)
#     numeroVueltas +=1
# print(f"Los numeros ingresados son:{numeros}")

# coders=[
#     {
#     "nombre":"shirly",
#     "apellido":"Mejia",
#     "correo":"a@gmail.com",
#     "direccion":"magangue",
#     "edad":19
    
# },{
#     "nombre":"ana",
#     "apellido":"Mejia",
#     "correo":"a@gmail.com",
#     "direccion":"magangue",
#     "edad":19
    
# },{
#     "nombre":"io",
#     "apellido":"Mejia",
#     "correo":"a@gmail.com",
#     "direccion":"magangue",
#     "edad":19
    
# }
# ]

# coder = {
#     "nombre":"sh",
#     "apellido":"Mejia",
#     "correo":"a@gmail.com",
#     "direccion":"magangue",
#     "edad":19
    
# }

# for i in coders:
#     print(coder["nombre"])

listaEstudiantesRiwi=[]
ingresarOtroEStudiante ="si"



while ingresarOtroEStudiante == "si":
    #si la condicion se cumple , se ejecuta lo que esta dentro del while
    
    nombre = input("¿Cual es tu nombre? ")
    apellido = input("¿Cual es tu apellido? ")
    edad = int(input("¿Cual es tu edad? "))
    correo = input("¿Cual es tu correo electronico?")
    direccion =  input("¿Donde vives? ")


    estudiante = {
        "nombre":nombre,
        "apellido":apellido,
        "edad":edad,
        "correo":correo,
        "direccion": direccion
    }
    listaEstudiantesRiwi.append(estudiante)
    respuesta = input("Vas a ingresar otro estudiantes? ")
    if respuesta !="si":
        ingresarOtroEStudiante= False
        


for  estudiante in listaEstudiantesRiwi :
    
    print(estudiante["nombre"].upper(),estudiante["apellido"].capitalize(), estudiante["correo"].lower(), estudiante["edad"], estudiante["direccion"].title())
    print(listaEstudiantesRiwi)