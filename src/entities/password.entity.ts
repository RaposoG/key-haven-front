import { Endpoint } from "@/core/decorators/endpoint.decorator";

@Endpoint("/password")
export class Password {
  declare id: string;
  declare login: string;
  declare password: string;
  declare title: string;
  declare description: string;
  declare url: string;
}
