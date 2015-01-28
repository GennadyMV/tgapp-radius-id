using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;

namespace TgappWeb.Models
{
    [JsonObject]
    public class Autorization
    {
        [JsonProperty("login")]
        public string login { get; set; }
        [JsonProperty("zone_date")]
        public DateTime zone_date { get; set; }
        [JsonProperty("nas")]
        public string nas { get; set; }
        [JsonProperty("nas_port")]
        public string nas_port { get; set; }
        [JsonProperty("mac_addr")]
        public string mac_addr { get; set; }
        [JsonProperty("err_code")]
        public string err_code { get; set; }
        [JsonProperty("err_string")]
        public string err_string { get; set; }
    }

    [JsonObject]
    public class Autorizations
    {
        [JsonProperty("autorizations")]
        public List<Autorization> _Autorizations { get; set; }
    }
}