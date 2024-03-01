
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

