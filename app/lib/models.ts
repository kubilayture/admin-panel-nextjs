import mongoose, { Document } from "mongoose"

export interface IUser extends Document {
  username: string
  email: string
  password: string
  img?: string
  isAdmin: boolean
  isActive: boolean
  phone?: string
  address?: string
}

interface IProduct extends Document {
  title: string
  desc: string
  price: number
  stock: number
  img?: string
  color?: string
  size?: string
}

export const userSchema = new mongoose.Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
)

const productSchema = new mongoose.Schema<IProduct>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    img: {
      type: String,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
  },
  { timestamps: true }
)

export const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema)
export const Product = mongoose.models.Product || mongoose.model<IProduct>("Product", productSchema)
