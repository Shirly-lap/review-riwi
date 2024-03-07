# 1.  El programa debe permitir a veterinaria Dalí gestionar sus pacientes. 
# 2.  Debe utilizar una lista para mantener guardados los pacientes, donde cada mascota se representa como una lista o 
# diccionario con su nombre, identificación dueño, raza, edad (en años) , estado (si está aún en la veterinaria o no ) y diagnóstico. 
# 3.  El programa debe proporcionar un menú interactivo que permita al veterinario seleccionar entre las siguientes opciones: 
# 1. Registrar paciente 
# 2. Actualizar paciente (Se deben poder actualizar todos los campos) 
# 3. Ver pacientes activos (Que están en la veterinaria) 
# 4. Ver pacientes Inactivos (Que no están en la veterinaria o fueron dados de alta) 
# 5. Salir del programa. 
# 4.  Debe utilizar bucles para permitir al veterinario realizar múltiples operaciones en 
# una sola sesión del programa. 
# 5.  Utilice condicionales para determinar la opción seleccionada por el 
# veterinario y ejecutar la funcionalidad correspondiente. 
# 6.  El programa debe mostrar información sobre la lista de pacientes (mascotas) 
# 7. Asegúrese de que las entradas y salidas de datos se gestionen adecuadamente.


pacientes = [ 
    {
    "nombre": "Pinky",
    "identificacion": 12323355,
    "raza": "doberman",
    "edad": 3,
    "estado": False,
    "diagnostico": " Se partio una pata"
    },
    
    {
    "nombre": "Cerebro",
    "identificacion": 345556,
    "raza": "criollo",
    "edad": 1,
    "estado": True,
    "diagnostico": " Se saco un ojo"
    },
    
    {
    "nombre": "Minie",
    "identificacion": 34578,
    "raza": "Pincher",
    "edad": 5,
    "estado": True,
    "diagnostico": "Va para cirugia"
    },
    
    ]

pacienteNuevo=True
while True:
    
    print(f'''
        
    BIENVENIDO A LA VETERINARIA DALÍ
        
    ''')
    opcionMenu= int(input(f'''
    MENU VETERINARIA
    
    1.REGISTRAR PACIENTE
    2.ACTUALIZAR PACIENTE
    3.VER PACIENTES ACTIVOS
    4.VER PACIENTES INACTIVOS
    5.SALIR DEL PROGRAMA
    
    Por favor ingresa el # de la opcion => '''))
    
    if opcionMenu == 1 :
        print("BIENVENIDO A REGISTRO DE PACIENTES")
        nombre =input("Ingresa el nombre del paciente => ")
        identificacion= int(input("Ingresar la identificacion del dueño del paciente => "))
        raza =input("Ingresa el nombre del raza => ")
        edad= int(input("Ingresa la edad =>"))
        estado = int(input("Ingresa el estado del paciente 1: esta en la veterinaria o 2: ya salio "))
        diagnostico = input("Ingresa el diagnostico")
        
        paciente= {
            "nombre": nombre,
            "identificacion": identificacion,
            "raza": raza,
            "edad": edad,
            "estado": estado,
            "diagnostico": diagnostico
        }
        pacientes.append(paciente)
        
        print("PACIENTE REGISTRADO EXITOSAMENTE")
        
        # otroPaciente = input("¿DESEAS REGISTRAR OTRO PACIENTE? [SI/NO]")
        # if otroPaciente.upper() != "SI" :
        #     pacienteNuevo = False
        #     print("HASTA PRONTO") 
        
        
    elif opcionMenu == 2:
        indice =0
        print("PACIENTES")
        
        for paciente in pacientes:
            #listamos los pacientes registrados
            print(f'''
                INDEX=[{indice}]
                Mascota= {paciente["nombre"]} 
                ID = {paciente["identificacion"]}   
                Raza= {paciente["raza"]}
                Edad = {paciente["edad"]}
                Estado = {paciente["estado"]}
                Diagnostico = {paciente["diagnostico"]}
            ''')
            indice+=1
            
        #solicitamos los datos a actualizar
        posicionPaciente= int(input("ingresa el id del paciente a modificar"))
        pacienteModificado= input("ingresa el nuevo nombr => ")
        identificacionModificado= int(input("ingresa el nuevo ID => "))
        razaModificado= input("ingresa la nueva raza => ")
        edadModificado= int(input("Ingresa la nueva edad => "))
        estadoModificado = int(input("Ingresa el nuevo estado =>"))
        diagnosticoModificado= input("Ingresa el nuevo diagnostico => ")
        
        #actualizamos los datos
        pacientes[posicionPaciente]["nombre"]=pacienteModificado
        pacientes[posicionPaciente]["identificacion"]=identificacionModificado
        pacientes[posicionPaciente]["raza"]=razaModificado
        pacientes[posicionPaciente]["edad"]=edadModificado
        pacientes[posicionPaciente]["estado"]= estadoModificado
        pacientes[posicionPaciente]["diagnostico"]= diagnosticoModificado
        
        print("PACIENTE ACTUALIZADO CON EXITO")
        print(f'''
        Nombre: {pacienteModificado}
        ID:{identificacionModificado}
        Raza:{razaModificado}
        Edad: {edadModificado}
        
            ''')
    elif opcionMenu == 3:
        indice =0
        print("PACIENTES ACTIVOS")
        
        for paciente in pacientes:
            if paciente ["estado"]==True :
                print(f'''
                    INDEX=[{indice}]
                    Mascota= {paciente["nombre"]} 
                    ID = {paciente["identificacion"]}   
                    Raza= {paciente["raza"]}
                    Edad = {paciente["edad"]}
                    Estado = {paciente["estado"]}
                    Diagnostico = {paciente["diagnostico"]}
                ''')
                indice+=1
    elif opcionMenu == 4:
        indice =0
        print("PACIENTES INACTIVOS")
        
        for paciente in pacientes:
            if paciente ["estado"]==False :
                print(f'''
                    INDEX=[{indice}]
                    Mascota= {paciente["nombre"]} 
                    ID = {paciente["identificacion"]}   
                    Raza= {paciente["raza"]}
                    Edad = {paciente["edad"]}
                    Estado = {paciente["estado"]}
                    Diagnostico = {paciente["diagnostico"]}
                ''')
                indice+=1
    elif opcionMenu == 5:
        print("HASTA LUEGO")
        break
    else : 
        print("ingresaste una opción invalida")