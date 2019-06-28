using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace StarWarsApi.Models
{
    public class ResultPlanet
    {
        public int count { get; set; }
        public string next { get; set; }
        public string previous { get; set; }
        public List<Planet> results { get; set; }
    }
}