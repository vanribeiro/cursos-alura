using System.ComponentModel.DataAnnotations;

namespace FilmesApi.Data.DTOs;

public class ReadSessaoDTO
{
    public int FilmeId { get; set; } = 0;
    public int CinemaId { get; set; } = 0;
}
