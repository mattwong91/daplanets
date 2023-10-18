import { Schema } from "mongoose";

export const ColonySchema = new Schema(
  {
    name: { type: String, required: true },
    population: { type: Number, required: true },
    planetId: { type: Schema.Types.ObjectId, required: true, ref: 'Planet' },
    speciesId: { type: Schema.Types.ObjectId, required: true, ref: 'Species' },
    creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
)