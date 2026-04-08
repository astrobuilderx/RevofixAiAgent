export const users = [
  { id: 1, name: 'Kovács Péter', email: 'kovacs.peter@revofix.hu', phone: '+36 30 123 4567', role: 'admin', companyName: 'Revofix Építő Kft.' },
  { id: 2, name: 'Szabó Márton', email: 'szabo.marton@revofix.hu', phone: '+36 20 234 5678', role: 'user', companyName: 'Revofix Építő Kft.' },
  { id: 3, name: 'Tóth Anna', email: 'toth.anna@revofix.hu', phone: '+36 70 345 6789', role: 'user', companyName: 'Revofix Építő Kft.' },
  { id: 4, name: 'Nagy László', email: 'nagy.laszlo@revofix.hu', phone: '+36 30 456 7890', role: 'manager', companyName: 'Revofix Építő Kft.' },
  { id: 5, name: 'Horváth Katalin', email: 'horvath.katalin@revofix.hu', phone: '+36 20 567 8901', role: 'user', companyName: 'Revofix Építő Kft.' }
];

export const projects = [
  {
    id: 1,
    name: 'Budai Családi Ház Felújítás',
    address: 'Budapest, II. ker. Rózsadomb u. 45.',
    updatedAt: '2026-04-07T14:30:00Z',
    createdAt: '2026-03-15T08:00:00Z',
    coverPhotoUrl: 'https://picsum.photos/seed/house1/800/600',
    photoCount: 12,
    recentUser: 'Kovács Péter',
    latitude: 47.5299,
    longitude: 19.0125,
    status: 'active'
  },
  {
    id: 2,
    name: 'Siófoki Nyaraló Építés',
    address: 'Siófok, Petőfi sétány 12.',
    updatedAt: '2026-04-06T10:15:00Z',
    createdAt: '2026-02-20T09:00:00Z',
    coverPhotoUrl: 'https://picsum.photos/seed/house2/800/600',
    photoCount: 24,
    recentUser: 'Szabó Márton',
    latitude: 46.9050,
    longitude: 18.0486,
    status: 'active'
  },
  {
    id: 3,
    name: 'Debreceni Irodaház Renoválás',
    address: 'Debrecen, Piac u. 78.',
    updatedAt: '2026-04-05T16:00:00Z',
    createdAt: '2026-01-10T08:00:00Z',
    coverPhotoUrl: 'https://picsum.photos/seed/office1/800/600',
    photoCount: 35,
    recentUser: 'Tóth Anna',
    latitude: 47.5316,
    longitude: 21.6273,
    status: 'active'
  },
  {
    id: 4,
    name: 'Győri Társasház Szigetelés',
    address: 'Győr, Baross Gábor u. 22.',
    updatedAt: '2026-04-03T12:00:00Z',
    createdAt: '2025-12-01T08:00:00Z',
    coverPhotoUrl: 'https://picsum.photos/seed/building1/800/600',
    photoCount: 18,
    recentUser: 'Nagy László',
    latitude: 47.6875,
    longitude: 17.6504,
    status: 'active'
  },
  {
    id: 5,
    name: 'Pécsi Műemlék Restaurálás',
    address: 'Pécs, Király u. 5.',
    updatedAt: '2026-03-28T09:45:00Z',
    createdAt: '2025-11-15T08:00:00Z',
    coverPhotoUrl: 'https://picsum.photos/seed/heritage1/800/600',
    photoCount: 42,
    recentUser: 'Horváth Katalin',
    latitude: 46.0727,
    longitude: 18.2323,
    status: 'starred'
  },
  {
    id: 6,
    name: 'Szegedi Lakópark - A épület',
    address: 'Szeged, Tisza Lajos krt. 90.',
    updatedAt: '2026-03-20T11:00:00Z',
    createdAt: '2025-10-01T08:00:00Z',
    coverPhotoUrl: 'https://picsum.photos/seed/apartment1/800/600',
    photoCount: 56,
    recentUser: 'Szabó Márton',
    latitude: 46.2530,
    longitude: 20.1414,
    status: 'starred'
  },
  {
    id: 7,
    name: 'Eger - Tetőcsere és Nyílászáró',
    address: 'Eger, Dobó István tér 3.',
    updatedAt: '2026-02-15T14:00:00Z',
    createdAt: '2025-09-01T08:00:00Z',
    coverPhotoUrl: 'https://picsum.photos/seed/roof1/800/600',
    photoCount: 8,
    recentUser: 'Kovács Péter',
    latitude: 47.9025,
    longitude: 20.3772,
    status: 'archived'
  }
];

