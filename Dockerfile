# Imagen base de Node.js
FROM node:18

# Establecer directorio de trabajo
WORKDIR /app

# Copiar los archivos
COPY . .

# Instalar dependencias
RUN npm install

# Exponer puerto (opcional)
EXPOSE 3000

# Comando para iniciar
CMD ["node", "server.js"]
