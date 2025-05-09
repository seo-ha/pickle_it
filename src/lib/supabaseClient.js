import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 문자열 -> uuid로 변환
export  const getCategoryUUID = async (name) => {
  const { data, error } = await supabase
    .from('categories')
    .select('id')
    .eq('name', name)
    .single();

  if (error) {
    console.error('카테고리 조회 실패:', error);
    return null;
  }

  return data.id;
};

//이미지 변환
export const uploadImagesToSupabase = async (file, fileName) =>{
  const {data, error} = await supabase.storage
  .from('images')
  .upload(`uploads/${fileName}`,file);

  if (error) {
    console.error('업로드 실패:', error);
    return null;
  }

  // public URL로 변환
  const {data : pubilcUrlData} = supabase.storage
  .from('images')
  .getPublicUrl(data.path);

  return pubilcUrlData.publicUrl;
}
