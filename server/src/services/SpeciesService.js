import { dbContext } from "../db/DbContext.js"

class SpeciesService {

  async getSpecies() {
    const allSpecies = await dbContext.Species.find()
    return allSpecies
  }

  async createSpecies(speciesData) {
    const species = await dbContext.Species.create(speciesData)
    return species
  }

}

export const speciesService = new SpeciesService()