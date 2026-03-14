# Asia Alliance

Monorepo-приложение, состоящее из frontend и backend частей.

- `src/` — Frontend (React + Vite)
- `server/` — Backend (Express + TypeScript + Prisma + PostgreSQL)

# Локальный запуск

## Backend

Перейдите в папку сервера:

```bash
cd server
```

Установите зависимости:

```bash
npm install
```

Создайте файл `.env` в папке `server/`:

```
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE
PORT=3000
```

Сгенерируйте Prisma Client:

```bash
npx prisma generate
```

Если структура базы изменилась, обновите `schema.prisma`:

```bash
npx prisma db pull
npx prisma generate
```

Запуск в режиме разработки:

```bash
npm run dev
```

Backend будет доступен по адресу:

```
http://localhost:3000
```

## Frontend

Перейдите в папку фронтенда:

```bash
cd src
```

Установите зависимости:

```bash
npm install
```

Создайте файл `.env` в папке `src/`:

```
VITE_API_URL=http://localhost:3000
```

Запуск в режиме разработки:

```bash
npm run dev
```

Frontend будет доступен по адресу:

```
http://localhost:5173
```
