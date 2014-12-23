﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TgappWeb.RadiusAsync;

namespace TgappWeb.Controllers
{
    public class RadiusController : Controller
    {
        //
        // GET: /Radius/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Radius()
        {
            return View();
        }

        public ActionResult GetAccessByLogin(string filial, string login, string datebgn, string dateend)
        {
            var radiusClient = new RadiusAsync.radiusClient("http");

            RadiusAsync.Get_Access_by_LoginResult theLoginResult;
            theLoginResult = radiusClient.Get_Access_by_Login(new Get_Access_by_LoginRequest()
            {
                Command = new MetaCommand()
                {
                    Operation = DbOperation.ExecuteQuery
                },
                Connection = new MetaConnection() { Connection = "*.*" },
                Parameters =//параметры функции
                    new Get_Access_by_LoginInputParameters()
                    {
                        p_Date_Beg = DateTime.Parse(datebgn),
                        p_Date_End = DateTime.Parse(dateend),
                        p_Login = login,
                        p_Filial = filial
                    }
            });
            ViewBag.ResultSet = theLoginResult.ResultSet;


            return View();
        }

    }
}