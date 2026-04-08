export const users = [
  { id: 1, name: 'Admin User', email: 'admin@example.com', phone: '+44 0000 000000', role: 'admin', companyName: 'My Company' },
  { id: 2, name: 'Field Tech', email: 'tech@example.com', phone: '+44 1111 111111', role: 'user', companyName: 'My Company' }
];

export const projects = [
  {
    id: 1,
    name: 'Sample Project',
    address: '123 High Street, Woking',
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    coverPhotoUrl: '',
    photoCount: 2,
    recentUser: 'Admin User',
    latitude: 51.319,
    longitude: -0.558
  }
];

export const photos = [
  { id: 1, projectId: 1, imageUrl: 'https://picsum.photos/800/800?1', thumbnailUrl: 'https://picsum.photos/300/300?1', userName: 'Admin User', createdAt: new Date().toISOString() },
  { id: 2, projectId: 1, imageUrl: 'https://picsum.photos/800/800?2', thumbnailUrl: 'https://picsum.photos/300/300?2', userName: 'Field Tech', createdAt: new Date().toISOString() }
];

export const comments = [
  { id: 1, projectId: 1, userName: 'Admin User', content: 'Initial inspection completed.' }
];

export const tasks = [
  { id: 1, projectId: 1, title: 'Upload after photos', is_completed: false }
];

export const tags = [
  { id: 1, name: 'Before', photoCount: 1, updatedAt: new Date().toISOString() },
  { id: 2, name: 'After', photoCount: 1, updatedAt: new Date().toISOString() }
];

export const checklists = [
  { id: 1, title: 'Site inspection', status: 'unfinished', projectName: 'Sample Project' }
];
