import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';


dotenv.config();


const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const app = express();
const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.json()); 




app.get('/', (req, res) => {
  res.send('API Layanan Cuci Sepatu - Kelompok 08');
});



app.post('/items', async (req, res) => {
  try {
    const { nama_pelanggan, merk_sepatu } = req.body;
    

    if (!nama_pelanggan || !merk_sepatu) {
      return res.status(400).json({ error: 'Nama pelanggan dan merk sepatu harus diisi' });
    }

    const { data, error } = await supabase
      .from('items')
      .insert([{ nama_pelanggan, merk_sepatu, status: 'Diterima' }])
      .select();

    if (error) throw error;
    
    res.status(201).json({ message: 'Data berhasil ditambahkan', data: data[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



app.get('/items', async (req, res) => {
  try {
    const { status } = req.query; 
    
    let query = supabase.from('items').select('*').order('created_at', { ascending: false });

   
    if (status) {
      query = query.eq('status', status);
    }
    
    const { data, error } = await query;

    if (error) throw error;

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



app.patch('/items/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ error: 'Status harus diisi' });
    }

    const { data, error } = await supabase
      .from('items')
      .update({ status })
      .eq('id', id)
      .select();

    if (error) throw error;

   
    if (data.length === 0) {
      return res.status(404).json({ error: 'Data tidak ditemukan' });
    }

    res.status(200).json({ message: 'Status berhasil diubah', data: data[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



app.delete('/items/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from('items')
      .delete()
      .eq('id', id);
    
    if (error) throw error;

    res.status(200).json({ message: 'Data berhasil dihapus' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});