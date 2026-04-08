import { useAuth } from '../context/AuthContext';
export default function Settings() {
  const { user } = useAuth();
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      <div className="card p-6 space-y-4">
        <input defaultValue={user?.name} className="input-field" placeholder="Name" />
        <input defaultValue={user?.email} className="input-field" placeholder="Email" />
        <input defaultValue={user?.companyName} className="input-field" placeholder="Company" />
        <button className="btn-primary">Save Changes</button>
      </div>
    </div>
  );
}
