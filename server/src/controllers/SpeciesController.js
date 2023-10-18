import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { speciesService } from "../services/SpeciesService.js";

export class SpeciesController extends BaseController {
  constructor() {
    super('api/species')
    this.router
      .get('', this.getSpecies)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createSpecies)
  }

  async getSpecies(request, response, next) {
    try {
      const allSpecies = await speciesService.getSpecies()
      return response.send(allSpecies)
    }
    catch (error) {
      next(error)
    }
  }

  async createSpecies(request, response, next) {
    try {
      const speciesData = request.body
      const userInfo = request.userInfo
      speciesData.creatorId = userInfo.id

      const species = await speciesService.createSpecies(speciesData)
      return response.send(species)
    }
    catch (error) {
      next(error)
    }
  }


}