namespace csharp_exception.Utils{
    public class LeitorDeArquivo : IDisposable
    {
        public string Arquivo { get; }

        public LeitorDeArquivo(string arquivo){
            Arquivo = arquivo;

            // throw new FileNotFoundException();

            Console.WriteLine("Abrindo arquivo: " + arquivo);
        }

        public string LerProximaLinha(){
            Console.WriteLine("Lendo linha. . .");
            
            throw new IOException();

            // return "Linha do arquivo";
        }

        public void Dispose(){
            Console.WriteLine("Fechando arquivo.");
        }
    }
}