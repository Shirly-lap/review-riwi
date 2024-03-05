# 1. 1.Crea un diccionario llamado persona con propiedades como nombre, edad y ciudad.
personas={
    "nombre":"Ana",
    "edad": "23",
    "ciudad" : "Pereira"
}
# # print(personas)

# # 2. Agrega una propiedad adicional al diccionario persona que represente su ocupación.
# persona["ocupacion"] = "Programador"
# print(personas)

# 3. Accede a una propiedad del diccionario persona y muestra su valor en la consola.
# print("La edad ingresada",personas["edad"])

# 4. Crea otro diccionario llamado libro con propiedades como título, autor y año de publicación.
libro={
    "titulo":"hola",
    "autor":"pao la mejor",
    "año_publicaccion": "2002"
}
# 5. Combina las propiedades de los diccionarios persona y libro en un nuevo diccionario llamado informacion.
# informacion=[personas|libro]
# print(informacion)

# 6. Cambia el valor de una propiedad en el diccionario persona.
# personas["nombre"]="Shirly"
# print(personas)

# 7. Elimina una propiedad del diccionario libro.
# del libro["titulo"]
# print(libro)
# 8. Crea un diccionario llamado coche con propiedades como modelo, marca y año.
# coche={
#     "modelo": "Cx5",
#     "marca": "Mazda",
#     "año": 2023
# }
# 9. Muestra todas las propiedades del diccionario coche en la consola.
# print(coche)
# 10. Crea un diccionario llamado circulo con propiedades como radio y color.
# circulo={
#     "radio":22,
#     "color": "morado"
# }
# # 11. Calcula el área del círculo utilizando la fórmula A = PI* R² y muestra el resultado.
# import math
# area=math.pi*circulo["radio"]**2
# print("El area es: ", area)

# 12. Crea un diccionario llamado rectángulo con propiedades como ancho y alto.
# rectangulo={
#     "ancho": 20,
#     "alto": 30
# }
# # 13. Calcula el perímetro del rectángulo utilizando la fórmula P = 2 * (ancho + alto) y muestra el resultado.
# perimetro= 2 *(rectangulo["ancho"] + rectangulo["alto"])
# print("El perimetro es: ", perimetro)

# 14. Combina las propiedades de los diccionarios circulo y rectángulo en un nuevo diccionario llamado formas.
# formas = [circulo|rectangulo]
# print(formas)

# 15. Crea un diccionario llamado computadora con propiedades como marca, modelo y precio.
# computadora={
#     "marca": "MacBook Pro",
#     "modelo": 2020,
#     "precio": 2500000
# }
# # # 16. Muestra el precio de la computadora en la consola.
# print(computadora["precio"])

# # 17. Agrega una propiedad al diccionario computadora que indique si tiene o no una tarjeta gráfica.
# computadora["tarjeta_grafica: "]= "SI"
# print(computadora)

# 18. Crea un diccionario llamado mascota con propiedades como nombre, especie y edad.
# mascota={
#     "nombre":"Pinky",
#     "especie": "Doberman",
#     "edad": 10
# }
# # 19. Muestra en la consola la especie de la mascota en mayúsculas.
# print(mascota["especie"].upper())
# 20. Crea un diccionario llamado fruta con propiedades como nombre y color.
# fruta={
#     "nombre": input("Ingresa una fruta =>"),
#     "color": input("Ingresa el color =>")
# }

# print(fruta)

# 21. Crea un diccionario llamado estudiante con propiedades como nombre, edad y calificaciones.
# estudiante={
#     "nombre": input("ingresa tu nombre => "),
#     "edad" : int(input("Ingresa tu edad => ")),
#     "calificacion1": int(input("Ingresa tu calificacion de Matematicas: ")),
#     "calificacion2": int(input("Ingresa tu calificacion de Ingles: ")),
#     "calificacion3": int(input("Ingresa tu calificacion de Sociales: "))
# }
# # # 22. Muestra en la consola el promedio de las calificaciones del estudiante.
# calificaciones = estudiante["calificacion1"] + estudiante["calificacion2"] + estudiante["calificacion3"]
# promedio = calificaciones /3 
# print("Hola ", estudiante["nombre"], "el promedio de tu calificacion es: ", promedio)

# # 23. Agrega una propiedad al diccionario estudiante que indique si ha aprobado o no.
# if promedio >= 3 :
#     estado = "APROBADO"
# else: estado= " NO APROBADO"

# estudiante["estado"]= estado
# print(estudiante)

# 24. Crea un diccionario llamado bolsa con propiedades como tamaño y color.
# bolsa={
#     "tamaño": "1kg",
#     "color": "verde"
# }
# # 25. Muestra en la consola un mensaje que indique la capacidad de la bolsa (tamaño).
# print("La capacidad de la bolsa es: ",bolsa["tamaño"])
# 26. Crea un diccionario llamado telefono con propiedades como marca, modelo y sistema operativo.
telefono={
    "marca":"Xiaomi",
    "modelo": "13 T PRO",
    "sistemaOperativo": "12MI"
}
# 27. Muestra en la consola un mensaje indicando el sistema operativo del teléfono.
print("El sistema operativo es: ",telefono["sistemaOperativo"])
# 28. Agrega una propiedad al diccionario telefono que represente la cantidad de memoria RAM.
# 29. Crea un diccionario llamado animal con propiedades como tipo y sonido.
# 30. Muestra en la consola un mensaje que indique el sonido del animal.
# 31. Crea un diccionario llamado vuelo con propiedades como aerolínea, número de vuelo y hora de salida.
# 32. Muestra en la consola un mensaje que indique la aerolínea y el número de vuelo.
# 33. Agrega una propiedad al diccionario vuelo que represente el destino del vuelo.
# 34. Crea un diccionario llamado jugador con propiedades como nombre, equipo y posición.
# 35. Muestra en la consola un mensaje que indique el nombre y el equipo del jugador.
