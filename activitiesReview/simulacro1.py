# Problema: Gestión de inventario
# Escribe un programa en Python para gestionar el inventario de una
# tienda. El programa debe permitir al usuario realizar las siguientes
# acciones:
# ● Agregar un nuevo producto al inventario.
# ● Actualizar la cantidad de un producto existente en el inventario.
# ● Eliminar un producto del inventario.
# ● Listar todos los productos en el inventario.
# ● Verificar si un producto específico está en el inventario.
# Cada producto en el inventario debe tener los siguientes detalles:
# ● Nombre del producto
# ● Precio unitario del producto
# ● Cantidad disponible en el inventario'

# productos={
#     "001": {"Nombre":"Camisa", "PrecioUnitario":50000, "Cantidad":20},
#     "002": {"Nombre":"Pantalón", "PrecioUnitario":80000,  "Cantidad":3},
#     "003": {"Nombre":"Zapato", "PrecioUnitario":20000,   "Cantidad":7}
    
# }

# productos =[]
# productosNuevos= "SI"
# print(f'''
#     **********************************
#     BIENVENIDO AL GESTOR DE INVENTARIO
#     **********************************
#     ''')

# opcionMenu=int((input(f''' 
#     ¿Qué desea hacer hoy?
#     1.Agregar Producto
#     2.Actualizar la Cantidad de un Producto existente
#     3.Eliminar Producto
#     4.Listar Todos los Productos
#     5.Buscar un  Producto
#     => ''')))


# if opcionMenu == 1:
#     while productosNuevos =="SI":
#         print("BIENVENIDO A REGISTRAR PRODUCTO")
#         nombre =input("Ingresa el nommbre del producto a registrar => ")
#         precioUnitario =  int(input ("ingrese el precio Unitario => "))
#         cantidad =  int ( input ("cantidad que se tiene disponibles => "))
        
#         producto = {
#             "nombre":nombre
#             ,"precioUnitario": precioUnitario
#             ,"cantidad":cantidad
#         }
#         productos.append(producto)
#         otroProducto = input("Vas a registrar otro producto?  SI/NO => ")
#         if otroProducto != "SI" :
#             productosNuevos = False



productos = []
productosNuevos = "SI"

print(f'''
    **********************************
    BIENVENIDO AL GESTOR DE INVENTARIO
    **********************************
    ''')

while True:
    opcionMenu = int(input(f''' 
        ¿Qué desea hacer hoy?
        1. Agregar Producto
        2. Actualizar la Cantidad de un Producto existente
        3. Eliminar Producto
        4. Listar Todos los Productos
        5. Buscar un Producto
        
        Ingresa por favor el # de la opción => '''))

    if opcionMenu == 1:
        while productosNuevos == "SI":
            print("BIENVENIDO A REGISTRAR PRODUCTO")
            nombre = input("Ingresa el nombre del producto a registrar => ")
            precioUnitario = int(input("Ingrese el precio Unitario => "))
            cantidad = int(input("Cantidad que se tiene disponibles => "))

            producto = {
                "nombre": nombre,
                "precioUnitario": precioUnitario,
                "cantidad": cantidad
            }
            productos.append(producto)
            print("")
            print(f'''
            
            ********************************  
            PRODUCTO REGISTRADO EXITOSAMENTE
            ********************************
                
                ''') 
            otroProducto = input("¿Vas a registrar otro producto? SI/NO => ")
            if otroProducto.upper() != "SI":
                productosNuevos = False
                print(productos)

    elif opcionMenu == 2:
        print("BIENVENIDO A ACTUALIZAR PRODUCTOS ")
        for i in productos:
            print(f'''
            Selecciona el producto que deseas  actualizar:
            Nombre:{nombre}
            Precio Unitario: {precioUnitario}
            Cantidad
                
                ''')
    # elif opcionMenu == 3:
    #     # Implementar lógica para eliminar un producto

    # elif opcionMenu == 4:
    #     # Implementar lógica para listar todos los productos

    # elif opcionMenu == 5:
    #     # Implementar lógica para buscar un producto

    else:
        print("Opción no válida. Por favor, ingrese un número del 1 al 5.")















    # productosNuevos = input("¿Desea realizar otra operación? SI/NO => ").upper()
    # if productosNuevos != "SI":
    #     break

# Imprimir nuevamente las opciones del menú
# print("Gracias por usar el Gestor de Inventario. ¡Hasta luego!")
