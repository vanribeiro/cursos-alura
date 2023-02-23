namespace FilmesApi.Data.DTOs
{
    public class ReadCinemaDTO
    {
        public int Id { get; set; } = 0;

        public string Nome { get; set; } = "";

        public ReadEnderecoDTO ReadEnderecoDTO { get; set; } = new ReadEnderecoDTO();
    }
}
