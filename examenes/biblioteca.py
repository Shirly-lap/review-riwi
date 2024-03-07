# EJercicio 2: BIBLIOTECA
# El sistema debe cumplir con las siguientes reglas:
#     1. Si el libro está disponible en la biblioteca y el usuario tiene una membresía activa, se permitirá el préstamo del libro.
#     2. Si el libro no está disponible en la biblioteca o el usuario no tiene una membresía activa, el sistema no permitirá el préstamo del libro.
#     3. Si el libro no está disponible y el usuario tiene una membresía activa, el sistema informará al usuario con un mensaje cordial.

libros = [
    {
    "titulo":"Cien años de soledad",
    "autor":"Gabriel Garcia Marquez",
    "estado": False
    },
    
    {
    "titulo":"La tierra prometida",
    "autor":"Moises and Josue",
    "estado": True
    },
    
    {
    "titulo":"El sermón del monte",
    "autor":"Jesús de Nazaret",
    "estado": True
    },
    
    {
    "titulo":"Los amigos del paralitico",
    "autor":"Jesús de Nazaret",
    "estado": False
    },     
]

usuarios=[
    {
        "nombreCompleto":"Ana Perez Gonzalez",
        "identificacion":12345,
        "membresia": True
    },
    
    {
        "nombreCompleto":"Joice Cardenas  ",
        "identificacion":6789,
        "membresia": False
    },
        
    {
        "nombreCompleto":"Yerlis Rodriguez",
        "identificacion":9876,
        "membresia": True
    },
]

print(f'''

***************************
BIENVENIDO A TU BIBLIOTECA
**************************
    ''')


#LE SOLICITAMOS EL LIBRO QUE QUIERE BUSCAR
buscarlibro = input("Ingresa por favor el titúlo del libro que deseas")

for libro in libros :
#BUSCAMOS EL LIBRO INGRSADO  Y VALIDAMOS QUE ESTE DISPONIBLE  
        if libro["titulo"]==buscarlibro and libro["estado"]==True:
            
            #VALIDAMOS QUE EL USUARIO TENGA LA MEMBRESIA ACTIVA            
            print("EL libro ingresado esta disponible, ahora validaremos si tu membresia esta activa o no")
            buscarUsuario= int(input("Por favor ingresa tu identificacion: "))
            for usuario in usuarios :
                if usuario["identificacion"]==buscarUsuario and usuario["membresia"]==True:
                    print("Felicidades! te puedes llevar el libro")
                    
                #IMPRIMIMOS CUANDO EL USUARIO NO TIENE MEMBRESIA DISPONIBLE    
                elif usuario["identificacion"]==buscarUsuario and usuario["membresia"]==False:
                    print("Lo sentimos, tu membresia no esta activa")
        
#BUSCAMOS EL LIBRO INGRESADO  Y VALIDAMOS  EN CASO QUE NO ESTE DISPONIBLE  
        elif libro["titulo"]==buscarlibro and libro["estado"]==False:
            buscarUsuario= int(input("Por favor ingresa tu identificacion: "))
            for usuario in usuarios :
                if usuario["identificacion"]==buscarUsuario and usuario["membresia"]==True:
                    print("Lo sentimos, no tenemos el libro disponible, consulta en los proximos días")
                elif usuario["identificacion"]==buscarUsuario and usuario["membresia"]==False:
                    print("Lo sentimos, no tenemos el libro disponible y tu membresia tampoco esta activa")
                    
            

