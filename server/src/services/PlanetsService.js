import { dbContext } from "../db/DbContext.js"

class PlanetsService {

  async getPlanets() {
    const planets = await dbContext.Planets.find()
    return planets
  }

  async createPlanet(planetData) {
    const planet = await dbContext.Planets.create(planetData)
    return planet
  }

  async getPlanetsInGalaxy(galaxyId) {
    const planets = await dbContext.Planets.find({ galaxyId: galaxyId })
    return planets
  }

}

export const planetsService = new PlanetsService()