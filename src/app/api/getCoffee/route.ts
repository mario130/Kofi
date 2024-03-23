import { Coffee } from "@/interfaces/Coffee";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, res: NextApiResponse<Coffee>) {
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");

  const coffees: Coffee = await fetch(
    `${process.env.GET_COFFEES_URL}?id=${id}`
  ).then((res) => res.json());

  return Response.json(coffees);
}
