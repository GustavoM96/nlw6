import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
interface IpayLoad {
  sub: string;
}
export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const auth = true;

  const authtoken = request.headers.authorization;

  if (!authtoken) {
    return response.status(401).json({ error: "Token missing" });
  }
  const [, token] = authtoken.split(" ");

  try {
    const { sub } = verify(
      token,
      "91aaf9220053708e2cb9ce2cf95132c9"
    ) as IpayLoad;

    request.user_id = sub;
    return next();
  } catch (err) {
    return response.status(401).json({ error: "Token invalid" });
  }
  console.log(token);

  return response.status(401).json({ error: "User Unauthorized" });
}
