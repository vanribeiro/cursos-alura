namespace FilmesApi.Data.DTOs
{
    public class ReadFilmeDTO{

        public int Id { get; set; } = 0;
        public string Titulo { get; set; } = "";
        public string Genero { get; set; } = "";
        public int Duracao { get; set; } = 0;

        public DateTime HoraDaConsulta { get; set; } = DateTime.Now;

        public ICollection<ReadSessaoDTO> Sessoes { get; set; }
    }
}