export const photos = [
  { id: 1, projectId: 1, imageUrl: 'https://picsum.photos/seed/p1a/800/800', thumbnailUrl: 'https://picsum.photos/seed/p1a/300/300', userName: 'Kovács Péter', createdAt: '2026-04-07T14:30:00Z' },
  { id: 2, projectId: 1, imageUrl: 'https://picsum.photos/seed/p1b/800/800', thumbnailUrl: 'https://picsum.photos/seed/p1b/300/300', userName: 'Szabó Márton', createdAt: '2026-04-07T10:15:00Z' },
  { id: 3, projectId: 1, imageUrl: 'https://picsum.photos/seed/p1c/800/800', thumbnailUrl: 'https://picsum.photos/seed/p1c/300/300', userName: 'Kovács Péter', createdAt: '2026-04-06T16:00:00Z' },
  { id: 4, projectId: 1, imageUrl: 'https://picsum.photos/seed/p1d/800/800', thumbnailUrl: 'https://picsum.photos/seed/p1d/300/300', userName: 'Tóth Anna', createdAt: '2026-04-06T09:30:00Z' },
  { id: 5, projectId: 2, imageUrl: 'https://picsum.photos/seed/p2a/800/800', thumbnailUrl: 'https://picsum.photos/seed/p2a/300/300', userName: 'Szabó Márton', createdAt: '2026-04-06T11:20:00Z' },
  { id: 6, projectId: 2, imageUrl: 'https://picsum.photos/seed/p2b/800/800', thumbnailUrl: 'https://picsum.photos/seed/p2b/300/300', userName: 'Szabó Márton', createdAt: '2026-04-06T11:15:00Z' },
  { id: 7, projectId: 2, imageUrl: 'https://picsum.photos/seed/p2c/800/800', thumbnailUrl: 'https://picsum.photos/seed/p2c/300/300', userName: 'Nagy László', createdAt: '2026-04-05T14:00:00Z' },
  { id: 8, projectId: 3, imageUrl: 'https://picsum.photos/seed/p3a/800/800', thumbnailUrl: 'https://picsum.photos/seed/p3a/300/300', userName: 'Tóth Anna', createdAt: '2026-04-05T16:00:00Z' },
  { id: 9, projectId: 3, imageUrl: 'https://picsum.photos/seed/p3b/800/800', thumbnailUrl: 'https://picsum.photos/seed/p3b/300/300', userName: 'Tóth Anna', createdAt: '2026-04-05T10:00:00Z' },
  { id: 10, projectId: 3, imageUrl: 'https://picsum.photos/seed/p3c/800/800', thumbnailUrl: 'https://picsum.photos/seed/p3c/300/300', userName: 'Kovács Péter', createdAt: '2026-04-04T15:30:00Z' },
  { id: 11, projectId: 4, imageUrl: 'https://picsum.photos/seed/p4a/800/800', thumbnailUrl: 'https://picsum.photos/seed/p4a/300/300', userName: 'Nagy László', createdAt: '2026-04-03T12:00:00Z' },
  { id: 12, projectId: 4, imageUrl: 'https://picsum.photos/seed/p4b/800/800', thumbnailUrl: 'https://picsum.photos/seed/p4b/300/300', userName: 'Nagy László', createdAt: '2026-04-03T11:45:00Z' },
  { id: 13, projectId: 5, imageUrl: 'https://picsum.photos/seed/p5a/800/800', thumbnailUrl: 'https://picsum.photos/seed/p5a/300/300', userName: 'Horváth Katalin', createdAt: '2026-03-28T09:45:00Z' },
  { id: 14, projectId: 5, imageUrl: 'https://picsum.photos/seed/p5b/800/800', thumbnailUrl: 'https://picsum.photos/seed/p5b/300/300', userName: 'Horváth Katalin', createdAt: '2026-03-27T14:00:00Z' },
  { id: 15, projectId: 6, imageUrl: 'https://picsum.photos/seed/p6a/800/800', thumbnailUrl: 'https://picsum.photos/seed/p6a/300/300', userName: 'Szabó Márton', createdAt: '2026-03-20T11:00:00Z' },
  { id: 16, projectId: 6, imageUrl: 'https://picsum.photos/seed/p6b/800/800', thumbnailUrl: 'https://picsum.photos/seed/p6b/300/300', userName: 'Szabó Márton', createdAt: '2026-03-19T16:30:00Z' },
  { id: 17, projectId: 7, imageUrl: 'https://picsum.photos/seed/p7a/800/800', thumbnailUrl: 'https://picsum.photos/seed/p7a/300/300', userName: 'Kovács Péter', createdAt: '2026-02-15T14:00:00Z' }
];

