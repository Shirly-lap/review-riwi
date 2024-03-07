# 1. El sistema solicitara al cliente sus datos, (número de documento, nombres y 
# apellidos) 
# 2. El sistema debe tener mínimo 10 productos por defecto una vez iniciado el 
# sistema, los productos deben tener nombre, precio, categoría 
# 3. Este programa de ejecuta una vez por usuario, quiere decir que si se quiere generar un 
# nuevo carrito de compras el usuario debe ejecutar el programa de nuevo. 
# 4. El sistema desplegara el menú de acciones del usuario. 
# (1) Volver a registrar el documento, nombres y apellidos del cliente 
# (2) Agregar producto al carrito de compras – (Se debe agregar toda la información de los productos deseados por el usuario y adicional se debe agregar una cantidad, la cual es escogida por el usuario) 
# (3) Listar el carrito de compras, (deben mostrarse los productos que están en el carrito de compras, un valor subtotal y un valor total, el valor total contiene el IVA de la suma de todos los productos.). 
# Tenga en cuenta que se le debe aplicar IVA (19%) a toda la suma de las compras realizadas. Ejemplo: 
# si el valor total del carrito de compras tiene un valor total de 100.000 el valor que deberá pagar será 
# 119.000 
# (4) Actualizar carrito de compras (El usuario puede cambiar las cantidades de un producto en específico) 
# (5) Eliminar producto en carrito de compras 
# (6) Finalizar programa

usuarios =[]
usuarioNUevos = True

productos=[    
    {"nombre":"piña",
    "precio": 100,
    "categoria":"frutas"
    },
    
    {"nombre":"pera",
    "precio": 200,
    "categoria":"frutas"
    },
    
    {"nombre":"uva",
    "precio": 300,
    "categoria":"frutas"
    },
    
    {"nombre":"manzana",
    "precio": 400,
    "categoria":"frutas"
    },
    
    {"nombre":"kiwi",
    "precio": 500,
    "categoria":"frutas"
    },
    
    {"nombre":"papa",
    "precio": 600,
    "categoria":"tuberculos"
    },
    
    {"nombre":"ñame",
    "precio": 700,
    "categoria":"tuberculos"
    },
    
    {"nombre":"yuca",
    "precio": 800,
    "categoria":"tuberculos"
    },
    
    {"nombre":"zanaoria",
    "precio": 900,
    "categoria":"verdura"
    },
    
    {"nombre":"tomate",
    "precio": 1000,
    "categoria":"verdura"
    },
]
# print(productos[9]["precio"])

carrito=[]
facturas=[]
print(f'''
    **********************************
    BIENVENIDO AL CARRITO DE COMPRAS
    **********************************
    ''')

while True:
    opcionMenu = int(input(f''' 
        ¿Qué desea hacer hoy?
        1. Volver a registrar el documento, nombres y apellidos del cliente 
        2. Agregar producto al carrito de compras
        3. Listar el carrito de compras
        4. Actualizar carrito de compras
        5. Eliminar producto en carrito de compras
        6. Finalizar programa
        
        Ingresa por favor el # de la opción => '''))
    
    if opcionMenu == 1:
        print('********* REGISTRO USUARIO *************')
        nombre= input("INGRESA TU NOMBRE => "),
        apellido= input("INGRSA TU APELLIDO => "),
        identificacion= input("INGRESA TU ID =>")
        
        usuario= {
            "nombre": nombre,
            "apellido":apellido,
            "identificacion": identificacion
        }
        usuarios.append(usuario)
        print("")
        print(f'''
        
        ********************************  
        USUARIO REGISTRADO EXITOSAMENTE
        ********************************
            
        ''')
        otroUsuario = input("¿DESEAS REGISTRAR OTRO USUARIO? [SI/NO]")
        if otroUsuario.upper() != "SI" :
            usuarioNUevos = False
            print("HASTA PRONTO")    
            
    elif opcionMenu == 2 :
        print('********* AGREGAR PRODUCTO A CARRITO **********')
        print(f'''ESTOS SON LOS PRODUCTOS DISPONIBLES''')
        contador = 0
        for producto in productos :
            print(f'''
                ID = {contador}
                Nombre ={producto["nombre"]}
                Precio ={producto["precio"]}
                Categoria ={producto["categoria"]}
                ''')
            contador +=1
        prductoSelecionado= int(input("Ingresa le producto a agregar: "))
        cantidadProductos= int(input("cuantos productos quieres comprar?: "))
        productoCarrito={
            "nombre": productos[prductoSelecionado]["nombre"],
            "precio": productos[prductoSelecionado]["precio"],
            "cantidad": cantidadProductos
        }
        carrito.append(productoCarrito)
        for i in carrito:
            print(f'''Estos son los productos de tu carrito:"
            
            Producto= {productoCarrito["nombre"]}
            precio= {productoCarrito["precio"]}
            cantidad= {productoCarrito["cantidad"]}
            ''')
        
            #DESEAS AÑADIR UN PRODUCTO MAS?  
            
    elif opcionMenu == 3: 
        print('********* FACTURA **********')
        
        for i in carrito:
            print(i)
            factura={
                "Producto": {i["nombre"]},
                "Precio": {i["precio"]},
                "cantidad": {i["cantidad"]},
                "subTotal": i["precio"]*i["cantidad"],
                # "total": i["subTotal"]*0.19
            }
            
            total=factura["subTotal"]*0.19
        
        facturas.append(i)  
        print(factura)
        print(total)

    elif opcionMenu ==4:
        for producto in carrito :
            # print(f'''Estos son los productos de tu carrito:"
            
            # Producto= {productoCarrito["nombre"]}
            # precio= {productoCarrito["precio"]}
            # cantidad= {productoCarrito["cantidad"]}
            # ''')
            print(carrito)
            contador =0 
            print(f''' {contador} -{producto["nombre"]} ''')
            contador+=1
            modificar =input("Deseas modificar un producto del carrito? ")
            if modificar.upper() == "SI":
                modificarIndice= int(input("Ingresa el indice que quieres modificar => "))
                nuevoProducto = input("Ingresa el nuevo nombre del producto")
                nuevaCantidad = int(input("Ingresa la cantidad a modificar"))
                # carrito[modificarIndice]["nombre"]=nuevoProducto
                carrito[modificarIndice]["cantidad"]=nuevaCantidad
                
                print(carrito)
                
            
        