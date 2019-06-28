using Newtonsoft.Json;
using RestSharp;
using StarWarsApi;
using StarWarsApi.Models;
using StarWarsApi.Models.Interfaces;
using StarWarsApi.Models.Services;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using System.Web.Script.Serialization;
using WebApi.OutputCache.V2;

namespace StarWarsApi.Controllers
{
    [EnableCors(origins: "*", headers: " * ",methods: "*")]
    [Authorize]
    public class StarWarsController : ApiController
    {
       private readonly IPeopleService _peopleService=new PeopleService();
       private readonly ISpecieService _specieService=new SpecieService();

        [CacheOutput(ServerTimeSpan =120)]
        
        public IEnumerable<ResultStarWars> GetAllResults()
        {
            JavaScriptSerializer jsSerializer = new JavaScriptSerializer();
            var client = new RestClient("https://swapi.co/api/planets/");
            var request = new RestRequest(Method.GET);

            IRestResponse response =  client.Execute(request);
            var streamDados = response.Content;
            var result = JsonConvert.DeserializeObject<ResultPlanet>(response.Content);
            List<ResultStarWars> resultStarWars = new List<ResultStarWars>();
            foreach (var planet in result.results) {
                List<Person> peoples = new List<Person>();
                foreach (var urlPeople in planet.Residents) {
                    var NewPerson = _peopleService.GetPeople(urlPeople);
                    List<Specie> species = new List<Specie>();
                    foreach (var urlSpecie in NewPerson.Species) {
                        var NewSpecie = _specieService.GetSpecie(urlSpecie);
                        resultStarWars.Add(new ResultStarWars
                        {
                            Person=NewPerson.Name,
                            Planet=planet.Name,
                            Specie=NewSpecie.Name
                        });
                    }
                    NewPerson.ListSpecies = species;
                    peoples.Add(NewPerson);
                }

            }
            return resultStarWars;

        }

    }
}
