import axios, { AxiosError } from "axios";
import { CircleNotch, X } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";

interface UploadModelProps {
  visible: boolean
  onClose: () => void
}

export function UploadModel({ visible, onClose }: UploadModelProps) {
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState('')
  const [erro, setErro] = useState('')

  if (!visible) {
    return null;
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setErro('')
    setResponse('')

    if (event.target.files && event.target.files.length > 0) {
      if(event.target.files[0].type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        setErro('Formato de arquivo inválido!')
        return
      }

      setFile(event.target.files[0])
    }
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setResponse('')

    if (!file) {
      return
    }

    const data = new FormData()
    data.append('file', file)
    setLoading(true)

    try {
      const response = await axios.post('http://localhost:3333/customerServices', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      })
      
      if (response.status === 201) {
        setResponse('Upload feito com sucesso!')
      }
    } catch (error) {
      console.log(error)

      if (error instanceof AxiosError) {
        if (error.response?.status === 500) {
          setErro('Erro ao tentar enviar o arquivo!')
        }
      }

      setFile(null)
    }

    setLoading(false)
  }

  return (
    <div className="overlay z-10 w-full h-full bg-black/80 fixed top-0 left-0 flex items-center justify-center">
      <div className="max-w-lg w-full bg-white p-6 rounded-lg m-3">

        <header className="flex items-center justify-between mb-4">
          <strong className="text-xl">Faça o upload da planilha</strong>

          <button type="button" onClick={onClose} className="hover:opacity-60">
            <X className="w-6 h-6 hover:text-blue-900" />
          </button>
        </header>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
            <input 
              type="file"
              multiple={false}
              onChange={handleChange}
              className="block w-full text-sm text-zinc-800 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-blue-800 focus:outline-none dark:bg-blue-200 dark:border-blue-600 dark:placeholder-blue-400" 
            />
            <p className="mt-1 text-sm file:text-gray-600" id="file_input_help">Somente planilhas no formato XLSX.</p>
          </div>

          {loading && <span className="block my-2 font-medium">Isso pode demorar alguns minutos...</span>}

          {response && <span className="block my-4 p-4 bg-green-200 rounded font-semibold text-green-600">{response}</span>}

          {erro && <span className="block my-4 p-4 bg-red-200 rounded font-semibold text-red-600">{erro}</span>}

          <button
            type="submit"
            disabled={file === null || erro !== ''}
            className="block bg-blue-600 font-bold text-white px-4 py-3 ml-auto rounded-lg cursor-pointer hover:bg-blue-700 transition disabled:opacity-80 disabled:hover:bg-blue-600 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center gap-3">
                <CircleNotch className="text-white animate-spin" />
                Salvando dados...
              </span>
            ) : 'Enviar planilha'}
          </button>
        </form>

      </div>
    </div>
  )
}