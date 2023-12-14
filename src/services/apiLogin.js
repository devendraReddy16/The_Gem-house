import supabase, { supabaseUrl } from "./supabase";

export async function confirmLogin({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) return console.error(error.message);

  return data;
}

export async function loadUser() {
  const { data: Session } = await supabase.auth.getSession();
  if (!Session.session) return null;

  const { data, error } = await supabase.auth.getUser();
  if (error) return console.error(error.message);

  return data?.user;
}
export async function logoutUser() {
  const { error } = await supabase.auth.signOut();

  if (error) return console.error(error.message);
}
export async function SignupUser({ email, password, fullName }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { fullName, avatar: "" },
    },
  });
  if (error) return console.error(error.message);

  return data;
}

export async function updateUserDetails({ password, fullName, avatar }) {
  let updateObject;
  if (fullName) updateObject = { data: { fullName } };
  if (password) updateObject = { password };

  const { data, error } = await supabase.auth.updateUser(updateObject);

  if (error) throw new Error(error.message);
  if (!avatar) return data;
  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);
  if (storageError) throw new Error(storageError.message);
  const avatarUrl = `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`;
  const { data: updateUser, error: updateImageError } =
    await supabase.auth.updateUser({
      data: { avatar: avatarUrl },
    });
  if (updateImageError) throw new Error(updateImageError.message);
  return updateUser;
}
