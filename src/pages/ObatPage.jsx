import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ObatCard({ drug, onSelect }) {
  const brandName = drug.openfda?.brand_name?.[0] || 'Nama Merek Tidak Tersedia';
  const genericName = drug.openfda?.generic_name?.[0] || 'Nama Generik Tidak Tersedia';
  
  let purpose = drug.purpose?.[0] || 'Tujuan penggunaan tidak tersedia.';
  if (purpose.length > 150) {
    purpose = purpose.substring(0, 150) + '...';
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-slate-800 truncate" title={brandName}>
          {brandName}
        </h3>
        <p className="text-sm text-slate-500 italic capitalize">
          {genericName}
        </p>
        <p className="text-slate-700 mt-4 text-sm">
          {purpose}
        </p>
      </div>
      <div className="bg-slate-50 px-6 py-3">
        <button onClick={onSelect} className="text-sm font-semibold text-blue-600 hover:text-blue-800">
          Lihat Detail
        </button>
      </div>
    </div>
  );
}

function ObatDetailModal({ drug, onClose }) {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const brandName = drug.openfda?.brand_name?.[0] || 'N/A';
  const genericName = drug.openfda?.generic_name?.[0] || 'N/A';
  const manufacturer = drug.openfda?.manufacturer_name?.[0] || 'N/A';
  const purpose = drug.purpose?.[0] || 'Tidak ada informasi tujuan.';
  const warnings = drug.warnings?.[0] || 'Tidak ada informasi peringatan.';
  const activeIngredient = drug.active_ingredient?.[0] || 'Tidak ada informasi bahan aktif.';

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="sticky top-0 bg-white p-5 border-b border-slate-200 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">{brandName}</h2>
            <p className="text-sm text-slate-500 capitalize">{genericName}</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-800 text-3xl font-light">&times;</button>
        </header>
        <main className="p-6 space-y-5 overflow-y-auto">
          <div>
            <h4 className="font-semibold text-slate-700">Pabrikan</h4>
            <p className="text-slate-600">{manufacturer}</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-700">Tujuan Penggunaan</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{purpose}</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-700">Bahan Aktif</h4>
            <p className="text-slate-600 text-sm">{activeIngredient}</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-700">Peringatan</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{warnings}</p>
          </div>
        </main>
      </div>
    </div>
  );
}


function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
}

export default function ObatPage() {
  const [drugs, setDrugs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDrug, setSelectedDrug] = useState(null);

  useEffect(() => {
    const fetchDrugs = async () => {
      try {
        const response = await axios.get('https://api.fda.gov/drug/label.json?limit=50');
        const filteredResults = response.data.results.filter(drug => drug.openfda?.brand_name?.[0]);
        setDrugs(filteredResults);
      } catch (err) {
        setError('Gagal memuat data. Silakan coba lagi nanti.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDrugs();
  }, []);

  return (
    <div className="pt-20 bg-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800">Direktori Obat</h1>
          <p className="mt-4 text-lg text-slate-600">
            Temukan informasi mengenai berbagai macam obat yang tersedia.
          </p>
        </div>

        {loading && <LoadingSpinner />}
        {error && <p className="text-center text-red-500">{error}</p>}
        
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {drugs.map((drug) => (
              <ObatCard key={drug.id} drug={drug} onSelect={() => setSelectedDrug(drug)} />
            ))}
          </div>
        )}

      </div>
      
      {selectedDrug && (
        <ObatDetailModal drug={selectedDrug} onClose={() => setSelectedDrug(null)} />
      )}
    </div>
  );
}
