# Anotações

## Data Anotations:
Permite facilitar a criação de validação de dados através das anotações do C#:

```csharp
[Required(ErrorMessage = "O gênero do filme é obrigatório")]
[MaxLength(50, ErrorMessage = "O tamanho do gênero nao pode exceder 50 caracteres")]
public string Genero { get; set; } = "";
```
O exemplo acima foi adicionado a classe Filme, dentro de Models.

## Instalado Pacotes NuGet Via CLI

### EntityFrameworkCore

```bash
dotnet add package Microsoft.EntityFrameworkCore --version 6.0.10
```

### EntityFrameworkCore.Tools

```bash
dotnet add package Microsoft.EntityFrameworkCore.Tools --version 6.0.10
```

### EntityFrameworkCore.MySql

```bash
dotnet add package Pomelo.EntityFrameworkCore.MySql --version 6.0.2
```
## Migrations (Linux)

### Instalando o console NuGet:

```bash
dotnet tool install --global dotnet-ef
```

### Executando as Migrations
```bash
dotnet ef migrations add FilmeMigration
```

### Aplicando as mudanças no banco de dados 
```bash
dotnet ef database update
```

## AutoMapper

Faz o mapeamento automático de um DTO para uma classe com as mesmas propriedades.

### Instalando:

#### AutoMapper

```bash
dotnet add package AutoMapper --version 12.0.0
```

#### AutoMapper.Extensions.Microsoft.DependencyInjection

```bash
dotnet add package AutoMapper.Extensions.Microsoft.DependencyInjection --version 12.0.0
```

### Configurando:

No arquivo `Program.cs`, para dispobibilizar de forma global:

```csharp
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
```
Criar uma classe que vai criar um perfil que permitirá converter um DTO em filme:

`Profiles/FilmeProfile.cs`
