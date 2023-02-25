namespace FilmesApi.Data.DTOs
{
    public class ReadCinemaDTO
    {
        public int Id { get; set; } = 0;

        public string Nome { get; set; } = "";

        public ReadEnderecoDTO Enderecos { get; set; }

        public ICollection<ReadSessaoDTO> Sessoes { get; set; }
    }
}
