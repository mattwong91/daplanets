import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { coloniesService } from "../services/ColoniesService.js";

export class ColoniesController extends BaseController {
  constructor() {
    super('api/colonies')
    this.router
      .get('', this.getColonies)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createColony)
  }

  async getColonies(request, response, next) {
    try {
      const colonies = await coloniesService.getColonies()
      return response.send(colonies)
    }
    catch (error) {
      next(error)
    }
  }

  async createColony(request, response, next) {
    try {
      const colonyData = request.body
      const userInfo = request.userInfo
      colonyData.creatorId = userInfo.id

      const colony = await coloniesService.createColony(colonyData)
      return response.send(colony)
    }
    catch (error) {
      next(error)
    }
  }

}