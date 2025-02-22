const config = {
    dialect: "postgresql",
    schema: "./src/utils/db/schema.ts",
    out: "./drizzle",
    dbCredentials: {
      url: "postgresql://ecoscanai_owner:npg_am9L8FHUeKiT@ep-proud-mode-a80l15hb-pooler.eastus2.azure.neon.tech/ecoscanai?sslmode=require",
      connectionString:
        "postgresql://ecoscanai_owner:npg_am9L8FHUeKiT@ep-proud-mode-a80l15hb-pooler.eastus2.azure.neon.tech/ecoscanai?sslmode=require",
    },
  };

export default config;
  