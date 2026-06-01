namespace API.Entities
{
    public class AppUser
    {
        public string Id { get; set; }
        public required string DisplayName { get; set; }
        public required string Email { get; set; }
    }
}
