# Usa una imagen base oficial de Node.js
FROM node:14

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el package.json y el package-lock.json
COPY package.json package-lock.json ./

# Instala las dependencias del proyecto
RUN npm install
RUN npm install typescript -g
# RUN npm install ts-node -g 


# Copia el resto del código de la aplicación
COPY . .

# Compila el código TypeScript
RUN npm run build

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Define el comando para ejecutar la aplicación
CMD ["node", "dist/main.js"]