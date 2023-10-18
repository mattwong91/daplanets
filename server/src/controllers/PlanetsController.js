import { response } from "express";
import { planetsService } from "../services/PlanetsService.js";
import BaseController from "../utils/BaseController.js";
import { Auth0Provider } from "@bcwdev/auth0provider";

export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .get('', this.getPlanets)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createPlanet)
  }

  async getPlanets(request, response, next) {
    try {
      const planets = await planetsService.getPlanets()
      return response.send(planets)
    }
    catch (error) {
      next(error)
    }
  }

  async createPlanet(request, response, next) {
    try {
      const planetData = request.body
      const userInfo = request.userInfo
      planetData.creatorId = userInfo.id

      const planet = await planetsService.createPlanet(planetData)
      return response.send(planet)
    }
    catch (error) {
      next(error)
    }
  }

}