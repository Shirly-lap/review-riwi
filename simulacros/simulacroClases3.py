# EJERCICIO BASICO: CALCULAR EL IMC

# El ejercicio consiste en crear un algoritmo para calcular el IMC (Indice de masa muscular)
# que toma el nombre, peso y estatura del usuario. Esta programa calcula el Índice de Masa Corporal (IMC)
# usando la fórmula IMC = peso / (estatura^2) y luego imprime un mensaje dependiendo del rango en el que se encuentre el IMC calculado.

# Si el IMC es menor que 18.5, se considera bajo peso.
# Si el IMC está entre 18.5 y 24.9, se considera un peso normal.
# Si el IMC está entre 25 y 29.9, se considera sobrepeso.
# Si el IMC está entre 30 y 34.9, se considera obesidad tipo I.
# Si el IMC está entre 35 y 39.9, se considera obesidad tipo II.
# Si el IMC está entre 40 y 49.9, se considera obesidad tipo III.
# Si el IMC es 50 o mayor, se considera obesidad tipo IV


imc={
    "nombre": input("INGRESA TU NOMBRE: "),
    "peso": int(input("INGRESA TU PESO: ")),
    "estatura": float(input("INGRESA TU ESTATURA EN METROS: "))
}

calculo= imc["peso"]/(imc["estatura"]**2)

if calculo <= 1.85 :
    print(imc["nombre"], "tu IMC es de: " , calculo,"lo cual es BAJO PESO")
elif calculo >= 18.5 and calculo <= 24.9:
    print(imc["nombre"], "tu IMC es de: ", calculo,"lo cual es peso normal")
elif calculo >= 25 and calculo <= 29.9:
    print(imc["nombre"], "tu IMC es de: ", calculo,"lo cual es SOBREPESO")
elif calculo >= 30 and calculo <= 34.9:
    print(imc["nombre"], "tu IMC es de: ", calculo,"lo cual es OBESIDAD TIPO I")
elif calculo >= 35 and calculo <= 39.9:
    print(imc["nombre"], "tu IMC es de: ", calculo,"lo cual es OBESIDAD TIPO II")
elif calculo >= 40 and calculo <= 49.9:
    print(imc["nombre"], "tu IMC es de: ", calculo,"lo cual es OBESIDAD TIPO III")
    
else: print(imc["nombre"], "tu IMC es de: ", calculo,"lo cual es OBESIDAD TIPO IV")

    
