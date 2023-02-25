using AutoMapper;
using FilmesApi.Data.DTOs;
using FilmesApi.Models;

namespace FilmesApi.Profiles;

public class CinemaProfile: Profile
{
    public CinemaProfile()
    {
        CreateMap<CreateCinemaDTO, Cinema>();
        CreateMap<UpdateCinemaDTO, Cinema>();
        CreateMap<Cinema, ReadCinemaDTO>()
            .ForMember(
                cinemaDTO => cinemaDTO.Enderecos,
                option => option.MapFrom(cinema => cinema.Endereco)
            ).ForMember(
                cinemaDTO => cinemaDTO.Sessoes,
                option => option.MapFrom(cinema => cinema.Sessoes)
            );
    }
}
