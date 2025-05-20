import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rucuisaiaawlyarktgkd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1Y3Vpc2FpYWF3bHlhcmt0Z2tkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyNzg4OTIsImV4cCI6MjA2Mjg1NDg5Mn0.bOSmtVUrXbTwcLwiexVlO0BqLGI7CUashSee44V3ujM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
