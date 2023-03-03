-- CreateTable
CREATE TABLE "customer_services" (
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
    "uf" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "customer_services_protocol_key" ON "customer_services"("protocol");
