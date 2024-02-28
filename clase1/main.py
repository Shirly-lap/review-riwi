# nombre = "Shirly Paola Mejia "
# edad =  21 
# correo = "mejiapao@gmail.com"


# print(f'''
#       hola
#       mundo
#       {nombre}
#       {edad}
#       {correo}
      
# ''')



# print(type(nombre))
# print(type(edad))
# print(type(correo))

# nombre = input("Ingresa tu nombre ")
# edad = input("Ingresa tu edad ")
# correo = input("Ingrea tu correo ")

# print ("Hola a todos mi nombre es " + nombre +" tengo " + edad + " anios " + " y mi correo es " + correo)


# formas de concatenar

# print(nombre,edad,correo)
# print(nombre + "" + edad + "" + correo)
# print(f '' ''
# hola
# mundo
# {nombre}
# {edad}
# ''')

# ladoA= int(input("Ingresa por favor el numero del lado A "))
# ladoB = int(input("Ingresa por favor el número del lado B "))
# area = ladoA * ladoB

# print("Los lados ingresados son " , "lado A: ",ladoA, " lado B: ", ladoB)
# print("El area del cuadrado ingresado es : ", area)

# tipoUser = input("ingresa que tipo de usuario eres: ").lower()

# if (tipoUser == "admin"):
#     print("BIENVENIDO ADMIN")
# else:
#     print("ACCESO DENEGADO, NO ERES ADMIN")

color = input("Ingresa un color, sea amarillo, azul o rojo ").lower()

if (color == "amarillo"):
    print("El color ingresado significa ALEGRIA")
elif (color == "rojo") :
    print("El color ingresado significa COLOR DE LA SANGRE")
elif(color == "azul"):
    print("El color ingresado significa COLOR DEL MAR")
else: print("El color ingresado NO ES VALIDO")