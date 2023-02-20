using AutoMapper;
using FilmesApi.Models;
using FilmesApi.Data.DTOs;
namespace FilmesApi.Profiles;

public class FilmeProfile: Profile {
    public FilmeProfile(){
        CreateMap<CreateFilmeDTO, Filme>();
        CreateMap<UpdateFilmeDTO, Filme>();
        CreateMap<Filme, UpdateFilmeDTO>();
        CreateMap<Filme, ReadFilmeDTO>();
    }
}