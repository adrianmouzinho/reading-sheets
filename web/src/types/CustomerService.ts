export type CustomerService = {
  prevUrl: string,
	nextUrl: string,
	limit: number,
	offset: number,
	totalPages: number,
  results: {
    id: string
    date: string
    name: string
    phone_number: string
    cpf_cnpj: string
    response: string
    option: string
    protocol: string
    code: string
    external_number: string
    agent: string
    channel: string
    account: string
    service: string
    uf: string
    created_at: string
  }[]
}