export const comments = [
  { id: 1, projectId: 1, userName: 'Kovács Péter', content: 'A bontási munkálatok befejeződtek, holnap kezdjük a falazást.', createdAt: '2026-04-07T14:30:00Z' },
  { id: 2, projectId: 1, userName: 'Szabó Márton', content: 'A villanyszerelő szerdán jön az elővezetékelésre.', createdAt: '2026-04-07T10:15:00Z' },
  { id: 3, projectId: 1, userName: 'Tóth Anna', content: 'Az anyagrendelést leadtam, péntekre megérkezik.', createdAt: '2026-04-06T16:00:00Z' },
  { id: 4, projectId: 2, userName: 'Szabó Márton', content: 'Az alapozás kész, a zsaluzás elkezdődött.', createdAt: '2026-04-06T11:20:00Z' },
  { id: 5, projectId: 2, userName: 'Nagy László', content: 'Statikus jóváhagyta a terveket, mehetünk tovább.', createdAt: '2026-04-05T14:00:00Z' },
  { id: 6, projectId: 3, userName: 'Tóth Anna', content: 'Az 5. emelet burkolása folyamatban, jövő héten végzünk.', createdAt: '2026-04-05T16:00:00Z' }
];

export const tasks = [
  { id: 1, projectId: 1, title: 'Bontási törmelék elszállítása', is_completed: true },
  { id: 2, projectId: 1, title: 'Villanyszerelés - elővezetékelés', is_completed: false },
  { id: 3, projectId: 1, title: 'Vízvezetékek cseréje', is_completed: false },
  { id: 4, projectId: 1, title: 'Új válaszfalak építése', is_completed: false },
  { id: 5, projectId: 2, title: 'Alapozás befejezése', is_completed: true },
  { id: 6, projectId: 2, title: 'Zsaluzás - földszint', is_completed: true },
  { id: 7, projectId: 2, title: 'Vasbeton öntés', is_completed: false },
  { id: 8, projectId: 3, title: 'Homlokzat festés', is_completed: false },
  { id: 9, projectId: 3, title: 'Belső burkolás - 5. emelet', is_completed: false },
  { id: 10, projectId: 4, title: 'Hőszigetelő anyag felhelyezése', is_completed: true },
  { id: 11, projectId: 4, title: 'Vakolt homlokzat', is_completed: false }
];

export const tags = [
  { id: 1, name: 'Előtte', photoCount: 5, updatedAt: '2026-04-01T08:00:00Z' },
  { id: 2, name: 'Utána', photoCount: 3, updatedAt: '2026-04-05T08:00:00Z' },
  { id: 3, name: 'Hiba', photoCount: 2, updatedAt: '2026-04-03T08:00:00Z' },
  { id: 4, name: 'Haladás', photoCount: 8, updatedAt: '2026-04-07T08:00:00Z' },
  { id: 5, name: 'Anyag', photoCount: 4, updatedAt: '2026-03-28T08:00:00Z' },
  { id: 6, name: 'Tervrajz', photoCount: 1, updatedAt: '2026-03-15T08:00:00Z' }
];

export const checklists = [
  { id: 1, title: 'Helyszíni szemle - Budai Családi Ház', status: 'finished', projectName: 'Budai Családi Ház Felújítás', updatedAt: '2026-04-07T14:30:00Z' },
  { id: 2, title: 'Anyagátvétel - Siófoki Nyaraló', status: 'unfinished', projectName: 'Siófoki Nyaraló Építés', updatedAt: '2026-04-06T10:15:00Z' },
  { id: 3, title: 'Biztonsági ellenőrzés - Debreceni Irodaház', status: 'unfinished', projectName: 'Debreceni Irodaház Renoválás', updatedAt: '2026-04-05T16:00:00Z' },
  { id: 4, title: 'Végellenőrzés - Eger Tetőcsere', status: 'finished', projectName: 'Eger - Tetőcsere és Nyílászáró', updatedAt: '2026-02-15T14:00:00Z' },
  { id: 5, title: 'Alapozás ellenőrzés', status: 'finished', projectName: 'Siófoki Nyaraló Építés', updatedAt: '2026-04-04T09:00:00Z' }
];
