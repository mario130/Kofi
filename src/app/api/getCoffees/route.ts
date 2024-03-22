import { Coffee } from "@/interfaces/Coffee";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, res: NextApiResponse<Coffee[]>) {
  const searchParams = req.nextUrl.searchParams;

  const roast = searchParams.get("roast");
  const intensity = searchParams.get("intensity");
  const sort = searchParams.get("sort");

  console.log(intensity);
  let buildUrl = process.env.GET_COFFEES_URL!;
  if (roast || intensity || sort) {
    buildUrl += "?";
    if (roast) buildUrl += `roast=${roast}&`;
    if (intensity) buildUrl += `intensity=${intensity}&`;
    if (sort) buildUrl += `sort=${sort}`;
  }

  const coffees: Coffee[] = await fetch(buildUrl).then((res) => res.json());

  return Response.json(coffees);
}
