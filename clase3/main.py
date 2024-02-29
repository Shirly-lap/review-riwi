#3. Escribir un programa que determine si un año es bisiesto. 
# Un año es bisiesto si es divisible por 4 pero no por 100, excepto si también es divisible por 400.
# anio = int(input("Ingresa un año "))

# if((anio%4==0 and anio%400) or (anio%100!=0)):
#     print("El año es bisiesto")
# else : print(" el año no es bisiesto")


#EJERCICIO

familiares = [
    "tatarabuelo"
]

familialesElimminados= []

print("lista base ",familiares)

familiares.append("abuelo")
familiares.insert(1, "abuela")
familiares.append("papa")
familiares.append("mama")
familiares.append("yo")
#del familiares [2]
# familiares.remove("abuelo")
# familialesElimminados=familiares.pop(2)
abuelo=familiares.pop(2)
familialesElimminados.append(abuelo)
print(familialesElimminados)
print(familiares)

