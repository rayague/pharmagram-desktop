import React, { useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  password: string;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
  });

  // Handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Generate random password
  const generatePassword = () => {
    const password = Math.random().toString(36).slice(-10);
    setFormData({ ...formData, password });
  };

  // Add user
  const addUser = () => {
    if (formData.name && formData.email && formData.role && formData.password) {
      setUsers([
        ...users,
        {
          id: Date.now(),
          name: formData.name,
          email: formData.email,
          role: formData.role,
          password: formData.password,
        },
      ]);
      setFormData({ name: "", email: "", role: "", password: "" });
    }
  };

  // Delete user
  const deleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="space-y-6 p-6">
      {/* Create User Form */}
      <div className="rounded bg-white p-4 shadow">
        <h2 className="mb-4 text-lg font-bold">Créer un utilisateur</h2>
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Nom"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full rounded border border-gray-300 p-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full rounded border border-gray-300 p-2"
          />
          <select
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            className="w-full rounded border border-gray-300 p-2"
          >
            <option value="" disabled>
              Sélectionnez un rôle
            </option>
            <option value="Administrateur">Administrateur</option>
            <option value="Pharmacien">Pharmacien</option>
            <option value="Technicien">Technicien</option>
            <option value="Caissier">Caissier</option>
            <option value="Livreur">Livreur</option>
          </select>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              name="password"
              placeholder="Mot de passe"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full rounded border border-gray-300 p-2"
            />
            <button
              onClick={generatePassword}
              className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
            >
              Générer
            </button>
          </div>
          <button
            onClick={addUser}
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Ajouter
          </button>
        </div>
      </div>

      {/* User List */}
      <div className="rounded bg-white p-4 shadow">
        <h2 className="mb-4 text-lg font-bold">Liste des utilisateurs</h2>
        {users.length === 0 ? (
          <p className="text-gray-500">Aucun utilisateur trouvé.</p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b bg-gray-100">
                <th className="p-2 text-left">Nom</th>
                <th className="p-2 text-left">Email</th>
                <th className="p-2 text-left">Rôle</th>
                <th className="p-2 text-left">Mot de passe</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="p-2">{user.name}</td>
                  <td className="p-2">{user.email}</td>
                  <td className="p-2">{user.role}</td>
                  <td className="p-2">{user.password}</td>
                  <td className="p-2 text-center">
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Users;
