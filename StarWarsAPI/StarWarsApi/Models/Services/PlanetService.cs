﻿using Newtonsoft.Json;
using RestSharp;
using StarWarsApi.Models.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;

namespace StarWarsApi.Models.Services
{
    public class PlanetService : IPlanetService
    {
        public Planet GetPlanet(string api) {
            JavaScriptSerializer jsSerializer = new JavaScriptSerializer();
            var client = new RestClient(api);
            var request = new RestRequest(Method.GET);

            IRestResponse response = client.Execute(request);
            var streamDados = response.Content;
            var result = JsonConvert.DeserializeObject<Planet>(response.Content);
            return result;
        }
    }
}