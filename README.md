# ProjectCam Clone

Ez egy CompanyCam-szerű saját rendszer vázprojekt.

## Fontos
Ez a csomag a beszélgetésben megosztott kód alapján lett összerakva, de több helyen hiányos volt az eredeti minta. Emiatt tettem bele működő placeholder komponenseket és minimál backend route-okat, hogy letölthető, átlátható alapod legyen.

## Indítás

### Frontend
```bash
npm install
npm run dev
```

### Backend
```bash
cd server
npm install
npm run dev
```

## Amit később ki kell dolgozni
- valódi auth és permission rendszer
- adatbázis integráció PostgreSQL-lel
- S3 / R2 fájltárolás
- Google Maps geocoding
- PDF riport generálás
- valós checklist, payment, template modulok
- OpenClaw API / tokenes hozzáférés
