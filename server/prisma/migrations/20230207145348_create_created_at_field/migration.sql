-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_customer_services" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "cpf_cnpj" TEXT NOT NULL,
    "response" TEXT NOT NULL,
    "option" INTEGER NOT NULL,
    "protocol" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "external_number" TEXT NOT NULL,
    "agent" TEXT NOT NULL,
    "channel" TEXT NOT NULL,
    "account" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_customer_services" ("account", "agent", "channel", "code", "cpf_cnpj", "date", "external_number", "id", "name", "option", "phone_number", "protocol", "response", "service", "uf") SELECT "account", "agent", "channel", "code", "cpf_cnpj", "date", "external_number", "id", "name", "option", "phone_number", "protocol", "response", "service", "uf" FROM "customer_services";
DROP TABLE "customer_services";
ALTER TABLE "new_customer_services" RENAME TO "customer_services";
CREATE UNIQUE INDEX "customer_services_protocol_key" ON "customer_services"("protocol");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
