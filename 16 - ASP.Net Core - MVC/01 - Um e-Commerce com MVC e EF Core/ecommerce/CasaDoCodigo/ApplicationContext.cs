using Microsoft.EntityFrameworkCore;

namespace CasaDoCodigo{
    public class ApplicationContext: DbContext {
        public DbSet<EntityName> EntityNames { get; set; }
        public ApplicationContext (DbContextOptions options) : base (options) {}

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Produto>().HasKey(t => t.Id);
        }
    }
}