import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hbeoyznkrdxxpfreyxqq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhiZW95em5rcmR4eHBmcmV5eHFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNjE3OTIsImV4cCI6MjAxNDgzNzc5Mn0.I8o6stcOPB8iLiZlkeQz1LIKoxmHndOa_HmUIXgHxmk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
