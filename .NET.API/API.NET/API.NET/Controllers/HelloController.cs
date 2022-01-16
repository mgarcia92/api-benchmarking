using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.NET.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HelloController : ControllerBase
    {
        [HttpGet]
        public ActionResult Get()
        {
            return Ok(new { hello = "World" });
        }
    }
}
