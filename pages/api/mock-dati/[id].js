import mockData from '../../../lib/mock-db.json';

export default function handler(req, res) {
  const { id } = req.query;  // Estrai l'id dalla query
  const data = mockData.find(item => item.uuid === id);  // Trova il dato con l'id specificato

  if (!data) {
    return res.status(404).json({ error: 'Dati non trovati' });
  }

  return res.status(200).json(data);  // Restituisci i dati come risposta
}
