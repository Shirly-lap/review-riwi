# Ejercicio 3: Calculadora de Propina
# Nivel: Bajo
# Descripción del Problema:
# Escribe un programa en Python que ayude a calcular la propina a dejar en un restaurante. El programa debe permitir al usuario ingresar el total de la cuenta y calcular la propina basada en un porcentaje de 12%.
# Requisitos del Problema:
# Entrada de Datos: El programa debe solicitar al usuario que ingrese el total de la cuenta en el restaurante.
# Calcular Propina: El programa debe calcular la propina basada en el total de la cuenta y el porcentaje de propina equivalente al 12%.
# Mostrar Resultado: El programa debe mostrar al usuario el monto de la propina calculada.

print(f'''

****************************************
BIENVENIDO A TU APP DE CALCULAR PROPINAS
****************************************
    ''')

total_factura=int(input("Ingresa por favor el total de la cuenta => "))
propina =int( total_factura * 0.12)

print(f''' 

La propina calculada de tu factura es: {propina}
    
    ''')