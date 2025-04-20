import http.server
import socketserver

# Настройка HTTP-сервера
PORT = 8000
Handler = http.server.SimpleHTTPRequestHandler

def run_local_server():
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Локальный сервер запущен на порту {PORT}")
        print(f"Откройте http://localhost:{PORT} в браузере")
        httpd.serve_forever()

if __name__ == "__main__":
    run_local_server() 