import { ENTITY_METADATA_KEY } from "../types/entity.metadata.key";

/**
 * Decorator que define o endpoint de uma entidade
 * @param endpoint
 * @example Endpoint('/users')
 */
export function Endpoint(endpoint: string): ClassDecorator {
  return (target) => {
    Reflect.defineMetadata(ENTITY_METADATA_KEY, endpoint, target);
  };
}
