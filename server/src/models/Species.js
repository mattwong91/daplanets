import { Schema } from "mongoose";

export const SpeciesSchema = new Schema(
  {
    name: { type: String },
    creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
)