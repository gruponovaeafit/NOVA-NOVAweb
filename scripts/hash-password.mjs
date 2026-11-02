/**
 * Genera el hash bcrypt para la contraseña del administrador.
 * Uso:  node scripts/hash-password.mjs "mi-contraseña-segura"
 * Copia el resultado en ADMIN_PASSWORD_HASH dentro de .env.local
 */
import bcrypt from "bcryptjs";

const password = process.argv[2];
if (!password) {
  console.error('Uso: node scripts/hash-password.mjs "tu-contraseña"');
  process.exit(1);
}

const hash = await bcrypt.hash(password, 10);
console.log("\nADMIN_PASSWORD_HASH=" + JSON.stringify(hash) + "\n");
