
import os

def test_files_exist_and_not_empty():
    print(f"Current working directory: {os.getcwd()}")
    # Verificar que index.html existe y no está vacío
    assert os.path.exists('index.html'), "index.html no fue creado."
    assert os.path.getsize('index.html') > 0, "index.html está vacío."

    # Verificar que script.js existe y no está vacío
    assert os.path.exists('script.js'), "script.js no fue creado."
    assert os.path.getsize('script.js') > 0, "script.js está vacío."

    print("Archivos index.html y script.js verificados: existen y no están vacíos.")

# Para ejecutar la prueba si este archivo se corre directamente
if __name__ == '__main__':
    test_files_exist_and_not_empty()
