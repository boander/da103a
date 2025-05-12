 // supabase-test.js

import { createClient } from '@supabase/supabase-js';

// === KONFIGURATION ===
const SUPABASE_URL = 'https://cmgfkcdsbmuvlleajuey.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtZ2ZrY2RzYm11dmxsZWFqdWV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MDUzODAsImV4cCI6MjA2MDM4MTM4MH0.LgvXUkLwpMty3OMF9_Mn9q3DM88D8LwHOjvyBuaGc0Y';

// === ANSLUTNING ===
console.log('🔌 Initierar Supabase-klient...');
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function testConnection() {
  console.log('🚀 Försöker hämta data från tabellen "kunder"...');

  try {
    const { data, error, status } = await supabase
      .from('kunder')
      .select('*');

    console.log('📡 Status:', status);

    if (error) {
      console.error('❌ Fel vid hämtning:', error.message);
      console.error('🔍 Fullt felobjekt:', error);
    } else {
      console.log('✅ Anslutning lyckades!');
      console.log('📦 Hämtad data:', data);
    }
  } catch (err) {
    console.error('💥 Exception thrown:', err);
  }
}

testConnection();
