﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StarWarsApi.Models.Interfaces
{
    public interface IPeopleService
    {
       Person GetPeople(string api);
    }
}
