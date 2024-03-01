#3. Escribir un programa que determine si un año es bisiesto. 
# Un año es bisiesto si es divisible por 4 pero no por 100, excepto si también es divisible por 400.

# anio = int(input("Ingresa un año =>  "))

# if((anio%4==0 and anio%400) or (anio%100!=0)):
#     print("El año" ,  anio , "es bisiesto")
# else : print(" el año", anio, "no es bisiesto")


#4. Crear un programa que solicite al usuario su nombre y su edad y determine si puede obtener un descuento
# en el cine. Para obtener el descuento, la persona debe tener menos de 18 años o más de 60 años.

# nombre = input("Ingrese su nombre: ")
# edad = int(input("ingrese su edad: "))

# if(edad <= 18 or edad >= 60):
#     print("TIENES DERECHO AL DESCUENTO")
# else: 
#     print("NO TIENES DERECHO AL DESCUENTO")

#5. Escribir un programa que simule un sistema de autenticación simple. El programa debe solicitar al usuario
# un nombre de usuario y una contraseña. Si el nombre de usuario es 'admin' y la contraseña es '1234', 
# el programa debe imprimir "Acceso concedido"; de lo contrario, debe imprimir "Acceso denegado".

# usuario = str(input("Ingresa tu usuario => : ")).lower()
# contrasenia = (input ("Ingresa tu  contraseña => : "))

# if (usuario == "admin" and contrasenia == "1234"):
#     print("Acceso concedido")
    
# else: print("Acceso denegado")

#6. Crear un programa que pida al usuario tres números y determine si al menos uno de ellos es negativo.
# num1 =  int(input("Digite el primer numero:"))
# num2 =  int(input("Digite el segundo numero:"))
# num3 =  int(input("Digite el tercer  numero:"))

# if  num1 < 0 or num2 <  0 or num3 < 0:
#     print("Al menos hay un número negativo.")
# else:
#     print("No hay ningún número negativo")

#7. Solicita al usuario ingresar una temperatura en grados Celsius y conviértela a grados Fahrenheit
# utilizando la fórmula de conversión adecuada.F=C×5/9​+32

# C=(float(input("enter the temperature in degrees Celsius:")))
# F=(C*9/5)+32
# print("the temperature in degress farenheit is",F)


#8. Realizar un programa que pida cargar un mes, luego verificar si dicho mes corresponde a Halloween
# o Navidad, validar que se pueda ingresar un mes correcto

# mes=str(input("ingrese el mes=> :")).capitalize()
# if mes=="Octubre":
#     dia="Halloween"
# elif mes=="Diciembre":
#     dia="Navidad"   
# else:
#     dia="Mes incorrecto"
# print(dia)

#9. Solicita al usuario ingresar las longitudes de los lados de un triángulo y determina si es equilátero, 
# isósceles o escaleno. 
# Si al menos dos lados tienen la misma longitud, entonces el triángulo es isósceles.
# Si los tres lados tienen longitudes diferentes, entonces el triángulo es escaleno.
# Por otro lado, si los tres lados de un triángulo son de la misma longitud, entonces el triángulo es equilátero.

# longitud_ladoA = float(input('Ingrese la longitud del lado A del triángulo: '))
# longitud_ladoB = float(input('Ingrese la longitud del lado B del triángulo: '))
# longitud_ladoC = float(input('Ingrese la longitud del lado C del triángulo: '))

# if longitud_ladoA == longitud_ladoB ==  longitud_ladoC:
#     tipoTriangulo = "Equilatero"
# elif longitud_ladoA ==  longitud_ladoB or longitud_ladoA == longitud_ladoC:
#     tipoTriangulo = "Isosceles"
# else:
#     tipoTriangulo = "Escaleno"

# print("El triangulo es: ",tipoTriangulo)

#10. Se ingresan por teclado tres números, si todos los valores ingresados son menores a 10,
# imprimir en consola "Todos los números son menores a diez"

# num1 = int(input("Enter the first number: "))
# num2 = int(input("Enter the second number: "))
# num3 = int(input("Enter the third number: "))

# if   num1 < 10 and num2 < 10 and num3 < 10: 
#     print("All numbers are less than ten.  ")
# else: 
#     print("Not all numbers are less than ten.")


#11. Crea un programa que solicite al usuario el monto total de la factura y el porcentaje de propina
# que desea dejar. Luego, calcula el monto de la propina y muestra el total a pagar.

# total= float(input("Digite el total de la factura: $"))
# propina=float (input ("Digite el porcentaje de propina: %"))

# propinaPorciento= total * propina / 100
# montoTotalAPagar= total + propinaPorciento 
# print("El monto a pagar con propina es: $", montoTotalAPagar )

#12. Pide al usuario ingresar el precio de un producto y el porcentaje de descuento aplicable.
# Luego, calcula el precio final después del descuento.

# precio = float(input("¿Cuánto cuesta el producto? $"))
# descuento = float(input("porcentaje de descuento: "))

# precioFinal =  precio - (precio * descuento/100)
# print("El precio final despues del descuento es: ", precioFinal)
#13. Se ingresan tres valores por teclado, si todos son iguales
# se imprime la suma del primero con el segundo y a este resultado se lo multiplica por el tercero

# num1 = int(input("Ingrese el primer numero: "))
# num2 = int(input("Ingrese el segundo numero: "))
# num3 = int(input("Ingrese el tercer numero: "))
# numeros = num2,  num1, num3
# if num1 == num2 ==  num3 :
#     suma =  num1 + num2
#     multiplicacion = suma * num3
#     print("La suma es igual a ",suma, "la multiplicacion  es ",multiplicacion)
# else:
#     print("Los numeros no son iguales")
    
#14. De un operario se conoce su sueldo y los años de antigüedad. Se pide confeccionar un programa que lea los datos de entrada e informe:
#   a) Si el sueldo es inferior a 500 y su antigüedad es igual o superior a 10 años, otorgarle un aumento del 20 %, mostrar el sueldo a pagar.
#   b) Si el sueldo es inferior a 500 pero su antigüedad es menor a 10 años, otorgarle un aumento de 5 %. mostrar el sueldo a pagar.
#   c) Si el sueldo es mayor o igual a 500 mostrar el sueldo en pantalla sin cambios. mostrar el sueldo a pagar.

# sueldo =  float(input("ingrese su salario: $"))
# aniosAntiguedad =  int(input("ingrese años de antiguedad: "))

# if (sueldo <500 and aniosAntiguedad >=10) :
#     sueldoTotal = sueldo + (sueldo *0.2)
#     print("Tienes un aumento del 20% en tu sueldo, tu sueldo total es: "  , sueldoTotal)
# elif ( sueldo < 500 and  aniosAntiguedad<10):
#     sueldoTotal = sueldo + (sueldo * 0.05)
#     print("Tienes un aumento del 5% en tu suel, tu sueldo total es: " , sueldoTotal)
# else:
#     print("Tu sueldo total es: ", sueldo)