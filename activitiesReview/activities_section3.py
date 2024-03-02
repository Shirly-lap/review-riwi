
#1 Escribir un programa que declare una lista de números enteros y luego imprima todos los elementos de la lista.
# numeros=[1,2,3,4,5]

# # for  i in numeros:
# #     print(i , end = " ")
    
# print(numeros)

#2 Crear un programa que declare una lista de nombres y luego imprima cuantos elementos en total tiene la lista.

# nombres= ["ana", "maria","juan"]
# print("la cantidad de nombres es: ", len(nombres))

#3 Crear un programa que declare una lista de colores y luego imprima el primero color en una línea separada y el ultimo color.

# colores = ["azul", "rojo", "verde"]
# index0 = colores[0]
# indexUltimo = colores[-1]
# print(f''' Primer color: {index0}
# Ultimo color: {indexUltimo}''')

#4 Escribe un programa que tome dos números ingresados por el usuario e imprima el mensaje 
# "El primer número es mayor" si el primer número es mayor que el segundo, "El segundo número es mayor" 
# si el segundo número es mayor que el primero, o "Los números son iguales"si ambos números son iguales.

# num1 = int (input ("Ingrese el primer numero :"))
# num2 = int (input ("ingrese  el segundo numero :"))
# if (num1 > num2):
#     print("el primer numero es mayor")
# elif (num2 > num1):
#     print("el segundo numero es mayor")
# else:
#     print("los numeros son iguales")

#5 Escribe un programa que tome un número ingresado por el usuario e imprima "Número positivo" si es mayor que cero, "Número negativo" si es menor que cero, o "El número es cero" si es igual a cero.

# num= int(input("Ingresa un numero"))
# if (num > 0):
#     print("EL NUMERO ES POSITIVO")
# elif (num < 0):
#     print("EL NUMERO ES NEGATIVO")
# else: print("EL NUMERO ES CERO")

#6 Escribe un programa que tome dos números ingresados por el usuario y una operación (suma, resta, multiplicación o división) e imprima el resultado de la operación.
# num1 = int(input("Digite el primer valor: "))
# num2 = int(input("Digite el segundo valor: "))
# operacion =  input("Digite la operación a realizar (+,-,*,/): ")
# if operacion == "+":
#     resultado = num1 + num2
# elif operacion == "-":
#     resultado = num1 - num2
# elif operacion == "*":
#     resultado = num1 * num2
# elif operacion == "/":
#     resultado = num1/num2    
# else: print("Operación no válida")
# print("El resutado es : ",resultado)

#7 Escribe un programa que busque un elemento ingresado por el usuario en una lista predefinida e imprima si el elemento está presente o no, para hacerlo utiliza un condicional
#
# lista=["ana", "pedro", "maria"] 
# element = input("Ingrese algun nombre: ").lower()
# if  element in lista:
#     print(element, " esta en la lista")
# else:
#     print(element," NO está en la lista")

# 8 Escribe un programa que sume todos los elementos de una lista de números sin usar ciclos.

# nums = [4,5,6,7]
# print("La suma de los numeros es: ",sum(nums))

#9 Escribe un programa que cuente el número de veces que un elemento específico aparece en una lista sin utilizar ciclos.

# nums = [4,5,6,7,4]
# buscar = int(input("ingresa el numero que quieres buscar: "))
# ocurrencias = nums.count(buscar)

# if ocurrencias >= 2:
#     print("EL numero aparece: ", ocurrencias,  "veces") 
# else: print("El numero aparece solo  una vez")

#10 Escribe un programa que combine dos listas dadas y elimine los elementos duplicados sin utilizar ciclos.

# lista1=["ana", "pedro", "lucas"]
# lista2=["juan","luis","maria", "ana", "pedro"]

# lista1.extend(lista2)
# listas=list(set(lista1))
# print(listas)
# 
# # # listas= list(set(lista1+lista2))
# # # print(listas)

#11 Escribe un programa que ordene una lista de números en orden ascendente sin utilizar ciclos.

# numeros=[2,5,3,9,1,4]
# numeros.sort()
# print("Orden ascendente: ", numeros )

#12 Escribe un programa que invierta el orden de los elementos en una lista sin utilizar ciclos. (usamos .reverse en lugar de .sort)

# numeros=[2,5,3,9,1,4]
# numeros.reverse()
# print(numeros)

#13 Escribe un programa que tome dos listas del mismo tamaño y las combine en una lista de tuplas

# lista1=["ana", "pedro","lucas"]
# lista2=["juan","luis","maria"]
# lenLista1= len(lista1)
# lenLista2 = len(lista2)

# if lenLista1 != lenLista2:
#     print("Error: Las listas no tienen el mismo tamaño.")
# else:
#     lista_de_tuplas = []
    
#     for i in range(lenLista1):
#         tupla = (lista1[i], lista2[i])
#         lista_de_tuplas.append(tupla)
    
#     print(lista_de_tuplas)
