import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";
import { Posts } from "./src/app/collections/Posts"; // or ./app/collections/Posts if you are not using `src` folder
import { Home } from "./src/app/globals/Home"; // or ./app/globals/Home if you are not using `src` folder
import { Eventos } from "./src/app/globals/Eventos";
import { Nosotros } from "./src/app/globals/Nosotros";


export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),
  // Define and configure your collections in this array
  collections: [Posts],
  // Define and configure your globals in this array
  globals: [Home, Eventos, Nosotros],
  
  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || (() => {
    throw new Error("PAYLOAD_SECRET is not defined in environment variables");
  })(),

  // Database adapter -> postgresAdapter
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || (() => {
        throw new Error("DATABASE_URI is not defined in environment variables");
      })(),
    },
  }),
  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,
});