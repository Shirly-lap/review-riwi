# Ejercicio 1: Calculadora de Descuentos por Cantidad de Artículos
# Nivel: Alto
# Descripción del Problema:
# Una tienda en línea desea implementar una calculadora de descuentos para sus clientes. El negocio ofrece descuentos basados en la cantidad de artículos que el cliente compra. Se aplican descuentos diferentes según la cantidad de artículos comprados.
# Requisitos del Problema:
# Entrada de Datos: El programa debe solicitar al usuario que ingrese la cantidad de artículos que desea comprar.
# Calcular Descuento: El programa debe calcular el descuento aplicable según la cantidad de artículos comprados, utilizando la siguiente tabla:
#     • Si el cliente compra menos de 5 artículos, no se aplica ningún descuento.
#     • Si el cliente compra entre 5 y 10 artículos (inclusive), se aplica un descuento del 5%.
#     • Si el cliente compra entre 11 y 20 artículos (inclusive), se aplica un descuento del 10%.
#     • Si el cliente compra más de 20 artículos, se aplica un descuento del 15%.

print(f'''

***************************
BIENVENIDO A TU CALCULADORA DE DESCUENTOS
**************************
    ''')
while True:
    opcionMenu=int(input(f'''
    ¿QUÉ DESEAS HACER HOY?
    
    [1] Calcular descuento
    [2] Cerrar programa 
    Ingresa el numero de la opcion del menu => '''))
    if opcionMenu == 1:
        cantidad= int(input("Ingrese la cantidad de productos: "))
        valorUnitario= int(input("Ingresa el valor unitario del producto: "))

        total= cantidad*valorUnitario
        if cantidad <5:
            print(f'''
        Descuento no apicable
                ''')
            
        elif cantidad >=5 and cantidad<=10 :
            descuento= int(total* 0.05)
            totalPagar= total - descuento
            print("=> El descuento aplicado es de: ", descuento, "y el total a pagar es ", totalPagar)
            
        elif cantidad >=11 and cantidad <=20 :
            descuento= int(total * 0.10)
            totalPagar= int(total - descuento)
            print("=> El descuento aplicado es de: ", descuento, "y el total a pagar es ", totalPagar)
            
        else:
            descuento= int(total * 0.15)
            totalPagar= int( total - descuento)
            print("=> El descuento aplicado es de: ", descuento, "y el total a pagar es ", totalPagar)
            
    else: print("Hasta pronto")
        
        

