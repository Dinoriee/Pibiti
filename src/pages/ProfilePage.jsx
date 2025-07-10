import React from 'react';
import profilepic from '../assets/foto-ahli.png'
import coverpic from '../assets/coverpic.jpg'

const currentUser = {
  name: 'Username',
  email: 'username@nosik.com',
  joinDate: 'Bergabung pada Juli 2025',
  avatar: profilepic,
  coverPhoto: coverpic,
  bio: 'Pengguna setia Nosik yang bersemangat tentang informasi kesehatan yang akurat dan mudah diakses untuk semua orang.',
  reviewCount: 15,
  points: 2500,
};

function StatCard({ value, label }) {
  return (
    <div className="text-center">
      <p className="text-2xl font-bold text-slate-800">{value}</p>
      <p className="text-sm text-slate-500">{label}</p>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <div className="pt-20 bg-slate-100 min-h-screen">
      <div className="max-w-5xl mx-auto p-4 md:p-8">
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          
          <div className="relative h-48">
            <img src={currentUser.coverPhoto} alt="Cover" className="w-full h-full object-cover" />
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
              <img 
                src={currentUser.avatar} 
                alt="Avatar" 
                className="w-32 h-32 rounded-full border-4 border-white shadow-md"
              />
            </div>
          </div>
          
          <div className="text-center pt-20 pb-8 px-6">
            <h1 className="text-3xl font-bold text-slate-800">{currentUser.name}</h1>
            <p className="text-md text-slate-500 mt-1">{currentUser.joinDate}</p>
            <p className="max-w-2xl mx-auto text-slate-600 mt-4">{currentUser.bio}</p>
          </div>

          <div className="flex justify-around p-4 border-t border-slate-200">
            <StatCard value={currentUser.reviewCount} label="Reviews" />
            <StatCard value={currentUser.points} label="Poin" />
            <StatCard value="Ahli" label="Status" />
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-800 mb-6">Detail Akun</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-500">Nama Lengkap</label>
              <p className="text-slate-800">{currentUser.name}</p>
            </div>
            <hr className="border-slate-200" />
            <div>
              <label className="text-sm font-medium text-slate-500">Alamat Email</label>
              <p className="text-slate-800">{currentUser.email}</p>
            </div>
            <hr className="border-slate-200" />
            <div className="flex justify-end gap-4 pt-4">
              <button className="py-2 px-4 bg-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-300 transition-colors">
                Ubah Password
              </button>
              <button className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Edit Profil
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
